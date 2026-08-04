"""Hermes Canvas UI shell + hermes-desktop remote gateway attach.

Same principle as Hermes Desktop Settings → Gateway → Remote connection:
attach to an already-running Hermes dashboard/backend via base URL +
session token (GET /api/status, later /api/ws). The backend may listen on
127.0.0.1 or any remote host — Canvas never spawns it.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Optional
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode, urlparse, urlunparse
from urllib.request import Request, urlopen

from fastapi import FastAPI, HTTPException, Query
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parent
STATIC = ROOT / "static"
DATA_DIR = ROOT / "data"
CONFIG_PATH = DATA_DIR / "hermes-canvas.json"

app = FastAPI(title="Hermes Canvas", version="0.1.0")
app.mount("/static", StaticFiles(directory=STATIC), name="static")

# Live attach state (desktop-style remote connection).
_connection: Optional[dict[str, Any]] = None


class ProbeBody(BaseModel):
    url: str = Field(min_length=1)


class ConnectBody(BaseModel):
    url: str = Field(min_length=1)
    token: Optional[str] = None
    auth_mode: str = "token"
    profile: Optional[str] = None


class TestBody(BaseModel):
    url: str = Field(min_length=1)
    token: Optional[str] = None
    auth_mode: str = "token"


class RawConfigBody(BaseModel):
    yaml_text: str
    profile: Optional[str] = None


class SoulBody(BaseModel):
    content: str


class RemoteConfigBody(BaseModel):
    config: dict[str, Any]
    profile: Optional[str] = None


class EnvBody(BaseModel):
    key: str
    value: str = ""
    profile: Optional[str] = None


class EnvKeyBody(BaseModel):
    key: str
    profile: Optional[str] = None


class MemoryBody(BaseModel):
    content: str


class ProfileCreateBody(BaseModel):
    name: str
    clone_from: Optional[str] = None
    clone_from_default: bool = False
    clone_all: bool = False
    no_skills: bool = False
    description: Optional[str] = None


class SkillToggleBody(BaseModel):
    name: str
    enabled: bool
    profile: Optional[str] = None


class SkillHubInstallBody(BaseModel):
    identifier: str
    profile: Optional[str] = None


class CronJobCreateBody(BaseModel):
    prompt: str = ""
    schedule: str
    name: str = ""
    deliver: str = "local"
    skills: Optional[list[str]] = None
    model: Optional[str] = None
    provider: Optional[str] = None
    base_url: Optional[str] = None
    script: Optional[str] = None
    context_from: Optional[Any] = None
    enabled_toolsets: Optional[list[str]] = None
    workdir: Optional[str] = None
    no_agent: bool = False


class MessagingPlatformUpdateBody(BaseModel):
    enabled: Optional[bool] = None
    env: dict[str, str] = Field(default_factory=dict)
    clear_env: list[str] = Field(default_factory=list)
    profile: Optional[str] = None


class CronJobUpdateBody(BaseModel):
    updates: dict[str, Any] = Field(default_factory=dict)


class ToolsetToggleBody(BaseModel):
    enabled: bool
    profile: Optional[str] = None


MEMORY_FILE_ALIASES = {
    "memory": "MEMORY.md",
    "memory.md": "MEMORY.md",
    "user": "USER.md",
    "user.md": "USER.md",
}


def normalize_memory_filename(which: str) -> str:
    raw = (which or "").strip()
    key = raw.lower()
    if key in MEMORY_FILE_ALIASES:
        return MEMORY_FILE_ALIASES[key]
    if raw in {"MEMORY.md", "USER.md"}:
        return raw
    raise HTTPException(status_code=400, detail="file must be MEMORY.md or USER.md")


def resolve_remote_profile_home(name: str) -> str:
    data = remote_api("/api/profiles", method="GET")
    profiles = data.get("profiles") if isinstance(data, dict) else None
    if not isinstance(profiles, list):
        raise HTTPException(status_code=502, detail="Unexpected /api/profiles response")
    for item in profiles:
        if not isinstance(item, dict):
            continue
        if str(item.get("name") or "") == name:
            path = str(item.get("path") or "").rstrip("/")
            if not path:
                raise HTTPException(status_code=502, detail=f"Profile '{name}' has no path")
            return path
    raise HTTPException(status_code=404, detail=f"Profile '{name}' not found")


def decode_remote_data_url(data_url: str) -> str:
    import base64
    import binascii

    text = (data_url or "").strip()
    if not text.startswith("data:") or "," not in text:
        raise HTTPException(status_code=502, detail="Remote file payload missing data URL")
    header, encoded = text.split(",", 1)
    if ";base64" not in header:
        raise HTTPException(status_code=502, detail="Remote file payload is not base64")
    try:
        raw = base64.b64decode(encoded, validate=True)
    except (binascii.Error, ValueError) as exc:
        raise HTTPException(status_code=502, detail="Remote file payload is invalid base64") from exc
    return raw.decode("utf-8", errors="replace")


def encode_remote_data_url(content: str) -> str:
    import base64

    raw = (content or "").encode("utf-8")
    b64 = base64.b64encode(raw).decode("ascii")
    return f"data:text/markdown;base64,{b64}"


def default_config() -> dict[str, Any]:
    return {
        "version": 1,
        "activeTab": None,
        "chatHeight": None,
        "sideCollapsed": False,
        "gateway": {"global": {}, "profiles": {}},
        "gatewayStatus": "idle",
        "cameras": {},
        "layouts": {},
        "cronPrefs": {},
        "chatByProfile": {},
    }


def read_config() -> dict[str, Any]:
    if not CONFIG_PATH.exists():
        return default_config()
    try:
        import json

        data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        if not isinstance(data, dict):
            return default_config()
        out = default_config()
        out.update(data)
        out["version"] = 1
        if not isinstance(out.get("cameras"), dict):
            out["cameras"] = {}
        if not isinstance(out.get("layouts"), dict):
            out["layouts"] = {}
        if not isinstance(out.get("cronPrefs"), dict):
            out["cronPrefs"] = {}
        if not isinstance(out.get("chatByProfile"), dict):
            out["chatByProfile"] = {}
        if not isinstance(out.get("gateway"), dict):
            out["gateway"] = {"global": {}, "profiles": {}}
        return out
    except Exception:  # noqa: BLE001
        return default_config()


def _gateway_has_creds(gw: Any) -> bool:
    if not isinstance(gw, dict):
        return False
    global_block = gw.get("global") if isinstance(gw.get("global"), dict) else {}
    url = str(global_block.get("remoteUrl") or "").strip()
    tok = str(global_block.get("remoteToken") or "").strip()
    tok_set = bool(global_block.get("remoteTokenSet"))
    if url and (tok or tok_set):
        return True
    profiles = gw.get("profiles") if isinstance(gw.get("profiles"), dict) else {}
    for block in profiles.values():
        if not isinstance(block, dict):
            continue
        if str(block.get("remoteUrl") or "").strip() and (
            str(block.get("remoteToken") or "").strip() or bool(block.get("remoteTokenSet"))
        ):
            return True
    return False


def write_config(data: dict[str, Any]) -> dict[str, Any]:
    import json

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    existing = read_config()
    merged = default_config()
    if isinstance(data, dict):
        merged.update(data)
    # Never let an empty client payload wipe saved remote gateway creds.
    if _gateway_has_creds(existing.get("gateway")) and not _gateway_has_creds(merged.get("gateway")):
        merged["gateway"] = existing["gateway"]
    merged["version"] = 1
    try:
        tmp = CONFIG_PATH.with_suffix(".json.tmp")
        tmp.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        tmp.replace(CONFIG_PATH)
    except PermissionError:
        CONFIG_PATH.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return merged


def normalize_remote_base_url(raw_url: str) -> str:
    value = (raw_url or "").strip()
    if not value:
        raise ValueError("Remote gateway URL is required.")
    try:
        parsed = urlparse(value)
    except Exception as exc:  # noqa: BLE001
        raise ValueError(f"Remote gateway URL is not valid: {exc}") from exc
    if parsed.scheme not in ("http", "https"):
        raise ValueError(f"Remote gateway URL must be http:// or https://, got {parsed.scheme}")
    path = (parsed.path or "").rstrip("/")
    cleaned = parsed._replace(path=path, params="", query="", fragment="")
    return urlunparse(cleaned).rstrip("/")


def fetch_json(
    url: str,
    token: Optional[str] = None,
    timeout: float = 8.0,
    method: str = "GET",
    body: Optional[dict[str, Any]] = None,
) -> Any:
    import json

    headers = {"Accept": "application/json", "User-Agent": "hermes-canvas/0.1"}
    if token:
        headers["X-Hermes-Session-Token"] = token
        headers["Authorization"] = f"Bearer {token}"
    data = None
    if body is not None:
        data = json.dumps(body).encode("utf-8")
        headers["Content-Type"] = "application/json"
    req = Request(url, data=data, headers=headers, method=method.upper())
    try:
        with urlopen(req, timeout=timeout) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
            if not raw.strip():
                return {}
            return json.loads(raw)
    except HTTPError as exc:
        err_body = exc.read().decode("utf-8", errors="replace") if exc.fp else ""
        detail = err_body[:400] or exc.reason
        raise RuntimeError(f"HTTP {exc.code}: {detail}") from exc
    except URLError as exc:
        raise RuntimeError(str(exc.reason or exc)) from exc


def ensure_gateway_connection() -> dict[str, Any]:
    """Reuse live attach, or rebuild from saved remote URL + token."""
    global _connection
    if (
        _connection
        and _connection.get("ok")
        and _connection.get("baseUrl")
        and _connection.get("token")
    ):
        return _connection

    cfg = read_config()
    gw = cfg.get("gateway") if isinstance(cfg.get("gateway"), dict) else {}
    block = gw.get("global") if isinstance(gw.get("global"), dict) else {}
    url = str(block.get("remoteUrl") or "").strip()
    tok = str(block.get("remoteToken") or "").strip()
    mode = str(block.get("remoteAuthMode") or "token")
    if not url or not tok:
        raise HTTPException(
            status_code=503,
            detail="Gateway not connected. Open Gateway, set URL + session token, Save & reconnect.",
        )
    try:
        _connection = connect_remote(url, tok, mode)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=str(exc)) from exc
    return _connection


def remote_api(
    path: str,
    *,
    method: str = "GET",
    query: Optional[dict[str, Any]] = None,
    body: Optional[dict[str, Any]] = None,
    timeout: float = 30.0,
) -> Any:
    conn = ensure_gateway_connection()
    base = str(conn["baseUrl"]).rstrip("/")
    q = {k: v for k, v in (query or {}).items() if v is not None and str(v) != ""}
    suffix = ("?" + urlencode(q)) if q else ""
    url = f"{base}{path}{suffix}"
    try:
        return fetch_json(
            url,
            token=conn.get("token"),
            timeout=timeout,
            method=method,
            body=body,
        )
    except RuntimeError as exc:
        msg = str(exc)
        code = 502
        if msg.startswith("HTTP 400"):
            code = 400
        elif msg.startswith("HTTP 401") or msg.startswith("HTTP 403"):
            code = 401
        elif msg.startswith("HTTP 404"):
            code = 404
        elif msg.startswith("HTTP 429"):
            code = 429
        raise HTTPException(status_code=code, detail=msg) from exc


def build_ws_url(base_url: str, token: str) -> str:
    parsed = urlparse(base_url)
    ws_scheme = "wss" if parsed.scheme == "https" else "ws"
    prefix = (parsed.path or "").rstrip("/")
    return f"{ws_scheme}://{parsed.netloc}{prefix}/api/ws?token={token}"


def connect_remote(url: str, token: Optional[str], auth_mode: str = "token") -> dict[str, Any]:
    """Attach to a running Hermes dashboard (Desktop remote gateway path)."""
    global _connection
    base = normalize_remote_base_url(url)
    mode = "oauth" if auth_mode == "oauth" else "token"
    tok = (token or "").strip() or None

    # Public liveness probe first (same as Desktop Test).
    status = fetch_json(f"{base}/api/status")
    if mode == "token":
        if not tok:
            raise ValueError(
                "Session token required. Pin HERMES_DASHBOARD_SESSION_TOKEN on the "
                "Hermes host (.env), then paste that value here."
            )
        # Authenticated status pass (token header), mirrors Desktop fetchJson.
        status = fetch_json(f"{base}/api/status", token=tok)

    ws = build_ws_url(base, tok) if (mode == "token" and tok) else None
    conn = {
        "ok": True,
        "mode": "remote",
        "source": "remote-attach",
        "baseUrl": base,
        "authMode": mode,
        "token": tok if mode == "token" else None,
        "tokenSet": bool(tok) if mode == "token" else False,
        "version": (status or {}).get("version"),
        "gatewayRunning": (status or {}).get("gateway_running"),
        "authRequired": bool((status or {}).get("auth_required")),
        "wsUrl": ws,
    }
    _connection = conn
    return conn


@app.get("/")
def index():
    return FileResponse(STATIC / "index.html")


@app.get("/favicon.ico")
def favicon():
    return RedirectResponse("/static/favicon.svg")


@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "mode": "remote-gateway-attach",
        "config": str(CONFIG_PATH),
        "connected": bool(_connection and _connection.get("ok")),
        "baseUrl": (_connection or {}).get("baseUrl"),
    }


@app.get("/api/config")
def get_config():
    return read_config()


@app.put("/api/config")
@app.post("/api/config")
def put_config(payload: dict[str, Any]):
    return write_config(payload)


@app.post("/api/gateway/probe")
def gateway_probe(body: ProbeBody):
    """Mirror hermes-desktop probeConnectionConfig (public /api/status)."""
    try:
        base_url = normalize_remote_base_url(body.url)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    try:
        status = fetch_json(f"{base_url}/api/status")
    except Exception as exc:  # noqa: BLE001
        return {
            "baseUrl": base_url,
            "reachable": False,
            "authMode": "unknown",
            "providers": [],
            "version": None,
            "error": str(exc),
        }

    auth_mode = "oauth" if status and status.get("auth_required") else "token"
    providers: list[dict[str, Any]] = []
    if auth_mode == "oauth":
        try:
            body_providers = fetch_json(f"{base_url}/api/auth/providers")
            raw = body_providers.get("providers") if isinstance(body_providers, dict) else None
            if isinstance(raw, list):
                for p in raw:
                    if not isinstance(p, dict):
                        continue
                    name = str(p.get("name") or "").strip()
                    if not name:
                        continue
                    providers.append(
                        {
                            "name": name,
                            "displayName": str(p.get("display_name") or p.get("name") or name),
                            "supportsPassword": bool(p.get("supports_password")),
                        }
                    )
        except Exception:  # noqa: BLE001
            pass

    return {
        "baseUrl": base_url,
        "reachable": True,
        "authMode": auth_mode,
        "providers": providers,
        "version": (status or {}).get("version"),
        "gatewayRunning": (status or {}).get("gateway_running"),
        "error": None,
    }


@app.get("/api/gateway/connection")
def gateway_connection():
    if not _connection:
        return {"ok": False, "connected": False}
    safe = dict(_connection)
    tok = safe.get("token")
    if tok:
        safe["tokenPreview"] = ("..." + str(tok)[-6:]) if len(str(tok)) > 8 else "set"
        safe["token"] = None
    safe["connected"] = True
    return safe


@app.post("/api/gateway/connect")
def gateway_connect(body: ConnectBody):
    """Attach to remote Hermes dashboard (Desktop Gateway → Remote)."""
    try:
        conn = connect_remote(body.url, body.token, body.auth_mode)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=str(exc)) from exc

    cfg = read_config()
    cfg["gatewayStatus"] = "ok"
    gw = cfg.get("gateway") if isinstance(cfg.get("gateway"), dict) else {"global": {}, "profiles": {}}
    global_block = gw.get("global") if isinstance(gw.get("global"), dict) else {}
    global_block = dict(global_block)
    global_block.update(
        {
            "mode": "remote",
            "remoteUrl": conn["baseUrl"],
            "remoteAuthMode": conn["authMode"],
            "remoteTokenSet": bool(conn.get("token")),
            "remoteTokenPreview": (
                ("..." + str(conn["token"])[-6:]) if conn.get("token") and len(str(conn["token"])) > 8 else "set"
            )
            if conn.get("token")
            else global_block.get("remoteTokenPreview"),
        }
    )
    if conn.get("token"):
        global_block["remoteToken"] = conn["token"]
    gw["global"] = global_block
    if not isinstance(gw.get("profiles"), dict):
        gw["profiles"] = {}
    cfg["gateway"] = gw
    try:
        write_config(cfg)
    except Exception:  # noqa: BLE001
        pass
    return conn


@app.post("/api/gateway/disconnect")
def gateway_disconnect():
    global _connection
    _connection = None
    cfg = read_config()
    cfg["gatewayStatus"] = "idle"
    try:
        write_config(cfg)
    except Exception:  # noqa: BLE001
        pass
    return {"ok": True, "connected": False}


@app.post("/api/gateway/test")
def gateway_test(body: TestBody):
    """Desktop-style reachability: public then token-authenticated /api/status."""
    try:
        conn = connect_remote(body.url, body.token, body.auth_mode)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=str(exc)) from exc
    return {
        "ok": True,
        "mode": "remote",
        "baseUrl": conn["baseUrl"],
        "version": conn.get("version"),
        "gatewayRunning": conn.get("gatewayRunning"),
        "wsUrl": conn.get("wsUrl"),
    }


@app.get("/api/remote/config/raw")
def remote_config_raw_get(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/config/raw (Desktop/web Config YAML)."""
    return remote_api("/api/config/raw", method="GET", query={"profile": profile})


@app.put("/api/remote/config/raw")
def remote_config_raw_put(body: RawConfigBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard PUT /api/config/raw."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"yaml_text": body.yaml_text}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/config/raw",
        method="PUT",
        query={"profile": prof},
        body=payload,
        timeout=60.0,
    )


@app.get("/api/remote/profiles")
def remote_profiles_list():
    """Proxy Hermes dashboard GET /api/profiles (live profile dirs on host)."""
    return remote_api("/api/profiles", method="GET", timeout=30.0)


@app.post("/api/remote/profiles")
def remote_profiles_create(body: ProfileCreateBody):
    """Proxy Hermes dashboard POST /api/profiles (create profile on host)."""
    payload = body.model_dump(exclude_none=True)
    return remote_api("/api/profiles", method="POST", body=payload, timeout=60.0)


@app.delete("/api/remote/profiles/{name}")
def remote_profiles_delete(name: str):
    """Proxy Hermes dashboard DELETE /api/profiles/{name} (remove profile on host)."""
    return remote_api(
        f"/api/profiles/{quote(name, safe='')}",
        method="DELETE",
        timeout=90.0,
    )


@app.get("/api/remote/profiles/{name}/soul")
def remote_soul_get(name: str):
    """Proxy Hermes dashboard GET /api/profiles/{name}/soul (Desktop SOUL.md)."""
    return remote_api(f"/api/profiles/{quote(name, safe='')}/soul", method="GET")


@app.put("/api/remote/profiles/{name}/soul")
def remote_soul_put(name: str, body: SoulBody):
    """Proxy Hermes dashboard PUT /api/profiles/{name}/soul."""
    return remote_api(
        f"/api/profiles/{quote(name, safe='')}/soul",
        method="PUT",
        body={"content": body.content},
        timeout=60.0,
    )


@app.get("/api/remote/config")
def remote_config_get(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/config (structured, web-normalized)."""
    return remote_api("/api/config", method="GET", query={"profile": profile})


@app.get("/api/remote/config/tree")
def remote_config_tree(profile: Optional[str] = Query(default=None)):
    """Return nested config.yaml as a dict (YAML grouping), not web-flattened.

    Hermes GET /api/config collapses ``model: {default, provider, base_url}``
    into a single string. Canvas form groups by real YAML top-level keys, so we
    parse /api/config/raw instead.
    """
    import yaml

    raw = remote_api("/api/config/raw", method="GET", query={"profile": profile})
    text = ""
    path = None
    if isinstance(raw, dict):
        text = str(raw.get("yaml") or "")
        path = raw.get("path")
    try:
        parsed = yaml.safe_load(text) if text.strip() else {}
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=400, detail=f"Invalid YAML on remote host: {exc}") from exc
    if parsed is None:
        parsed = {}
    if not isinstance(parsed, dict):
        raise HTTPException(status_code=400, detail="config.yaml root must be a mapping")
    return {"path": path, "config": parsed, "yaml": text}


@app.put("/api/remote/config")
def remote_config_put(body: RemoteConfigBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard PUT /api/config (structured deep-merge save)."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"config": body.config}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/config",
        method="PUT",
        query={"profile": prof},
        body=payload,
        timeout=60.0,
    )


@app.get("/api/remote/config/schema")
def remote_config_schema():
    """Proxy Hermes dashboard GET /api/config/schema."""
    return remote_api("/api/config/schema", method="GET", timeout=30.0)


@app.get("/api/remote/config/defaults")
def remote_config_defaults():
    """Proxy Hermes dashboard GET /api/config/defaults."""
    return remote_api("/api/config/defaults", method="GET", timeout=30.0)


@app.get("/api/remote/env")
def remote_env_get(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/env (Keys / .env catalog)."""
    return remote_api("/api/env", method="GET", query={"profile": profile})


@app.put("/api/remote/env")
def remote_env_put(body: EnvBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard PUT /api/env."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"key": body.key, "value": body.value}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/env",
        method="PUT",
        query={"profile": prof},
        body=payload,
        timeout=30.0,
    )


@app.delete("/api/remote/env")
def remote_env_delete(body: EnvKeyBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard DELETE /api/env."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"key": body.key}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/env",
        method="DELETE",
        query={"profile": prof},
        body=payload,
        timeout=30.0,
    )


@app.post("/api/remote/env/reveal")
def remote_env_reveal(body: EnvKeyBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard POST /api/env/reveal (rate-limited on host)."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"key": body.key}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/env/reveal",
        method="POST",
        query={"profile": prof},
        body=payload,
        timeout=30.0,
    )


@app.get("/api/remote/tools/toolsets")
def remote_tools_toolsets(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/tools/toolsets (live catalog)."""
    return remote_api(
        "/api/tools/toolsets",
        method="GET",
        query={"profile": profile} if profile else None,
        timeout=45.0,
    )


@app.put("/api/remote/tools/toolsets/{name}")
def remote_tools_toolset_toggle(
    name: str,
    body: ToolsetToggleBody,
    profile: Optional[str] = Query(default=None),
):
    """Proxy Hermes dashboard PUT /api/tools/toolsets/{name}."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"enabled": body.enabled}
    if prof:
        payload["profile"] = prof
    return remote_api(
        f"/api/tools/toolsets/{quote(name, safe='')}",
        method="PUT",
        query={"profile": prof} if prof else None,
        body=payload,
        timeout=30.0,
    )


@app.get("/api/remote/skills")
def remote_skills_get(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/skills (installed skills for a profile)."""
    return remote_api("/api/skills", method="GET", query={"profile": profile}, timeout=45.0)


@app.put("/api/remote/skills/toggle")
def remote_skills_toggle(body: SkillToggleBody, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard PUT /api/skills/toggle."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"name": body.name, "enabled": body.enabled}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/skills/toggle",
        method="PUT",
        query={"profile": prof},
        body=payload,
        timeout=30.0,
    )


@app.get("/api/remote/skills/hub/search")
def remote_skills_hub_search(
    q: str = Query(default=""),
    source: str = Query(default="all"),
    limit: int = Query(default=20),
    profile: Optional[str] = Query(default=None),
):
    """Proxy Hermes dashboard GET /api/skills/hub/search."""
    return remote_api(
        "/api/skills/hub/search",
        method="GET",
        query={"q": q, "source": source, "limit": limit, "profile": profile},
        timeout=60.0,
    )


@app.post("/api/remote/skills/hub/install")
def remote_skills_hub_install(
    body: SkillHubInstallBody, profile: Optional[str] = Query(default=None)
):
    """Proxy Hermes dashboard POST /api/skills/hub/install (async host action)."""
    prof = body.profile or profile
    payload: dict[str, Any] = {"identifier": body.identifier}
    if prof:
        payload["profile"] = prof
    return remote_api(
        "/api/skills/hub/install",
        method="POST",
        query={"profile": prof},
        body=payload,
        timeout=30.0,
    )


@app.get("/api/remote/actions/{name}/status")
def remote_action_status(name: str, lines: int = Query(default=80)):
    """Proxy Hermes dashboard GET /api/actions/{name}/status."""
    return remote_api(
        f"/api/actions/{quote(name, safe='')}/status",
        method="GET",
        query={"lines": lines},
        timeout=30.0,
    )


@app.get("/api/remote/cron/jobs")
def remote_cron_jobs_list(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/cron/jobs."""
    return remote_api(
        "/api/cron/jobs",
        method="GET",
        query={"profile": profile or "all"},
        timeout=30.0,
    )


@app.get("/api/remote/cron/jobs/{job_id}")
def remote_cron_job_get(job_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/cron/jobs/{id}."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}",
        method="GET",
        query={"profile": profile} if profile else None,
        timeout=30.0,
    )


@app.post("/api/remote/cron/jobs")
def remote_cron_job_create(
    body: CronJobCreateBody, profile: Optional[str] = Query(default=None)
):
    """Proxy Hermes dashboard POST /api/cron/jobs."""
    payload = body.model_dump(exclude_none=True)
    return remote_api(
        "/api/cron/jobs",
        method="POST",
        query={"profile": profile} if profile else None,
        body=payload,
        timeout=30.0,
    )


@app.put("/api/remote/cron/jobs/{job_id}")
def remote_cron_job_update(
    job_id: str,
    body: CronJobUpdateBody,
    profile: Optional[str] = Query(default=None),
):
    """Proxy Hermes dashboard PUT /api/cron/jobs/{id}."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}",
        method="PUT",
        query={"profile": profile} if profile else None,
        body={"updates": body.updates or {}},
        timeout=30.0,
    )


@app.delete("/api/remote/cron/jobs/{job_id}")
def remote_cron_job_delete(job_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard DELETE /api/cron/jobs/{id}."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}",
        method="DELETE",
        query={"profile": profile} if profile else None,
        timeout=30.0,
    )


@app.post("/api/remote/cron/jobs/{job_id}/pause")
def remote_cron_job_pause(job_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard POST /api/cron/jobs/{id}/pause."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}/pause",
        method="POST",
        query={"profile": profile} if profile else None,
        timeout=30.0,
    )


@app.post("/api/remote/cron/jobs/{job_id}/resume")
def remote_cron_job_resume(job_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard POST /api/cron/jobs/{id}/resume."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}/resume",
        method="POST",
        query={"profile": profile} if profile else None,
        timeout=30.0,
    )


@app.post("/api/remote/cron/jobs/{job_id}/trigger")
def remote_cron_job_trigger(job_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard POST /api/cron/jobs/{id}/trigger (run now)."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}/trigger",
        method="POST",
        query={"profile": profile} if profile else None,
        timeout=60.0,
    )


@app.get("/api/remote/messaging/platforms")
def remote_messaging_platforms(profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/messaging/platforms."""
    return remote_api(
        "/api/messaging/platforms",
        method="GET",
        query={"profile": profile} if profile else None,
        timeout=45.0,
    )


@app.put("/api/remote/messaging/platforms/{platform_id}")
def remote_messaging_platform_put(
    platform_id: str,
    body: MessagingPlatformUpdateBody,
    profile: Optional[str] = Query(default=None),
):
    """Proxy Hermes dashboard PUT /api/messaging/platforms/{id}."""
    prof = body.profile or profile
    payload: dict[str, Any] = {
        "enabled": body.enabled,
        "env": body.env or {},
        "clear_env": body.clear_env or [],
    }
    if prof:
        payload["profile"] = prof
    return remote_api(
        f"/api/messaging/platforms/{quote(platform_id, safe='')}",
        method="PUT",
        query={"profile": prof} if prof else None,
        body=payload,
        timeout=60.0,
    )


@app.post("/api/remote/messaging/platforms/{platform_id}/test")
def remote_messaging_platform_test(
    platform_id: str, profile: Optional[str] = Query(default=None)
):
    """Proxy Hermes dashboard POST /api/messaging/platforms/{id}/test."""
    return remote_api(
        f"/api/messaging/platforms/{quote(platform_id, safe='')}/test",
        method="POST",
        query={"profile": profile} if profile else None,
        timeout=45.0,
    )


@app.get("/api/remote/sessions")
def remote_sessions_list(
    profile: Optional[str] = Query(default=None),
    limit: int = Query(default=20),
    min_messages: int = Query(default=1),
    order: str = Query(default="recent"),
    source: Optional[str] = Query(default=None),
    exclude_sources: Optional[str] = Query(default=None),
    offset: int = Query(default=0),
):
    """Proxy Hermes dashboard GET /api/sessions."""
    return remote_api(
        "/api/sessions",
        method="GET",
        query={
            "profile": profile,
            "limit": limit,
            "min_messages": min_messages,
            "order": order,
            "archived": "exclude",
            "source": source,
            "exclude_sources": exclude_sources,
            "offset": offset,
        },
        timeout=30.0,
    )


@app.get("/api/remote/sessions/{session_id}")
def remote_session_get(session_id: str, profile: Optional[str] = Query(default=None)):
    """Proxy Hermes dashboard GET /api/sessions/{id}."""
    return remote_api(
        f"/api/sessions/{quote(session_id, safe='')}",
        method="GET",
        query={"profile": profile} if profile else None,
        timeout=30.0,
    )


@app.get("/api/remote/sessions/{session_id}/messages")
def remote_session_messages(
    session_id: str, profile: Optional[str] = Query(default=None)
):
    """Proxy Hermes dashboard GET /api/sessions/{id}/messages."""
    return remote_api(
        f"/api/sessions/{quote(session_id, safe='')}/messages",
        method="GET",
        query={"profile": profile} if profile else None,
        timeout=60.0,
    )


@app.get("/api/remote/cron/jobs/{job_id}/runs")
def remote_cron_job_runs(
    job_id: str,
    profile: Optional[str] = Query(default=None),
    limit: int = Query(default=10),
):
    """Proxy Hermes dashboard GET /api/cron/jobs/{id}/runs."""
    return remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}/runs",
        method="GET",
        query={"profile": profile, "limit": limit},
        timeout=30.0,
    )


@app.get("/api/remote/cron/jobs/{job_id}/latest-output")
def remote_cron_job_latest_output(
    job_id: str, profile: Optional[str] = Query(default=None)
):
    """Read newest cron output markdown for a job (Hermes deliver=local files)."""
    if not profile:
        raise HTTPException(status_code=400, detail="profile is required")
    job = remote_api(
        f"/api/cron/jobs/{quote(job_id, safe='')}",
        method="GET",
        query={"profile": profile},
        timeout=30.0,
    )
    if not isinstance(job, dict) or not job.get("id"):
        raise HTTPException(status_code=404, detail="Job not found")
    canonical = str(job["id"])
    home = resolve_remote_profile_home(profile)
    out_dir = f"{home}/cron/output/{canonical}"
    try:
        listing = remote_api("/api/files", method="GET", query={"path": out_dir})
    except HTTPException as exc:
        if exc.status_code == 404:
            return {
                "content": "",
                "exists": False,
                "path": None,
                "job_id": canonical,
                "response": "",
                "silent": False,
            }
        raise
    entries = listing.get("entries") if isinstance(listing, dict) else None
    files = [
        e
        for e in (entries or [])
        if isinstance(e, dict)
        and not e.get("is_directory")
        and str(e.get("name") or "").endswith(".md")
    ]
    if not files:
        return {
            "content": "",
            "exists": False,
            "path": None,
            "job_id": canonical,
            "response": "",
            "silent": False,
        }
    files.sort(key=lambda e: float(e.get("mtime") or 0), reverse=True)
    latest = files[0]
    path = str(latest.get("path") or f"{out_dir}/{latest.get('name')}")
    raw = remote_api("/api/files/read", method="GET", query={"path": path})
    if not isinstance(raw, dict):
        raise HTTPException(status_code=502, detail="Unexpected files/read response")
    content = decode_remote_data_url(str(raw.get("data_url") or ""))
    response = ""
    if "## Response" in content:
        response = content.split("## Response", 1)[1].strip()
    silent = response.strip().upper() == "[SILENT]"
    return {
        "content": content,
        "exists": True,
        "path": path,
        "name": latest.get("name"),
        "job_id": canonical,
        "response": response,
        "silent": silent,
        "mtime": latest.get("mtime"),
    }


@app.get("/api/remote/profiles/{name}/memory/{which}")
def remote_memory_get(name: str, which: str):
    """Read profile memories/MEMORY.md or USER.md via Hermes managed files API."""
    fname = normalize_memory_filename(which)
    home = resolve_remote_profile_home(name)
    path = f"{home}/memories/{fname}"
    try:
        raw = remote_api("/api/files/read", method="GET", query={"path": path})
    except HTTPException as exc:
        if exc.status_code == 404:
            return {"content": "", "exists": False, "path": path, "file": fname}
        raise
    if not isinstance(raw, dict):
        raise HTTPException(status_code=502, detail="Unexpected files/read response")
    content = decode_remote_data_url(str(raw.get("data_url") or ""))
    return {
        "content": content,
        "exists": True,
        "path": raw.get("path") or path,
        "file": fname,
        "size": raw.get("size"),
    }


@app.put("/api/remote/profiles/{name}/memory/{which}")
def remote_memory_put(name: str, which: str, body: MemoryBody):
    """Write profile memories/MEMORY.md or USER.md via Hermes files/upload."""
    fname = normalize_memory_filename(which)
    home = resolve_remote_profile_home(name)
    path = f"{home}/memories/{fname}"
    remote_api(
        "/api/files/upload",
        method="POST",
        body={
            "path": path,
            "overwrite": True,
            "data_url": encode_remote_data_url(body.content),
        },
        timeout=60.0,
    )
    return {"ok": True, "path": path, "file": fname}
