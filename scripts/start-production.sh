#!/bin/sh
set -eu

if [ ! -f ".next/BUILD_ID" ]; then
  echo "No production build found in .next. Running npm run build first..."
  npm run build
fi

exec npm run start
