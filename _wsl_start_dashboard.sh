#!/bin/bash
# Start Hermes dashboard on :9119 for Canvas (reuse existing session token).
set -euo pipefail
export HERMES_HOME=/root/.hermes
export HERMES_DESKTOP=1
ENV=/root/.hermes/.env
mkdir -p /root/.hermes/logs

TOKEN=""
if [ -f "$ENV" ]; then
  TOKEN=$(grep -E '^HERMES_DASHBOARD_SESSION_TOKEN=' "$ENV" | head -1 | cut -d= -f2- || true)
fi
if [ -z "$TOKEN" ]; then
  TOKEN=$(python3 -c 'import secrets; print(secrets.token_urlsafe(32))')
  touch "$ENV"
  if grep -q '^HERMES_DASHBOARD_SESSION_TOKEN=' "$ENV" 2>/dev/null; then
    sed -i "s|^HERMES_DASHBOARD_SESSION_TOKEN=.*|HERMES_DASHBOARD_SESSION_TOKEN=$TOKEN|" "$ENV"
  else
    printf '\nHERMES_DASHBOARD_SESSION_TOKEN=%s\n' "$TOKEN" >> "$ENV"
  fi
fi
export HERMES_DASHBOARD_SESSION_TOKEN="$TOKEN"

# Stop old dashboard on 9119 only
if command -v ss >/dev/null 2>&1; then
  PIDS=$(ss -tlnp 2>/dev/null | awk '/:9119 /{print}' | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u || true)
  for p in $PIDS; do kill "$p" 2>/dev/null || true; done
fi
pkill -f 'hermes_cli.main.*dashboard.*9119' 2>/dev/null || true
sleep 1

PY=/root/.hermes/hermes-agent/venv/bin/python
cd /root/.hermes/hermes-agent
nohup "$PY" -m hermes_cli.main dashboard \
  --host 127.0.0.1 \
  --port 9119 \
  --no-open \
  --skip-build \
  > /root/.hermes/logs/canvas-dashboard.log 2>&1 &
echo "PID=$!"
for i in $(seq 1 90); do
  if curl -sf --max-time 2 http://127.0.0.1:9119/api/status >/tmp/hermes-status.json; then
    echo READY
    head -c 400 /tmp/hermes-status.json; echo
    echo "TOKEN=$TOKEN"
    exit 0
  fi
  sleep 1
done
echo FAILED
tail -n 60 /root/.hermes/logs/canvas-dashboard.log || true
exit 1
