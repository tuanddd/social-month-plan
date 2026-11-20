#!/bin/bash
set -e
OUT="${1:?usage: scaffold.sh <subject>/social}"
SK="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$OUT/assets" "$OUT/shorts" "$OUT/memes/dl" "$OUT/tools"
if [ -e "$OUT/index.html" ]; then echo "keep existing $OUT/index.html"; else cp "$SK/assets/index.html" "$OUT/index.html"; fi
if [ -e "$OUT/calendar.js" ]; then echo "keep existing $OUT/calendar.js"; else cp "$SK/assets/calendar.example.js" "$OUT/calendar.js"; fi
[ -e "$OUT/memes/templates.json" ] || cp "$SK/assets/meme-templates.json" "$OUT/memes/templates.json"
echo "scaffolded $OUT"
