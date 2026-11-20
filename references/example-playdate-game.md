# Worked example: Exact (a Playdate game)

The first full run of this pipeline. Its files live in the game repo's `social/` folder (`<game>/social/`); the tables below name each piece of working code.

## Input

- Subject: the `exact/` folder. No other input. Tone set later by feedback: chill, then meme-ish and savage.
- Deliverable: a local HTML plan opened over `file://`, then an artifact.

## What the study found

- **The game.** A 1-bit math path puzzle. A drill tank drives over number tiles, and a crab cracks only when the total equals its number.
- **The rules, from the code:** times goes first, simple mode clamps at 0, and there are 10 steps per stroke.
- **Stories around it:**
  - times-first math;
  - a puzzle solver that picks boards;
  - a tank drawn at 13 headings;
  - 18 to 48 fps device perf passes;
  - recorded voices;
  - no screen flashes;
  - rules for a 6-year-old;
  - crab fiction ("Crab Tales").

## Pipeline

| Piece | File | What it does |
|---|---|---|
| Film build | `capture/build.sh`, `capture/film.lua` | Copies the source and adds scripted shots. Logs sound events and display offsets. Captures PNG frames in the Simulator. |
| Shot list | `tools/shots.mjs` | Boards and shot definitions; generates `shots.lua` |
| Rules port | `tools/puzzle.mjs`, `gen.mjs`, `stats.mjs` | Solve and generate boards with exactly one answer. Computes the hook numbers: 36,778 routes to 11; 838 of 10,000 boards with exactly one answer. |
| Media helpers | `tools/media.mjs` | Game-font caption stickers, LCD tint, footage segments, audio mix from logged events |
| Shorts | `tools/shorts.mjs`, `shorts/<id>/` | One HyperFrames project per Short. 2x nearest screen in a device frame, captions anchored to source frames, -14 LUFS. |
| Stills | `tools/stills.mjs`, `stories.mjs`, `thread6.mjs` | Puzzle cards, thread images, fps chart, Crab Tale cards |
| Memes | `memes/make.py`, `memes/make2.py` | Homer at the bar with logos on faces; Distracted Boyfriend, Gru's Plan and Expanding Brain text memes |
| Plan | `calendar.js`, `index.html`, `tools/validate.mjs`, `tools/artifact.mjs` | Ancestors of this skill's template and scripts |

## Result

- 28 posts: 13 about the game and 15 stories around it.
- Pillars: puzzle 25%, devlog 29%, memes 18%, crunch 18%, tales 7%, soon 4%.
- One puzzle every Monday with the answer clip on Wednesday.
- Weekly threads.
- 4 meme templates, each used once.
- 5 hook Shorts and 8 gameplay Shorts.

## Feedback rounds, in order

1. More stories around the game. The user liked the dev-log posts.
2. Hooks that grab in 5 to 10 s.
3. Memes and trend riding (Homer at the bar with GTA 6 logos).
4. Don't disclose generated art unless asked. No automation until approved. Run the trend scan once.
5. Use original meme templates, not redraws.
6. Never repeat a template. Be creative and savage, and self-downplay.
