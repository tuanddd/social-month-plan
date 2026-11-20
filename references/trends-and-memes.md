# Trends and memes

## One trend scan per plan

Run it once while building the calendar. Do not set up a recurring scan unless the user asks.

1. List the events in the plan window: launches in the subject's field, award shows, sales, holidays, big conferences, yearly online events.
2. Verify each date with a web search. Keep the source URL. Mark unconfirmed dates as such and give them a fallback.
3. Look at what people joke about this week: X Explore, Google Trends (past 7 days), Know Your Meme, and the top posts of the week in the relevant subreddits.
4. Keep an event only if it is:
   - big: several outlets cover it;
   - safe: no tragedy, politics or lawsuits;
   - shaped like the audience.
5. Put each kept event in `CAL.trends` with `{date, name, status, use, src}`. Place its post within 24 to 48 hours of the peak. Late is worse than skipped.

## Meme rules

- **Original template.** Download the original blank image and add text or logos onto it. Never redraw a template in the subject's art style; the familiar image is what makes the joke land.
  - Blanks and their ids are at `https://api.imgflip.com/get_memes`, with images at `https://i.imgflip.com/<id>.jpg`.
  - Save blanks to `social/memes/dl/`.
- **Never reuse a template**, in this plan or in earlier plans for the same account. Set `meme: "<template name>"` on every meme day. The validator fails on repeats and checks `.agents/memes-used.json` from earlier plans.
- **Match the template to the moment:**

  | Moment | Template type |
  |---|---|
  | Big event elsewhere | Crowd vs us (Homer alone at the bar with logos on every face, Disaster Girl, Two Spider-Men) |
  | Distraction | Distracted Boyfriend, Two Buttons |
  | A plan with a flaw | Gru's Plan |
  | Escalation | Expanding Brain |
  | Choice | Drake |
  | Coping | This Is Fine |
  | Misreading | Is This a Pigeon |
  | Argument | Woman Yelling at Cat |

- **Tone check.** In meme-ish and savage tones the joke is on us ("not nominated, watching anyway", "not on Steam, not on sale, not even out yet"). Never on the audience or a named person.
- **Logos.** Use an event's or brand's logo only as the backdrop of a crowd-vs-us joke. Take it from the official press kit or Wikimedia Commons.

## Rendering

**Text templates.** Use `scripts/meme_text.py`. It reads a template JSON with the blank's file, size and text boxes. `assets/meme-templates.json` has the boxes for:

- Distracted Boyfriend
- Gru's Plan
- Expanding Brain
- Drake

Each entry has its blank's `url`; download it with `curl -o social/memes/dl/<id>.jpg <url>`.

```
uv run --with pillow python -I ~/.claude/skills/social-month-plan/scripts/meme_text.py <templates.json> <template-key> <blank.jpg> <out.jpg> "text 1" "text 2" ...
```

New templates: download the blank, measure the boxes on it, and add an entry. This takes about 10 minutes.

**Logos on faces** (Homer at the bar style). Use `scripts/meme_faces.py` with a JSON file that lists the following. `assets/faces.example.json` holds the 20 crowd faces of the Homer blank (`https://i.imgflip.com/1784l9.jpg`, 1032x800).

- the blank;
- the crowd face centers and sizes;
- the hero face;
- the crowd logo and the subject logo.

```
uv run --with pillow python -I ~/.claude/skills/social-month-plan/scripts/meme_faces.py <faces.json> <out.jpg>
```

**After rendering**, look at every output. Text must fit its panel, logos must cover the faces, and nothing may be cut off.
