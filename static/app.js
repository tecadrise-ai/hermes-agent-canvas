(function () {
  const elTabs = document.getElementById("tabs");
  const elTabsScroll = document.getElementById("tabs-scroll");
  const elTabAdd = document.getElementById("tab-add");
  const elSideMenu = document.getElementById("side-menu");
  const elSideToggle = document.getElementById("side-toggle");
  const elSideTitle = document.getElementById("side-menu-title");
  const elSideBody = document.getElementById("side-menu-body");
  const elCanvasViewport = document.getElementById("canvas-viewport");
  const elCanvasPane = document.getElementById("canvas-pane");
  const elCanvasDeleteAgent = document.getElementById("canvas-delete-agent");
  const elCanvasWorld = document.getElementById("canvas-world");
  const elCanvasNodes = document.getElementById("canvas-nodes");
  const elCanvasEdges = document.getElementById("canvas-edges");
  const elCanvasEdgesTask = document.getElementById("canvas-edges-task");
  const elBlockEditor = document.getElementById("block-editor");
  const elBlockEditorBack = document.getElementById("block-editor-back");
  const elBlockEditorTitle = document.getElementById("block-editor-title");
  const elBlockEditorPath = document.getElementById("block-editor-path");
  const elBlockEditorText = document.getElementById("block-editor-text");
  const elBlockEditorStatus = document.getElementById("block-editor-status");
  const elBlockEditorSave = document.getElementById("block-editor-save");
  const elBlockEditorReload = document.getElementById("block-editor-reload");
  const elBlockEditorAdvanced = document.getElementById("block-editor-advanced");
  const elCfgPanel = document.getElementById("cfg-panel");
  const elCfgNav = document.getElementById("cfg-nav");
  const elCfgFields = document.getElementById("cfg-fields");
  const elCfgSearch = document.getElementById("cfg-search");
  const elCfgSectionLabel = document.getElementById("cfg-section-label");
  const elSecPanel = document.getElementById("sec-panel");
  const elSecNav = document.getElementById("sec-nav");
  const elSecFields = document.getElementById("sec-fields");
  const elSecSearch = document.getElementById("sec-search");
  const elSecSectionLabel = document.getElementById("sec-section-label");
  const elSecSetOnly = document.getElementById("sec-set-only");
  const elSecNewKey = document.getElementById("sec-new-key");
  const elSecNewVal = document.getElementById("sec-new-val");
  const elSecAddBtn = document.getElementById("sec-add-btn");
  const elMemTabs = document.getElementById("mem-tabs");
  const elSkPanel = document.getElementById("sk-panel");
  const elSkModeTabs = document.getElementById("sk-mode-tabs");
  const elSkInstalled = document.getElementById("sk-installed");
  const elSkHub = document.getElementById("sk-hub");
  const elSkNav = document.getElementById("sk-nav");
  const elSkFields = document.getElementById("sk-fields");
  const elSkSearch = document.getElementById("sk-search");
  const elSkSectionLabel = document.getElementById("sk-section-label");
  const elSkEnabledOnly = document.getElementById("sk-enabled-only");
  const elSkAllOn = document.getElementById("sk-all-on");
  const elSkAllOff = document.getElementById("sk-all-off");
  const elSkHubQ = document.getElementById("sk-hub-q");
  const elSkHubSearchBtn = document.getElementById("sk-hub-search-btn");
  const elSkHubResults = document.getElementById("sk-hub-results");
  const elToolsPanel = document.getElementById("tools-panel");
  const elToolsFields = document.getElementById("tools-fields");
  const elToolsSectionLabel = document.getElementById("tools-section-label");
  const elToolsCommonOn = document.getElementById("tools-common-on");
  const elToolsAllOff = document.getElementById("tools-all-off");
  const elToolsVisionProvider = document.getElementById("tools-vision-provider");
  const elToolsVisionModel = document.getElementById("tools-vision-model");
  const elToolsImageMode = document.getElementById("tools-image-mode");
  const elTrgPanel = document.getElementById("trg-panel");
  const elTrgNav = document.getElementById("trg-nav");
  const elTrgForm = document.getElementById("trg-form");
  const elTrgSectionLabel = document.getElementById("trg-section-label");
  const elTrgNew = document.getElementById("trg-new");
  const elTrgRun = document.getElementById("trg-run");
  const elTrgPause = document.getElementById("trg-pause");
  const elTrgDelete = document.getElementById("trg-delete");
  const elTrgName = document.getElementById("trg-name");
  const elTrgPrompt = document.getElementById("trg-prompt");
  const elTrgIncludeTasks = document.getElementById("trg-include-tasks");
  const elTrgEnabled = document.getElementById("trg-enabled");
  const elTrgPreview = document.getElementById("trg-preview");
  const elTrgRunbox = document.getElementById("trg-runbox");
  const elTrgLastRun = document.getElementById("trg-last-run");
  const elTrgLastStatus = document.getElementById("trg-last-status");
  const elTrgLastError = document.getElementById("trg-last-error");
  const elChatScheduleType = document.getElementById("chat-schedule-type");
  const elChatIntervalVal = document.getElementById("chat-interval-val");
  const elChatIntervalUnit = document.getElementById("chat-interval-unit");
  const elChatLoopHint = document.getElementById("chat-loop-hint");
  const elChatUiInterval = document.getElementById("chat-ui-interval");
  const elChatUiDaily = document.getElementById("chat-ui-daily");
  const elChatUiWeekly = document.getElementById("chat-ui-weekly");
  const elChatUiOnce = document.getElementById("chat-ui-once");
  const elChatUiCron = document.getElementById("chat-ui-cron");
  const elChatDailyTime = document.getElementById("chat-daily-time");
  const elChatWeeklyDay = document.getElementById("chat-weekly-day");
  const elChatWeeklyTime = document.getElementById("chat-weekly-time");
  const elChatOnceDatetime = document.getElementById("chat-once-datetime");
  const elChatCronExpr = document.getElementById("chat-cron-expr");
  const elMessages = document.getElementById("messages");
  const elInput = document.getElementById("composer-input");
  const elSend = document.getElementById("send-btn");
  const elComposer = document.getElementById("composer");
  const elComposerAttach = document.getElementById("composer-attach");
  const elComposerDropHint = document.getElementById("composer-drop-hint");
  const elComposerFile = document.getElementById("composer-file");
  const elChatPane = document.getElementById("chat-pane");
  const elMainSplit = document.getElementById("main-split");
  const elSplitHandle = document.getElementById("split-handle");
  const elCtxMenu = document.getElementById("ctx-menu");
  const elCtxHide = document.getElementById("ctx-hide");
  const elTabGateway = document.getElementById("tab-gateway");
  const elGwModal = document.getElementById("gateway-modal");
  const elGwClose = document.getElementById("gateway-modal-close");
  const elGwRequiredModal = document.getElementById("gw-required-modal");
  const elGwRequiredClose = document.getElementById("gw-required-close");
  const elGwRequiredDismiss = document.getElementById("gw-required-dismiss");
  const elGwRequiredOpen = document.getElementById("gw-required-open");
  const elGwRequiredDetail = document.getElementById("gw-required-detail");
  const elGwRequiredMsg = document.getElementById("gw-required-msg");
  const elGwScopeChips = document.getElementById("gw-scope-chips");
  const elGwScopeHint = document.getElementById("gw-scope-hint");
  const elGwModeLocal = document.getElementById("gw-mode-local");
  const elGwModeRemote = document.getElementById("gw-mode-remote");
  const elGwUrl = document.getElementById("gw-remote-url");
  const elGwToken = document.getElementById("gw-remote-token");
  const elGwProbe = document.getElementById("gw-probe");
  const elGwAuthOauth = document.getElementById("gw-auth-oauth");
  const elGwAuthToken = document.getElementById("gw-auth-token");
  const elGwOauthHint = document.getElementById("gw-oauth-hint");
  const elGwOauthOpen = document.getElementById("gw-oauth-open");
  const elGwOauthPill = document.getElementById("gw-oauth-pill");
  const elGwStatus = document.getElementById("gw-status");
  const elGwTest = document.getElementById("gw-test");
  const elGwSave = document.getElementById("gw-save");
  const elGwSaveReconnect = document.getElementById("gw-save-reconnect");

  const CHAT_HEIGHT_KEY = "hermes_canvas_chat_height";
  const SIDE_COLLAPSED_KEY = "hermes_canvas_side_collapsed";
  const CAM_PREFIX = "hermes_canvas_cam_v3_";
  const ACTIVE_TAB_KEY = "hermes_canvas_active_tab";
  const GW_CONFIG_KEY = "hermes_canvas_gateway_v1";
  const GW_STATUS_KEY = "hermes_canvas_gateway_status_v1";

  const CANVAS_W = 1400;
  const CANVAS_H = 900;
  const NODE_W = 168;
  const NODE_ENGINE_W = 196;
  const NODE_H = 78;
  const NODE_ENGINE_H = 92;
  const TASK_W = 148;
  const TASK_H = 64;
  const TASK_COLOR = "#1a9d5a";
  const GRID = 24;
  const ZOOM_MIN = 0.35;
  const ZOOM_MAX = 2.5;
  const ZOOM_STEP = 0.1;
  const LAYOUT_KEY = "hermes_canvas_layouts_v3";
  const LAYOUT_KEY_LEGACY = "hermes_canvas_layouts_v2";

  function emptyFileConfig() {
    return {
      version: 1,
      activeTab: null,
      chatHeight: null,
      sideCollapsed: false,
      gateway: { global: {}, profiles: {} },
      gatewayStatus: "idle",
      cameras: {},
      layouts: {},
      cronPrefs: {},
      chatByProfile: {},
    };
  }

  let fileConfig = emptyFileConfig();
  let persistTimer = null;
  let persistReady = false;

  function schedulePersist(immediate) {
    if (!persistReady) return;
    mirrorLocalCache();
    if (persistTimer) clearTimeout(persistTimer);
    if (immediate) {
      persistTimer = null;
      void flushPersist();
      return;
    }
    persistTimer = setTimeout(() => {
      void flushPersist();
    }, 120);
  }

  function gatewayHasCreds(gw) {
    if (!gw || typeof gw !== "object") return false;
    const g = gw.global || {};
    if ((g.remoteUrl || "").trim() && (g.remoteToken || g.remoteTokenSet)) return true;
    const profiles = gw.profiles || {};
    for (const k of Object.keys(profiles)) {
      const b = profiles[k] || {};
      if ((b.remoteUrl || "").trim() && (b.remoteToken || b.remoteTokenSet)) return true;
    }
    return false;
  }

  async function flushPersist() {
    if (persistTimer) {
      clearTimeout(persistTimer);
      persistTimer = null;
    }
    mirrorLocalCache();
    // Last-chance client guard: do not PUT an empty gateway over saved creds.
    try {
      if (!gatewayHasCreds(fileConfig.gateway)) {
        const res = await fetch("/api/config");
        if (res.ok) {
          const remote = await res.json();
          if (gatewayHasCreds(remote && remote.gateway)) {
            fileConfig.gateway = remote.gateway;
            if (remote.gatewayStatus) fileConfig.gatewayStatus = remote.gatewayStatus;
          }
        }
      }
    } catch (_) {}
    const body = JSON.stringify(fileConfig);
    try {
      await fetch("/api/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
        keepalive: true,
      });
    } catch (_) {}
  }

  function flushPersistBeacon() {
    if (!persistReady) return;
    mirrorLocalCache();
    const body = JSON.stringify(fileConfig);
    try {
      if (navigator.sendBeacon) {
        const ok = navigator.sendBeacon(
          "/api/config",
          new Blob([body], { type: "application/json" })
        );
        if (ok) return;
      }
      fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
        keepalive: true,
      });
    } catch (_) {}
  }

  function mirrorLocalCache() {
    try {
      localStorage.setItem(LAYOUT_KEY, JSON.stringify(fileConfig.layouts || {}));
      localStorage.setItem(GW_CONFIG_KEY, JSON.stringify(fileConfig.gateway || {}));
      localStorage.setItem(GW_STATUS_KEY, fileConfig.gatewayStatus || "idle");
      if (fileConfig.activeTab) localStorage.setItem(ACTIVE_TAB_KEY, fileConfig.activeTab);
      if (fileConfig.chatHeight != null) localStorage.setItem(CHAT_HEIGHT_KEY, String(fileConfig.chatHeight));
      localStorage.setItem(SIDE_COLLAPSED_KEY, fileConfig.sideCollapsed ? "1" : "0");
      const cams = fileConfig.cameras || {};
      for (const id of Object.keys(cams)) {
        localStorage.setItem(CAM_PREFIX + id, JSON.stringify(cams[id]));
      }
    } catch (_) {}
  }

  function collectLocalStorageIntoConfig() {
    const cfg = emptyFileConfig();
    try {
      cfg.activeTab = localStorage.getItem(ACTIVE_TAB_KEY);
      const ch = parseFloat(localStorage.getItem(CHAT_HEIGHT_KEY) || "");
      if (!Number.isNaN(ch)) cfg.chatHeight = ch;
      cfg.sideCollapsed = localStorage.getItem(SIDE_COLLAPSED_KEY) === "1";
      cfg.gatewayStatus = localStorage.getItem(GW_STATUS_KEY) || "idle";
      const gw = localStorage.getItem(GW_CONFIG_KEY);
      if (gw) cfg.gateway = JSON.parse(gw);
      let layouts = localStorage.getItem(LAYOUT_KEY);
      if (!layouts) layouts = localStorage.getItem(LAYOUT_KEY_LEGACY);
      if (layouts) cfg.layouts = JSON.parse(layouts);
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith(CAM_PREFIX)) continue;
        const id = key.slice(CAM_PREFIX.length);
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        cfg.cameras[id] = JSON.parse(raw);
      }
    } catch (_) {}
    return cfg;
  }

  function configIsEmpty(cfg) {
    if (!cfg || typeof cfg !== "object") return true;
    const cams = cfg.cameras && Object.keys(cfg.cameras).length;
    const lays = cfg.layouts && Object.keys(cfg.layouts).length;
    const gw = cfg.gateway && (cfg.gateway.global || cfg.gateway.profiles);
    const hasGw =
      gw &&
      ((cfg.gateway.global && Object.keys(cfg.gateway.global).length) ||
        (cfg.gateway.profiles && Object.keys(cfg.gateway.profiles).length));
    return !cams && !lays && !hasGw && !cfg.activeTab;
  }

  function normalizeFileConfig(raw) {
    const cfg = Object.assign(emptyFileConfig(), raw || {});
    if (!cfg.cameras || typeof cfg.cameras !== "object") cfg.cameras = {};
    if (!cfg.layouts || typeof cfg.layouts !== "object") cfg.layouts = {};
    if (!cfg.cronPrefs || typeof cfg.cronPrefs !== "object") cfg.cronPrefs = {};
    if (!cfg.chatByProfile || typeof cfg.chatByProfile !== "object") cfg.chatByProfile = {};
    if (!cfg.gateway || typeof cfg.gateway !== "object") {
      cfg.gateway = { global: {}, profiles: {} };
    }
    cfg.version = 1;
    return cfg;
  }

  function restoreChatSessionsFromConfig() {
    ensureChatByProfile();
    const rows = fileConfig.chatByProfile || {};
    for (const profile of Object.keys(rows)) {
      const row = rows[profile];
      if (!row || !row.sessionId) continue;
      if (!chatGw.sessions[profile]) {
        chatGw.sessions[profile] = {
          sessionId: String(row.sessionId),
          streamingIdx: null,
          thinkingMsg: null,
          live: false,
        };
      } else {
        if (!chatGw.sessions[profile].sessionId) {
          chatGw.sessions[profile].sessionId = String(row.sessionId);
        }
        chatGw.sessions[profile].live = false;
      }
    }
  }

  async function hydrateFromServer() {
    let remote = null;
    let remoteOk = false;
    try {
      const res = await fetch("/api/config");
      if (res.ok) {
        remote = await res.json();
        remoteOk = true;
      }
    } catch (_) {}

    if (remoteOk && remote && !configIsEmpty(remote)) {
      // Trust the disk file. Never clobber it with a stale browser cache.
      fileConfig = normalizeFileConfig(remote);
      persistReady = true;
      mirrorLocalCache();
      return;
    }

    if (remoteOk) {
      // Server file empty → one-time migrate from localStorage, then write.
      const local = collectLocalStorageIntoConfig();
      fileConfig = configIsEmpty(local) ? emptyFileConfig() : normalizeFileConfig(local);
      persistReady = true;
      mirrorLocalCache();
      await flushPersist();
      return;
    }

    // Fetch failed (server restarting). Use browser cache only. Do NOT overwrite disk.
    fileConfig = normalizeFileConfig(collectLocalStorageIntoConfig());
    persistReady = true;
    mirrorLocalCache();
  }

  /** All Hermes canvas/menu blocks (one tab = one profile). MODEL/PROFILE dropped; config.yaml = CONFIG. */
  const BLOCK_CATALOG = [
    { id: "engine", label: "ENGINE", body: "gateway process", color: "#22c55e", x: 516, y: 264, engine: true },
    { id: "config", label: "CONFIG", body: "model…", color: "#78716c", x: 816, y: 72 },
    { id: "soul", label: "SOUL", body: "SOUL.md…", color: "#f97316", x: 216, y: 72 },
    { id: "secrets", label: "SECRETS", body: ".env + auth.json", color: "#ef4444", x: 1104, y: 72 },
    { id: "memory", label: "MEMORY", body: "MEMORY.md / USER.md", color: "#ec4899", x: 960, y: 264 },
    { id: "skills", label: "SKILLS", body: "skills/**", color: "#8b5cf6", x: 216, y: 456 },
    { id: "tools", label: "TOOLS", body: "toolsets / mcp_servers", color: "#14b8a6", x: 816, y: 456 },
    { id: "connectors", label: "CONNECTORS", body: "telegram / discord / …", color: "#0ea5e9", x: 528, y: 528 },
    { id: "trigger", label: "TRIGGER", body: "cron/", color: "#eab308", x: 72, y: 264 },
    { id: "hooks", label: "HOOKS", body: "hooks/", color: "#a855f7", x: 1104, y: 456 },
    { id: "plugins", label: "PLUGINS", body: "plugins/", color: "#06b6d4", x: 1104, y: 264 },
    { id: "sessions", label: "SESSIONS", body: "sessions/ (runtime)", color: "#94a3b8", x: 816, y: 600 },
  ];

  const BLOCK_BY_ID = Object.fromEntries(BLOCK_CATALOG.map((b) => [b.id, b]));

  function makeNode(blockId, overrides) {
    const def = BLOCK_BY_ID[blockId];
    if (!def) return null;
    const o = overrides || {};
    return {
      id: def.id,
      label: def.label,
      body: o.body != null ? o.body : def.body,
      color: def.color,
      engine: !!def.engine,
      task: false,
      x: o.x != null ? o.x : def.x,
      y: o.y != null ? o.y : def.y,
    };
  }

  let taskSeq = 1;
  function nextTaskId() {
    const id = "task-" + taskSeq;
    taskSeq += 1;
    return id;
  }

  function makeTaskNode(overrides) {
    const o = overrides || {};
    return {
      id: o.id || nextTaskId(),
      label: o.label || "TASK",
      body: o.body != null ? o.body : "Describe what the agent should do…",
      color: TASK_COLOR,
      engine: false,
      task: true,
      x: o.x != null ? o.x : 0,
      y: o.y != null ? o.y : 0,
    };
  }

  function taskOrderNumber(agent, node) {
    const tasks = agent.nodes.filter((n) => n.task);
    const idx = tasks.findIndex((n) => n.id === node.id);
    return idx >= 0 ? idx + 1 : tasks.length + 1;
  }

  function defaultNodes(ids, bodies) {
    return ids.map((id) => makeNode(id, bodies && bodies[id] ? { body: bodies[id] } : null)).filter(Boolean);
  }

  function ensureAgentExtras(agent) {
    if (!Array.isArray(agent.taskEdges)) agent.taskEdges = [];
  }

  function defaultAgentNodes(profileName) {
    return defaultNodes(
      ["engine", "soul", "config"],
      {
        engine: "profile: " + profileName,
        soul: "SOUL.md…",
        config: "model…",
      }
    );
  }

  function makeAgentFromProfile(info, previous) {
    const id = String((info && info.name) || "").trim();
    const prev = previous || null;
    const savedChat = getSavedChatMessages(id);
    return {
      id: id,
      name: id,
      path: (info && info.path) || (prev && prev.path) || "",
      isDefault: !!(info && info.is_default),
      model: (info && info.model) || null,
      provider: (info && info.provider) || null,
      nodes: prev && Array.isArray(prev.nodes) && prev.nodes.length ? prev.nodes : defaultAgentNodes(id),
      taskEdges: [],
      chat:
        prev && Array.isArray(prev.chat) && prev.chat.length > 1
          ? prev.chat
          : savedChat && savedChat.length
            ? savedChat
            : [
                {
                  role: "meta",
                  text: "Chat uses Hermes dashboard WebSocket. Profile: " + id,
                },
              ],
    };
  }

  function ensureChatByProfile() {
    if (!fileConfig.chatByProfile || typeof fileConfig.chatByProfile !== "object") {
      fileConfig.chatByProfile = {};
    }
  }

  function getSavedChatMessages(profile) {
    ensureChatByProfile();
    const row = fileConfig.chatByProfile[profile];
    if (!row || !Array.isArray(row.messages) || !row.messages.length) return null;
    return row.messages
      .filter((m) => m && m.role && typeof m.text === "string")
      .map((m) => ({
        role: m.role,
        text: m.text,
        ...(m.ts != null ? { ts: Number(m.ts) } : {}),
        cronJobId: m.cronJobId,
        cronRunAt: m.cronRunAt,
      }));
  }

  function getSavedChatSessionId(profile) {
    ensureChatByProfile();
    const row = fileConfig.chatByProfile[profile];
    return row && row.sessionId ? String(row.sessionId) : null;
  }

  function persistChatState(profile) {
    if (!profile || profile === "_offline") return;
    const agent = agents.find((a) => a.id === profile);
    if (!agent) return;
    ensureChatByProfile();
    const st = chatGw.sessions[profile];
    const messages = (agent.chat || [])
      .filter((m) => m && m.role && typeof m.text === "string")
      .filter((m) => {
        if (m.role !== "meta") return true;
        const t = String(m.text || "");
        if (/Waiting for Hermes|Hermes is generating|Stopping Hermes|Uploading attachments|Analyzing image/i.test(t))
          return false;
        return true;
      })
      .map((m) => ({
        role: m.role,
        text: m.text,
        ...(m.ts != null ? { ts: Number(m.ts) } : {}),
        ...(m.cronJobId ? { cronJobId: m.cronJobId } : {}),
        ...(m.cronRunAt ? { cronRunAt: m.cronRunAt } : {}),
      }))
      .slice(-240);
    const prev = fileConfig.chatByProfile[profile] || {};
    // Prefer durable Hermes DB id (resume target), not ephemeral live WS sid.
    const durableId =
      (st && st.historySessionId) || (st && st.sessionId) || prev.sessionId || null;
    fileConfig.chatByProfile[profile] = {
      sessionId: durableId,
      messages: messages,
      updatedAt: Date.now(),
    };
    schedulePersist(true);
  }

  function messageContentToText(content) {
    if (content == null) return "";
    if (typeof content === "string") return content;
    if (Array.isArray(content)) {
      return content
        .map((part) => {
          if (typeof part === "string") return part;
          if (part && typeof part.text === "string") return part.text;
          if (part && typeof part.content === "string") return part.content;
          return "";
        })
        .filter(Boolean)
        .join("");
    }
    if (typeof content === "object" && typeof content.text === "string") return content.text;
    try {
      return JSON.stringify(content);
    } catch (_) {
      return String(content);
    }
  }

  function hermesMessageTimestamp(m) {
    if (!m || typeof m !== "object") return null;
    const raw =
      m.ts != null
        ? m.ts
        : m.created_at != null
          ? m.created_at
          : m.timestamp != null
            ? m.timestamp
            : m.createdAt != null
              ? m.createdAt
              : null;
    if (raw == null) return null;
    if (typeof raw === "number" && Number.isFinite(raw)) {
      return raw < 1e12 ? raw * 1000 : raw;
    }
    const parsed = Date.parse(String(raw));
    return Number.isFinite(parsed) ? parsed : null;
  }

  function hermesMessagesToChat(rawMessages) {
    const out = [];
    const list = Array.isArray(rawMessages) ? rawMessages : [];
    for (const m of list) {
      if (!m) continue;
      const role = String(m.role || "").toLowerCase();
      if (role !== "user" && role !== "assistant") continue;
      const text = messageContentToText(m.content != null ? m.content : m.text).trim();
      if (!text) continue;
      const ts = hermesMessageTimestamp(m);
      out.push(ts != null ? { role: role, text: text, ts: ts } : { role: role, text: text });
    }
    return out;
  }

  function fmtChatTs(ts) {
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return "";
    const p = (n) => String(n).padStart(2, "0");
    return (
      d.getFullYear() +
      "-" +
      p(d.getMonth() + 1) +
      "-" +
      p(d.getDate()) +
      " " +
      p(d.getHours()) +
      ":" +
      p(d.getMinutes())
    );
  }

  async function hydrateChatFromHermes(profile) {
    if (!profile || profile === "_offline") return false;
    let sessionId = getSavedChatSessionId(profile) ||
      (chatGw.sessions[profile] && chatGw.sessions[profile].sessionId);
    if (!sessionId) {
      try {
        const listRes = await fetch(
          "/api/remote/sessions?profile=" +
            encodeURIComponent(profile) +
            "&limit=5&min_messages=1&order=recent"
        );
        const listData = await listRes.json().catch(() => ({}));
        if (listRes.ok) {
          const sessions = Array.isArray(listData)
            ? listData
            : Array.isArray(listData.sessions)
              ? listData.sessions
              : [];
          const first = sessions.find((s) => s && (s.id || s.session_id));
          if (first) sessionId = String(first.id || first.session_id);
        }
      } catch (_) {}
    }
    if (!sessionId) return false;
    try {
      const res = await fetch(
        "/api/remote/sessions/" +
          encodeURIComponent(sessionId) +
          "/messages?profile=" +
          encodeURIComponent(profile)
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return false;
      const msgs = hermesMessagesToChat(data.messages || data || []);
      if (!msgs.length) {
        // Keep history session id for resume; not live until session.resume.
        if (!chatGw.sessions[profile]) {
          chatGw.sessions[profile] = {
            sessionId: sessionId,
            streamingIdx: null,
            thinkingMsg: null,
            live: false,
          };
        } else {
          chatGw.sessions[profile].sessionId = sessionId;
          chatGw.sessions[profile].live = false;
        }
        persistChatState(profile);
        return false;
      }
      const agent = agents.find((a) => a.id === profile);
      if (!agent) return false;
      const banner = {
        role: "meta",
        text: "Chat uses Hermes dashboard WebSocket. Profile: " + profile,
      };
      const localCron = (agent.chat || []).filter((m) => m && m.role === "cron");
      agent.chat = [banner].concat(msgs).concat(localCron);
      if (!chatGw.sessions[profile]) {
        chatGw.sessions[profile] = {
          sessionId: sessionId,
          streamingIdx: null,
          thinkingMsg: null,
          live: false,
        };
      } else {
        chatGw.sessions[profile].sessionId = sessionId;
        chatGw.sessions[profile].live = false;
      }
      persistChatState(profile);
      if (profile === activeId) renderChat();
      return true;
    } catch (_) {
      return false;
    }
  }

  function offlinePlaceholderAgent() {
    return {
      id: "_offline",
      name: "(connect gateway)",
      path: "",
      isDefault: false,
      offline: true,
      nodes: defaultNodes(["engine"], { engine: "Connect Gateway to load Hermes profiles" }),
      taskEdges: [],
      chat: [
        {
          role: "meta",
          text: "Profiles load from remote Hermes via Gateway. Open Gateway, Save & reconnect.",
        },
      ],
    };
  }

  let agents = [offlinePlaceholderAgent()];
  agents.forEach(ensureAgentExtras);

  let activeId = agents[0].id;
  let menuSelectionByAgent = Object.fromEntries(agents.map((a) => [a.id, "engine"]));
  let profilesSyncBusy = false;
  let drag = null;
  let pan = null;
  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let ctxNodeId = null;

  function activeAgent() {
    return agents.find((a) => a.id === activeId) || agents[0];
  }

  function nodeSize(node) {
    if (node.engine) return { w: NODE_ENGINE_W, h: NODE_ENGINE_H };
    if (node.task) return { w: TASK_W, h: TASK_H };
    return { w: NODE_W, h: NODE_H };
  }

  function clampPos(node, x, y) {
    const { w, h } = nodeSize(node);
    return {
      x: Math.max(0, Math.min(CANVAS_W - w, x)),
      y: Math.max(0, Math.min(CANVAS_H - h, y)),
    };
  }

  function snap(n) {
    return Math.round(n / GRID) * GRID;
  }

  function applyWorldTransform() {
    elCanvasWorld.style.transform =
      "translate(" + panX + "px," + panY + "px) scale(" + zoom + ")";
    updateInfiniteGrid();
  }

  function updateInfiniteGrid() {
    let step = GRID * zoom;
    let every = 1;
    while (step * every < 12 && every < 64) every *= 2;
    const cell = step * every;
    const ox = ((panX % cell) + cell) % cell;
    const oy = ((panY % cell) + cell) % cell;
    elCanvasViewport.style.backgroundSize = cell + "px " + cell + "px";
    elCanvasViewport.style.backgroundPosition = ox + "px " + oy + "px";
  }

  function camKey(agentId) {
    return CAM_PREFIX + (agentId || activeId || "default");
  }

  function saveView(agentId) {
    const id = agentId || activeId;
    if (!id) return;
    if (!fileConfig.cameras) fileConfig.cameras = {};
    fileConfig.cameras[id] = { zoom: zoom, panX: panX, panY: panY, t: Date.now() };
    schedulePersist();
  }

  function loadView(agentId) {
    const id = agentId || activeId;
    if (!id) return false;
    try {
      const data = (fileConfig.cameras && fileConfig.cameras[id]) || null;
      if (!data || typeof data.zoom !== "number" || typeof data.panX !== "number" || typeof data.panY !== "number") {
        return false;
      }
      zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, data.zoom));
      panX = data.panX;
      panY = data.panY;
      applyWorldTransform();
      return true;
    } catch (_) {
      return false;
    }
  }

  function hasSavedView(agentId) {
    const data = fileConfig.cameras && fileConfig.cameras[agentId];
    return !!(data && typeof data.zoom === "number");
  }

  // migrate old v2 blob once into fileConfig.cameras
  function migrateOldViews() {
    try {
      const raw = localStorage.getItem("hermes_canvas_view_v2");
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return;
      if (!fileConfig.cameras) fileConfig.cameras = {};
      for (const a of agents) {
        if (fileConfig.cameras[a.id]) continue;
        const v = data[a.id];
        if (v && typeof v.zoom === "number" && typeof v.panX === "number" && typeof v.panY === "number") {
          fileConfig.cameras[a.id] = { zoom: v.zoom, panX: v.panX, panY: v.panY, t: Date.now() };
        }
      }
      if (typeof data.zoom === "number" && typeof data.panX === "number") {
        for (const a of agents) {
          if (fileConfig.cameras[a.id]) continue;
          fileConfig.cameras[a.id] = {
            zoom: data.zoom,
            panX: data.panX,
            panY: data.panY || 0,
            t: Date.now(),
          };
        }
      }
      schedulePersist();
    } catch (_) {}
  }

  function clientToWorld(clientX, clientY) {
    const rect = elCanvasViewport.getBoundingClientRect();
    return {
      x: (clientX - rect.left - panX) / zoom,
      y: (clientY - rect.top - panY) / zoom,
    };
  }

  function ensureEngineSticky(agent) {
    if (!agent || agent.offline) return;
    ensureAgentExtras(agent);
    if (agent.nodes.some((n) => n.engine || n.id === "engine")) {
      for (const n of agent.nodes) {
        if (n.id === "engine") n.engine = true;
      }
      return;
    }
    const def = BLOCK_BY_ID.engine;
    const node = makeNode("engine", {
      body: agent.id ? "profile: " + agent.id : def.body,
    });
    agent.nodes = [node].concat(agent.nodes);
  }

  function loadLayouts() {
    try {
      const data = fileConfig.layouts || {};
      if (!data || typeof data !== "object") return;
      for (const agent of agents) {
        ensureAgentExtras(agent);
        const saved = data[agent.id];
        if (!saved || typeof saved !== "object") {
          ensureEngineSticky(agent);
          continue;
        }

        const bodies = {};
        for (const node of agent.nodes) bodies[node.id] = node.body;
        const positions = saved.positions || {};

        let catalogNodes = [];
        if (Array.isArray(saved.visible)) {
          const visibleRaw = saved.visible.filter((id) => !String(id).startsWith("task-"));
          const hadModel = visibleRaw.includes("model");
          const hadConfig =
            visibleRaw.includes("config") || visibleRaw.includes("terminal");
          const visible = [];
          for (const id of visibleRaw.map((x) => (x === "terminal" ? "config" : x))) {
            if (visible.includes(id)) continue;
            visible.push(id);
          }
          // ENGINE is always on canvas (sticky).
          if (!visible.includes("engine")) visible.unshift("engine");
          catalogNodes = visible
            .filter((id) => id !== "model" && id !== "profile" && BLOCK_BY_ID[id])
            .map((id) => {
              const p = positions[id] || (id === "config" ? positions.terminal : null) || {};
              return makeNode(id, {
                body:
                  bodies[id] != null
                    ? bodies[id]
                    : id === "config"
                      ? bodies.terminal
                      : undefined,
                x: typeof p.x === "number" ? p.x : undefined,
                y: typeof p.y === "number" ? p.y : undefined,
              });
            })
            .filter(Boolean);
          // MODEL removed: convert leftover MODEL slot into CONFIG if needed.
          if (hadModel && !hadConfig && !catalogNodes.some((n) => n.id === "config")) {
            const p = positions.model || positions.terminal || {};
            catalogNodes.push(
              makeNode("config", {
                body: bodies.model || bodies.terminal || bodies.config || "model…",
                x: typeof p.x === "number" ? p.x : undefined,
                y: typeof p.y === "number" ? p.y : undefined,
              })
            );
          }
        } else {
          catalogNodes = agent.nodes.filter((n) => !n.task);
          for (const node of catalogNodes) {
            const p = positions[node.id];
            if (!p || typeof p.x !== "number" || typeof p.y !== "number") continue;
            const clamped = clampPos(node, p.x, p.y);
            node.x = clamped.x;
            node.y = clamped.y;
          }
        }

        const taskNodes = [];
        if (Array.isArray(saved.tasks)) {
          for (const t of saved.tasks) {
            if (!t || !t.id) continue;
            const p = positions[t.id] || {};
            const node = makeTaskNode({
              id: t.id,
              body: t.body,
              x: typeof p.x === "number" ? p.x : typeof t.x === "number" ? t.x : 0,
              y: typeof p.y === "number" ? p.y : typeof t.y === "number" ? t.y : 0,
            });
            const clamped = clampPos(node, node.x, node.y);
            node.x = clamped.x;
            node.y = clamped.y;
            taskNodes.push(node);
            const num = parseInt(String(t.id).replace(/^task-/, ""), 10);
            if (!Number.isNaN(num) && num >= taskSeq) taskSeq = num + 1;
          }
        }

        agent.nodes = catalogNodes.concat(taskNodes);
        agent.taskEdges = [];
        ensureEngineSticky(agent);
      }
    } catch (_) {}
  }

  function saveLayouts() {
    if (!fileConfig.layouts) fileConfig.layouts = {};
    for (const agent of agents) {
      ensureAgentExtras(agent);
      ensureEngineSticky(agent);
      const positions = {};
      const tasks = [];
      const visible = [];
      for (const node of agent.nodes) {
        positions[node.id] = { x: node.x, y: node.y };
        if (node.task) {
          tasks.push({ id: node.id, body: node.body, x: node.x, y: node.y });
        } else {
          visible.push(node.id);
        }
      }
      if (!visible.includes("engine")) visible.unshift("engine");
      fileConfig.layouts[agent.id] = {
        visible: visible,
        positions: positions,
        tasks: tasks,
        taskEdges: [],
      };
    }
    schedulePersist(true);
    scheduleSyncCronIncludeTaskPrompts(activeId);
  }

  const RUN_ALL_TASKS_PROMPT = "Run all tasks.";
  const CANVAS_TASKS_APPENDIX =
    "\n\n--- Canvas TASK cards (auto-included) ---\n" +
    "Execute these Hermes Canvas TASK cards in order. Do NOT use Hermes kanban. " +
    "Do NOT reply with [SILENT] after finishing. Answer each task clearly, labeled by number.\n\n";
  let cronPromptSyncTimer = null;

  function ensureCronPrefs() {
    if (!fileConfig.cronPrefs || typeof fileConfig.cronPrefs !== "object") {
      fileConfig.cronPrefs = {};
    }
  }

  function getIncludeCanvasTasks(profile, jobId) {
    if (!jobId) return !!blockEditor.includeCanvasTasks;
    ensureCronPrefs();
    const block = fileConfig.cronPrefs[profile];
    if (!block || typeof block !== "object") return false;
    const row = block[jobId];
    return !!(row && row.includeCanvasTasks);
  }

  function setIncludeCanvasTasks(profile, jobId, value) {
    const on = !!value;
    if (!jobId) {
      blockEditor.includeCanvasTasks = on;
      return;
    }
    ensureCronPrefs();
    if (!fileConfig.cronPrefs[profile] || typeof fileConfig.cronPrefs[profile] !== "object") {
      fileConfig.cronPrefs[profile] = {};
    }
    if (!fileConfig.cronPrefs[profile][jobId] || typeof fileConfig.cronPrefs[profile][jobId] !== "object") {
      fileConfig.cronPrefs[profile][jobId] = {};
    }
    fileConfig.cronPrefs[profile][jobId].includeCanvasTasks = on;
    schedulePersist(true);
  }

  function canvasTaskBodies(agentId) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return [];
    return agent.nodes
      .filter((n) => n && n.task)
      .map((n) => String(n.body || "").trim())
      .filter(Boolean);
  }

  function buildCanvasTasksAppendix(agentId) {
    const tasks = canvasTaskBodies(agentId);
    if (!tasks.length) {
      return CANVAS_TASKS_APPENDIX + "(No canvas TASK cards on this profile.)";
    }
    return CANVAS_TASKS_APPENDIX + tasks.map((t, i) => i + 1 + ". " + t).join("\n");
  }

  function stripCanvasTasksAppendix(raw) {
    const t = String(raw || "");
    const idx = t.indexOf("\n\n--- Canvas TASK cards (auto-included) ---");
    if (idx >= 0) return t.slice(0, idx).trim();
    // Legacy magic-prompt expansions from earlier Canvas builds.
    if (t === RUN_ALL_TASKS_PROMPT) return RUN_ALL_TASKS_PROMPT;
    if (t.startsWith(RUN_ALL_TASKS_PROMPT + "\n\nExecute these Hermes Canvas TASK cards")) {
      return RUN_ALL_TASKS_PROMPT;
    }
    if (t.startsWith(RUN_ALL_TASKS_PROMPT + "\n\n(No Hermes Canvas TASK cards")) {
      return RUN_ALL_TASKS_PROMPT;
    }
    if (t.startsWith(RUN_ALL_TASKS_PROMPT + "\n\nMARKER=")) {
      return RUN_ALL_TASKS_PROMPT;
    }
    return t;
  }

  function inferIncludeCanvasTasks(raw, profile, jobId) {
    if (getIncludeCanvasTasks(profile, jobId)) return true;
    const t = String(raw || "");
    if (t.includes("--- Canvas TASK cards (auto-included) ---")) return true;
    if (t.startsWith(RUN_ALL_TASKS_PROMPT + "\n\nExecute these Hermes Canvas TASK cards")) return true;
    if (t.startsWith(RUN_ALL_TASKS_PROMPT + "\n\nMARKER=")) return true;
    return false;
  }

  function hermesPromptFromUi(raw, agentId, includeTasks) {
    const base = String(raw || "").trim();
    if (!includeTasks) return base;
    return base + buildCanvasTasksAppendix(agentId);
  }

  function scheduleSyncCronIncludeTaskPrompts(profileId) {
    if (cronPromptSyncTimer) clearTimeout(cronPromptSyncTimer);
    cronPromptSyncTimer = setTimeout(() => {
      void syncCronIncludeTaskPrompts(profileId);
    }, 800);
  }

  async function syncCronIncludeTaskPrompts(profileId) {
    const profile = profileId || activeId;
    if (!profile || profile === "_offline") return;
    ensureCronPrefs();
    const prefs = fileConfig.cronPrefs[profile] || {};
    try {
      const res = await fetch("/api/remote/cron/jobs?profile=" + encodeURIComponent(profile));
      const data = await res.json().catch(() => ([]));
      if (!res.ok) return;
      const jobs = Array.isArray(data) ? data : [];
      for (const job of jobs) {
        if (!job || !job.id) continue;
        const include = !!(prefs[job.id] && prefs[job.id].includeCanvasTasks);
        if (!include) continue;
        const base = stripCanvasTasksAppendix(job.prompt || "");
        const next = hermesPromptFromUi(base, profile, true);
        if (String(job.prompt || "") === next) continue;
        await fetch(
          "/api/remote/cron/jobs/" +
            encodeURIComponent(job.id) +
            "?profile=" +
            encodeURIComponent(profile),
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ updates: { prompt: next } }),
          }
        );
      }
    } catch (_) {}
  }

  function centerOf(node) {
    const { w, h } = nodeSize(node);
    return { x: node.x + w / 2, y: node.y + h / 2 };
  }

  function curvePath(x1, y1, x2, y2) {
    const dx = Math.abs(x2 - x1);
    const pull = Math.max(48, dx * 0.45);
    const c1x = x1 + (x2 >= x1 ? pull : -pull);
    const c2x = x2 + (x2 >= x1 ? -pull : pull);
    return "M " + x1 + " " + y1 + " C " + c1x + " " + y1 + ", " + c2x + " " + y2 + ", " + x2 + " " + y2;
  }

  function sizedEdgeSvg(svg) {
    if (!svg) return;
    svg.setAttribute("viewBox", "0 0 " + CANVAS_W + " " + CANVAS_H);
    svg.setAttribute("width", String(CANVAS_W));
    svg.setAttribute("height", String(CANVAS_H));
    svg.innerHTML = "";
  }

  function updateEdges() {
    const agent = activeAgent();
    ensureAgentExtras(agent);
    const engine = agent.nodes.find((n) => n.engine);
    sizedEdgeSvg(elCanvasEdges);
    sizedEdgeSvg(elCanvasEdgesTask);

    if (engine && elCanvasEdges) {
      const ec = centerOf(engine);
      for (const node of agent.nodes) {
        if (node.engine || node.task) continue;
        const nc = centerOf(node);
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("class", "canvas-edge");
        path.setAttribute("d", curvePath(nc.x, nc.y, ec.x, ec.y));
        elCanvasEdges.appendChild(path);
      }
    }

    if (elCanvasEdgesTask) elCanvasEdgesTask.innerHTML = "";
  }

  function applyNodeDom(node, el) {
    el.style.left = node.x + "px";
    el.style.top = node.y + "px";
  }

  function hideCtxMenu() {
    elCtxMenu.hidden = true;
    ctxNodeId = null;
  }

  function showCtxMenu(clientX, clientY, nodeId) {
    const agent = activeAgent();
    const node = agent && agent.nodes.find((n) => n.id === nodeId);
    if (node && (node.engine || node.id === "engine")) {
      hideCtxMenu();
      return;
    }
    ctxNodeId = nodeId;
    elCtxMenu.hidden = false;
    const pad = 6;
    const mw = elCtxMenu.offsetWidth || 120;
    const mh = elCtxMenu.offsetHeight || 40;
    let left = clientX;
    let top = clientY;
    if (left + mw > window.innerWidth - pad) left = window.innerWidth - mw - pad;
    if (top + mh > window.innerHeight - pad) top = window.innerHeight - mh - pad;
    if (left < pad) left = pad;
    if (top < pad) top = pad;
    elCtxMenu.style.left = left + "px";
    elCtxMenu.style.top = top + "px";
  }

  function hideBlock(nodeId) {
    const agent = activeAgent();
    ensureAgentExtras(agent);
    const target = agent.nodes.find((n) => n.id === nodeId);
    if (target && (target.engine || target.id === "engine")) {
      hideCtxMenu();
      return;
    }
    agent.nodes = agent.nodes.filter((n) => n.id !== nodeId);
    agent.taskEdges = [];
    ensureEngineSticky(agent);
    saveLayouts();
    hideCtxMenu();
    renderSideMenu();
    renderCanvas();
  }

  function nextTaskPlacement() {
    const agent = activeAgent();
    const engine = agent.nodes.find((n) => n.engine);
    const existing = agent.nodes.filter((n) => n.task);
    const baseX = engine ? engine.x + NODE_ENGINE_W + GRID * 2 : 720;
    const baseY = engine ? engine.y : 264;
    const col = existing.length % 3;
    const row = Math.floor(existing.length / 3);
    return {
      x: snap(baseX + col * (TASK_W + GRID)),
      y: snap(baseY + row * (TASK_H + GRID)),
    };
  }

  function addTaskToCanvas() {
    const agent = activeAgent();
    ensureAgentExtras(agent);
    const place = nextTaskPlacement();
    const num = agent.nodes.filter((n) => n.task).length + 1;
    const node = makeTaskNode({
      label: "TASK " + num,
      body: "Task " + num + ": …",
      x: place.x,
      y: place.y,
    });
    const clamped = clampPos(node, node.x, node.y);
    node.x = clamped.x;
    node.y = clamped.y;
    agent.nodes.push(node);
    menuSelectionByAgent[agent.id] = "+task";
    saveLayouts();
    renderSideMenu();
    renderCanvas();
    return node;
  }

  function addBlockToCanvas(blockId) {
    if (blockId === "+task") return !!addTaskToCanvas();
    const agent = activeAgent();
    if (agent.nodes.some((n) => n.id === blockId)) return false;
    const def = BLOCK_BY_ID[blockId];
    if (!def) return false;

    const world = clientToWorld(
      elCanvasViewport.getBoundingClientRect().left + elCanvasViewport.clientWidth / 2,
      elCanvasViewport.getBoundingClientRect().top + elCanvasViewport.clientHeight / 2
    );
    const { w, h } = nodeSize(def);
    let x = snap(world.x - w / 2);
    let y = snap(world.y - h / 2);
    let tries = 0;
    while (
      tries < 12 &&
      agent.nodes.some((n) => Math.abs(n.x - x) < 24 && Math.abs(n.y - y) < 24)
    ) {
      x = snap(x + GRID * 2);
      y = snap(y + GRID);
      tries += 1;
    }
    const node = makeNode(blockId, { x: x, y: y });
    const clamped = clampPos(node, node.x, node.y);
    node.x = clamped.x;
    node.y = clamped.y;
    agent.nodes.push(node);
    menuSelectionByAgent[agent.id] = blockId;
    saveLayouts();
    renderSideMenu();
    renderCanvas();
    return true;
  }

  function startNodeDrag(node, el, e) {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    hideCtxMenu();
    el.setPointerCapture(e.pointerId);
    el.classList.add("is-dragging");
    document.body.classList.add("is-node-dragging");
    const world = clientToWorld(e.clientX, e.clientY);
    drag = {
      node: node,
      el: el,
      pointerId: e.pointerId,
      grabX: world.x - node.x,
      grabY: world.y - node.y,
      moved: false,
    };
  }

  function moveNodeDrag(e) {
    if (!drag || drag.pointerId !== e.pointerId) return;
    const world = clientToWorld(e.clientX, e.clientY);
    const clamped = clampPos(drag.node, snap(world.x - drag.grabX), snap(world.y - drag.grabY));
    if (clamped.x !== drag.node.x || clamped.y !== drag.node.y) drag.moved = true;
    drag.node.x = clamped.x;
    drag.node.y = clamped.y;
    applyNodeDom(drag.node, drag.el);
    updateEdges();
  }

  function endNodeDrag(e) {
    if (!drag || drag.pointerId !== e.pointerId) return;
    const moved = drag.moved;
    const nodeId = drag.node && drag.node.id;
    const isTask = !!(drag.node && drag.node.task);
    drag.el.classList.remove("is-dragging");
    document.body.classList.remove("is-node-dragging");
    try {
      drag.el.releasePointerCapture(e.pointerId);
    } catch (_) {}
    drag = null;
    if (moved) {
      saveLayouts();
      return;
    }
    // Agent OS parity: single click opens the block editor (dblclick is unreliable
    // because pointerdown preventDefault suppresses it in Chromium).
    if (!isTask && nodeId) void openBlockEditor(nodeId);
  }

  function isEmptyCanvasTarget(target) {
    if (!target || !elCanvasViewport.contains(target)) return false;
    return !target.closest(".canvas-node");
  }

  function blurTaskEditors(exceptEl) {
    const bodies = document.querySelectorAll(".canvas-node.is-task .canvas-node-body");
    for (const el of bodies) {
      if (exceptEl && (el === exceptEl || el.contains(exceptEl))) continue;
      if (el.getAttribute("contenteditable") === "true" || document.activeElement === el) {
        el.blur();
      }
    }
  }

  function startPan(e) {
    if (e.button !== 0) return;
    if (!isEmptyCanvasTarget(e.target)) return;
    if (drag) return;
    blurTaskEditors();
    hideCtxMenu();
    e.preventDefault();
    elCanvasViewport.classList.add("is-panning");
    document.body.classList.add("is-panning");
    pan = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originX: panX,
      originY: panY,
      dirty: false,
    };
    window.addEventListener("pointermove", onWindowPanMove);
    window.addEventListener("pointerup", onWindowPanEnd);
    window.addEventListener("pointercancel", onWindowPanEnd);
  }

  function onWindowPanMove(e) {
    if (!pan || pan.pointerId !== e.pointerId) return;
    panX = pan.originX + (e.clientX - pan.startX);
    panY = pan.originY + (e.clientY - pan.startY);
    applyWorldTransform();
    pan.dirty = true;
    saveView(activeId);
  }

  function onWindowPanEnd(e) {
    if (!pan || pan.pointerId !== e.pointerId) return;
    elCanvasViewport.classList.remove("is-panning");
    document.body.classList.remove("is-panning");
    const dirty = pan.dirty;
    pan = null;
    window.removeEventListener("pointermove", onWindowPanMove);
    window.removeEventListener("pointerup", onWindowPanEnd);
    window.removeEventListener("pointercancel", onWindowPanEnd);
    if (dirty) saveView(activeId);
  }

  function endPan() {
    if (!pan) return;
    elCanvasViewport.classList.remove("is-panning");
    document.body.classList.remove("is-panning");
    const dirty = pan.dirty;
    pan = null;
    window.removeEventListener("pointermove", onWindowPanMove);
    window.removeEventListener("pointerup", onWindowPanEnd);
    window.removeEventListener("pointercancel", onWindowPanEnd);
    if (dirty) saveView(activeId);
  }

  function zoomAt(clientX, clientY, nextZoom) {
    const rect = elCanvasViewport.getBoundingClientRect();
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    const worldX = (mx - panX) / zoom;
    const worldY = (my - panY) / zoom;
    zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, nextZoom));
    panX = mx - worldX * zoom;
    panY = my - worldY * zoom;
    applyWorldTransform();
    saveView(activeId);
  }

  function initCanvasViewControls() {
    elCanvasViewport.addEventListener("pointerdown", startPan);
    elCanvasViewport.addEventListener(
      "wheel",
      (e) => {
        if (!e.ctrlKey) return;
        e.preventDefault();
        const direction = e.deltaY < 0 ? 1 : -1;
        zoomAt(e.clientX, e.clientY, zoom * (1 + direction * ZOOM_STEP));
      },
      { passive: false }
    );
    elCanvasViewport.addEventListener("contextmenu", (e) => {
      if (isEmptyCanvasTarget(e.target)) {
        e.preventDefault();
        hideCtxMenu();
      }
    });
  }

  function centerViewportOnEngine(force) {
    // Never wipe a stored camera unless this is a true first visit
    if (!force && hasSavedView(activeId)) {
      loadView(activeId);
      return;
    }
    const agent = activeAgent();
    const engine = agent.nodes.find((n) => n.engine) || agent.nodes[0];
    if (!engine) {
      zoom = 1;
      panX = 40;
      panY = 40;
      applyWorldTransform();
      saveView(activeId);
      return;
    }
    const { w, h } = nodeSize(engine);
    const cx = engine.x + w / 2;
    const cy = engine.y + h / 2;
    const vw = Math.max(1, elCanvasViewport.clientWidth || 800);
    const vh = Math.max(1, elCanvasViewport.clientHeight || 400);
    zoom = 1;
    panX = vw / 2 - cx * zoom;
    panY = vh / 2 - cy * zoom;
    applyWorldTransform();
    saveView(activeId);
  }

  function renderTabs() {
    elTabs.innerHTML = "";
    for (const agent of agents) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab";
      btn.role = "tab";
      btn.id = "tab-" + agent.id;
      btn.textContent = agent.name;
      btn.setAttribute("aria-selected", agent.id === activeId ? "true" : "false");
      btn.addEventListener("click", () => selectAgent(agent.id));
      elTabs.appendChild(btn);
    }
    updateCanvasDeleteButton();
  }

  function canDeleteActiveAgent() {
    const agent = activeAgent();
    if (!agent || agent.offline || agent.id === "_offline") return false;
    if (agent.isDefault) return false;
    const name = String(agent.id || "").trim().toLowerCase();
    if (!name || name === "default") return false;
    return true;
  }

  function updateCanvasDeleteButton() {
    if (!elCanvasDeleteAgent) return;
    const ok = canDeleteActiveAgent();
    elCanvasDeleteAgent.hidden = !ok;
    elCanvasDeleteAgent.disabled = !ok;
    if (ok) {
      const name = activeAgent().id;
      elCanvasDeleteAgent.title = "Delete profile \"" + name + "\" on the Hermes server";
    } else {
      elCanvasDeleteAgent.title = "This profile cannot be deleted";
    }
  }

  function purgeLocalAgentState(profile) {
    if (!profile) return;
    if (fileConfig.layouts) delete fileConfig.layouts[profile];
    if (fileConfig.cameras) delete fileConfig.cameras[profile];
    if (fileConfig.chatByProfile) delete fileConfig.chatByProfile[profile];
    if (fileConfig.cronPrefs) delete fileConfig.cronPrefs[profile];
    if (fileConfig.activeTab === profile) fileConfig.activeTab = null;
    try {
      if (gwCfg && gwCfg.profiles) delete gwCfg.profiles[profile];
      saveGwConfig(gwCfg);
    } catch (_) {}
    if (chatGw && chatGw.sessions) delete chatGw.sessions[profile];
    if (menuSelectionByAgent) delete menuSelectionByAgent[profile];
    schedulePersist(true);
  }

  async function deleteActiveAgentOnServer() {
    const agent = activeAgent();
    if (!canDeleteActiveAgent()) {
      window.alert("This profile cannot be deleted (default / offline).");
      return;
    }
    const name = agent.id;
    const ok = window.confirm(
      "Delete Hermes profile \"" +
        name +
        "\" on the server?\n\nThis permanently removes its config, memories, sessions, and skills. This cannot be undone."
    );
    if (!ok) return;
    elCanvasDeleteAgent.disabled = true;
    try {
      if (isBlockEditorOpen()) closeBlockEditor(false);
      const res = await fetch("/api/remote/profiles/" + encodeURIComponent(name), {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || data.error || "Delete failed");
      }
      purgeLocalAgentState(name);
      const sync = await syncAgentsFromRemote({
        preferId: fileConfig.activeTab || "",
      });
      if (!sync.ok) {
        window.alert(
          "Profile deleted on server, but refresh failed: " + (sync.reason || "unknown")
        );
      }
    } catch (err) {
      window.alert(String(err && err.message ? err.message : err));
    } finally {
      updateCanvasDeleteButton();
    }
  }

  function renderSideMenu() {
    const agent = activeAgent();
    ensureAgentExtras(agent);
    elSideTitle.textContent = agent.name;
    elSideBody.innerHTML = "";

    const hint = document.createElement("p");
    hint.className = "side-menu-hint";
    hint.textContent = "Double-click to add to canvas";
    elSideBody.appendChild(hint);

    const taskCount = agent.nodes.filter((n) => n.task).length;
    const current = menuSelectionByAgent[agent.id] || "engine";

    const taskBtn = document.createElement("button");
    taskBtn.type = "button";
    taskBtn.className = "side-item side-item-task" + (taskCount ? " is-on-canvas" : "");
    taskBtn.setAttribute("aria-current", current === "+task" ? "true" : "false");
    taskBtn.title = "Double-click to add a TASK block. Run order = task number (TASK 1, 2, …).";
    const taskDot = document.createElement("span");
    taskDot.className = "side-item-dot";
    const taskLabel = document.createElement("span");
    taskLabel.textContent = "+TASK";
    taskBtn.appendChild(taskDot);
    taskBtn.appendChild(taskLabel);
    if (taskCount) {
      const mark = document.createElement("span");
      mark.className = "side-item-hint";
      mark.textContent = String(taskCount);
      taskBtn.appendChild(mark);
    }
    taskBtn.addEventListener("click", () => {
      menuSelectionByAgent[agent.id] = "+task";
      renderSideMenu();
    });
    taskBtn.addEventListener("dblclick", (e) => {
      e.preventDefault();
      addTaskToCanvas();
    });
    elSideBody.appendChild(taskBtn);

    const onCanvas = new Set(agent.nodes.filter((n) => !n.task).map((n) => n.id));
    onCanvas.add("engine");
    ensureEngineSticky(agent);

    for (const block of BLOCK_CATALOG) {
      const sticky = !!block.engine || block.id === "engine";
      const isOn = sticky || onCanvas.has(block.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "side-item" +
        (isOn ? " is-on-canvas" : "") +
        (sticky ? " is-sticky-on" : "");
      btn.setAttribute("aria-current", block.id === current ? "true" : "false");
      btn.title = sticky
        ? block.label + " (always on)"
        : isOn
          ? block.label + " (on canvas)"
          : block.label + " — click to add";

      const dot = document.createElement("span");
      dot.className = "side-item-dot";
      const label = document.createElement("span");
      label.textContent = block.label;
      btn.appendChild(dot);
      btn.appendChild(label);
      if (isOn) {
        const mark = document.createElement("span");
        mark.className = "side-item-hint";
        mark.textContent = "on";
        btn.appendChild(mark);
      }

      btn.addEventListener("click", () => {
        menuSelectionByAgent[agent.id] = block.id;
        renderSideMenu();
      });
      btn.addEventListener("dblclick", (e) => {
        e.preventDefault();
        if (sticky || onCanvas.has(block.id)) {
          menuSelectionByAgent[agent.id] = block.id;
          renderSideMenu();
          return;
        }
        addBlockToCanvas(block.id);
      });
      elSideBody.appendChild(btn);
    }
  }

  function renderCanvas() {
    const agent = activeAgent();
    ensureAgentExtras(agent);
    elCanvasNodes.innerHTML = "";
    elCanvasWorld.style.width = CANVAS_W + "px";
    elCanvasWorld.style.height = CANVAS_H + "px";
    applyWorldTransform();

    if (!agent.nodes.length) {
      if (elCanvasEdges) elCanvasEdges.innerHTML = "";
      if (elCanvasEdgesTask) elCanvasEdgesTask.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "canvas-empty";
      empty.textContent = "Double-click a menu item to add a block";
      elCanvasNodes.appendChild(empty);
      return;
    }

    for (const node of agent.nodes) {
      const clamped = clampPos(node, node.x, node.y);
      node.x = clamped.x;
      node.y = clamped.y;

      const el = document.createElement("div");
      el.className =
        "canvas-node" +
        (node.engine ? " is-engine" : "") +
        (node.task ? " is-task" : "");
      el.dataset.nodeId = node.id;
      if (node.color) el.style.setProperty("--node-accent", node.color);
      applyNodeDom(node, el);

      const label = document.createElement("div");
      label.className = "canvas-node-label";
      if (node.task) {
        const num = taskOrderNumber(agent, node);
        node.label = "TASK " + num;
      }
      label.textContent = node.label;
      const body = document.createElement("div");
      body.className = "canvas-node-body";
      body.textContent = node.body;
      el.appendChild(label);
      el.appendChild(body);

      if (node.task) {
        body.contentEditable = "false";
        body.spellcheck = false;
        body.title = "Click to edit task text. Execution order = task number.";
        body.addEventListener("pointerdown", (e) => {
          e.stopPropagation();
          if (body.getAttribute("contenteditable") !== "true") {
            blurTaskEditors(body);
            body.contentEditable = "true";
            body.focus();
            // place caret at end
            try {
              const range = document.createRange();
              range.selectNodeContents(body);
              range.collapse(false);
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } catch (_) {}
          }
        });
        body.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            body.blur();
          }
          if (e.key === "Escape") {
            e.preventDefault();
            body.blur();
          }
          e.stopPropagation();
        });
        body.addEventListener("blur", () => {
          body.contentEditable = "false";
          const text = (body.textContent || "").trim() || "Describe what the agent should do…";
          body.textContent = text;
          if (node.body !== text) {
            node.body = text;
            saveLayouts();
          }
        });
      }

      el.addEventListener("pointerdown", (e) => {
        if (e.target.closest && e.target.closest(".canvas-node-body") && node.task) return;
        blurTaskEditors();
        startNodeDrag(node, el, e);
      });
      el.addEventListener("pointermove", moveNodeDrag);
      el.addEventListener("pointerup", endNodeDrag);
      el.addEventListener("pointercancel", endNodeDrag);
      el.addEventListener("dblclick", (e) => {
        if (node.task) return;
        e.preventDefault();
        e.stopPropagation();
        void openBlockEditor(node.id);
      });
      el.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showCtxMenu(e.clientX, e.clientY, node.id);
      });

      elCanvasNodes.appendChild(el);
    }
    updateEdges();
    requestAnimationFrame(() => updateEdges());
  }

  function renderMd(text) {
    try {
      const clean = String(text || "").replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n");
      if (typeof marked === "undefined" || typeof marked.parse !== "function") {
        return escapeHtml(clean);
      }
      const html = marked.parse(clean);
      if (typeof DOMPurify !== "undefined" && DOMPurify.sanitize) {
        return DOMPurify.sanitize(html);
      }
      return html;
    } catch (_) {
      const raw = String(text || "");
      if (typeof DOMPurify !== "undefined" && DOMPurify.sanitize) {
        return DOMPurify.sanitize(raw);
      }
      return escapeHtml(raw);
    }
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isThinkingChatMsg(msg) {
    if (!msg || msg.role !== "meta") return false;
    return /Waiting for Hermes|Hermes is generating|Stopping Hermes|Uploading attachments|Analyzing image/i.test(
      String(msg.text || "")
    );
  }

  function thinkingBaseLabel(msg) {
    const t = String((msg && msg.text) || "");
    if (/uploading/i.test(t)) return "Uploading attachments";
    if (/stopping/i.test(t)) return "Stopping Hermes";
    if (/analyzing image/i.test(t)) return "Analyzing image";
    if (/generating/i.test(t)) return "Hermes is generating";
    return "Waiting for Hermes";
  }

  function thinkingElapsedSec(profile) {
    const st = chatGw.sessions[profile];
    if (!st || !st.busy || !st.busyStartedAt) return 0;
    return Math.max(0, Math.floor((Date.now() - st.busyStartedAt) / 1000));
  }

  function stopThinkTimer(st) {
    if (!st) return;
    if (st.thinkTimer) {
      clearInterval(st.thinkTimer);
      st.thinkTimer = null;
    }
  }

  function startThinkTimer(profile) {
    const st = chatGw.sessions[profile];
    if (!st) return;
    stopThinkTimer(st);
    st.busyStartedAt = Date.now();
    st.thinkTimer = setInterval(() => {
      const cur = chatGw.sessions[profile];
      if (!cur || !cur.busy) {
        stopThinkTimer(cur);
        return;
      }
      if (profile === activeId) renderChat();
    }, 1000);
  }

  function renderChat() {
    const agent = activeAgent();
    elMessages.innerHTML = "";
    for (const msg of agent.chat) {
      if (msg.role === "assistant" && !(msg.text || "").trim()) continue;
      const bubble = document.createElement("div");
      const role = msg.role === "cron" ? "cron" : msg.role;
      const thinking = isThinkingChatMsg(msg);
      bubble.className = "bubble " + role + (thinking ? " is-thinking" : "");
      if (thinking) {
        const elapsed = thinkingElapsedSec(agent.id);
        const label = thinkingBaseLabel(msg) + " " + elapsed + "s";
        bubble.innerHTML =
          '<span class="thinking-label">' +
          label +
          '</span><span class="thinking-dots" aria-hidden="true">' +
          "<span></span><span></span><span></span></span>";
      } else if (role === "assistant" || role === "cron") {
        const body = document.createElement("div");
        body.className = "bubble-body";
        body.innerHTML = renderMd(msg.text);
        bubble.appendChild(body);
      } else {
        bubble.textContent = msg.text;
      }
      if ((role === "assistant" || role === "cron") && msg.ts) {
        const t = document.createElement("span");
        t.className = "msg-time";
        t.textContent = fmtChatTs(msg.ts);
        bubble.appendChild(t);
      }
      elMessages.appendChild(bubble);
    }
    elMessages.scrollTop = elMessages.scrollHeight;
  }

  const cronFeed = {
    timer: null,
    burstTimer: null,
    seen: Object.create(null),
    primed: Object.create(null),
    busy: false,
  };

  function cronSeenKey(profile, jobId) {
    return String(profile) + "|" + String(jobId);
  }

  function pushCronChatMessage(profile, job, output) {
    const agent = agents.find((a) => a.id === profile);
    if (!agent || agent.offline) return;
    const name = job.name || job.id || "cron";
    const status = job.last_status || "unknown";
    const when = job.last_run_at
      ? String(job.last_run_at).replace("T", " ").slice(0, 19)
      : "";
    let body = "";
    if (status === "error" || status === "failed") {
      body = String(job.last_error || "cron failed").trim();
    } else if (output && output.silent) {
      body = "[SILENT] — agent had nothing new to report";
    } else if (output && String(output.response || "").trim()) {
      body = String(output.response).trim();
    } else if (output && String(output.content || "").trim()) {
      body = String(output.content).trim();
    } else {
      body = "(no cron output file yet)";
    }
    const text =
      "Cron · " + name + (when ? " · " + when : "") + " · " + status + "\n\n" + body;
    let ts = Date.now();
    if (job.last_run_at) {
      const parsed = Date.parse(String(job.last_run_at));
      if (Number.isFinite(parsed)) ts = parsed;
    }
    agent.chat.push({
      role: "cron",
      text: text,
      ts: ts,
      cronJobId: job.id,
      cronRunAt: job.last_run_at,
    });
    if (agent.chat.length > 240) agent.chat.splice(0, agent.chat.length - 240);
    if (profile === activeId) renderChat();
    persistChatState(profile);
  }

  async function pollCronFeed(opts) {
    const options = opts || {};
    if (cronFeed.busy) return;
    const profile = activeId;
    if (!profile || profile === "_offline") return;
    cronFeed.busy = true;
    try {
      const res = await fetch("/api/remote/cron/jobs?profile=" + encodeURIComponent(profile));
      const data = await res.json().catch(() => ([]));
      if (!res.ok) return;
      const jobs = Array.isArray(data) ? data : [];
      const primed = !!cronFeed.primed[profile];
      for (const job of jobs) {
        if (!job || !job.id || !job.last_run_at) continue;
        const key = cronSeenKey(profile, job.id);
        const prev = cronFeed.seen[key];
        if (!primed) {
          cronFeed.seen[key] = job.last_run_at;
          continue;
        }
        if (prev === job.last_run_at) continue;
        cronFeed.seen[key] = job.last_run_at;
        let output = null;
        try {
          const oRes = await fetch(
            "/api/remote/cron/jobs/" +
              encodeURIComponent(job.id) +
              "/latest-output?profile=" +
              encodeURIComponent(profile)
          );
          const oData = await oRes.json().catch(() => ({}));
          if (oRes.ok) output = oData;
        } catch (_) {}
        pushCronChatMessage(profile, job, output);
        if (
          blockEditor.kind === "trigger" &&
          blockEditor.cronSelectedId === job.id &&
          typeof renderTriggerRunStatus === "function"
        ) {
          renderTriggerRunStatus(job);
        }
      }
      cronFeed.primed[profile] = true;
      if (options.refreshLabel) applyTriggerPreview(profile, jobs);
    } catch (_) {
      /* ignore poll errors */
    } finally {
      cronFeed.busy = false;
    }
  }

  function startCronFeed() {
    if (cronFeed.timer) return;
    cronFeed.timer = setInterval(() => void pollCronFeed({ refreshLabel: true }), 12000);
    void pollCronFeed({ refreshLabel: true });
  }

  function burstCronFeed(ms) {
    const until = Date.now() + (ms || 90000);
    if (cronFeed.burstTimer) clearInterval(cronFeed.burstTimer);
    cronFeed.burstTimer = setInterval(() => {
      if (Date.now() > until) {
        clearInterval(cronFeed.burstTimer);
        cronFeed.burstTimer = null;
        return;
      }
      void pollCronFeed({ refreshLabel: true });
    }, 3000);
    void pollCronFeed({ refreshLabel: true });
  }

  function selectAgent(id, force) {
    if (!agents.some((a) => a.id === id)) return;
    if (id === activeId && !force) return;

    if (isBlockEditorOpen() && !closeBlockEditor(false)) return;

    if (pan) endPan();
    if (activeId && activeId !== id) {
      saveView(activeId);
      saveLayouts();
    }

    activeId = id;
    hideCtxMenu();
    if (!String(id).startsWith("_")) {
      fileConfig.activeTab = id;
      schedulePersist(true);
    }

    // Restore camera BEFORE rendering so port hit-tests match the view.
    let needCenter = false;
    if (hasSavedView(id)) loadView(id);
    else needCenter = true;

    renderTabs();
    renderSideMenu();
    renderCanvas();
    renderChat();
    void refreshBlockCardLabels(id);

    if (needCenter) {
      requestAnimationFrame(() => {
        if (activeId !== id) return;
        centerViewportOnEngine(true);
      });
    } else {
      requestAnimationFrame(() => {
        if (activeId !== id) return;
        loadView(id);
        updateEdges();
      });
    }
    updateCanvasDeleteButton();
    updateSendBtn();
  }

  function sortRemoteProfiles(list) {
    return list.slice().sort((a, b) => {
      const ad = !!(a && a.is_default);
      const bd = !!(b && b.is_default);
      if (ad !== bd) return ad ? -1 : 1;
      return String((a && a.name) || "").localeCompare(String((b && b.name) || ""));
    });
  }

  async function syncAgentsFromRemote(opts) {
    const options = opts || {};
    if (profilesSyncBusy) return { ok: false, reason: "busy" };
    profilesSyncBusy = true;
    try {
      const res = await fetch("/api/remote/profiles");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || data.error || "Failed to list remote profiles");
      }
      const raw = Array.isArray(data.profiles) ? data.profiles : [];
      const list = sortRemoteProfiles(raw).filter((p) => p && String(p.name || "").trim());
      if (!list.length) {
        throw new Error("Remote Hermes returned zero profiles");
      }

      const preferId = options.preferId || activeId || fileConfig.activeTab || "";
      const prevById = Object.fromEntries(agents.filter((a) => !a.offline).map((a) => [a.id, a]));
      if (activeId && !String(activeId).startsWith("_")) saveView(activeId);
      saveLayouts();

      agents = list.map((p) => makeAgentFromProfile(p, prevById[p.name]));
      agents.forEach(ensureAgentExtras);
      menuSelectionByAgent = Object.fromEntries(
        agents.map((a) => [a.id, menuSelectionByAgent[a.id] || "engine"])
      );
      loadLayouts();

      let nextId = preferId;
      if (!agents.some((a) => a.id === nextId)) {
        nextId = agents[0] ? agents[0].id : "";
      }
      activeId = "";
      restoreChatSessionsFromConfig();
      if (nextId) selectAgent(nextId);
      else renderTabs();
      if (nextId && nextId !== "_offline") {
        void hydrateChatFromHermes(nextId);
      }
      return { ok: true, count: agents.length };
    } catch (err) {
      if (!agents.length || (agents.length === 1 && agents[0].offline)) {
        agents = [offlinePlaceholderAgent()];
        agents.forEach(ensureAgentExtras);
        menuSelectionByAgent = { _offline: "engine" };
        selectAgent("_offline", true);
      }
      return {
        ok: false,
        reason: String(err && err.message ? err.message : err),
      };
    } finally {
      profilesSyncBusy = false;
    }
  }

  function setSideCollapsed(collapsed) {
    elSideMenu.dataset.collapsed = collapsed ? "true" : "false";
    elSideToggle.textContent = collapsed ? ">>" : "<<";
    elSideToggle.title = collapsed ? "Expand menu" : "Collapse menu";
    elSideToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    elSideToggle.setAttribute("aria-label", collapsed ? "Expand menu" : "Collapse menu");
    fileConfig.sideCollapsed = !!collapsed;
    schedulePersist();
  }

  function applyChatHeight(pct) {
    const clamped = Math.max(18, Math.min(72, pct));
    elChatPane.style.flexBasis = clamped + "%";
    elChatPane.style.height = clamped + "%";
    document.documentElement.style.setProperty("--chat-height", clamped + "%");
    return clamped;
  }

  function initSplitResize() {
    let dragging = false;

    function onMove(clientY) {
      if (!dragging) return;
      const rect = elMainSplit.getBoundingClientRect();
      const fromBottom = rect.bottom - clientY;
      const pct = (fromBottom / rect.height) * 100;
      const clamped = applyChatHeight(pct);
      fileConfig.chatHeight = Math.round(clamped);
      schedulePersist();
    }

    elSplitHandle.addEventListener("pointerdown", (e) => {
      dragging = true;
      elSplitHandle.classList.add("is-dragging");
      document.body.classList.add("is-resizing");
      elSplitHandle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    elSplitHandle.addEventListener("pointermove", (e) => onMove(e.clientY));

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      elSplitHandle.classList.remove("is-dragging");
      document.body.classList.remove("is-resizing");
      try {
        elSplitHandle.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }

    elSplitHandle.addEventListener("pointerup", endDrag);
    elSplitHandle.addEventListener("pointercancel", endDrag);

    elSplitHandle.addEventListener("keydown", (e) => {
      let delta = 0;
      if (e.key === "ArrowUp") delta = 3;
      if (e.key === "ArrowDown") delta = -3;
      if (!delta) return;
      e.preventDefault();
      const current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--chat-height")) || 30;
      applyChatHeight(current + delta);
    });
  }

  // ── Chat over Hermes dashboard WebSocket (Desktop JSON-RPC) ──
  let chatGw = {
    baseUrl: "",
    token: "",
    wsUrl: "",
    socket: null,
    nextId: 0,
    pending: Object.create(null),
    sessions: Object.create(null),
    connecting: null,
  };

  function chatProfileForAgent(agent) {
    const id = (agent && agent.id) || activeId || "";
    if (id === "trading" || id === "x-agent" || id === "market-agent") return id;
    return id || null;
  }

  function chatWsUrl(baseUrl, token) {
    const u = new URL(baseUrl);
    const scheme = u.protocol === "https:" ? "wss:" : "ws:";
    const prefix = (u.pathname || "").replace(/\/+$/, "");
    return scheme + "//" + u.host + prefix + "/api/ws?token=" + encodeURIComponent(token);
  }

  function setChatGatewayCreds(baseUrl, token) {
    chatGw.baseUrl = (baseUrl || "").replace(/\/+$/, "");
    chatGw.token = token || "";
    chatGw.wsUrl = chatGw.baseUrl && chatGw.token ? chatWsUrl(chatGw.baseUrl, chatGw.token) : "";
  }

  function closeChatSocket() {
    if (chatGw.socket) {
      try {
        chatGw.socket.close();
      } catch (_) {}
    }
    chatGw.socket = null;
    chatGw.connecting = null;
    for (const id of Object.keys(chatGw.pending)) {
      const p = chatGw.pending[id];
      if (p && p.reject) p.reject(new Error("WebSocket closed"));
      delete chatGw.pending[id];
    }
    // Saved DB session ids are not live on a new WS until resume/create.
    for (const key of Object.keys(chatGw.sessions)) {
      const st = chatGw.sessions[key];
      if (st) st.live = false;
    }
  }

  function handleChatFrame(frame) {
    if (frame && frame.id != null && chatGw.pending[frame.id]) {
      const p = chatGw.pending[frame.id];
      delete chatGw.pending[frame.id];
      if (p.timer) clearTimeout(p.timer);
      if (frame.error) p.reject(new Error(frame.error.message || "Hermes RPC failed"));
      else p.resolve(frame.result);
      return;
    }
    if (!frame || frame.method !== "event" || !frame.params || !frame.params.type) return;
    const ev = frame.params;
    const sid = ev.session_id;
    const agent = agents.find((a) => chatGw.sessions[a.id] && chatGw.sessions[a.id].sessionId === sid);
    if (!agent) return;
    const st = chatGw.sessions[agent.id];
    const payload = ev.payload || {};
    if (ev.type === "message.start") {
      // Keep "Waiting…" until first delta; do not show empty assistant bubble.
      st.busy = true;
      if (agent.id === activeId) {
        renderChat();
        updateSendBtn();
      }
      return;
    }
    if (ev.type === "message.delta") {
      const chunk = payload.text != null ? String(payload.text) : "";
      if (!chunk) return;
      st.busy = true;
      if (st.thinkingMsg && agent.chat.includes(st.thinkingMsg)) {
        const ix = agent.chat.indexOf(st.thinkingMsg);
        agent.chat.splice(ix, 1);
        st.thinkingMsg = null;
      }
      if (st.streamingIdx == null || !agent.chat[st.streamingIdx]) {
        agent.chat.push({ role: "assistant", text: chunk });
        st.streamingIdx = agent.chat.length - 1;
      } else {
        agent.chat[st.streamingIdx].text = (agent.chat[st.streamingIdx].text || "") + chunk;
      }
      if (agent.id === activeId) {
        renderChat();
        updateSendBtn();
      }
      return;
    }
    if (ev.type === "message.complete") {
      const finalText = payload.text != null ? String(payload.text) : "";
      if (st.thinkingMsg && agent.chat.includes(st.thinkingMsg)) {
        const ix = agent.chat.indexOf(st.thinkingMsg);
        agent.chat.splice(ix, 1);
        st.thinkingMsg = null;
      }
      if (st.streamingIdx != null && agent.chat[st.streamingIdx]) {
        if (finalText && !(agent.chat[st.streamingIdx].text || "").trim()) {
          agent.chat[st.streamingIdx].text = finalText;
        } else if (finalText && (agent.chat[st.streamingIdx].text || "").length < finalText.length) {
          agent.chat[st.streamingIdx].text = finalText;
        }
        if (!(agent.chat[st.streamingIdx].text || "").trim()) {
          agent.chat.splice(st.streamingIdx, 1);
        } else {
          agent.chat[st.streamingIdx].ts = Date.now();
        }
      } else if (finalText) {
        agent.chat.push({ role: "assistant", text: finalText, ts: Date.now() });
      }
      st.streamingIdx = null;
      st.busy = false;
      st.busyStartedAt = null;
      stopThinkTimer(st);
      if (agent.id === activeId) {
        renderChat();
        updateSendBtn();
      }
      persistChatState(agent.id);
      return;
    }
    if (ev.type === "error") {
      if (st.thinkingMsg && agent.chat.includes(st.thinkingMsg)) {
        const ix = agent.chat.indexOf(st.thinkingMsg);
        agent.chat.splice(ix, 1);
        st.thinkingMsg = null;
      }
      const msg = payload.message || payload.error || "Gateway error";
      agent.chat.push({ role: "meta", text: String(msg) });
      st.streamingIdx = null;
      st.busy = false;
      st.busyStartedAt = null;
      stopThinkTimer(st);
      if (agent.id === activeId) {
        renderChat();
        updateSendBtn();
      }
      persistChatState(agent.id);
    }
  }

  function ensureChatSocket() {
    if (chatGw.socket && chatGw.socket.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }
    if (chatGw.connecting) return chatGw.connecting;
    if (!chatGw.wsUrl) {
      return Promise.reject(new Error("Gateway not connected. Open Gateway and Save & reconnect."));
    }
    chatGw.connecting = new Promise((resolve, reject) => {
      const prev = chatGw.socket;
      chatGw.socket = null;
      if (prev) {
        try {
          prev.close();
        } catch (_) {}
      }
      const ws = new WebSocket(chatGw.wsUrl);
      chatGw.socket = ws;
      const timer = setTimeout(() => {
        reject(new Error("WebSocket connect timeout"));
        try {
          ws.close();
        } catch (_) {}
      }, 15000);
      ws.onopen = () => {
        clearTimeout(timer);
        chatGw.connecting = null;
        resolve();
      };
      ws.onerror = () => {
        clearTimeout(timer);
        chatGw.connecting = null;
        reject(new Error("WebSocket connection failed"));
      };
      ws.onclose = () => {
        if (chatGw.socket === ws) chatGw.socket = null;
        for (const key of Object.keys(chatGw.sessions)) {
          const st = chatGw.sessions[key];
          if (!st) continue;
          st.live = false;
            if (st.busy) {
              st.busy = false;
              st.stopRequested = false;
              st.streamingIdx = null;
              st.busyStartedAt = null;
              stopThinkTimer(st);
              const ag = agents.find((a) => a.id === key);
            if (ag) {
              if (st.thinkingMsg && ag.chat.includes(st.thinkingMsg)) {
                const ix = ag.chat.indexOf(st.thinkingMsg);
                if (ix >= 0) ag.chat.splice(ix, 1);
                st.thinkingMsg = null;
              }
              if (!ag.chat.some((m) => m && m.role === "meta" && /Connection lost/i.test(m.text || ""))) {
                ag.chat.push({ role: "meta", text: "Connection lost (gateway restarted or WS closed). Send again." });
              }
              if (key === activeId) renderChat();
            }
          }
        }
        updateSendBtn();
      };
      ws.onmessage = (e) => {
        try {
          handleChatFrame(JSON.parse(e.data));
        } catch (_) {}
      };
    });
    return chatGw.connecting;
  }

  function chatRpc(method, params, timeoutMs) {
    const ms = timeoutMs == null ? 120000 : timeoutMs;
    return ensureChatSocket().then(() => {
      const id = "c" + ++chatGw.nextId;
      return new Promise((resolve, reject) => {
        const timer =
          ms > 0
            ? setTimeout(() => {
                delete chatGw.pending[id];
                reject(new Error("request timed out: " + method));
              }, ms)
            : null;
        chatGw.pending[id] = { resolve: resolve, reject: reject, timer: timer };
        try {
          chatGw.socket.send(
            JSON.stringify({ jsonrpc: "2.0", id: id, method: method, params: params || {} })
          );
        } catch (err) {
          if (timer) clearTimeout(timer);
          delete chatGw.pending[id];
          reject(err);
        }
      });
    });
  }

  async function ensureChatSession(agent, forceNew) {
    const st = chatGw.sessions[agent.id] || {
      sessionId: null,
      historySessionId: null,
      streamingIdx: null,
      thinkingMsg: null,
      live: false,
    };
    chatGw.sessions[agent.id] = st;
    if (forceNew) {
      st.sessionId = null;
      st.historySessionId = null;
      st.live = false;
    }
    if (st.sessionId && st.live) return st.sessionId;

    const profile = chatProfileForAgent(agent);
    const savedId =
      st.historySessionId || st.sessionId || getSavedChatSessionId(agent.id);

    // HTTP /api/sessions/{id} can return history for a dead WS session.
    // Live chat requires session.resume (or session.create) on this socket.
    if (savedId && !forceNew) {
      try {
        const resumed = await chatRpc("session.resume", {
          session_id: savedId,
          cols: 96,
          source: "desktop",
          ...(profile ? { profile: profile } : {}),
        });
        const durable =
          (resumed && (resumed.resumed || resumed.session_key)) || savedId;
        const liveId =
          (resumed && (resumed.session_id || resumed.sessionId)) || durable;
        st.historySessionId = String(durable);
        st.sessionId = String(liveId);
        st.live = true;
        persistChatState(agent.id);
        return st.sessionId;
      } catch (_) {
        st.sessionId = null;
        st.live = false;
      }
    }

    const created = await chatRpc("session.create", {
      cols: 96,
      source: "desktop",
      ...(profile ? { profile: profile } : {}),
    });
    st.sessionId = created && created.session_id;
    st.historySessionId = st.sessionId;
    st.live = !!st.sessionId;
    if (!st.sessionId) throw new Error("session.create returned no session_id");
    persistChatState(agent.id);
    return st.sessionId;
  }

  function isSessionNotFoundError(err) {
    const msg = String((err && err.message) || err || "").toLowerCase();
    return /session not found|session_id required|unknown session|expired/i.test(msg);
  }

  function isInterruptedError(err) {
    const msg = String((err && err.message) || err || "").toLowerCase();
    return /interrupt|cancelled|canceled|aborted|stopped|turn cancel/i.test(msg);
  }

  // ── Composer attachments (paste / drag / picker) ──
  const ATTACH_IMAGE_MAX = 25 * 1024 * 1024;
  const ATTACH_FILE_MAX = 50 * 1024 * 1024;
  let pendingAttach = [];
  let attachSeq = 1;
  let attachDragDepth = 0;

  function isImageFile(file) {
    if (!file) return false;
    if (file.type && file.type.startsWith("image/")) return true;
    return /\.(png|jpe?g|gif|webp|bmp|tiff?)$/i.test(file.name || "");
  }

  function isPdfFile(file) {
    if (!file) return false;
    if (file.type === "application/pdf") return true;
    return /\.pdf$/i.test(file.name || "");
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error || new Error("read failed"));
      reader.readAsDataURL(file);
    });
  }

  function dataUrlToBase64(dataUrl) {
    const s = String(dataUrl || "");
    const i = s.indexOf(",");
    return i >= 0 ? s.slice(i + 1) : s;
  }

  function renderAttachPreview() {
    if (!elComposerAttach) return;
    elComposerAttach.innerHTML = "";
    if (!pendingAttach.length) {
      elComposerAttach.hidden = true;
      return;
    }
    elComposerAttach.hidden = false;
    for (const att of pendingAttach) {
      const chip = document.createElement("div");
      chip.className = "attach-chip" + (att.kind === "image" ? " is-image" : "");
      if (att.kind === "image" && att.previewUrl) {
        const img = document.createElement("img");
        img.src = att.previewUrl;
        img.alt = att.name;
        chip.appendChild(img);
      }
      const meta = document.createElement("div");
      meta.className = "attach-chip-meta";
      const name = document.createElement("span");
      name.className = "attach-chip-name";
      name.textContent = att.name;
      const kind = document.createElement("span");
      kind.className = "attach-chip-kind";
      kind.textContent = att.kind;
      meta.appendChild(name);
      meta.appendChild(kind);
      chip.appendChild(meta);
      const rm = document.createElement("button");
      rm.type = "button";
      rm.className = "attach-chip-remove";
      rm.title = "Remove";
      rm.textContent = "x";
      rm.addEventListener("click", () => {
        pendingAttach = pendingAttach.filter((a) => a.id !== att.id);
        renderAttachPreview();
      });
      chip.appendChild(rm);
      elComposerAttach.appendChild(chip);
    }
  }

  async function addPendingFile(file) {
    if (!file) return false;
    const size = file.size || 0;
    if (!size) {
      window.alert("Empty file, nothing to attach.");
      return false;
    }
    const image = isImageFile(file);
    const pdf = isPdfFile(file);
    const max = image ? ATTACH_IMAGE_MAX : ATTACH_FILE_MAX;
    if (size > max) {
      window.alert(
        "File too large (" +
          Math.round(size / (1024 * 1024)) +
          " MB). Cap is " +
          Math.round(max / (1024 * 1024)) +
          " MB."
      );
      return false;
    }
    const dataUrl = await readFileAsDataUrl(file);
    const name =
      (file.name && String(file.name).trim()) ||
      (image ? "clipboard-" + Date.now() + ".png" : pdf ? "document.pdf" : "file.bin");
    pendingAttach.push({
      id: "att-" + attachSeq++,
      kind: image ? "image" : pdf ? "pdf" : "file",
      name: name,
      mime: file.type || (image ? "image/png" : pdf ? "application/pdf" : "application/octet-stream"),
      size: size,
      previewUrl: image ? dataUrl : null,
      dataUrl: dataUrl,
    });
    renderAttachPreview();
    return true;
  }

  async function addPendingFiles(fileList) {
    const files = Array.from(fileList || []).filter(Boolean);
    let ok = 0;
    for (const f of files) {
      try {
        if (await addPendingFile(f)) ok += 1;
      } catch (err) {
        window.alert(
          "Could not attach " +
            (f && f.name ? f.name : "file") +
            ": " +
            (err && err.message ? err.message : String(err))
        );
      }
    }
    return ok;
  }

  async function uploadPendingAttachments(sessionId) {
    const fileRefs = [];
    const labels = [];
    for (const att of pendingAttach) {
      if (att.kind === "image") {
        const res = await chatRpc(
          "image.attach_bytes",
          {
            session_id: sessionId,
            content_base64: dataUrlToBase64(att.dataUrl),
            filename: att.name,
          },
          120000
        );
        if (!res || res.attached === false) {
          throw new Error((res && res.message) || "Could not attach image " + att.name);
        }
        labels.push("[image: " + att.name + "]");
        continue;
      }
      if (att.kind === "pdf") {
        try {
          const res = await chatRpc(
            "pdf.attach",
            {
              session_id: sessionId,
              content_base64: dataUrlToBase64(att.dataUrl),
              filename: att.name,
            },
            180000
          );
          if (!res || res.attached === false) {
            throw new Error((res && res.message) || "pdf.attach failed");
          }
          labels.push("[pdf: " + att.name + "]");
          continue;
        } catch (pdfErr) {
          // Fallback: stage as readable @file (e.g. if pdftoppm missing).
          const res = await chatRpc(
            "file.attach",
            {
              session_id: sessionId,
              path: att.name,
              name: att.name,
              data_url: att.dataUrl,
            },
            180000
          );
          if (!res || !res.attached) {
            throw new Error(
              (pdfErr && pdfErr.message ? pdfErr.message : "PDF attach failed") +
                (res && res.message ? " / " + res.message : "")
            );
          }
          if (res.ref_text) fileRefs.push(res.ref_text);
          labels.push("[file: " + att.name + "]");
          continue;
        }
      }
      const res = await chatRpc(
        "file.attach",
        {
          session_id: sessionId,
          path: att.name,
          name: att.name,
          data_url: att.dataUrl,
        },
        180000
      );
      if (!res || !res.attached) {
        throw new Error((res && res.message) || "Could not attach file " + att.name);
      }
      if (res.ref_text) fileRefs.push(res.ref_text);
      labels.push("[file: " + att.name + "]");
    }
    return { fileRefs: fileRefs, labels: labels };
  }

  function clearPendingAttach() {
    pendingAttach = [];
    renderAttachPreview();
  }

  function initComposerAttachments() {
    if (elInput) {
      elInput.addEventListener("paste", (e) => {
        const cd = e.clipboardData;
        if (!cd) return;
        const files = [];
        if (cd.files && cd.files.length) {
          for (const f of cd.files) files.push(f);
        } else if (cd.items) {
          for (const item of cd.items) {
            if (item.kind === "file") {
              const f = item.getAsFile();
              if (f) files.push(f);
            }
          }
        }
        if (!files.length) return;
        e.preventDefault();
        void addPendingFiles(files);
      });
    }

    if (elComposerFile) {
      elComposerFile.addEventListener("change", () => {
        const files = elComposerFile.files;
        void addPendingFiles(files).then(() => {
          elComposerFile.value = "";
        });
      });
    }

    function onDragEnter(e) {
      if (!e.dataTransfer || ![...e.dataTransfer.types].includes("Files")) return;
      e.preventDefault();
      attachDragDepth += 1;
      if (elComposer) elComposer.classList.add("is-drop-target");
      if (elComposerDropHint) elComposerDropHint.hidden = false;
    }
    function onDragOver(e) {
      if (!e.dataTransfer || ![...e.dataTransfer.types].includes("Files")) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(e) {
      if (!e.dataTransfer || ![...e.dataTransfer.types].includes("Files")) return;
      attachDragDepth = Math.max(0, attachDragDepth - 1);
      if (attachDragDepth === 0) {
        if (elComposer) elComposer.classList.remove("is-drop-target");
        if (elComposerDropHint) elComposerDropHint.hidden = true;
      }
    }
    async function onDrop(e) {
      if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) return;
      e.preventDefault();
      attachDragDepth = 0;
      if (elComposer) elComposer.classList.remove("is-drop-target");
      if (elComposerDropHint) elComposerDropHint.hidden = true;
      await addPendingFiles(e.dataTransfer.files);
    }

    const dropTargets = [elComposer, elChatPane, elMessages].filter(Boolean);
    for (const el of dropTargets) {
      el.addEventListener("dragenter", onDragEnter);
      el.addEventListener("dragover", onDragOver);
      el.addEventListener("dragleave", onDragLeave);
      el.addEventListener("drop", onDrop);
    }
  }

  function isChatBusy(profile) {
    const id = profile || activeId;
    const st = chatGw.sessions[id];
    return !!(st && st.busy);
  }

  function updateSendBtn() {
    if (!elSend) return;
    if (isChatBusy(activeId)) {
      elSend.textContent = "Stop";
      elSend.classList.add("is-stop");
      elSend.title = "Stop current Hermes run";
      elSend.disabled = false;
    } else {
      elSend.textContent = "Send";
      elSend.classList.remove("is-stop");
      elSend.title = "Send message";
      elSend.disabled = false;
    }
  }

  function setChatBusy(profile, busy) {
    if (!profile || profile === "_offline") return;
    const st = chatGw.sessions[profile] || {
      sessionId: null,
      historySessionId: null,
      streamingIdx: null,
      thinkingMsg: null,
      live: false,
      busy: false,
      stopRequested: false,
    };
    chatGw.sessions[profile] = st;
    const wasBusy = !!st.busy;
    st.busy = !!busy;
    if (!busy) {
      st.stopRequested = false;
      st.busyStartedAt = null;
      stopThinkTimer(st);
    } else if (!wasBusy) {
      startThinkTimer(profile);
    }
    if (profile === activeId) updateSendBtn();
  }

  async function stopChat() {
    const agent = activeAgent();
    if (!agent || agent.offline) return;
    const st = chatGw.sessions[agent.id];
    if (!st || !st.busy) return;
    st.stopRequested = true;
    if (st.thinkingMsg) {
      st.thinkingMsg.text = "Stopping Hermes…";
      if (agent.id === activeId) renderChat();
    }
    try {
      if (st.sessionId) {
        await chatRpc("session.interrupt", { session_id: st.sessionId }, 20000);
      }
    } catch (_) {
      /* interrupt best-effort */
    }
    // prompt.submit returns immediately; if no complete/error arrives, end busy UI.
    const profile = agent.id;
    window.setTimeout(() => {
      const cur = chatGw.sessions[profile];
      const ag = agents.find((a) => a.id === profile);
      if (!cur || !cur.stopRequested || !cur.busy || !ag) return;
      if (cur.thinkingMsg && ag.chat.includes(cur.thinkingMsg)) {
        const ix = ag.chat.indexOf(cur.thinkingMsg);
        if (ix >= 0) ag.chat.splice(ix, 1);
        cur.thinkingMsg = null;
      }
      cur.busy = false;
      cur.stopRequested = false;
      cur.streamingIdx = null;
      cur.busyStartedAt = null;
      stopThinkTimer(cur);
      if (!ag.chat.some((m) => m && m.role === "meta" && m.text === "Stopped.")) {
        ag.chat.push({ role: "meta", text: "Stopped." });
      }
      if (profile === activeId) {
        renderChat();
        updateSendBtn();
      }
      persistChatState(profile);
    }, 2500);
  }

  async function sendChat() {
    const text = (elInput.value || "").trim();
    if (!text && !pendingAttach.length) return;
    if (isChatBusy(activeId)) return;
    const agent = activeAgent();
    const attachSnapshot = pendingAttach.slice();
    const attachLabels = attachSnapshot.map((a) =>
      a.kind === "image" ? "[image: " + a.name + "]" : "[" + a.kind + ": " + a.name + "]"
    );
    const displayText = [text].concat(attachLabels).filter(Boolean).join("\n");
    agent.chat.push({ role: "user", text: displayText || "(attachment)" });
    elInput.value = "";
    clearPendingAttach();
    renderChat();
    persistChatState(agent.id);

    if (!chatGw.wsUrl) {
      const block = resolveGwBlock(activeId) || resolveGwBlock(null);
      const url = (block.remoteUrl || "").trim();
      const tok = block.remoteToken || "";
      if (url && tok) setChatGatewayCreds(url, tok);
    }
    if (!chatGw.wsUrl || !chatGw.token) {
      agent.chat.push({
        role: "meta",
        text: "Gateway not connected. Open Gateway, set URL + session token, Save & reconnect.",
      });
      renderChat();
      persistChatState(agent.id);
      updateSendBtn();
      return;
    }

    const thinking = { role: "meta", text: "Waiting for Hermes…" };
    agent.chat.push(thinking);
    setChatBusy(agent.id, true);
    renderChat();

    try {
      await ensureChatSocket();
      // Image/PDF turns: always new live session. Resuming a long-lived session
      // (hours of history + prior vision tool loops) makes glm-5.2 thrash for 60s+.
      const forceNewSession = attachSnapshot.length > 0;
      let sessionId = await ensureChatSession(agent, forceNewSession);
      const st = chatGw.sessions[agent.id];
      st.busy = true;
      st.stopRequested = false;
      updateSendBtn();
      st.thinkingMsg = thinking;
      thinking.text = attachSnapshot.length
        ? "Uploading attachments…"
        : "Hermes is generating…";
      renderChat();
      st.streamingIdx = null;

      // Temporarily restore snapshot for upload helpers.
      pendingAttach = attachSnapshot;
      let fileRefs = [];
      try {
        const uploaded = await uploadPendingAttachments(sessionId);
        fileRefs = uploaded.fileRefs || [];
      } finally {
        pendingAttach = [];
        renderAttachPreview();
      }

      const submitText = [text].concat(fileRefs).filter(Boolean).join("\n\n") ||
        (attachSnapshot.length ? "Please review the attached file(s)." : text);

      thinking.text = attachSnapshot.some((a) => a.kind === "image")
        ? "Analyzing image (Hermes)…"
        : "Hermes is generating…";
      renderChat();

      try {
        // Returns immediately with {status:"streaming"}; turn ends via events.
        await chatRpc("prompt.submit", { session_id: sessionId, text: submitText }, 120000);
      } catch (submitErr) {
        if (!isSessionNotFoundError(submitErr)) throw submitErr;
        sessionId = await ensureChatSession(agent, true);
        // Re-upload onto the fresh live session.
        pendingAttach = attachSnapshot;
        try {
          const uploaded = await uploadPendingAttachments(sessionId);
          fileRefs = uploaded.fileRefs || [];
        } finally {
          pendingAttach = [];
          renderAttachPreview();
        }
        const retryText = [text].concat(fileRefs).filter(Boolean).join("\n\n") ||
          (attachSnapshot.length ? "Please review the attached file(s)." : text);
        st.thinkingMsg = thinking;
        thinking.text = "Hermes is generating…";
        st.busy = true;
        updateSendBtn();
        renderChat();
        await chatRpc("prompt.submit", { session_id: sessionId, text: retryText }, 120000);
      }
      // Keep Stop visible until message.complete / error / interrupt timeout.
      st.busy = true;
      updateSendBtn();
    } catch (err) {
      const st = chatGw.sessions[agent.id];
      const stopped = (st && st.stopRequested) || isInterruptedError(err);
      const ti = agent.chat.indexOf(thinking);
      if (ti >= 0) agent.chat.splice(ti, 1);
      if (stopped) {
        agent.chat.push({ role: "meta", text: "Stopped." });
      } else {
        agent.chat.push({
          role: "meta",
          text: "Chat error: " + (err && err.message ? err.message : String(err)),
        });
        // Restore attachments so the user can retry after a failed upload/send.
        if (attachSnapshot.length && !pendingAttach.length) {
          pendingAttach = attachSnapshot.slice();
          renderAttachPreview();
        }
      }
      if (st) {
        st.streamingIdx = null;
        st.thinkingMsg = null;
        if (isSessionNotFoundError(err)) {
          st.live = false;
          st.sessionId = null;
        }
      }
      setChatBusy(agent.id, false);
      renderChat();
      persistChatState(agent.id);
    }
  }

  function sendLocal() {
    if (isChatBusy(activeId)) {
      void stopChat();
      return;
    }
    void sendChat();
  }

  elTabsScroll.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        elTabsScroll.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    },
    { passive: false }
  );

  elSideToggle.addEventListener("click", () => {
    const collapsed = elSideMenu.dataset.collapsed === "true";
    setSideCollapsed(!collapsed);
  });

  elTabAdd.addEventListener("click", () => {
    void (async () => {
      const name = window.prompt("New Hermes profile name (created on remote host):");
      if (name == null) return;
      const id = String(name).trim();
      if (!id) return;
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(id)) {
        window.alert("Invalid profile name. Use letters, numbers, _ or -.");
        return;
      }
      try {
        const res = await fetch("/api/remote/profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: id }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.detail || data.error || "Create failed");
        const sync = await syncAgentsFromRemote({ preferId: id });
        if (!sync.ok) throw new Error(sync.reason || "Sync failed after create");
        requestAnimationFrame(() => {
          elTabsScroll.scrollLeft = elTabsScroll.scrollWidth;
        });
      } catch (err) {
        window.alert(String(err && err.message ? err.message : err));
      }
    })();
  });

  if (elCanvasDeleteAgent) {
    elCanvasDeleteAgent.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      void deleteActiveAgentOnServer();
    });
  }
  elCtxHide.addEventListener("click", () => {
    if (!ctxNodeId) return;
    hideBlock(ctxNodeId);
  });

  document.addEventListener(
    "pointerdown",
    (e) => {
      const active = document.activeElement;
      if (!active || !active.classList || !active.classList.contains("canvas-node-body")) return;
      const wrap = active.closest(".canvas-node.is-task");
      if (wrap && wrap.contains(e.target)) return;
      active.blur();
    },
    true
  );

  document.addEventListener("pointerdown", (e) => {
    if (!elCtxMenu.hidden && !elCtxMenu.contains(e.target)) hideCtxMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (elBlockEditor && !elBlockEditor.hidden) {
        e.preventDefault();
        closeBlockEditor(true);
        return;
      }
      blurTaskEditors();
      hideCtxMenu();
      if (elGwModal && !elGwModal.hidden) closeGatewayModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      if (elBlockEditor && !elBlockEditor.hidden) {
        e.preventDefault();
        void saveBlockEditor();
      }
    }
  });

  // ── In-canvas block editors (gateway-backed) ───────────

  let blockEditor = {
    kind: null,
    profile: null,
    baseline: "",
    busy: false,
    mode: "form", // form | advanced | text (soul) | secrets
    configDraft: null,
    configBaseline: null,
    schema: null,
    categoryOrder: [],
    activeCategory: "general",
    search: "",
    secretsMap: null,
    secretsRevealed: {},
    secretsDrafts: {},
    secretsSetOnly: true,
    activeSecGroup: "all",
    secretsSearch: "",
    memoryFile: "MEMORY.md",
    memoryCache: null, // { "MEMORY.md": {content,baseline,path,exists}, ... }
    skillsList: null,
    skillsMode: "installed", // installed | hub
    skillsSearch: "",
    skillsEnabledOnly: false,
    activeSkGroup: "all",
    hubResults: null,
    hubBusy: false,
    cronJobs: [],
    cronSelectedId: null, // null = new draft
    cronBaseline: "",
    cronDirty: false,
    includeCanvasTasks: false,
    toolsEnabled: null, // Set of enabled toolset ids
  };

  // Hermes toolsets commonly needed for Canvas chat / vision / research.
  // hermes-cli already bundles vision_analyze; extra sets pin them in config.
  const HERMES_COMMON_TOOLSETS = [
    { id: "hermes-cli", label: "hermes-cli", desc: "Full CLI core (files, terminal, web, browser, vision_analyze, …)", required: true },
    { id: "vision", label: "vision", desc: "vision_analyze — image understanding via auxiliary.vision" },
    { id: "web", label: "web", desc: "web_search + web_extract" },
    { id: "browser", label: "browser", desc: "Browser automation (navigate, snapshot, click, …)" },
    { id: "terminal", label: "terminal", desc: "Shell / process tools" },
    { id: "file", label: "file", desc: "read_file / write_file / patch / search_files" },
    { id: "image_gen", label: "image_gen", desc: "image_generate" },
    { id: "memory", label: "memory", desc: "Persistent memory tools" },
    { id: "todo", label: "todo", desc: "Task planning tool" },
    { id: "clarify", label: "clarify", desc: "Ask clarifying questions" },
    { id: "code_execution", label: "code_execution", desc: "Run Python that calls tools" },
    { id: "search", label: "search", desc: "Web search only" },
    { id: "delegation", label: "delegation", desc: "Spawn subagents" },
    { id: "session_search", label: "session_search", desc: "Search past conversations" },
    { id: "skills", label: "skills", desc: "Skill list / view / manage" },
    { id: "cronjob", label: "cronjob", desc: "Manage cron jobs from chat" },
  ];

  let schemaCache = null;

  function extractModelFields(yamlText) {
    const lines = String(yamlText || "").split(/\r?\n/);
    let inModel = false;
    let def = "";
    let prov = "";
    for (const line of lines) {
      if (/^model:\s*$/.test(line)) {
        inModel = true;
        continue;
      }
      if (/^model:\s+\S/.test(line)) {
        def = line.replace(/^model:\s+/, "").replace(/^['"]|['"]$/g, "").trim();
        break;
      }
      if (inModel) {
        if (/^[^\s#]/.test(line)) break;
        const mDef = line.match(/^\s+default:\s*(.*?)\s*$/);
        if (mDef) {
          def = mDef[1].replace(/^['"]|['"]$/g, "").trim();
          continue;
        }
        const mProv = line.match(/^\s+provider:\s*(.*?)\s*$/);
        if (mProv) {
          prov = mProv[1].replace(/^['"]|['"]$/g, "").trim();
        }
      }
    }
    return { default: def, provider: prov };
  }

  function formatTerminalModelBody(defaultName, provider) {
    const raw = String(defaultName || "").trim();
    const short = raw.includes("/") ? raw.split("/").pop() : raw;
    const name = short || "config.yaml";
    const prov = String(provider || "").trim();
    return prov ? name + "\n" + prov : name;
  }

  function applyTerminalModelBody(agentId, yamlText) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const term = agent.nodes.find((n) => n.id === "config");
    if (!term) return;
    const fields = extractModelFields(yamlText);
    if (!fields.default && !fields.provider) return;
    const next = formatTerminalModelBody(fields.default, fields.provider);
    if (term.body === next) return;
    term.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  function applyTerminalModelFromConfig(agentId, config) {
    if (!config || typeof config !== "object") return;
    let def = "";
    let prov = "";
    if (typeof config.model === "string") def = config.model;
    else if (config.model && typeof config.model === "object") {
      def = config.model.default || config.model.name || "";
      prov = config.model.provider || "";
    }
    if (!prov && typeof config.provider === "string") prov = config.provider;
    if (!def && !prov) return;
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const term = agent.nodes.find((n) => n.id === "config");
    if (!term) return;
    const next = formatTerminalModelBody(def, prov);
    if (term.body === next) return;
    term.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  function formatSoulPreview(content) {
    const text = String(content || "").replace(/\s+/g, " ").trim();
    if (!text) return "(empty SOUL.md)";
    return text.length > 72 ? text.slice(0, 69) + "…" : text;
  }

  function applySoulPreview(agentId, content) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "soul");
    if (!node) return;
    const next = formatSoulPreview(content);
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  async function refreshTerminalModelLabel(agentId) {
    const id = agentId || activeId;
    if (!id) return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "config")) return;
    try {
      const q = "?profile=" + encodeURIComponent(id);
      const res = await fetch("/api/remote/config/tree" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return;
      applyTerminalModelFromConfig(id, data.config || {});
    } catch (_) {}
  }

  async function refreshSoulLabel(agentId) {
    const id = agentId || activeId;
    if (!id) return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "soul")) return;
    try {
      const res = await fetch("/api/remote/profiles/" + encodeURIComponent(id) + "/soul");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return;
      applySoulPreview(id, data.content || "");
    } catch (_) {}
  }

  async function refreshBlockCardLabels(agentId) {
    const id = agentId || activeId;
    await Promise.all([
      refreshTerminalModelLabel(id),
      refreshSoulLabel(id),
      refreshSecretsLabel(id),
      refreshMemoryLabel(id),
      refreshSkillsLabel(id),
      refreshToolsLabel(id),
      refreshTriggerLabel(id),
    ]);
  }

  function applySkillsPreview(agentId, skills) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "skills");
    if (!node) return;
    const list = Array.isArray(skills) ? skills : [];
    const enabled = list.filter((s) => s && s.enabled).length;
    const next = list.length ? enabled + " / " + list.length + " enabled" : "0 skills";
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  async function refreshSkillsLabel(agentId) {
    const id = agentId || activeId;
    if (!id || id === "_offline") return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "skills")) return;
    try {
      const q = "?profile=" + encodeURIComponent(id);
      const res = await fetch("/api/remote/skills" + q);
      const data = await res.json().catch(() => ([]));
      if (!res.ok) return;
      applySkillsPreview(id, Array.isArray(data) ? data : []);
    } catch (_) {}
  }

  function formatMemoryPreview(memoryText, userText) {
    const m = String(memoryText || "").replace(/\s+/g, " ").trim();
    const u = String(userText || "").replace(/\s+/g, " ").trim();
    if (!m && !u) return "(empty MEMORY + USER)";
    const head = m || u;
    const tag = m ? "MEMORY" : "USER";
    const snip = head.length > 56 ? head.slice(0, 53) + "…" : head;
    return tag + ": " + snip;
  }

  function applyMemoryPreview(agentId, memoryText, userText) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "memory");
    if (!node) return;
    const next = formatMemoryPreview(memoryText, userText);
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  async function fetchMemoryFile(profile, which) {
    const res = await fetch(
      "/api/remote/profiles/" + encodeURIComponent(profile) + "/memory/" + encodeURIComponent(which)
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.detail || data.error || "Load failed");
    return data;
  }

  async function refreshMemoryLabel(agentId) {
    const id = agentId || activeId;
    if (!id) return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "memory")) return;
    try {
      const [mem, user] = await Promise.all([
        fetchMemoryFile(id, "MEMORY.md"),
        fetchMemoryFile(id, "USER.md"),
      ]);
      applyMemoryPreview(id, mem.content || "", user.content || "");
    } catch (_) {}
  }

  function secretsGroupId(key, info) {
    if (info && info.custom) return "custom";
    const provider = String((info && info.provider_label) || (info && info.provider) || "").trim();
    if (provider) return "p:" + provider;
    const cat = String((info && info.category) || "").trim();
    if (cat) return "c:" + cat;
    return "other";
  }

  function secretsGroupLabel(gid) {
    if (gid === "all") return "All";
    if (gid === "custom") return "Custom";
    if (gid === "other") return "Other";
    if (gid.startsWith("p:")) return gid.slice(2);
    if (gid.startsWith("c:")) return prettyCategory(gid.slice(2));
    return gid;
  }

  function maskSecretDisplay(info) {
    if (!info || !info.is_set) return "(unset)";
    if (info.is_password) return "••••••••";
    return info.redacted_value || "••••••••";
  }

  function applySecretsPreview(agentId, envMap) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "secrets");
    if (!node) return;
    let setCount = 0;
    if (envMap && typeof envMap === "object") {
      for (const info of Object.values(envMap)) {
        if (info && info.is_set && !info.channel_managed) setCount += 1;
      }
    }
    const next = setCount === 1 ? "1 key set" : setCount + " keys set";
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  async function refreshSecretsLabel(agentId) {
    const id = agentId || activeId;
    if (!id) return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "secrets")) return;
    try {
      const q = "?profile=" + encodeURIComponent(id);
      const res = await fetch("/api/remote/env" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return;
      applySecretsPreview(id, data);
    } catch (_) {}
  }

  function listSecretsEntries() {
    const map = blockEditor.secretsMap || {};
    const q = (blockEditor.secretsSearch || "").trim().toLowerCase();
    const setOnly = !!blockEditor.secretsSetOnly;
    const group = blockEditor.activeSecGroup || "all";
    const rows = [];
    for (const [key, info] of Object.entries(map)) {
      if (!info || info.channel_managed) continue;
      if (setOnly && !info.is_set) continue;
      if (group !== "all" && secretsGroupId(key, info) !== group) continue;
      if (q) {
        const hay = (
          key +
          " " +
          (info.description || "") +
          " " +
          (info.provider_label || "") +
          " " +
          (info.category || "")
        ).toLowerCase();
        if (!hay.includes(q)) continue;
      }
      rows.push({ key, info });
    }
    rows.sort((a, b) => {
      if (!!a.info.is_set !== !!b.info.is_set) return a.info.is_set ? -1 : 1;
      return a.key.localeCompare(b.key);
    });
    return rows;
  }

  function secretsNavGroups() {
    const map = blockEditor.secretsMap || {};
    const counts = { all: 0 };
    for (const [key, info] of Object.entries(map)) {
      if (!info || info.channel_managed) continue;
      if (blockEditor.secretsSetOnly && !info.is_set) continue;
      counts.all += 1;
      const gid = secretsGroupId(key, info);
      counts[gid] = (counts[gid] || 0) + 1;
    }
    const ids = Object.keys(counts).filter((id) => id !== "all" && counts[id] > 0);
    ids.sort((a, b) => {
      if (a === "custom") return -1;
      if (b === "custom") return 1;
      return secretsGroupLabel(a).localeCompare(secretsGroupLabel(b));
    });
    return [{ id: "all", count: counts.all }, ...ids.map((id) => ({ id, count: counts[id] }))];
  }

  function renderSecNav() {
    if (!elSecNav) return;
    elSecNav.innerHTML = "";
    const groups = secretsNavGroups();
    if (!groups.some((g) => g.id === blockEditor.activeSecGroup) && groups[0]) {
      blockEditor.activeSecGroup = groups[0].id;
    }
    for (const g of groups) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cfg-nav-btn";
      btn.setAttribute("aria-current", g.id === blockEditor.activeSecGroup ? "true" : "false");
      btn.innerHTML =
        '<span>' +
        secretsGroupLabel(g.id) +
        '</span><span class="cfg-nav-count">' +
        g.count +
        "</span>";
      btn.addEventListener("click", () => {
        blockEditor.activeSecGroup = g.id;
        renderSecNav();
        renderSecFields();
      });
      elSecNav.appendChild(btn);
    }
  }

  function renderSecFields() {
    if (!elSecFields) return;
    elSecFields.innerHTML = "";
    if (elSecSectionLabel) {
      elSecSectionLabel.textContent = secretsGroupLabel(blockEditor.activeSecGroup);
    }
    const rows = listSecretsEntries();
    if (!rows.length) {
      const empty = document.createElement("div");
      empty.className = "cfg-empty";
      empty.textContent = blockEditor.secretsSearch
        ? "No keys match this filter."
        : "No keys in this group.";
      elSecFields.appendChild(empty);
      return;
    }
    for (const { key, info } of rows) {
      const revealed = Object.prototype.hasOwnProperty.call(blockEditor.secretsRevealed, key);
      const row = document.createElement("div");
      row.className = "sec-row";
      row.dataset.key = key;

      const meta = document.createElement("div");
      meta.className = "sec-row-meta";
      const keyEl = document.createElement("div");
      keyEl.className = "sec-row-key";
      keyEl.textContent = key;
      meta.appendChild(keyEl);
      if (info.description) {
        const desc = document.createElement("div");
        desc.className = "sec-row-desc";
        desc.textContent = info.description;
        meta.appendChild(desc);
      }
      const badge = document.createElement("span");
      badge.className = "sec-row-badge";
      badge.dataset.set = info.is_set ? "1" : "0";
      badge.textContent = info.is_set ? "set" : "unset";
      meta.appendChild(badge);

      const control = document.createElement("div");
      control.className = "sec-row-control";

      const valueRow = document.createElement("div");
      valueRow.className = "sec-value-row";
      const valueEl = document.createElement("div");
      valueEl.className = "sec-value";
      if (!info.is_set) {
        valueEl.dataset.empty = "1";
        valueEl.textContent = "(unset)";
      } else if (revealed) {
        valueEl.dataset.revealed = "1";
        valueEl.textContent = blockEditor.secretsRevealed[key];
      } else {
        valueEl.textContent = maskSecretDisplay(info);
      }
      valueRow.appendChild(valueEl);

      if (info.is_set) {
        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "sec-toggle";
        toggle.textContent = revealed ? "Hide" : "Show";
        toggle.addEventListener("click", () => void toggleSecretReveal(key, revealed));
        valueRow.appendChild(toggle);
      }
      control.appendChild(valueRow);

      const edit = document.createElement("input");
      edit.type = "password";
      edit.className = "sec-edit";
      edit.placeholder = info.is_set ? "New value…" : "Set value…";
      edit.autocomplete = "off";
      edit.spellcheck = false;
      edit.value = blockEditor.secretsDrafts[key] || "";
      edit.addEventListener("input", () => {
        blockEditor.secretsDrafts[key] = edit.value;
      });
      control.appendChild(edit);

      const actions = document.createElement("div");
      actions.className = "sec-actions";
      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "sec-save";
      saveBtn.textContent = "Save";
      saveBtn.addEventListener("click", () => void saveSecretKey(key));
      actions.appendChild(saveBtn);
      if (info.is_set) {
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "sec-del";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => void deleteSecretKey(key));
        actions.appendChild(delBtn);
      }
      control.appendChild(actions);

      row.appendChild(meta);
      row.appendChild(control);
      elSecFields.appendChild(row);
    }
  }

  async function toggleSecretReveal(key, currentlyRevealed) {
    if (currentlyRevealed) {
      delete blockEditor.secretsRevealed[key];
      renderSecFields();
      return;
    }
    const profile = blockEditor.profile || activeId || null;
    setBlockEditorStatus("Revealing " + key + "…", "");
    try {
      const res = await fetch("/api/remote/env/reveal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Reveal failed");
      blockEditor.secretsRevealed[key] = data.value == null ? "" : String(data.value);
      setBlockEditorStatus("Showing " + key, "ok");
      renderSecFields();
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function saveSecretKey(key) {
    const value = blockEditor.secretsDrafts[key];
    if (value == null || String(value) === "") {
      setBlockEditorStatus("Enter a value before saving.", "bad");
      return;
    }
    const profile = blockEditor.profile || activeId || null;
    setBlockEditorStatus("Saving " + key + "…", "");
    try {
      const res = await fetch("/api/remote/env", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value: String(value), profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Save failed");
      delete blockEditor.secretsDrafts[key];
      delete blockEditor.secretsRevealed[key];
      setBlockEditorStatus("Saved " + key, "ok");
      await loadSecretsContent();
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function deleteSecretKey(key) {
    if (!window.confirm("Delete " + key + " from remote .env?")) return;
    const profile = blockEditor.profile || activeId || null;
    setBlockEditorStatus("Deleting " + key + "…", "");
    try {
      const res = await fetch("/api/remote/env", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Delete failed");
      delete blockEditor.secretsDrafts[key];
      delete blockEditor.secretsRevealed[key];
      setBlockEditorStatus("Deleted " + key, "ok");
      await loadSecretsContent();
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function addSecretKey() {
    const key = String((elSecNewKey && elSecNewKey.value) || "").trim();
    const value = String((elSecNewVal && elSecNewVal.value) || "");
    if (!key) {
      setBlockEditorStatus("Enter a key name.", "bad");
      return;
    }
    if (!value) {
      setBlockEditorStatus("Enter a value.", "bad");
      return;
    }
    const profile = blockEditor.profile || activeId || null;
    setBlockEditorStatus("Adding " + key + "…", "");
    try {
      const res = await fetch("/api/remote/env", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value, profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Add failed");
      if (elSecNewKey) elSecNewKey.value = "";
      if (elSecNewVal) elSecNewVal.value = "";
      setBlockEditorStatus("Added " + key, "ok");
      await loadSecretsContent();
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function loadSecretsContent() {
    const profile = blockEditor.profile || activeId || null;
    if (!profile) {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading secrets via gateway…", "");
    try {
      const q = "?profile=" + encodeURIComponent(profile);
      const res = await fetch("/api/remote/env" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Load failed");
      blockEditor.secretsMap = data && typeof data === "object" ? data : {};
      blockEditor.secretsRevealed = {};
      blockEditor.mode = "secrets";
      blockEditor.profile = profile;
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent = ".env · remote profile " + profile;
        elBlockEditorPath.title = elBlockEditorPath.textContent;
      }
      renderSecNav();
      renderSecFields();
      applySecretsPreview(profile, blockEditor.secretsMap);
      setBlockEditorStatus("Loaded remote .env keys.", "ok");
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  function setBlockEditorStatus(msg, tone) {
    if (!elBlockEditorStatus) return;
    elBlockEditorStatus.textContent = msg || "";
    elBlockEditorStatus.dataset.tone = tone || "";
  }

  function isBlockEditorOpen() {
    return !!(elBlockEditor && !elBlockEditor.hidden);
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj || {}));
  }

  function getNested(obj, path) {
    if (!obj || !path) return undefined;
    const parts = String(path).split(".");
    let cur = obj;
    for (const part of parts) {
      if (cur == null || typeof cur !== "object") return undefined;
      cur = cur[part];
    }
    return cur;
  }

  function setNested(obj, path, value) {
    const parts = String(path).split(".");
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!cur[part] || typeof cur[part] !== "object" || Array.isArray(cur[part])) {
        cur[part] = {};
      }
      cur = cur[part];
    }
    cur[parts[parts.length - 1]] = value;
    return obj;
  }

  function prettyCategory(id) {
    return String(id || "")
      .split(/[_\s]+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  function prettyFieldName(key) {
    const leaf = String(key || "").split(".").pop() || key;
    return String(leaf)
      .split(/[_\s]+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  function syncMemTabs() {
    if (!elMemTabs) return;
    const buttons = elMemTabs.querySelectorAll(".mem-tab");
    for (const btn of buttons) {
      const file = btn.getAttribute("data-mem-file") || "";
      btn.setAttribute("aria-current", file === blockEditor.memoryFile ? "true" : "false");
    }
  }

  function applyMemoryFileToEditor(file) {
    const cache = (blockEditor.memoryCache && blockEditor.memoryCache[file]) || {
      content: "",
      baseline: "",
      path: "",
      exists: false,
    };
    blockEditor.memoryFile = file;
    blockEditor.baseline = cache.baseline;
    if (elBlockEditorText) elBlockEditorText.value = cache.content;
    if (elBlockEditorPath) {
      const hint = cache.path || "memories/" + file;
      elBlockEditorPath.textContent = cache.exists === false ? hint + " (new)" : hint;
      elBlockEditorPath.title = elBlockEditorPath.textContent;
    }
    syncMemTabs();
  }

  function stashCurrentMemoryDraft() {
    if (blockEditor.kind !== "memory" || !blockEditor.memoryCache) return;
    const file = blockEditor.memoryFile || "MEMORY.md";
    const cur = blockEditor.memoryCache[file] || {
      content: "",
      baseline: "",
      path: "",
      exists: false,
    };
    cur.content = elBlockEditorText ? elBlockEditorText.value : "";
    blockEditor.memoryCache[file] = cur;
  }

  async function loadMemoryContent() {
    const profile = blockEditor.profile || activeId || null;
    if (!profile) {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading memory via gateway…", "");
    try {
      const files = ["MEMORY.md", "USER.md"];
      const cache = {};
      for (const file of files) {
        const data = await fetchMemoryFile(profile, file);
        const content = data.content || "";
        cache[file] = {
          content: content,
          baseline: content,
          path: data.path || "",
          exists: data.exists !== false,
        };
      }
      blockEditor.memoryCache = cache;
      blockEditor.profile = profile;
      blockEditor.mode = "text";
      applyMemoryFileToEditor(blockEditor.memoryFile || "MEMORY.md");
      applyMemoryPreview(profile, cache["MEMORY.md"].content, cache["USER.md"].content);
      setBlockEditorStatus("Loaded MEMORY.md + USER.md from remote Hermes.", "ok");
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  async function switchMemoryFile(nextFile) {
    if (blockEditor.kind !== "memory" || blockEditor.busy) return;
    if (nextFile === blockEditor.memoryFile) return;
    stashCurrentMemoryDraft();
    applyMemoryFileToEditor(nextFile);
    if (elBlockEditorText) elBlockEditorText.focus();
  }

  function isBlockEditorDirty() {
    if (blockEditor.kind === "trigger") {
      return !!blockEditor.cronDirty || snapshotTriggerDraft() !== blockEditor.cronBaseline;
    }
    if (blockEditor.kind === "secrets") {
      return Object.values(blockEditor.secretsDrafts || {}).some((v) => String(v || "") !== "");
    }
    if (blockEditor.kind === "memory") {
      stashCurrentMemoryDraft();
      const cache = blockEditor.memoryCache || {};
      return Object.keys(cache).some((f) => String(cache[f].content || "") !== String(cache[f].baseline || ""));
    }
    if (blockEditor.kind === "tools") {
      stashToolsDraft();
      try {
        return JSON.stringify(blockEditor.configDraft || {}) !== JSON.stringify(blockEditor.configBaseline || {});
      } catch (_) {
        return true;
      }
    }
    if (blockEditor.kind === "config" && blockEditor.mode === "form") {
      try {
        return JSON.stringify(blockEditor.configDraft || {}) !== JSON.stringify(blockEditor.configBaseline || {});
      } catch (_) {
        return true;
      }
    }
    if (elBlockEditorText) return elBlockEditorText.value !== blockEditor.baseline;
    return false;
  }

  function skillCategory(skill) {
    const raw = String((skill && (skill.category || skill.group)) || "").trim();
    return raw || "general";
  }

  function skillsNavGroups() {
    const list = blockEditor.skillsList || [];
    const q = (blockEditor.skillsSearch || "").trim().toLowerCase();
    const enabledOnly = !!blockEditor.skillsEnabledOnly;
    const counts = { all: 0 };
    for (const skill of list) {
      if (!skill || !skill.name) continue;
      if (enabledOnly && !skill.enabled) continue;
      if (q) {
        const hay = (
          skill.name +
          " " +
          (skill.description || "") +
          " " +
          skillCategory(skill) +
          " " +
          (skill.provenance || "")
        ).toLowerCase();
        if (!hay.includes(q)) continue;
      }
      counts.all += 1;
      const gid = "c:" + skillCategory(skill);
      counts[gid] = (counts[gid] || 0) + 1;
    }
    const ids = Object.keys(counts)
      .filter((id) => id !== "all" && counts[id] > 0)
      .sort((a, b) => prettyCategory(a.slice(2)).localeCompare(prettyCategory(b.slice(2))));
    return [{ id: "all", count: counts.all }, ...ids.map((id) => ({ id, count: counts[id] }))];
  }

  function listSkillsRows() {
    const list = blockEditor.skillsList || [];
    const q = (blockEditor.skillsSearch || "").trim().toLowerCase();
    const enabledOnly = !!blockEditor.skillsEnabledOnly;
    const group = blockEditor.activeSkGroup || "all";
    const rows = [];
    for (const skill of list) {
      if (!skill || !skill.name) continue;
      if (enabledOnly && !skill.enabled) continue;
      if (group !== "all" && "c:" + skillCategory(skill) !== group) continue;
      if (q) {
        const hay = (
          skill.name +
          " " +
          (skill.description || "") +
          " " +
          skillCategory(skill) +
          " " +
          (skill.provenance || "")
        ).toLowerCase();
        if (!hay.includes(q)) continue;
      }
      rows.push(skill);
    }
    rows.sort((a, b) => {
      if (!!a.enabled !== !!b.enabled) return a.enabled ? -1 : 1;
      return String(a.name).localeCompare(String(b.name));
    });
    return rows;
  }

  function syncSkModeTabs() {
    if (!elSkModeTabs) return;
    const buttons = elSkModeTabs.querySelectorAll(".sk-mode-tab");
    for (const btn of buttons) {
      const mode = btn.getAttribute("data-sk-mode") || "";
      btn.setAttribute("aria-current", mode === blockEditor.skillsMode ? "true" : "false");
    }
    if (elSkInstalled) elSkInstalled.hidden = blockEditor.skillsMode !== "installed";
    if (elSkHub) elSkHub.hidden = blockEditor.skillsMode !== "hub";
  }

  function renderSkNav() {
    if (!elSkNav) return;
    elSkNav.innerHTML = "";
    const groups = skillsNavGroups();
    if (!groups.some((g) => g.id === blockEditor.activeSkGroup) && groups[0]) {
      blockEditor.activeSkGroup = groups[0].id;
    }
    for (const g of groups) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cfg-nav-btn";
      btn.setAttribute("aria-current", g.id === blockEditor.activeSkGroup ? "true" : "false");
      const label = g.id === "all" ? "All" : prettyCategory(g.id.slice(2));
      btn.innerHTML =
        "<span>" + label + '</span><span class="cfg-nav-count">' + g.count + "</span>";
      btn.addEventListener("click", () => {
        blockEditor.activeSkGroup = g.id;
        renderSkNav();
        renderSkFields();
      });
      elSkNav.appendChild(btn);
    }
  }

  function renderSkFields() {
    if (!elSkFields) return;
    elSkFields.innerHTML = "";
    if (elSkSectionLabel) {
      elSkSectionLabel.textContent =
        blockEditor.activeSkGroup === "all"
          ? "All"
          : prettyCategory(String(blockEditor.activeSkGroup || "").slice(2));
    }
    const rows = listSkillsRows();
    if (!rows.length) {
      const empty = document.createElement("div");
      empty.className = "cfg-empty";
      empty.textContent = blockEditor.skillsSearch
        ? "No skills match this filter."
        : "No skills in this group.";
      elSkFields.appendChild(empty);
      return;
    }
    for (const skill of rows) {
      const row = document.createElement("div");
      row.className = "sk-row";
      const meta = document.createElement("div");
      meta.className = "sk-row-meta";
      const name = document.createElement("div");
      name.className = "sk-row-name";
      name.textContent = skill.name;
      meta.appendChild(name);
      if (skill.description) {
        const desc = document.createElement("div");
        desc.className = "sk-row-desc";
        desc.textContent = skill.description;
        meta.appendChild(desc);
      }
      const tags = document.createElement("div");
      tags.className = "sk-row-tags";
      const cat = document.createElement("span");
      cat.className = "sk-tag";
      cat.textContent = skillCategory(skill);
      tags.appendChild(cat);
      if (skill.provenance) {
        const prov = document.createElement("span");
        prov.className = "sk-tag";
        prov.dataset.kind = skill.provenance;
        prov.textContent = skill.provenance;
        tags.appendChild(prov);
      }
      meta.appendChild(tags);

      const wrap = document.createElement("label");
      wrap.className = "sk-toggle-wrap";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!skill.enabled;
      const label = document.createElement("span");
      label.textContent = skill.enabled ? "On" : "Off";
      input.addEventListener("change", () => {
        void toggleSkillEnabled(skill.name, input.checked, input, label);
      });
      wrap.appendChild(input);
      wrap.appendChild(label);

      row.appendChild(meta);
      row.appendChild(wrap);
      elSkFields.appendChild(row);
    }
  }

  async function toggleSkillEnabled(name, enabled, inputEl, labelEl) {
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile selected.", "bad");
      if (inputEl) inputEl.checked = !enabled;
      return;
    }
    if (labelEl) labelEl.textContent = enabled ? "On" : "Off";
    setBlockEditorStatus((enabled ? "Enabling " : "Disabling ") + name + "…", "");
    try {
      const res = await fetch("/api/remote/skills/toggle", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, enabled, profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Toggle failed");
      const list = blockEditor.skillsList || [];
      const row = list.find((s) => s.name === name);
      if (row) row.enabled = enabled;
      applySkillsPreview(profile, list);
      renderSkNav();
      renderSkFields();
      setBlockEditorStatus((enabled ? "Enabled " : "Disabled ") + name, "ok");
    } catch (err) {
      if (inputEl) inputEl.checked = !enabled;
      if (labelEl) labelEl.textContent = !enabled ? "On" : "Off";
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function bulkSetSkillsEnabled(enabled) {
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile selected.", "bad");
      return;
    }
    const rows = listSkillsRows().filter((s) => !!s.enabled !== !!enabled);
    if (!rows.length) {
      setBlockEditorStatus(enabled ? "All visible skills already on." : "All visible skills already off.", "ok");
      return;
    }
    if (elSkAllOn) elSkAllOn.disabled = true;
    if (elSkAllOff) elSkAllOff.disabled = true;
    blockEditor.busy = true;
    setBlockEditorStatus((enabled ? "Enabling " : "Disabling ") + rows.length + " skill(s)…", "");
    let ok = 0;
    let fail = 0;
    try {
      for (const skill of rows) {
        try {
          const res = await fetch("/api/remote/skills/toggle", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: skill.name, enabled, profile }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.detail || data.error || "Toggle failed");
          skill.enabled = enabled;
          ok += 1;
        } catch (_) {
          fail += 1;
        }
      }
      applySkillsPreview(profile, blockEditor.skillsList || []);
      renderSkNav();
      renderSkFields();
      if (fail) {
        setBlockEditorStatus(
          (enabled ? "Enabled " : "Disabled ") + ok + ", failed " + fail + ".",
          "bad"
        );
      } else {
        setBlockEditorStatus((enabled ? "Enabled " : "Disabled ") + ok + " skill(s).", "ok");
      }
    } finally {
      blockEditor.busy = false;
      if (elSkAllOn) elSkAllOn.disabled = false;
      if (elSkAllOff) elSkAllOff.disabled = false;
    }
  }

  function renderHubResults() {
    if (!elSkHubResults) return;
    elSkHubResults.innerHTML = "";
    const results = (blockEditor.hubResults && blockEditor.hubResults.results) || [];
    const installed = (blockEditor.hubResults && blockEditor.hubResults.installed) || {};
    if (!results.length) {
      const empty = document.createElement("div");
      empty.className = "cfg-empty";
      empty.textContent = "Search the hub to install skills into this profile.";
      elSkHubResults.appendChild(empty);
      return;
    }
    for (const item of results) {
      const row = document.createElement("div");
      row.className = "sk-row";
      const meta = document.createElement("div");
      meta.className = "sk-row-meta";
      const name = document.createElement("div");
      name.className = "sk-row-name";
      name.textContent = item.name || item.identifier || "skill";
      meta.appendChild(name);
      if (item.description) {
        const desc = document.createElement("div");
        desc.className = "sk-row-desc";
        desc.textContent = item.description;
        meta.appendChild(desc);
      }
      const tags = document.createElement("div");
      tags.className = "sk-row-tags";
      if (item.source) {
        const src = document.createElement("span");
        src.className = "sk-tag";
        src.textContent = item.source;
        tags.appendChild(src);
      }
      if (item.trust_level) {
        const trust = document.createElement("span");
        trust.className = "sk-tag";
        trust.dataset.kind = "hub";
        trust.textContent = item.trust_level;
        tags.appendChild(trust);
      }
      meta.appendChild(tags);

      const id = item.identifier || item.name || "";
      const already = !!(installed[id] || installed[item.name]);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sk-hub-install";
      btn.textContent = already ? "Installed" : "Install";
      btn.disabled = already || !!blockEditor.hubBusy;
      btn.addEventListener("click", () => void installHubSkill(id, btn));
      row.appendChild(meta);
      row.appendChild(btn);
      elSkHubResults.appendChild(row);
    }
  }

  async function searchSkillsHub() {
    const profile = blockEditor.profile || activeId || null;
    const q = String((elSkHubQ && elSkHubQ.value) || "").trim();
    if (!q) {
      setBlockEditorStatus("Enter a hub search query.", "bad");
      return;
    }
    setBlockEditorStatus("Searching skill hub…", "");
    try {
      const params = new URLSearchParams({
        q: q,
        source: "all",
        limit: "20",
      });
      if (profile && profile !== "_offline") params.set("profile", profile);
      const res = await fetch("/api/remote/skills/hub/search?" + params.toString());
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Hub search failed");
      blockEditor.hubResults = data;
      renderHubResults();
      const n = (data.results && data.results.length) || 0;
      setBlockEditorStatus("Hub search: " + n + " result(s).", "ok");
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    }
  }

  async function pollActionStatus(actionName, timeoutMs) {
    const deadline = Date.now() + (timeoutMs || 120000);
    while (Date.now() < deadline) {
      const res = await fetch(
        "/api/remote/actions/" + encodeURIComponent(actionName) + "/status?lines=40"
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Action status failed");
      if (!data.running) return data;
      await new Promise((r) => setTimeout(r, 1500));
    }
    throw new Error("Install timed out (still running on host)");
  }

  async function installHubSkill(identifier, btn) {
    const profile = blockEditor.profile || activeId || null;
    if (!identifier) return;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile selected.", "bad");
      return;
    }
    blockEditor.hubBusy = true;
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Installing…";
    }
    setBlockEditorStatus("Installing " + identifier + "…", "");
    try {
      const res = await fetch("/api/remote/skills/hub/install", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, profile }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Install failed");
      const action = data.name;
      if (action) {
        const status = await pollActionStatus(action, 180000);
        if (status.exit_code != null && status.exit_code !== 0) {
          throw new Error("Install exited with code " + status.exit_code);
        }
      }
      setBlockEditorStatus("Installed " + identifier + ". Reloading…", "ok");
      await loadSkillsContent({ keepMode: true });
      if (elSkHubQ && elSkHubQ.value) await searchSkillsHub();
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Install";
      }
    } finally {
      blockEditor.hubBusy = false;
    }
  }

  function toolsPreviewText(toolsets, vision) {
    const list = Array.isArray(toolsets) ? toolsets.filter(Boolean) : [];
    const catalogIds = HERMES_COMMON_TOOLSETS.map((r) => r.id);
    const total = catalogIds.length || 1;
    const enabled = catalogIds.filter((id) => list.includes(id)).length;
    const extras = list.filter((id) => !catalogIds.includes(id)).length;
    let next = enabled + " / " + total + " enabled";
    if (extras) next += " +" + extras;
    const vModel = vision && vision.model ? String(vision.model) : "";
    const vProv = vision && vision.provider ? String(vision.provider) : "";
    if (vProv || vModel) {
      next += " · vision " + (vProv || "?") + (vModel ? "/" + vModel.split("/").pop() : "");
    }
    return next;
  }

  function applyToolsPreview(agentId, toolsets, vision) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "tools");
    if (!node) return;
    const next = toolsPreviewText(toolsets, vision);
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  function currentToolsPreviewArgs() {
    const enabled =
      blockEditor.toolsEnabled instanceof Set
        ? Array.from(blockEditor.toolsEnabled)
        : Array.isArray(blockEditor.configDraft && blockEditor.configDraft.toolsets)
          ? blockEditor.configDraft.toolsets
          : [];
    const vision =
      (elToolsVisionProvider || elToolsVisionModel)
        ? {
            provider: elToolsVisionProvider ? elToolsVisionProvider.value : "",
            model: elToolsVisionModel ? elToolsVisionModel.value : "",
          }
        : ((blockEditor.configDraft &&
            blockEditor.configDraft.auxiliary &&
            blockEditor.configDraft.auxiliary.vision) ||
          {});
    return { toolsets: enabled, vision: vision };
  }

  async function refreshToolsLabel(agentId) {
    const id = agentId || activeId;
    if (!id || id === "_offline") return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "tools")) return;
    try {
      const q = "?profile=" + encodeURIComponent(id);
      const res = await fetch("/api/remote/config/tree" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return;
      const cfg = data.config && typeof data.config === "object" ? data.config : {};
      const toolsets = Array.isArray(cfg.toolsets) ? cfg.toolsets : [];
      const vision = (cfg.auxiliary && cfg.auxiliary.vision) || {};
      applyToolsPreview(id, toolsets, vision);
    } catch (_) {}
  }

  function stashToolsDraft() {
    if (blockEditor.kind !== "tools" || !blockEditor.configDraft) return;
    const enabled = blockEditor.toolsEnabled instanceof Set ? Array.from(blockEditor.toolsEnabled) : [];
    // Keep hermes-cli first, then remaining in catalog order, then any extras already present.
    const ordered = [];
    for (const row of HERMES_COMMON_TOOLSETS) {
      if (enabled.includes(row.id) && !ordered.includes(row.id)) ordered.push(row.id);
    }
    for (const id of enabled) {
      if (!ordered.includes(id)) ordered.push(id);
    }
    if (!ordered.includes("hermes-cli")) ordered.unshift("hermes-cli");
    blockEditor.configDraft.toolsets = ordered;

    const aux = blockEditor.configDraft.auxiliary || {};
    const vision = Object.assign({}, aux.vision || {});
    if (elToolsVisionProvider) vision.provider = elToolsVisionProvider.value || "openrouter";
    if (elToolsVisionModel) vision.model = String(elToolsVisionModel.value || "").trim();
    if (!vision.timeout) vision.timeout = 120;
    if (!vision.download_timeout) vision.download_timeout = 30;
    if (vision.base_url == null) vision.base_url = "";
    if (vision.api_key == null) vision.api_key = "";
    aux.vision = vision;
    blockEditor.configDraft.auxiliary = aux;

    const agent = blockEditor.configDraft.agent || {};
    if (elToolsImageMode) agent.image_input_mode = elToolsImageMode.value || "auto";
    blockEditor.configDraft.agent = agent;

    const pt = blockEditor.configDraft.platform_toolsets || {};
    const cliWanted = ["hermes-cli", "vision", "web", "browser"].filter((id) => ordered.includes(id));
    if (!cliWanted.includes("hermes-cli")) cliWanted.unshift("hermes-cli");
    pt.cli = cliWanted;
    blockEditor.configDraft.platform_toolsets = pt;

    const gw = blockEditor.configDraft.gateway || {};
    gw.trust_recent_files = true;
    if (!gw.trust_recent_files_seconds) gw.trust_recent_files_seconds = 600;
    blockEditor.configDraft.gateway = gw;
  }

  function renderToolsFields() {
    if (!elToolsFields) return;
    const enabled = blockEditor.toolsEnabled instanceof Set ? blockEditor.toolsEnabled : new Set();
    elToolsFields.innerHTML = "";
    for (const row of HERMES_COMMON_TOOLSETS) {
      const on = enabled.has(row.id);
      const wrap = document.createElement("div");
      wrap.className = "sk-row";
      const meta = document.createElement("div");
      meta.className = "sk-row-meta";
      const name = document.createElement("div");
      name.className = "sk-row-name";
      name.textContent = row.label;
      const desc = document.createElement("div");
      desc.className = "sk-row-desc";
      desc.textContent = row.desc || "";
      meta.appendChild(name);
      meta.appendChild(desc);
      const lab = document.createElement("label");
      lab.className = "sec-check";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = on;
      cb.disabled = !!row.required;
      cb.addEventListener("change", () => {
        if (row.required) {
          cb.checked = true;
          return;
        }
        if (cb.checked) enabled.add(row.id);
        else enabled.delete(row.id);
        blockEditor.toolsEnabled = enabled;
        if (elToolsSectionLabel) {
          elToolsSectionLabel.textContent = enabled.size + " enabled";
        }
        const prev = currentToolsPreviewArgs();
        applyToolsPreview(blockEditor.profile || activeId, prev.toolsets, prev.vision);
      });
      lab.appendChild(cb);
      lab.appendChild(document.createTextNode(row.required ? " required" : " on"));
      wrap.appendChild(meta);
      wrap.appendChild(lab);
      elToolsFields.appendChild(wrap);
    }
    if (elToolsSectionLabel) elToolsSectionLabel.textContent = enabled.size + " enabled";
  }

  function enableCommonToolsets() {
    const set = new Set((blockEditor.toolsEnabled && Array.from(blockEditor.toolsEnabled)) || []);
    for (const row of HERMES_COMMON_TOOLSETS) {
      set.add(row.id);
    }
    blockEditor.toolsEnabled = set;
    if (elToolsVisionProvider && (!elToolsVisionProvider.value || elToolsVisionProvider.value === "auto")) {
      elToolsVisionProvider.value = "openrouter";
    }
    if (elToolsVisionModel && !String(elToolsVisionModel.value || "").trim()) {
      elToolsVisionModel.value = "google/gemini-2.5-flash";
    }
    if (elToolsImageMode) elToolsImageMode.value = "auto";
    renderToolsFields();
    const prev = currentToolsPreviewArgs();
    applyToolsPreview(blockEditor.profile || activeId, prev.toolsets, prev.vision);
  }

  function clearExtraToolsets() {
    blockEditor.toolsEnabled = new Set(["hermes-cli"]);
    renderToolsFields();
    const prev = currentToolsPreviewArgs();
    applyToolsPreview(blockEditor.profile || activeId, prev.toolsets, prev.vision);
  }

  async function loadToolsContent() {
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading toolsets via gateway…", "");
    try {
      const q = "?profile=" + encodeURIComponent(profile);
      const res = await fetch("/api/remote/config/tree" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Failed to load config");
      const cfg = data.config && typeof data.config === "object" ? data.config : {};
      blockEditor.configDraft = deepClone(cfg);
      blockEditor.configBaseline = deepClone(cfg);
      blockEditor.profile = profile;
      blockEditor.mode = "tools";

      const toolsets = Array.isArray(cfg.toolsets) ? cfg.toolsets.slice() : ["hermes-cli"];
      if (!toolsets.includes("hermes-cli")) toolsets.unshift("hermes-cli");
      blockEditor.toolsEnabled = new Set(toolsets.filter(Boolean));

      const vision = (cfg.auxiliary && cfg.auxiliary.vision) || {};
      if (elToolsVisionProvider) {
        const prov = String(vision.provider || "openrouter");
        elToolsVisionProvider.value = [...elToolsVisionProvider.options].some((o) => o.value === prov)
          ? prov
          : "openrouter";
      }
      if (elToolsVisionModel) elToolsVisionModel.value = String(vision.model || "");
      if (elToolsImageMode) {
        const mode = String((cfg.agent && cfg.agent.image_input_mode) || "auto");
        elToolsImageMode.value = ["auto", "text", "native"].includes(mode) ? mode : "auto";
      }

      renderToolsFields();
      applyToolsPreview(profile, toolsets, vision);
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent =
          "profile " + profile + " · toolsets + auxiliary.vision";
        elBlockEditorPath.title = elBlockEditorPath.textContent;
      }
      setBlockEditorStatus(
        "Loaded Hermes tooling. Vision provider=" +
          String(vision.provider || "?") +
          " model=" +
          String(vision.model || "(empty)"),
        "ok"
      );
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  async function saveToolsContent() {
    const profile = blockEditor.profile || activeId || null;
    if (!profile) throw new Error("No profile/tab selected.");
    stashToolsDraft();
    const q = "?profile=" + encodeURIComponent(profile);
    const res = await fetch("/api/remote/config" + q, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config: blockEditor.configDraft || {}, profile: profile }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.detail || data.error || "Save failed");
    blockEditor.configBaseline = deepClone(blockEditor.configDraft);
    const toolsets = (blockEditor.configDraft && blockEditor.configDraft.toolsets) || [];
    const vision =
      (blockEditor.configDraft && blockEditor.configDraft.auxiliary && blockEditor.configDraft.auxiliary.vision) ||
      {};
    applyToolsPreview(profile, toolsets, vision);
    setBlockEditorStatus(
      "Saved tooling. Restart trading gateway if an open session still lacks vision.",
      "ok"
    );
  }

  async function loadSkillsContent(opts) {
    const options = opts || {};
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading skills via gateway…", "");
    try {
      const q = "?profile=" + encodeURIComponent(profile);
      const res = await fetch("/api/remote/skills" + q);
      const data = await res.json().catch(() => ([]));
      if (!res.ok) {
        const detail = data && (data.detail || data.error);
        throw new Error(detail || "Load failed");
      }
      blockEditor.skillsList = Array.isArray(data) ? data : [];
      blockEditor.profile = profile;
      blockEditor.mode = "skills";
      if (!options.keepMode) blockEditor.skillsMode = "installed";
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent =
          "profile " + profile + " · " + blockEditor.skillsList.length + " skills";
        elBlockEditorPath.title = elBlockEditorPath.textContent;
      }
      syncSkModeTabs();
      renderSkNav();
      renderSkFields();
      if (blockEditor.skillsMode === "hub") renderHubResults();
      applySkillsPreview(profile, blockEditor.skillsList);
      setBlockEditorStatus("Loaded skills for profile " + profile + ".", "ok");
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  function applyTriggerPreview(agentId, jobs) {
    const agent = agents.find((a) => a.id === agentId);
    if (!agent) return;
    const node = agent.nodes.find((n) => n.id === "trigger");
    if (!node) return;
    const list = Array.isArray(jobs) ? jobs : [];
    const enabled = list.filter((j) => j && j.enabled !== false && j.state !== "paused").length;
    const next = list.length
      ? enabled + " / " + list.length + " active · cron"
      : "no cron jobs";
    if (node.body === next) return;
    node.body = next;
    if (agentId === activeId) renderCanvas();
    saveLayouts();
  }

  async function refreshTriggerLabel(agentId) {
    const id = agentId || activeId;
    if (!id || id === "_offline") return;
    const agent = agents.find((a) => a.id === id);
    if (!agent || !agent.nodes.some((n) => n.id === "trigger")) return;
    try {
      const q = "?profile=" + encodeURIComponent(id);
      const res = await fetch("/api/remote/cron/jobs" + q);
      const data = await res.json().catch(() => ([]));
      if (!res.ok) return;
      applyTriggerPreview(id, Array.isArray(data) ? data : []);
    } catch (_) {}
  }

  function updateChatScheduleUI() {
    const type = elChatScheduleType ? elChatScheduleType.value : "interval";
    document.querySelectorAll(".chat-schedule-ui").forEach((u) => {
      u.hidden = true;
      u.classList.remove("schedule-ui-grid");
    });
    const activeIdUi = type === "loop" ? "interval" : type;
    const active =
      activeIdUi === "interval"
        ? elChatUiInterval
        : activeIdUi === "daily"
          ? elChatUiDaily
          : activeIdUi === "weekly"
            ? elChatUiWeekly
            : activeIdUi === "once"
              ? elChatUiOnce
              : activeIdUi === "cron"
                ? elChatUiCron
                : null;
    if (elChatLoopHint) elChatLoopHint.style.display = type === "loop" ? "" : "none";
    if (!active) return;
    active.hidden = false;
    if (type === "interval" || type === "loop" || type === "weekly") {
      active.classList.add("schedule-ui-grid");
    }
  }

  function hermesMinutesFromInterval(val, unit) {
    const n = Math.max(1, parseInt(val, 10) || 1);
    if (unit === "h") return n * 60;
    if (unit === "d") return n * 1440;
    if (unit === "s") return Math.max(1, Math.ceil(n / 60));
    return n;
  }

  function buildHermesScheduleString() {
    const type = elChatScheduleType ? elChatScheduleType.value : "interval";
    if (type === "loop" || type === "interval") {
      const mins = hermesMinutesFromInterval(
        elChatIntervalVal && elChatIntervalVal.value,
        elChatIntervalUnit && elChatIntervalUnit.value
      );
      return "every " + mins + "m";
    }
    if (type === "daily") {
      const t = (elChatDailyTime && elChatDailyTime.value) || "08:30";
      const hm = t.split(":");
      return parseInt(hm[1], 10) + " " + parseInt(hm[0], 10) + " * * *";
    }
    if (type === "weekly") {
      const d = (elChatWeeklyDay && elChatWeeklyDay.value) || "1";
      const t = (elChatWeeklyTime && elChatWeeklyTime.value) || "09:00";
      const hm = t.split(":");
      return parseInt(hm[1], 10) + " " + parseInt(hm[0], 10) + " * * " + d;
    }
    if (type === "once") {
      const dt = elChatOnceDatetime && elChatOnceDatetime.value;
      if (!dt) return "";
      return dt.length === 16 ? dt + ":00" : dt;
    }
    if (type === "cron") {
      return String((elChatCronExpr && elChatCronExpr.value) || "").trim();
    }
    return "";
  }

  function formatTriggerScheduleDisplay() {
    const type = elChatScheduleType ? elChatScheduleType.value : "interval";
    const hermes = buildHermesScheduleString();
    if (type === "loop") {
      const num = (elChatIntervalVal && elChatIntervalVal.value) || "15";
      const unit = (elChatIntervalUnit && elChatIntervalUnit.value) || "m";
      const map = { s: "seconds", m: "minutes", h: "hours", d: "days" };
      return "Loop/delay: " + num + " " + (map[unit] || unit) + " → Hermes " + hermes;
    }
    if (type === "interval") {
      const num = (elChatIntervalVal && elChatIntervalVal.value) || "15";
      const unit = (elChatIntervalUnit && elChatIntervalUnit.value) || "m";
      const map = { s: "seconds", m: "minutes", h: "hours", d: "days" };
      return "Every " + num + " " + (map[unit] || unit) + " → Hermes " + hermes;
    }
    if (type === "daily") {
      const t = (elChatDailyTime && elChatDailyTime.value) || "08:30";
      return "Daily at " + t + " → Hermes " + hermes;
    }
    if (type === "weekly") {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const d = parseInt((elChatWeeklyDay && elChatWeeklyDay.value) || "1", 10);
      const t = (elChatWeeklyTime && elChatWeeklyTime.value) || "09:00";
      return "Weekly (" + (days[d] || d) + ") at " + t + " → Hermes " + hermes;
    }
    if (type === "once") {
      const dt = (elChatOnceDatetime && elChatOnceDatetime.value) || "";
      return dt ? "Once on " + dt.replace("T", " ") + " → Hermes " + hermes : "Pick a date/time";
    }
    return hermes ? "Cron: " + hermes : "Enter a cron expression";
  }

  function refreshTriggerPreview() {
    if (elTrgPreview) elTrgPreview.textContent = formatTriggerScheduleDisplay();
  }

  function renderTriggerRunStatus(job) {
    if (!elTrgRunbox) return;
    if (!job || !job.id) {
      elTrgRunbox.hidden = true;
      if (elTrgLastError) {
        elTrgLastError.hidden = true;
        elTrgLastError.textContent = "";
      }
      return;
    }
    elTrgRunbox.hidden = false;
    if (elTrgLastRun) {
      elTrgLastRun.textContent = job.last_run_at
        ? String(job.last_run_at).replace("T", " ").slice(0, 19)
        : "never";
    }
    const status = job.last_status || (job.enabled === false || job.state === "paused" ? "paused" : "scheduled");
    if (elTrgLastStatus) {
      elTrgLastStatus.textContent = String(status);
      elTrgLastStatus.style.color =
        status === "error" || status === "failed"
          ? "#991b1b"
          : status === "ok" || status === "success"
            ? "#166534"
            : "#0f172a";
    }
    const err = String(job.last_error || "").trim();
    if (elTrgLastError) {
      if (err) {
        elTrgLastError.hidden = false;
        elTrgLastError.textContent = err;
      } else {
        elTrgLastError.hidden = true;
        elTrgLastError.textContent = "";
      }
    }
  }

  function snapshotTriggerDraft() {
    return JSON.stringify({
      id: blockEditor.cronSelectedId,
      name: elTrgName ? elTrgName.value : "",
      prompt: elTrgPrompt ? elTrgPrompt.value : "",
      enabled: !!(elTrgEnabled && elTrgEnabled.checked),
      includeTasks: !!(elTrgIncludeTasks && elTrgIncludeTasks.checked),
      type: elChatScheduleType ? elChatScheduleType.value : "interval",
      intervalVal: elChatIntervalVal ? elChatIntervalVal.value : "",
      intervalUnit: elChatIntervalUnit ? elChatIntervalUnit.value : "",
      dailyTime: elChatDailyTime ? elChatDailyTime.value : "",
      weeklyDay: elChatWeeklyDay ? elChatWeeklyDay.value : "",
      weeklyTime: elChatWeeklyTime ? elChatWeeklyTime.value : "",
      once: elChatOnceDatetime ? elChatOnceDatetime.value : "",
      cron: elChatCronExpr ? elChatCronExpr.value : "",
    });
  }

  function markTriggerDirty() {
    if (blockEditor.kind !== "trigger") return;
    blockEditor.cronDirty = snapshotTriggerDraft() !== blockEditor.cronBaseline;
    refreshTriggerPreview();
  }

  function resetTriggerFormDefaults() {
    if (elTrgName) elTrgName.value = "";
    if (elTrgPrompt) elTrgPrompt.value = "";
    if (elTrgIncludeTasks) elTrgIncludeTasks.checked = false;
    blockEditor.includeCanvasTasks = false;
    if (elTrgEnabled) elTrgEnabled.checked = true;
    if (elChatScheduleType) elChatScheduleType.value = "interval";
    if (elChatIntervalVal) elChatIntervalVal.value = "15";
    if (elChatIntervalUnit) elChatIntervalUnit.value = "m";
    if (elChatDailyTime) elChatDailyTime.value = "08:30";
    if (elChatWeeklyDay) elChatWeeklyDay.value = "1";
    if (elChatWeeklyTime) elChatWeeklyTime.value = "09:00";
    if (elChatOnceDatetime) elChatOnceDatetime.value = "";
    if (elChatCronExpr) elChatCronExpr.value = "";
    updateChatScheduleUI();
    refreshTriggerPreview();
    renderTriggerRunStatus(null);
  }

  function populateTriggerFromJob(job) {
    resetTriggerFormDefaults();
    if (!job) {
      blockEditor.cronSelectedId = null;
      if (elTrgSectionLabel) elTrgSectionLabel.textContent = "New job";
      if (elTrgPause) elTrgPause.textContent = "Pause";
      blockEditor.cronBaseline = snapshotTriggerDraft();
      blockEditor.cronDirty = false;
      return;
    }
    blockEditor.cronSelectedId = job.id || null;
    const profile = blockEditor.profile || activeId || null;
    const include = inferIncludeCanvasTasks(job.prompt || "", profile, job.id);
    if (include) setIncludeCanvasTasks(profile, job.id, true);
    if (elTrgIncludeTasks) elTrgIncludeTasks.checked = getIncludeCanvasTasks(profile, job.id);
    blockEditor.includeCanvasTasks = !!(elTrgIncludeTasks && elTrgIncludeTasks.checked);
    if (elTrgName) elTrgName.value = job.name || "";
    if (elTrgPrompt) elTrgPrompt.value = stripCanvasTasksAppendix(job.prompt || "");
    const enabled = job.enabled !== false && job.state !== "paused";
    if (elTrgEnabled) elTrgEnabled.checked = enabled;
    if (elTrgPause) elTrgPause.textContent = enabled ? "Pause" : "Resume";
    if (elTrgSectionLabel) {
      elTrgSectionLabel.textContent =
        (job.name || job.id || "job") +
        (job.schedule_display ? " · " + job.schedule_display : "");
    }
    renderTriggerRunStatus(job);
    const sch = job.schedule || {};
    if (sch.kind === "interval") {
      if (elChatScheduleType) elChatScheduleType.value = "interval";
      let mins = parseInt(sch.minutes, 10) || 15;
      if (mins % 1440 === 0) {
        if (elChatIntervalVal) elChatIntervalVal.value = String(mins / 1440);
        if (elChatIntervalUnit) elChatIntervalUnit.value = "d";
      } else if (mins % 60 === 0) {
        if (elChatIntervalVal) elChatIntervalVal.value = String(mins / 60);
        if (elChatIntervalUnit) elChatIntervalUnit.value = "h";
      } else {
        if (elChatIntervalVal) elChatIntervalVal.value = String(mins);
        if (elChatIntervalUnit) elChatIntervalUnit.value = "m";
      }
    } else if (sch.kind === "once") {
      if (elChatScheduleType) elChatScheduleType.value = "once";
      const raw = String(sch.run_at || "").replace("Z", "").replace(/\.\d+/, "");
      const local = raw.includes("T") ? raw.slice(0, 16) : raw;
      if (elChatOnceDatetime) elChatOnceDatetime.value = local;
    } else if (sch.kind === "cron" || sch.expr) {
      const cron = String(sch.expr || sch.display || "").trim();
      const p = cron.split(/\s+/);
      if (p.length >= 5 && p[2] === "*" && p[3] === "*" && p[4] === "*") {
        if (elChatScheduleType) elChatScheduleType.value = "daily";
        if (elChatDailyTime) {
          elChatDailyTime.value =
            String(p[1]).padStart(2, "0") + ":" + String(p[0]).padStart(2, "0");
        }
      } else if (p.length >= 5 && p[2] === "*" && p[3] === "*" && p[4] !== "*") {
        if (elChatScheduleType) elChatScheduleType.value = "weekly";
        if (elChatWeeklyDay) elChatWeeklyDay.value = p[4];
        if (elChatWeeklyTime) {
          elChatWeeklyTime.value =
            String(p[1]).padStart(2, "0") + ":" + String(p[0]).padStart(2, "0");
        }
      } else {
        if (elChatScheduleType) elChatScheduleType.value = "cron";
        if (elChatCronExpr) elChatCronExpr.value = cron;
      }
    }
    updateChatScheduleUI();
    refreshTriggerPreview();
    blockEditor.cronBaseline = snapshotTriggerDraft();
    blockEditor.cronDirty = false;
  }

  function renderTrgNav() {
    if (!elTrgNav) return;
    elTrgNav.innerHTML = "";
    const jobs = blockEditor.cronJobs || [];
    const btnNew = document.createElement("button");
    btnNew.type = "button";
    btnNew.className = "trg-nav-item";
    btnNew.setAttribute("aria-current", blockEditor.cronSelectedId == null ? "true" : "false");
    btnNew.innerHTML = '<span class="trg-nav-name">+ New job</span>';
    btnNew.addEventListener("click", () => {
      if (isBlockEditorDirty() && !window.confirm("Discard unsaved changes?")) return;
      populateTriggerFromJob(null);
      renderTrgNav();
    });
    elTrgNav.appendChild(btnNew);
    for (const job of jobs) {
      if (!job || !job.id) continue;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "trg-nav-item";
      const paused = job.enabled === false || job.state === "paused";
      if (paused) btn.classList.add("is-paused");
      btn.setAttribute(
        "aria-current",
        blockEditor.cronSelectedId === job.id ? "true" : "false"
      );
      const name = document.createElement("span");
      name.className = "trg-nav-name";
      name.textContent = job.name || job.id;
      const meta = document.createElement("span");
      meta.className = "trg-nav-meta";
      meta.textContent =
        (paused ? "paused · " : "") +
        (job.schedule_display || (job.schedule && job.schedule.display) || "schedule");
      btn.appendChild(name);
      btn.appendChild(meta);
      btn.addEventListener("click", () => {
        if (blockEditor.cronSelectedId === job.id) return;
        if (isBlockEditorDirty() && !window.confirm("Discard unsaved changes?")) return;
        populateTriggerFromJob(job);
        renderTrgNav();
      });
      elTrgNav.appendChild(btn);
    }
  }

  async function loadTriggerContent(opts) {
    const options = opts || {};
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading cron jobs via gateway…", "");
    try {
      const q = "?profile=" + encodeURIComponent(profile);
      const res = await fetch("/api/remote/cron/jobs" + q);
      const data = await res.json().catch(() => ([]));
      if (!res.ok) {
        const detail = data && (data.detail || data.error);
        throw new Error(detail || "Load failed");
      }
      const jobs = Array.isArray(data) ? data : [];
      blockEditor.cronJobs = jobs;
      blockEditor.profile = profile;
      blockEditor.mode = "trigger";
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent =
          "profile " + profile + " · " + jobs.length + " cron job(s)";
        elBlockEditorPath.title = elBlockEditorPath.textContent;
      }
      let selected = null;
      if (!options.keepSelection) {
        selected = jobs[0] || null;
      } else if (blockEditor.cronSelectedId) {
        selected = jobs.find((j) => j.id === blockEditor.cronSelectedId) || null;
      }
      populateTriggerFromJob(selected);
      renderTrgNav();
      applyTriggerPreview(profile, jobs);
      setBlockEditorStatus("Loaded " + jobs.length + " cron job(s) for " + profile + ".", "ok");
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  async function saveTriggerJob() {
    const profile = blockEditor.profile || activeId || null;
    if (!profile || profile === "_offline") throw new Error("No profile/tab selected.");
    const name = String((elTrgName && elTrgName.value) || "").trim();
    const promptUi = String((elTrgPrompt && elTrgPrompt.value) || "").trim();
    const includeTasks = !!(elTrgIncludeTasks && elTrgIncludeTasks.checked);
    blockEditor.includeCanvasTasks = includeTasks;
    const prompt = hermesPromptFromUi(promptUi, profile, includeTasks);
    const schedule = buildHermesScheduleString();
    if (!schedule) throw new Error("Schedule is incomplete.");
    if (!promptUi && !includeTasks) throw new Error("Prompt is required (or enable Include canvas tasks).");
    if (includeTasks && !canvasTaskBodies(profile).length) {
      throw new Error("Add canvas TASK cards first, or uncheck Include canvas tasks.");
    }
    const wantEnabled = !!(elTrgEnabled && elTrgEnabled.checked);
    const jobId = blockEditor.cronSelectedId;
    let job;
    if (!jobId) {
      const res = await fetch("/api/remote/cron/jobs?profile=" + encodeURIComponent(profile), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "canvas-job",
          prompt,
          schedule,
          deliver: "local",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Create failed");
      job = data;
      if (!wantEnabled && job && job.id) {
        const p = await fetch(
          "/api/remote/cron/jobs/" +
            encodeURIComponent(job.id) +
            "/pause?profile=" +
            encodeURIComponent(profile),
          { method: "POST" }
        );
        const pd = await p.json().catch(() => ({}));
        if (p.ok) job = pd;
      }
    } else {
      const res = await fetch(
        "/api/remote/cron/jobs/" +
          encodeURIComponent(jobId) +
          "?profile=" +
          encodeURIComponent(profile),
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            updates: { name: name || "canvas-job", prompt, schedule },
          }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Update failed");
      job = data;
      const currentlyOn = job.enabled !== false && job.state !== "paused";
      if (wantEnabled !== currentlyOn) {
        const action = wantEnabled ? "resume" : "pause";
        const p = await fetch(
          "/api/remote/cron/jobs/" +
            encodeURIComponent(jobId) +
            "/" +
            action +
            "?profile=" +
            encodeURIComponent(profile),
          { method: "POST" }
        );
        const pd = await p.json().catch(() => ({}));
        if (!p.ok) throw new Error(pd.detail || pd.error || action + " failed");
        job = pd;
      }
    }
    blockEditor.cronSelectedId = job && job.id ? job.id : blockEditor.cronSelectedId;
    if (blockEditor.cronSelectedId) {
      setIncludeCanvasTasks(profile, blockEditor.cronSelectedId, includeTasks);
    }
    await loadTriggerContent({ keepSelection: true });
    return job;
  }

  async function triggerJobAction(action) {
    const profile = blockEditor.profile || activeId || null;
    const jobId = blockEditor.cronSelectedId;
    if (!profile || !jobId) {
      setBlockEditorStatus("Select a saved job first.", "bad");
      return;
    }
    if (action === "delete" && !window.confirm("Delete this cron job?")) return;
    blockEditor.busy = true;
    setBlockEditorStatus(action + "…", "");
    try {
      if (action === "trigger") {
        const include = getIncludeCanvasTasks(profile, jobId);
        if (include && !canvasTaskBodies(profile).length) {
          throw new Error("Add canvas TASK cards first, or uncheck Include canvas tasks.");
        }
        if (include) await syncCronIncludeTaskPrompts(profile);
      }
      const method = action === "delete" ? "DELETE" : "POST";
      const path =
        action === "delete"
          ? "/api/remote/cron/jobs/" + encodeURIComponent(jobId)
          : "/api/remote/cron/jobs/" + encodeURIComponent(jobId) + "/" + action;
      const res = await fetch(path + "?profile=" + encodeURIComponent(profile), { method });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || action + " failed");
      if (action === "delete") {
        ensureCronPrefs();
        if (fileConfig.cronPrefs[profile]) delete fileConfig.cronPrefs[profile][jobId];
        schedulePersist(true);
        blockEditor.cronSelectedId = null;
        await loadTriggerContent({ keepSelection: false });
        setBlockEditorStatus("Deleted cron job.", "ok");
      } else {
        await loadTriggerContent({ keepSelection: true });
        setBlockEditorStatus(action + " ok.", "ok");
        if (action === "trigger") burstCronFeed(120000);
      }
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
    }
  }

  function setEditorChrome(kind, mode) {
    const isConfig = kind === "config";
    const isSecrets = kind === "secrets";
    const isMemory = kind === "memory";
    const isSkills = kind === "skills";
    const isTrigger = kind === "trigger";
    const isTools = kind === "tools";
    const showForm = isConfig && mode === "form";
    const showSecrets = isSecrets;
    const showSkills = isSkills;
    const showTrigger = isTrigger;
    const showTools = isTools;
    const showText = !showForm && !showSecrets && !showSkills && !showTrigger && !showTools;
    if (elCfgPanel) elCfgPanel.hidden = !showForm;
    if (elSecPanel) elSecPanel.hidden = !showSecrets;
    if (elSkPanel) elSkPanel.hidden = !showSkills;
    if (elTrgPanel) elTrgPanel.hidden = !showTrigger;
    if (elToolsPanel) elToolsPanel.hidden = !showTools;
    if (elMemTabs) elMemTabs.hidden = !isMemory;
    if (elBlockEditorText) elBlockEditorText.hidden = !showText;
    if (elBlockEditorAdvanced) {
      elBlockEditorAdvanced.hidden = !isConfig;
      elBlockEditorAdvanced.dataset.active = mode === "advanced" ? "1" : "0";
      elBlockEditorAdvanced.textContent = mode === "advanced" ? "Form view" : "Advanced";
    }
    if (elBlockEditorSave) elBlockEditorSave.hidden = isSecrets || isSkills;
    if (isMemory) syncMemTabs();
    if (isSkills) syncSkModeTabs();
  }

  const YAML_SECTION_ORDER = [
    "model",
    "providers",
    "fallback_providers",
    "credential_pool_strategies",
    "toolsets",
    "agent",
    "terminal",
    "display",
    "memory",
    "compression",
    "security",
    "approvals",
    "browser",
    "web",
    "auxiliary",
    "delegation",
    "voice",
    "tts",
    "stt",
    "logging",
    "mcp",
    "skills",
    "cron",
    "hooks",
    "checkpoints",
    "streaming",
    "gateway",
    "discord",
    "telegram",
    "slack",
    "whatsapp",
    "platform_toolsets",
    "tools",
    "sessions",
    "kanban",
  ];

  function flattenConfigLeaves(value, prefix) {
    const out = [];
    if (value == null || typeof value !== "object" || Array.isArray(value)) {
      out.push([prefix, value]);
      return out;
    }
    const keys = Object.keys(value);
    if (!keys.length) {
      out.push([prefix, value]);
      return out;
    }
    for (const key of keys) {
      const path = prefix ? prefix + "." + key : key;
      const child = value[key];
      if (child != null && typeof child === "object" && !Array.isArray(child)) {
        out.push.apply(out, flattenConfigLeaves(child, path));
      } else {
        out.push([path, child]);
      }
    }
    return out;
  }

  function inferFieldMeta(path, value) {
    const schemaField =
      blockEditor.schema && blockEditor.schema.fields && blockEditor.schema.fields[path]
        ? blockEditor.schema.fields[path]
        : null;
    if (schemaField && schemaField.type) {
      return {
        type: schemaField.type === "bool" ? "boolean" : schemaField.type,
        description: schemaField.description || "",
        options: schemaField.options,
      };
    }
    if (typeof value === "boolean") return { type: "boolean", description: "", options: null };
    if (typeof value === "number") return { type: "number", description: "", options: null };
    if (Array.isArray(value)) return { type: "list", description: "", options: null };
    if (path === "display.personality") return { type: "select", description: "Active personality overlay", options: [""] };
    if (path === "terminal.backend") {
      return {
        type: "select",
        description: "Terminal execution backend",
        options: ["local", "docker", "ssh", "modal", "daytona", "singularity"],
      };
    }
    return { type: "string", description: "", options: null };
  }

  function personalitySelectOptions(config, schemaField) {
    const opts = Array.isArray(schemaField && schemaField.options) ? schemaField.options.slice() : [""];
    const custom = getNested(config, "agent.personalities");
    if (custom && typeof custom === "object" && !Array.isArray(custom)) {
      for (const name of Object.keys(custom)) {
        if (name && !opts.includes(name)) opts.push(name);
      }
    }
    const builtins = ["helpful", "concise", "technical", "creative", "teacher", "kawaii", "catgirl", "pirate"];
    for (const name of builtins) {
      if (!opts.includes(name)) opts.push(name);
    }
    return opts;
  }

  function yamlSectionList() {
    const draft = blockEditor.configDraft || {};
    const keys = Object.keys(draft);
    const ordered = [];
    for (const id of YAML_SECTION_ORDER) {
      if (keys.includes(id)) ordered.push(id);
    }
    for (const id of keys.sort()) {
      if (!ordered.includes(id)) ordered.push(id);
    }
    return ordered.map((id) => {
      const val = draft[id];
      let count = 1;
      if (val != null && typeof val === "object" && !Array.isArray(val)) {
        count = Math.max(1, flattenConfigLeaves(val, id).length);
      }
      return { id: id, count: count };
    });
  }

  function fieldsForYamlSection(sectionId) {
    const draft = blockEditor.configDraft || {};
    if (!Object.prototype.hasOwnProperty.call(draft, sectionId)) return [];
    const val = draft[sectionId];
    let pairs;
    if (val != null && typeof val === "object" && !Array.isArray(val)) {
      pairs = flattenConfigLeaves(val, sectionId);
    } else {
      pairs = [[sectionId, val]];
    }
    const q = (blockEditor.search || "").trim().toLowerCase();
    const out = [];
    for (const [path, value] of pairs) {
      const meta = inferFieldMeta(path, value);
      if (q) {
        const hay = (path + " " + (meta.description || "") + " " + prettyFieldName(path)).toLowerCase();
        if (!hay.includes(q)) continue;
      }
      out.push([path, meta]);
    }
    return out;
  }

  function renderCfgNav() {
    if (!elCfgNav) return;
    elCfgNav.innerHTML = "";
    const cats = yamlSectionList();
    if (!cats.some((c) => c.id === blockEditor.activeCategory) && cats[0]) {
      blockEditor.activeCategory = cats[0].id;
    }
    for (const cat of cats) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cfg-nav-btn";
      btn.setAttribute("aria-current", cat.id === blockEditor.activeCategory ? "true" : "false");
      btn.innerHTML =
        "<span>" +
        prettyCategory(cat.id) +
        '</span><span class="cfg-nav-count">' +
        cat.count +
        "</span>";
      btn.addEventListener("click", () => {
        blockEditor.activeCategory = cat.id;
        renderCfgNav();
        renderCfgFields();
      });
      elCfgNav.appendChild(btn);
    }
  }

  function renderCfgFields() {
    if (!elCfgFields) return;
    elCfgFields.innerHTML = "";
    if (elCfgSectionLabel) elCfgSectionLabel.textContent = prettyCategory(blockEditor.activeCategory);
    const rows = fieldsForYamlSection(blockEditor.activeCategory);
    if (!rows.length) {
      const empty = document.createElement("div");
      empty.className = "cfg-empty";
      empty.textContent = blockEditor.search ? "No fields match this filter." : "No fields in this section.";
      elCfgFields.appendChild(empty);
      return;
    }
    const draft = blockEditor.configDraft || {};
    for (const [key, meta] of rows) {
      const row = document.createElement("div");
      row.className = "cfg-row";
      const metaEl = document.createElement("div");
      metaEl.className = "cfg-row-meta";
      const title = document.createElement("div");
      title.className = "cfg-row-title";
      title.textContent = prettyFieldName(key);
      const keyEl = document.createElement("div");
      keyEl.className = "cfg-row-key";
      keyEl.textContent = key;
      metaEl.appendChild(title);
      metaEl.appendChild(keyEl);
      const descText = String(meta.description || "").trim();
      if (descText && descText.toLowerCase() !== prettyFieldName(key).toLowerCase()) {
        const desc = document.createElement("div");
        desc.className = "cfg-row-desc";
        desc.textContent = descText;
        metaEl.appendChild(desc);
      }
      const controlWrap = document.createElement("div");
      controlWrap.className = "cfg-row-control";
      const value = getNested(draft, key);
      const type = meta.type || "string";
      let control = null;
      if (type === "boolean" || type === "bool") {
        control = document.createElement("input");
        control.type = "checkbox";
        control.checked = Boolean(value);
        control.addEventListener("change", () => {
          setNested(blockEditor.configDraft, key, control.checked);
        });
      } else if (type === "number") {
        control = document.createElement("input");
        control.type = "number";
        control.value = value == null || value === "" ? "" : String(value);
        control.addEventListener("change", () => {
          const raw = control.value;
          setNested(blockEditor.configDraft, key, raw === "" ? 0 : Number(raw));
        });
      } else if (type === "select" || key === "display.personality") {
        control = document.createElement("select");
        const options =
          key === "display.personality"
            ? personalitySelectOptions(draft, meta)
            : Array.isArray(meta.options)
              ? meta.options
              : [""];
        for (const opt of options) {
          const o = document.createElement("option");
          o.value = String(opt);
          o.textContent = opt === "" ? "(none)" : String(opt);
          control.appendChild(o);
        }
        const cur = value == null ? "" : String(value);
        if (cur && ![...control.options].some((o) => o.value === cur)) {
          const o = document.createElement("option");
          o.value = cur;
          o.textContent = cur;
          control.appendChild(o);
        }
        control.value = cur;
        control.addEventListener("change", () => {
          setNested(blockEditor.configDraft, key, control.value);
        });
      } else if (type === "list") {
        control = document.createElement("input");
        control.type = "text";
        control.placeholder = "comma,separated,values";
        control.value = Array.isArray(value) ? value.join(", ") : value == null ? "" : String(value);
        control.addEventListener("change", () => {
          const list = control.value
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          setNested(blockEditor.configDraft, key, list);
        });
      } else {
        control = document.createElement("input");
        control.type = "text";
        control.value = value == null ? "" : String(value);
        control.addEventListener("change", () => {
          setNested(blockEditor.configDraft, key, control.value);
        });
      }
      controlWrap.appendChild(control);
      row.appendChild(metaEl);
      row.appendChild(controlWrap);
      elCfgFields.appendChild(row);
    }
  }

  function renderConfigForm() {
    renderCfgNav();
    renderCfgFields();
  }

  async function ensureSchema() {
    if (schemaCache && schemaCache.fields) {
      blockEditor.schema = schemaCache;
      blockEditor.categoryOrder = schemaCache.category_order || [];
      return schemaCache;
    }
    const res = await fetch("/api/remote/config/schema");
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.detail || data.error || "Failed to load config schema");
    schemaCache = data;
    blockEditor.schema = data;
    blockEditor.categoryOrder = data.category_order || [];
    return data;
  }

  async function loadTerminalForm() {
    const profile = activeId || null;
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    if (elBlockEditorAdvanced) elBlockEditorAdvanced.disabled = true;
    setBlockEditorStatus("Loading config.yaml tree via gateway…", "");
    try {
      await ensureSchema().catch(() => null);
      const q = profile ? "?profile=" + encodeURIComponent(profile) : "";
      const res = await fetch("/api/remote/config/tree" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Failed to load config tree");
      const tree = data.config && typeof data.config === "object" ? data.config : {};
      blockEditor.configDraft = deepClone(tree);
      blockEditor.configBaseline = deepClone(tree);
      blockEditor.profile = profile;
      blockEditor.mode = "form";
      blockEditor.activeCategory = tree.model ? "model" : Object.keys(tree)[0] || "model";
      setEditorChrome("config", "form");
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent = (data.path || "config.yaml") + " · YAML sections";
        elBlockEditorPath.title = data.path || "";
      }
      renderConfigForm();
      setBlockEditorStatus("Loaded nested config.yaml from remote Hermes.", "ok");
      applyTerminalModelFromConfig(profile || activeId, tree);
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
      if (elBlockEditorAdvanced) elBlockEditorAdvanced.disabled = false;
    }
  }

  async function loadTerminalConfigRaw() {
    const profile = activeId || null;
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading config.yaml via gateway…", "");
    try {
      const q = profile ? "?profile=" + encodeURIComponent(profile) : "";
      const res = await fetch("/api/remote/config/raw" + q);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Failed to load config.yaml");
      const yaml = data.yaml != null ? String(data.yaml) : "";
      elBlockEditorText.value = yaml;
      blockEditor.baseline = yaml;
      blockEditor.profile = profile;
      if (elBlockEditorPath) {
        elBlockEditorPath.textContent = (data.path || "config.yaml") + " · advanced";
        elBlockEditorPath.title = data.path || "";
      }
      setBlockEditorStatus("Loaded raw config.yaml from remote Hermes.", "ok");
      applyTerminalModelBody(profile || activeId, yaml);
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  async function loadSoulContent() {
    const profile = activeId || null;
    if (!profile) {
      setBlockEditorStatus("No profile/tab selected.", "bad");
      return;
    }
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    if (elBlockEditorReload) elBlockEditorReload.disabled = true;
    setBlockEditorStatus("Loading SOUL.md via gateway…", "");
    try {
      const res = await fetch("/api/remote/profiles/" + encodeURIComponent(profile) + "/soul");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || data.error || "Failed to load SOUL.md");
      const content = data.content != null ? String(data.content) : "";
      elBlockEditorText.value = content;
      blockEditor.baseline = content;
      blockEditor.profile = profile;
      if (elBlockEditorPath) {
        const pathHint = "/root/.hermes/profiles/" + profile + "/SOUL.md";
        elBlockEditorPath.textContent = data.exists === false ? pathHint + " (new)" : pathHint;
        elBlockEditorPath.title = elBlockEditorPath.textContent;
      }
      setBlockEditorStatus("Loaded SOUL.md from remote Hermes (profile: " + profile + ").", "ok");
      applySoulPreview(profile, content);
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
      if (elBlockEditorReload) elBlockEditorReload.disabled = false;
    }
  }

  async function reloadBlockEditor() {
    if (blockEditor.kind === "soul") await loadSoulContent();
    else if (blockEditor.kind === "secrets") await loadSecretsContent();
    else if (blockEditor.kind === "memory") await loadMemoryContent();
    else if (blockEditor.kind === "skills") await loadSkillsContent({ keepMode: true });
    else if (blockEditor.kind === "trigger") await loadTriggerContent({ keepSelection: true });
    else if (blockEditor.kind === "tools") await loadToolsContent();
    else if (blockEditor.kind === "config") {
      if (blockEditor.mode === "advanced") await loadTerminalConfigRaw();
      else await loadTerminalForm();
    }
  }

  async function toggleTerminalAdvanced() {
    if (blockEditor.kind !== "config" || blockEditor.busy) return;
    if (blockEditor.mode === "form") {
      if (isBlockEditorDirty() && !window.confirm("Switch to Advanced YAML? Unsaved form edits will be discarded.")) {
        return;
      }
      blockEditor.mode = "advanced";
      setEditorChrome("config", "advanced");
      await loadTerminalConfigRaw();
      elBlockEditorText.focus();
      return;
    }
    if (isBlockEditorDirty() && !window.confirm("Switch to Form view? Unsaved YAML edits will be discarded.")) {
      return;
    }
    blockEditor.mode = "form";
    setEditorChrome("config", "form");
    await loadTerminalForm();
  }

  function closeBlockEditor(force) {
    if (!isBlockEditorOpen()) return true;
    if (!force && isBlockEditorDirty()) {
      const ok = window.confirm("Discard unsaved changes?");
      if (!ok) return false;
    }
    elBlockEditor.hidden = true;
    if (elCanvasPane) elCanvasPane.classList.remove("is-editing");
    blockEditor.kind = null;
    blockEditor.profile = null;
    blockEditor.baseline = "";
    blockEditor.busy = false;
    blockEditor.mode = "form";
    blockEditor.configDraft = null;
    blockEditor.configBaseline = null;
    blockEditor.search = "";
    blockEditor.secretsMap = null;
    blockEditor.secretsRevealed = {};
    blockEditor.secretsDrafts = {};
    blockEditor.activeSecGroup = "all";
    blockEditor.secretsSearch = "";
    blockEditor.memoryFile = "MEMORY.md";
    blockEditor.memoryCache = null;
    blockEditor.skillsList = null;
    blockEditor.skillsMode = "installed";
    blockEditor.skillsSearch = "";
    blockEditor.skillsEnabledOnly = false;
    blockEditor.activeSkGroup = "all";
    blockEditor.hubResults = null;
    blockEditor.hubBusy = false;
    blockEditor.cronJobs = [];
    blockEditor.cronSelectedId = null;
    blockEditor.cronBaseline = "";
    blockEditor.cronDirty = false;
    blockEditor.includeCanvasTasks = false;
    if (elCfgSearch) elCfgSearch.value = "";
    if (elSecSearch) elSecSearch.value = "";
    if (elSecSetOnly) elSecSetOnly.checked = true;
    if (elSkSearch) elSkSearch.value = "";
    if (elSkEnabledOnly) elSkEnabledOnly.checked = false;
    if (elSkHubQ) elSkHubQ.value = "";
    if (elSkHubResults) elSkHubResults.innerHTML = "";
    if (elTrgNav) elTrgNav.innerHTML = "";
    if (elTrgSectionLabel) elTrgSectionLabel.textContent = "";
    blockEditor.secretsSetOnly = true;
    setEditorChrome(null, "form");
    setBlockEditorStatus("");
    return true;
  }

  async function openBlockEditor(blockId) {
    if (
      blockId !== "config" &&
      blockId !== "soul" &&
      blockId !== "secrets" &&
      blockId !== "memory" &&
      blockId !== "skills" &&
      blockId !== "trigger" &&
      blockId !== "tools"
    ) {
      return;
    }
    hideCtxMenu();
    endPan();
    if (drag) return;
    blockEditor.kind = blockId;
    blockEditor.profile = activeId || null;
    blockEditor.mode =
      blockId === "config"
        ? "form"
        : blockId === "secrets"
          ? "secrets"
          : blockId === "skills"
            ? "skills"
            : blockId === "trigger"
              ? "trigger"
              : blockId === "tools"
                ? "tools"
                : "text";
    if (blockId === "memory") blockEditor.memoryFile = "MEMORY.md";
    if (blockId === "skills") blockEditor.skillsMode = "installed";
    if (blockId === "trigger") {
      blockEditor.cronSelectedId = null;
      blockEditor.cronDirty = false;
      blockEditor.includeCanvasTasks = false;
    }
    if (elBlockEditorTitle) {
      elBlockEditorTitle.textContent =
        blockId === "soul"
          ? "SOUL · SOUL.md"
          : blockId === "secrets"
            ? "SECRETS · .env"
            : blockId === "memory"
              ? "MEMORY · memories/"
              : blockId === "skills"
                ? "SKILLS · installed / hub"
                : blockId === "trigger"
                  ? "TRIGGER · Hermes cron"
                  : blockId === "tools"
                    ? "TOOLS · toolsets + aux vision"
                    : "CONFIG · config.yaml";
    }
    if (elBlockEditorPath) elBlockEditorPath.textContent = "";
    elBlockEditor.hidden = false;
    if (elCanvasPane) elCanvasPane.classList.add("is-editing");
    elBlockEditorText.value = "";
    setEditorChrome(blockId, blockEditor.mode);
    await reloadBlockEditor();
    if (
      blockEditor.mode !== "form" &&
      blockEditor.mode !== "secrets" &&
      blockEditor.mode !== "skills" &&
      blockEditor.mode !== "trigger" &&
      blockEditor.mode !== "tools" &&
      elBlockEditorText
    ) {
      elBlockEditorText.focus();
    }
  }

  async function saveBlockEditor() {
    if (!isBlockEditorOpen() || blockEditor.busy) return;
    if (
      blockEditor.kind !== "config" &&
      blockEditor.kind !== "soul" &&
      blockEditor.kind !== "memory" &&
      blockEditor.kind !== "trigger" &&
      blockEditor.kind !== "tools"
    ) {
      return;
    }
    const profile = blockEditor.profile || activeId || null;
    blockEditor.busy = true;
    if (elBlockEditorSave) elBlockEditorSave.disabled = true;
    setBlockEditorStatus("Saving via gateway…", "");
    try {
      if (blockEditor.kind === "tools") {
        await saveToolsContent();
      } else if (blockEditor.kind === "trigger") {
        await saveTriggerJob();
        setBlockEditorStatus("Saved cron job to remote Hermes.", "ok");
      } else if (blockEditor.kind === "memory") {
        if (!profile) throw new Error("No profile/tab selected.");
        stashCurrentMemoryDraft();
        const cache = blockEditor.memoryCache || {};
        const dirtyFiles = Object.keys(cache).filter(
          (f) => String(cache[f].content || "") !== String(cache[f].baseline || "")
        );
        if (!dirtyFiles.length) {
          setBlockEditorStatus("Nothing to save.", "ok");
          return;
        }
        for (const file of dirtyFiles) {
          const res = await fetch(
            "/api/remote/profiles/" +
              encodeURIComponent(profile) +
              "/memory/" +
              encodeURIComponent(file),
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ content: cache[file].content || "" }),
            }
          );
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.detail || data.error || "Save failed: " + file);
          cache[file].baseline = cache[file].content || "";
          cache[file].exists = true;
          if (data.path) cache[file].path = data.path;
        }
        applyMemoryFileToEditor(blockEditor.memoryFile || "MEMORY.md");
        applyMemoryPreview(
          profile,
          (cache["MEMORY.md"] && cache["MEMORY.md"].content) || "",
          (cache["USER.md"] && cache["USER.md"].content) || ""
        );
        setBlockEditorStatus("Saved " + dirtyFiles.join(" + ") + " to remote Hermes.", "ok");
      } else if (blockEditor.kind === "soul") {
        if (!profile) throw new Error("No profile/tab selected.");
        const text = elBlockEditorText.value;
        const res = await fetch("/api/remote/profiles/" + encodeURIComponent(profile) + "/soul", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: text }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.detail || data.error || "Save failed");
        blockEditor.baseline = text;
        setBlockEditorStatus("Saved SOUL.md to remote Hermes.", "ok");
        applySoulPreview(profile, text);
      } else if (blockEditor.mode === "advanced") {
        const text = elBlockEditorText.value;
        const q = profile ? "?profile=" + encodeURIComponent(profile) : "";
        const res = await fetch("/api/remote/config/raw" + q, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ yaml_text: text, profile: profile }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.detail || data.error || "Save failed");
        blockEditor.baseline = text;
        setBlockEditorStatus("Saved raw config.yaml to remote Hermes.", "ok");
        applyTerminalModelBody(profile || activeId, text);
      } else {
        const q = profile ? "?profile=" + encodeURIComponent(profile) : "";
        const res = await fetch("/api/remote/config" + q, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ config: blockEditor.configDraft || {}, profile: profile }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.detail || data.error || "Save failed");
        blockEditor.configBaseline = deepClone(blockEditor.configDraft);
        setBlockEditorStatus("Saved config to remote Hermes.", "ok");
        applyTerminalModelFromConfig(profile || activeId, blockEditor.configDraft);
      }
    } catch (err) {
      setBlockEditorStatus(String(err && err.message ? err.message : err), "bad");
    } finally {
      blockEditor.busy = false;
      if (elBlockEditorSave) elBlockEditorSave.disabled = false;
    }
  }

  function initBlockEditorUi() {
    if (!elBlockEditor) return;
    if (elBlockEditorBack) {
      elBlockEditorBack.addEventListener("click", () => closeBlockEditor(false));
    }
    if (elBlockEditorSave) {
      elBlockEditorSave.addEventListener("click", () => void saveBlockEditor());
    }
    if (elBlockEditorReload) {
      elBlockEditorReload.addEventListener("click", () => {
        if (isBlockEditorDirty() && !window.confirm("Reload and discard unsaved changes?")) return;
        void reloadBlockEditor();
      });
    }
    if (elBlockEditorAdvanced) {
      elBlockEditorAdvanced.addEventListener("click", () => void toggleTerminalAdvanced());
    }
    if (elCfgSearch) {
      elCfgSearch.addEventListener("input", () => {
        blockEditor.search = elCfgSearch.value || "";
        renderCfgFields();
      });
    }
    if (elSecSearch) {
      elSecSearch.addEventListener("input", () => {
        blockEditor.secretsSearch = elSecSearch.value || "";
        renderSecNav();
        renderSecFields();
      });
    }
    if (elSecSetOnly) {
      elSecSetOnly.addEventListener("change", () => {
        blockEditor.secretsSetOnly = !!elSecSetOnly.checked;
        renderSecNav();
        renderSecFields();
      });
    }
    if (elSecAddBtn) {
      elSecAddBtn.addEventListener("click", () => void addSecretKey());
    }
    if (elMemTabs) {
      elMemTabs.addEventListener("click", (e) => {
        const btn = e.target && e.target.closest ? e.target.closest(".mem-tab") : null;
        if (!btn) return;
        const file = btn.getAttribute("data-mem-file");
        if (file) void switchMemoryFile(file);
      });
    }
    if (elSkModeTabs) {
      elSkModeTabs.addEventListener("click", (e) => {
        const btn = e.target && e.target.closest ? e.target.closest(".sk-mode-tab") : null;
        if (!btn || blockEditor.kind !== "skills") return;
        const mode = btn.getAttribute("data-sk-mode");
        if (!mode || mode === blockEditor.skillsMode) return;
        blockEditor.skillsMode = mode;
        syncSkModeTabs();
        if (mode === "installed") {
          renderSkNav();
          renderSkFields();
        } else {
          renderHubResults();
        }
      });
    }
    if (elSkSearch) {
      elSkSearch.addEventListener("input", () => {
        blockEditor.skillsSearch = elSkSearch.value || "";
        renderSkNav();
        renderSkFields();
      });
    }
    if (elSkEnabledOnly) {
      elSkEnabledOnly.addEventListener("change", () => {
        blockEditor.skillsEnabledOnly = !!elSkEnabledOnly.checked;
        renderSkNav();
        renderSkFields();
      });
    }
    if (elSkAllOn) {
      elSkAllOn.addEventListener("click", () => void bulkSetSkillsEnabled(true));
    }
    if (elSkAllOff) {
      elSkAllOff.addEventListener("click", () => void bulkSetSkillsEnabled(false));
    }
    if (elSkHubSearchBtn) {
      elSkHubSearchBtn.addEventListener("click", () => void searchSkillsHub());
    }
    if (elSkHubQ) {
      elSkHubQ.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          void searchSkillsHub();
        }
      });
    }
    if (elToolsCommonOn) {
      elToolsCommonOn.addEventListener("click", () => {
        if (blockEditor.kind !== "tools") return;
        enableCommonToolsets();
      });
    }
    if (elToolsAllOff) {
      elToolsAllOff.addEventListener("click", () => {
        if (blockEditor.kind !== "tools") return;
        clearExtraToolsets();
      });
    }
    if (elTrgNew) {
      elTrgNew.addEventListener("click", () => {
        if (blockEditor.kind !== "trigger") return;
        if (isBlockEditorDirty() && !window.confirm("Discard unsaved changes?")) return;
        populateTriggerFromJob(null);
        renderTrgNav();
      });
    }
    if (elTrgRun) {
      elTrgRun.addEventListener("click", () => void triggerJobAction("trigger"));
    }
    if (elTrgPause) {
      elTrgPause.addEventListener("click", () => {
        const job = (blockEditor.cronJobs || []).find((j) => j.id === blockEditor.cronSelectedId);
        const enabled = job && job.enabled !== false && job.state !== "paused";
        void triggerJobAction(enabled ? "pause" : "resume");
      });
    }
    if (elTrgDelete) {
      elTrgDelete.addEventListener("click", () => void triggerJobAction("delete"));
    }
    if (elChatScheduleType) {
      elChatScheduleType.addEventListener("change", () => {
        updateChatScheduleUI();
        markTriggerDirty();
      });
    }
    if (elTrgForm) {
      elTrgForm.addEventListener("input", () => markTriggerDirty());
      elTrgForm.addEventListener("change", () => markTriggerDirty());
    }
  }

  // ── Gateway connection (hermes-desktop parity) ─────────

  const emptyGwBlock = () => ({
    mode: "remote",
    remoteUrl: "",
    remoteAuthMode: "token",
    remoteToken: "",
    remoteTokenSet: false,
    remoteTokenPreview: null,
  });

  function defaultGwConfig() {
    return { global: emptyGwBlock(), profiles: {} };
  }

  function loadGwConfig() {
    try {
      const data = fileConfig.gateway;
      if (!data || typeof data !== "object") return defaultGwConfig();
      return {
        global: Object.assign(emptyGwBlock(), data.global || {}),
        profiles: data.profiles && typeof data.profiles === "object" ? data.profiles : {},
      };
    } catch (_) {
      return defaultGwConfig();
    }
  }

  function saveGwConfig(cfg) {
    fileConfig.gateway = cfg;
    schedulePersist(true);
  }

  function tokenPreview(value) {
    const raw = String(value || "");
    if (!raw) return null;
    return raw.length <= 8 ? "set" : "..." + raw.slice(-6);
  }

  let gwCfg = defaultGwConfig();
  let gwScope = null;
  let gwDraft = emptyGwBlock();
  let gwTokenDraft = "";
  let gwProbeStatus = "idle";
  let gwProbe = null;
  let gwProbeTimer = null;
  let gwProbeSeq = 0;
  let gwBusy = false;

  function resolveGwBlock(scope) {
    if (scope && gwCfg.profiles[scope]) {
      return Object.assign(emptyGwBlock(), gwCfg.profiles[scope]);
    }
    return Object.assign(emptyGwBlock(), gwCfg.global);
  }

  function setGatewayButtonState(state) {
    if (!elTabGateway) return;
    elTabGateway.dataset.state = state || "idle";
    fileConfig.gatewayStatus = state || "idle";
    schedulePersist();
  }

  function restoreGatewayButtonState() {
    setGatewayButtonState(fileConfig.gatewayStatus || "idle");
  }

  function openGatewayModal() {
    gwCfg = loadGwConfig();
    gwScope = null;
    loadGwDraftFromScope();
    renderGwScopeChips();
    renderGwForm();
    elGwModal.hidden = false;
    elGwUrl.focus();
  }

  function closeGatewayModal() {
    elGwModal.hidden = true;
    if (gwProbeTimer) {
      clearTimeout(gwProbeTimer);
      gwProbeTimer = null;
    }
  }

  function openGwRequiredModal(detail) {
    if (!elGwRequiredModal) {
      window.alert(
        "Gateway required.\n\nConnect to a running Hermes dashboard first (Gateway button)." +
          (detail ? "\n\n" + detail : "")
      );
      return;
    }
    if (elGwRequiredDetail) {
      elGwRequiredDetail.textContent = detail
        ? String(detail)
        : "Start Hermes dashboard on WSL (port 9119), then open Gateway and Save & reconnect.";
    }
    if (elGwRequiredMsg) {
      elGwRequiredMsg.textContent =
        "Hermes Canvas needs a live gateway before profiles, blocks, and editors work.";
    }
    elGwRequiredModal.hidden = false;
  }

  function closeGwRequiredModal() {
    if (elGwRequiredModal) elGwRequiredModal.hidden = true;
  }

  function paintOfflineUi(reason) {
    agents = [offlinePlaceholderAgent()];
    agents.forEach(ensureAgentExtras);
    menuSelectionByAgent = { _offline: "engine" };
    if (reason) {
      agents[0].chat = [
        { role: "meta", text: String(reason) },
        {
          role: "meta",
          text: "Start Hermes dashboard (e.g. :9119), then Gateway → Save & reconnect.",
        },
      ];
    }
    selectAgent("_offline", true);
  }

  function loadGwDraftFromScope() {
    gwDraft = resolveGwBlock(gwScope);
    gwTokenDraft = "";
    gwProbeStatus = "idle";
    gwProbe = null;
    elGwStatus.hidden = true;
    elGwStatus.textContent = "";
    if (elGwToken) {
      elGwToken.value = "";
      elGwToken.placeholder = gwDraft.remoteTokenSet
        ? "Existing token " + (gwDraft.remoteTokenPreview || "saved")
        : "Paste session token";
    }
    if (elGwUrl) elGwUrl.value = gwDraft.remoteUrl || "";
  }

  function renderGwScopeChips() {
    elGwScopeChips.innerHTML = "";
    const makeChip = (id, label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gw-chip";
      btn.textContent = label;
      btn.setAttribute(
        "aria-pressed",
        id === gwScope || (id === null && gwScope === null) ? "true" : "false"
      );
      btn.addEventListener("click", () => {
        gwScope = id;
        loadGwDraftFromScope();
        renderGwScopeChips();
        renderGwForm();
        scheduleGwProbe();
      });
      elGwScopeChips.appendChild(btn);
    };
    makeChip(null, "All profiles");
    for (const a of agents) {
      if (a.id === "default") continue;
      makeChip(a.id, a.id);
    }
    elGwScopeHint.textContent =
      gwScope === null
        ? "Default connection for every profile that has no override of its own."
        : 'Connection used only when "' +
          gwScope +
          '" is the active profile. Set Local to inherit the default.';
  }

  function effectiveAuthMode() {
    if (gwProbeStatus === "done" && gwProbe && gwProbe.authMode && gwProbe.authMode !== "unknown") {
      return gwProbe.authMode;
    }
    return gwDraft.remoteAuthMode || "token";
  }

  function authResolved() {
    if (gwProbeStatus === "done") return true;
    const hasSaved = gwDraft.remoteTokenSet;
    const hasUrl = Boolean((gwDraft.remoteUrl || "").trim());
    return hasUrl && (gwProbeStatus === "idle" || hasSaved);
  }

  function canUseRemote() {
    const url = (gwDraft.remoteUrl || "").trim();
    if (!url) return false;
    if (effectiveAuthMode() === "oauth") return true;
    return Boolean(gwTokenDraft.trim()) || gwDraft.remoteTokenSet;
  }

  function renderGwForm() {
    const mode = "remote";
    gwDraft.mode = "remote";
    if (elGwModeLocal) elGwModeLocal.setAttribute("aria-pressed", "false");
    if (elGwModeRemote) elGwModeRemote.setAttribute("aria-pressed", "true");

    if (gwProbeStatus === "probing") {
      elGwProbe.hidden = false;
      elGwProbe.dataset.tone = "";
      elGwProbe.textContent = "Checking how this gateway authenticates…";
    } else if (gwProbeStatus === "error") {
      elGwProbe.hidden = false;
      elGwProbe.dataset.tone = "bad";
      elGwProbe.textContent =
        "Could not reach this gateway yet. Check the URL — the auth method will appear once it responds.";
    } else {
      elGwProbe.hidden = true;
      elGwProbe.textContent = "";
    }

    const showAuth = authResolved();
    const authMode = effectiveAuthMode();
    elGwAuthOauth.hidden = !(showAuth && authMode === "oauth");
    elGwAuthToken.hidden = !(showAuth && authMode === "token");

    if (authMode === "oauth") {
      const providers = (gwProbe && gwProbe.providers) || [];
      const label =
        providers.length === 1
          ? providers[0].displayName || providers[0].name
          : providers.length > 1
            ? providers.map((p) => p.displayName || p.name).join(" / ")
            : "identity provider";
      const password = providers.length > 0 && providers.every((p) => p.supportsPassword);
      elGwOauthHint.textContent = password
        ? "This gateway uses a username and password."
        : "This gateway uses OAuth (" + label + ").";
      elGwOauthPill.hidden = false;
    }

    elGwTest.disabled = gwBusy || !canUseRemote();
    elGwSave.disabled = gwBusy;
    elGwSaveReconnect.disabled = gwBusy || !canUseRemote();
  }

  function scheduleGwProbe() {
    if (gwProbeTimer) clearTimeout(gwProbeTimer);
    const url = (gwDraft.remoteUrl || "").trim();
    if (gwDraft.mode !== "remote" || !url || !/^https?:\/\//i.test(url)) {
      gwProbeStatus = "idle";
      gwProbe = null;
      renderGwForm();
      return;
    }
    const seq = ++gwProbeSeq;
    gwProbeStatus = "probing";
    renderGwForm();
    gwProbeTimer = setTimeout(() => {
      void runGwProbe(url, seq);
    }, 500);
  }

  async function runGwProbe(url, seq) {
    try {
      const res = await fetch("/api/gateway/probe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json().catch(() => ({}));
      if (seq !== gwProbeSeq) return;
      if (!res.ok || !data.reachable) {
        gwProbe = data;
        gwProbeStatus = "error";
      } else {
        gwProbe = data;
        gwProbeStatus = "done";
        if (data.authMode === "oauth" || data.authMode === "token") {
          gwDraft.remoteAuthMode = data.authMode;
        }
        if (data.baseUrl) {
          gwDraft.remoteUrl = data.baseUrl;
          if (elGwUrl) elGwUrl.value = data.baseUrl;
        }
      }
    } catch (_) {
      if (seq !== gwProbeSeq) return;
      gwProbe = null;
      gwProbeStatus = "error";
    }
    renderGwForm();
  }

  function showGwStatus(msg, tone) {
    elGwStatus.hidden = false;
    elGwStatus.textContent = msg;
    elGwStatus.dataset.tone = tone === "bad" ? "bad" : "";
  }

  function commitGwDraft(applyReconnect) {
    gwDraft.mode = "remote";
    const url = (gwDraft.remoteUrl || "").trim();
    if (!url) {
      showGwStatus("Enter a remote URL (e.g. http://127.0.0.1:9119).", "bad");
      return false;
    }
    if (effectiveAuthMode() === "token" && !gwTokenDraft.trim() && !gwDraft.remoteTokenSet) {
      showGwStatus("Enter the dashboard session token (HERMES_DASHBOARD_SESSION_TOKEN).", "bad");
      return false;
    }

    const block = {
      mode: "remote",
      remoteUrl: url,
      remoteAuthMode: effectiveAuthMode(),
      remoteToken: gwDraft.remoteToken || "",
      remoteTokenSet: gwDraft.remoteTokenSet,
      remoteTokenPreview: gwDraft.remoteTokenPreview,
    };

    if (gwTokenDraft.trim()) {
      block.remoteToken = gwTokenDraft.trim();
      block.remoteTokenSet = true;
      block.remoteTokenPreview = tokenPreview(block.remoteToken);
    }

    if (gwScope) gwCfg.profiles[gwScope] = block;
    else gwCfg.global = block;
    saveGwConfig(gwCfg);
    gwDraft = Object.assign(emptyGwBlock(), block);
    gwTokenDraft = "";
    if (elGwToken) {
      elGwToken.value = "";
      elGwToken.placeholder = block.remoteTokenSet
        ? "Existing token " + (block.remoteTokenPreview || "saved")
        : "Paste session token";
    }

    if (applyReconnect) void connectGateway(true);
    else {
      showGwStatus("Saved for the next reconnect.", "ok");
      setGatewayButtonState("warn");
    }
    return true;
  }

  async function connectGateway(fromSave) {
    gwDraft.mode = "remote";
    const url = (gwDraft.remoteUrl || "").trim();
    if (!url) {
      showGwStatus("Enter a remote URL before connecting.", "bad");
      return false;
    }
    const token = gwTokenDraft.trim() || gwDraft.remoteToken || "";
    const authMode = effectiveAuthMode();
    if (authMode === "token" && !token) {
      showGwStatus("Enter remote URL and session token before connecting.", "bad");
      return false;
    }

    gwBusy = true;
    renderGwForm();
    showGwStatus("Connecting to remote Hermes backend…", "");
    try {
      const res = await fetch("/api/gateway/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url,
          token: token || null,
          auth_mode: authMode,
          profile: gwScope || activeId || null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        showGwStatus(String(data.detail || data.error || "Connect failed"), "bad");
        setGatewayButtonState("bad");
        return false;
      }
      const ver = data.version ? " · Hermes " + data.version : "";
      const savedTok = data.token || token;
      const block = {
        mode: "remote",
        remoteUrl: data.baseUrl || url,
        remoteAuthMode: authMode,
        remoteToken: savedTok || "",
        remoteTokenSet: Boolean(savedTok),
        remoteTokenPreview: tokenPreview(savedTok),
      };
      if (gwScope) gwCfg.profiles[gwScope] = block;
      else gwCfg.global = block;
      saveGwConfig(gwCfg);
      gwDraft = Object.assign(emptyGwBlock(), block);
      setGatewayButtonState("ok");
      setChatGatewayCreds(data.baseUrl || url, savedTok);
      chatGw.sessions = Object.create(null);
      restoreChatSessionsFromConfig();
      const sync = await syncAgentsFromRemote({
        preferId:
          gwScope ||
          (activeId && activeId !== "_offline" ? activeId : "") ||
          fileConfig.activeTab ||
          "",
      });
      if (!sync.ok) {
        showGwStatus(
          "Connected, but profile sync failed: " + (sync.reason || "unknown"),
          "bad"
        );
        return false;
      }
      showGwStatus(
        "Connected to " + (data.baseUrl || url) + ver + " · " + sync.count + " profiles",
        "ok"
      );
      closeGwRequiredModal();
      startCronFeed();
      void refreshBlockCardLabels(activeId);
      void ensureChatSocket().catch((err) => {
        showGwStatus(
          "HTTP OK, but WebSocket failed: " + (err && err.message ? err.message : err),
          "bad"
        );
        setGatewayButtonState("warn");
      });
      return true;
    } catch (err) {
      showGwStatus(String(err && err.message ? err.message : err), "bad");
      setGatewayButtonState("bad");
      return false;
    } finally {
      gwBusy = false;
      renderGwForm();
    }
  }

  async function testGwRemote() {
    gwDraft.mode = "remote";
    const url = (gwDraft.remoteUrl || "").trim();
    if (!url) {
      showGwStatus("Enter a remote URL before testing.", "bad");
      return;
    }
    const token = gwTokenDraft.trim() || gwDraft.remoteToken || "";
    const authMode = effectiveAuthMode();
    if (authMode === "token" && !token) {
      showGwStatus("Enter remote URL and session token before testing.", "bad");
      return;
    }

    gwBusy = true;
    renderGwForm();
    showGwStatus("Testing remote gateway…", "");
    try {
      const res = await fetch("/api/gateway/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url,
          token: token || null,
          auth_mode: authMode,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        showGwStatus(String(data.detail || data.error || "Test failed"), "bad");
        setGatewayButtonState("bad");
        return;
      }
      const ver = data.version ? " · Hermes " + data.version : "";
      showGwStatus("OK " + (data.baseUrl || url) + ver, "ok");
      setGatewayButtonState("ok");
    } catch (err) {
      showGwStatus(String(err && err.message ? err.message : err), "bad");
      setGatewayButtonState("bad");
    } finally {
      gwBusy = false;
      renderGwForm();
    }
  }

  function initGatewayUi() {
    if (!elTabGateway || !elGwModal) return;
    restoreGatewayButtonState();

    elTabGateway.addEventListener("click", () => openGatewayModal());
    elGwClose.addEventListener("click", () => closeGatewayModal());
    elGwModal.addEventListener("click", (e) => {
      if (e.target === elGwModal) closeGatewayModal();
    });

    if (elGwRequiredClose) elGwRequiredClose.addEventListener("click", () => closeGwRequiredModal());
    if (elGwRequiredDismiss) elGwRequiredDismiss.addEventListener("click", () => closeGwRequiredModal());
    if (elGwRequiredOpen) {
      elGwRequiredOpen.addEventListener("click", () => {
        closeGwRequiredModal();
        openGatewayModal();
      });
    }
    if (elGwRequiredModal) {
      elGwRequiredModal.addEventListener("click", (e) => {
        if (e.target === elGwRequiredModal) closeGwRequiredModal();
      });
    }

    elGwModeLocal.addEventListener("click", () => {
      gwDraft.mode = "local";
      renderGwForm();
    });
    elGwModeRemote.addEventListener("click", () => {
      gwDraft.mode = "remote";
      renderGwForm();
      scheduleGwProbe();
    });

    elGwUrl.addEventListener("input", () => {
      gwDraft.remoteUrl = elGwUrl.value;
      scheduleGwProbe();
      renderGwForm();
    });
    elGwToken.addEventListener("input", () => {
      gwTokenDraft = elGwToken.value;
      renderGwForm();
    });

    elGwOauthOpen.addEventListener("click", () => {
      const url = (gwDraft.remoteUrl || "").trim();
      if (!url) {
        showGwStatus("Enter a remote URL first.", "bad");
        return;
      }
      window.open(url.replace(/\/+$/, "") + "/login", "_blank", "noopener,noreferrer");
    });

    elGwTest.addEventListener("click", () => void testGwRemote());
    elGwSave.addEventListener("click", () => commitGwDraft(false));
    elGwSaveReconnect.addEventListener("click", () => commitGwDraft(true));
  }

  window.addEventListener("pagehide", () => {
    if (pan) endPan();
    saveView(activeId);
    saveLayouts();
    flushPersistBeacon();
  });
  window.addEventListener("beforeunload", () => {
    if (pan) endPan();
    saveView(activeId);
    saveLayouts();
    flushPersistBeacon();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      saveView(activeId);
      saveLayouts();
      flushPersistBeacon();
    }
  });

  elSend.addEventListener("click", sendLocal);
  elInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendLocal();
    }
  });

  async function boot() {
    await hydrateFromServer();
    gwCfg = loadGwConfig();
    migrateOldViews();

    if (fileConfig.chatHeight != null && !Number.isNaN(Number(fileConfig.chatHeight))) {
      applyChatHeight(Number(fileConfig.chatHeight));
    }
    setSideCollapsed(!!fileConfig.sideCollapsed);

    initCanvasViewControls();
    initSplitResize();
    initComposerAttachments();
    initGatewayUi();
    initBlockEditorUi();

    // Always paint shell first so menu/blocks stay visible while gateway is down.
    paintOfflineUi("Waiting for Hermes gateway…");

    let connected = false;
    let failReason = "";
    try {
      const block = resolveGwBlock(null);
      gwDraft = Object.assign(emptyGwBlock(), block);
      gwDraft.mode = "remote";
      if ((block.remoteUrl || "").trim() && (block.remoteTokenSet || block.remoteToken)) {
        if (block.remoteToken) setChatGatewayCreds(block.remoteUrl, block.remoteToken);
        connected = !!(await connectGateway(false));
        if (!connected) {
          failReason =
            "Could not connect to " +
            ((block.remoteUrl || "").trim() || "gateway") +
            ". Is Hermes dashboard running on WSL (:9119)?";
        }
      } else {
        failReason = "No gateway URL/token saved yet. Open Gateway and connect first.";
      }
    } catch (err) {
      connected = false;
      failReason = String(err && err.message ? err.message : err);
    }

    if (!connected) {
      const sync = await syncAgentsFromRemote({ preferId: fileConfig.activeTab });
      if (sync.ok) {
        connected = true;
        closeGwRequiredModal();
        startCronFeed();
      } else {
        failReason =
          failReason ||
          "Gateway offline: " + (sync.reason || "Hermes dashboard not reachable");
        paintOfflineUi(failReason);
        openGwRequiredModal(failReason);
      }
    }
  }

  void boot();
})();
