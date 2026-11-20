# Lessons from the first build (Exact, Nov 2026)

Each of these cost a fix round. Check them before hand-off.

## Content

- **All-subject feeds bore fast.** The user asked for about half the posts to be stories around the subject: dev logs, programming topics, perf numbers, sprite pipelines, in-world fiction and memes. The dev-log posts (sprite thread, fps report) were the ones the user liked.
- **Hooks must grab in 5 to 10 s.** Add hook-first Shorts every week: a bold claim, a big computed number, a countdown, a POV, debate bait.
- **Memes:**
  - Use the original template image; a redraw in the game's style was rejected.
  - Never repeat a template; a reused one wears out.
  - Self-downplaying humor was welcome.
- **Trends:** verify every event date by web search. The scan moved the GTA meme to launch week and filled an open slot with the Steam Winter Sale. Mark unconfirmed events (Advent of Code was one) and give them a fallback.

## Claims and disclosure

- Tighten claims. "Real board" became "a board in Exact", and "four concept sheets" became "one sheet" when only one existed. Every number is computed by a script and saved.
- On generated art the user chose not to disclose unless asked. Never claim hand-made, and flag store policies (the Playdate Catalog bans generative-AI assets).

## Video and images

- **Caption timing.** On 3 Shorts, source-shot frame numbers were used as output times without converting them, so the captions drifted. Anchor each caption to the source frame of its event and convert through the segment offsets. Verify against the logged events.
- **Caption vs picture.** "Just adding" was shown over a minus tile, and "miss by one" next to a 3 vs 6. Read every caption against the frame it sits on.
- **Puzzle cards** grabbed frame 0, before the tiles popped in. Use a frame after the board is complete.
- **Chart labels** overflowed. Keep labels inside the chart.
- **Audio** was loudness-checked, not listened to. Say so in the open decisions.

## The page

- Week grids need Mon to Sun placeholders so days line up.
- Video thumbnails need a poster time (`thumb`) on clips that start black.
- playwright-cli blocks `file://`; use headless Chrome for checks.

## Process

- The user judges quality before any automation. Do not set up routines, scheduling or recurring trend scans; offer them as a later option.
- One Playdate Simulator at a time; it kills other instances. Subagents never launch it.
