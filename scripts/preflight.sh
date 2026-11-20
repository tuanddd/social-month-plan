#!/bin/bash
fail=0
row() { printf '%-12s %-5s %s\n' "$1" "$2" "$3"; }

HF_PLUGIN=$(ls -d "$HOME"/.claude/plugins/cache/hyperframes/hyperframes/*/skills/hyperframes 2>/dev/null | sort -V | tail -1)
if [ -n "$HF_PLUGIN" ] && v=$(cd /tmp && node "$HF_PLUGIN/scripts/plugin-cli.mjs" --version 2>/dev/null); then
  row hyperframes ok "plugin $v; CLI: node $HF_PLUGIN/scripts/plugin-cli.mjs <command>"
elif [ -d "$HOME/.claude/skills/hyperframes" ] && v=$(cd /tmp && npx --no-install hyperframes --version 2>/dev/null); then
  row hyperframes ok "skill + CLI $v; CLI: npx hyperframes <command>"
else
  row hyperframes MISS "required for any video. Install the Claude Code plugin: claude plugin marketplace add heygen-com/hyperframes && claude plugin install hyperframes@hyperframes (standalone: npx skills add heygen-com/hyperframes, core set). Restart the session after."
  [ "$NO_VIDEO" = 1 ] || fail=1
fi

SMS="social-media-context-sms content-strategy-sms platform-strategy-sms content-calendar-sms hook-writer-sms post-writer-sms thread-writer-sms caption-writer-sms content-repurposer-sms carousel-writer-sms"
miss=""
for s in $SMS; do [ -f "$HOME/.claude/skills/$s/SKILL.md" ] || miss="$miss $s"; done
if [ -z "$miss" ]; then row sms-skills ok "all present"; else
  row sms-skills MISS "missing:$miss. Install (ask first): git clone --depth 1 https://github.com/blacktwist/social-media-skills.git /tmp/sms && cp -R /tmp/sms/skills/* ~/.claude/skills/"
  fail=1
fi

for t in node ffmpeg; do
  if command -v $t >/dev/null; then row $t ok "$(command -v $t)"; else row $t MISS "required"; fail=1; fi
done
command -v uv >/dev/null && row uv ok "memes via uv run --with pillow" || row uv opt "missing: memes need Pillow (pip install pillow and run python directly)"
command -v codex >/dev/null && row codex ok "generated images available" || row codex opt "missing: no generated images; use captured and composed media only"
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CH" ] || CH=$(command -v google-chrome chromium 2>/dev/null | head -1)
[ -n "$CH" ] && [ -x "$CH" ] && row chrome ok "$CH" || row chrome opt "missing: no headless page check; open the page by hand"
[ $fail = 0 ] && echo "preflight: ready" || echo "preflight: blocked (see MISS rows)"
exit $fail
