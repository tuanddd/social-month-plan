# Checks

## Validator

```
node ~/.claude/skills/social-month-plan/scripts/validate.mjs <subject>/social [--ledger <subject>/.agents/memes-used.json] [--today YYYY-MM-DD]
```

The plan is not done until it prints `all checks pass`. Lines marked WARN are judgment calls; say in the hand-off which ones you kept.

## Page over file://

playwright-cli blocks `file://`, so use headless Chrome:

```
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --allow-file-access-from-files --window-size=1400,2400 --screenshot=/tmp/plan.png "file://$PWD/social/index.html"
"$CH" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=4000 --dump-dom "file://$PWD/social/index.html#day-2026-11-23" | grep -c '<div class="cp"><header><h5>[^$]'
```

Look at the screenshot. Check that:

- the week grids line up Mon to Sun;
- the thumbnails load;
- no text overflows.

The dump with `#day-...` opens that day's dialog, so it should count the copy blocks. Repeat at `--window-size=390,2400` for phone width.

## Media

- **Shorts:** run `check`, render, then make a contact sheet with `ffmpeg -i in.mp4 -vf "fps=1,scale=270:-1,tile=6x5" sheet.png`. Look at it.
- **Loudness:** `ffmpeg -i in.mp4 -af loudnorm=print_format=summary -f null -` should read about -14 LUFS.
- **Images:** open each one and look at it. Check the text fits, labels are inside the chart, and the Fiction label is present on fiction cards.
