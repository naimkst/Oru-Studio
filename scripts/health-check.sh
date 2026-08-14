#!/bin/sh
set -eu

URL="${1:-http://${APP_HOST:-127.0.0.1}:${PORT:-3387}/api/health}"
ATTEMPTS="${HEALTHCHECK_ATTEMPTS:-20}"
SLEEP_SECONDS="${HEALTHCHECK_SLEEP:-1}"
BODY_FILE="${TMPDIR:-/tmp}/oru-studio-health.$$"

cleanup() {
  rm -f "$BODY_FILE"
}

trap cleanup EXIT

i=1
while [ "$i" -le "$ATTEMPTS" ]; do
  status="$(curl -sS -o "$BODY_FILE" -w "%{http_code}" "$URL" 2>/dev/null || true)"

  if [ "$status" = "200" ]; then
    cat "$BODY_FILE"
    echo
    exit 0
  fi

  sleep "$SLEEP_SECONDS"
  i=$((i + 1))
done

echo "Health check failed for $URL after $ATTEMPTS attempts. Last status: ${status:-none}" >&2
if [ -s "$BODY_FILE" ]; then
  cat "$BODY_FILE" >&2
  echo >&2
fi
exit 1
