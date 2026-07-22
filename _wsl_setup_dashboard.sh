#!/bin/bash
set -euo pipefail
mkdir -p /root/.hermes/logs
TOKEN=$(python3 -c 'import secrets; print(secrets.token_urlsafe(32))')
ENV=/root/.hermes/.env
touch "$ENV"
if grep -q '^HERMES_DASHBOARD_SESSION_TOKEN=' "$ENV" 2>/dev/null; then
  sed -i "s|^HERMES_DASHBOARD_SESSION_TOKEN=.*|HERMES_DASHBOARD_SESSION_TOKEN=$TOKEN|" "$ENV"
else
  printf '\nHERMES_DASHBOARD_SESSION_TOKEN=%s\n' "$TOKEN" >> "$ENV"
fi
pkill -f 'hermes_cli.main.*(dashboard|serve)' 2>/dev/null || true
sleep 1
export HERMES_HOME=/root/.hermes
# ensure token is visible to child even if .env load order differs
export HERMES_DASHBOARD_SESSION_TOKEN="$TOKEN"
PY=/root/.hermes/hermes-agent/venv/bin/python
cd /root/.hermes/hermes-agent
# Loopback bind = token auth without OAuth gate (fake "remote" from Canvas via 127.0.0.1)
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
    head -c 500 /tmp/hermes-status.json; echo
    echo "TOKEN=$TOKEN"
    exit 0
  fi
  sleep 1
done
echo FAILED
tail -n 80 /root/.hermes/logs/canvas-dashboard.log || true
exit 1
