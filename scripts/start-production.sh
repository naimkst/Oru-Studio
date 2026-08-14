#!/bin/sh
set -eu

APP_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
cd "$APP_DIR"

PORT="${PORT:-3387}"
APP_HOST="${APP_HOST:-127.0.0.1}"

if [ "${BUILD_ON_START:-0}" = "1" ] || [ ! -f ".next/BUILD_ID" ] || [ ! -f ".next/routes-manifest.json" ]; then
  echo "Preparing production build..."
  npm run build
fi

exec node node_modules/next/dist/bin/next start -H "$APP_HOST" -p "$PORT"
