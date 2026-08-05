# Hermes Agent Canvas

A clean graphical dashboard for configuring and chatting with [Hermes](https://github.com/NousResearch/hermes-agent) agents.

Hermes stores agent setup across many files and surfaces (config YAML, env, soul/memory markdown, skills, toolsets, messaging platforms, cron, hooks, plugins). Hermes Agent Canvas turns that into a **block-by-block visual canvas** so you can see how the pieces connect and edit them without hunting the filesystem.

> **Attach-only UI.** Canvas connects to a **local or remote Hermes gateway** that is already running. It does **not** spawn or manage the Hermes process for you (same idea as Hermes Desktop remote gateway attach: base URL + session token).

![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-FastAPI_%2B_vanilla_JS-0ea5e9)

## Demo

<video src="https://github.com/user-attachments/assets/9784f65e-e5e1-4e88-b600-11b848dc5242" controls playsinline width="100%"></video>

## Why this exists

- Hermes configuration is powerful but easy to lose track of across profiles and folders.
- You can schedule sequential agent tasks (n8n/make.com style) directly from canvas.
- Editing raw files works for experts; everyone else benefits from a single place that maps UI blocks to live Hermes APIs.
- You can keep Hermes wherever it already runs (WSL, Linux server, LAN host) and point Canvas at it from Windows or another machine.

## Features

### Gateway connection

- Connect to local or remote Hermes dashboard/API with URL + session token
- Probe / test connection before attaching
- Profile-aware workflows (create, switch, and sync agent profiles on the remote host)

### Visual agent canvas

Each canvas block maps to a real Hermes config surface:

| Block | What you edit |
|-------|----------------|
| **ENGINE** | Gateway / agent process view |
| **CONFIG** | Model and core `config.yaml` settings |
| **SOUL** | `SOUL.md` personality / instructions |
| **SECRETS** | `.env` keys and auth-related values |
| **MEMORY** | `MEMORY.md` / `USER.md` style memory docs |
| **SKILLS** | Installed skills + hub install/toggle (live from Hermes) |
| **TOOLS** | Toolsets / MCP-related toggles (live from Hermes API) |
| **CONNECTORS** | Messaging platforms (Telegram, Discord, …) |
| **TRIGGER** | Cron jobs and schedules for canvas-driven tasks |
| **HOOKS** | Hooks directory / wiring |
| **PLUGINS** | Plugins |

### Chat and sessions

- Chat pane attached to the connected Hermes session
- **SESSIONS** side panel: list, filter (Chats / Cron / All), switch, and start new chats
- Attachments and chat tooling UX for day-to-day agent use

### Live sync

- TOOLS / SKILLS / CONNECTORS load from Hermes APIs, not a fake hardcoded catalog
- Cron schedule UI hydrates correctly (including interval jobs such as every minute)

## Architecture

```text
┌─────────────────────────┐         HTTPS / HTTP          ┌──────────────────────────┐
│  Hermes Agent Canvas    │  ───────────────────────────► │  Hermes gateway / API    │
│  FastAPI + static UI    │     URL + session token       │  (already running)       │
│  :9100 by default       │  ◄─────────────────────────── │  profiles, tools, cron…  │
└─────────────────────────┘                               └──────────────────────────┘
```

- **Canvas server** (`server.py`): serves the UI and proxies remote Hermes REST endpoints.
- **Browser UI** (`static/`): canvas, block editors, sessions, chat.
- **Local state** (`data/`): connection/layout preferences on disk (gitignored except keep files). Secrets stay on the Hermes host.

## Requirements

- Python 3.11+ recommended
- A running Hermes dashboard/gateway you can reach (local or remote)
- Session token from that Hermes instance (Desktop-style remote connection)

## Quick start

```bash
git clone https://github.com/tecadrise-ai/hermes-agent-canvas.git
cd hermes-agent-canvas

python -m venv .venv

# Windows
.\.venv\Scripts\Activate.ps1

# Linux / macOS
# source .venv/bin/activate

pip install -r requirements.txt
uvicorn server:app --host 127.0.0.1 --port 9100 --reload
```

Open [http://127.0.0.1:9100](http://127.0.0.1:9100).

1. Click the gateway control in the tab bar.
2. Enter your Hermes base URL and session token.
3. Connect, pick a profile, and edit blocks on the canvas.

## Project layout

```text
hermes-agent-canvas/
├── server.py           # FastAPI app + remote Hermes proxies
├── requirements.txt
├── static/
│   ├── index.html
│   ├── app.js
│   └── style.css
└── data/               # local UI state (not committed)
```

## Safety notes

- Treat session tokens like passwords. Do not commit them.
- Canvas can change live Hermes config (env, tools, cron, messaging). Use a dedicated profile when experimenting.
- Binding beyond `127.0.0.1` exposes the UI on your network; put it behind auth / VPN if you do that.

## Related

- Upstream agent: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- Docs: [Hermes Agent documentation](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- This repo is a **UI gateway** for configuration and chat, not a replacement Hermes runtime.

## Contact

TecAdRise: [info@tecadrise.ai](mailto:info@tecadrise.ai)

## License

MIT. See [LICENSE](LICENSE).

---

Built as a simple, readable GUI so Hermes agents are easier to understand, edit, and operate day to day.
