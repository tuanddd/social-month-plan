---
name: social-month-plan
description: Study a subject (a game, app, website, product, repo, brand or idea) in depth, then build a social media content calendar for at least the next 4 weeks in the tone the user sets (formal, professional, chill, playful, meme-ish, savage), where every day already holds its finished media (HyperFrames Shorts, images, memes on original templates) and paste-ready copy for each platform, delivered as a local HTML plan opened over file:// (optionally published as an artifact). Orchestrates the *-sms social skills (context, strategy, platforms, calendar, hooks, posts, threads, captions) and /hyperframes for video. Use for "make a content calendar for X", "plan a month of posts for my game/app", "social media plan in a chill/meme tone", "what should we post for the next month", "content plan with the videos and captions done". Not for a single post or thread (use post-writer-sms or thread-writer-sms), a game trailer (playdate-trailer) or a launch thread staged on X (playdate-launch-thread).
---

# Social month plan

End state: `<subject>/social/index.html`, opened over `file://`. It shows a calendar of 4 weeks or more. Each posting day opens to:

- its finished media (vertical Shorts, images, memes);
- 5 hook variants with the pick marked;
- paste-ready copy for each platform.

Around the calendar, the page holds strategy, platforms, trends, spares, batching and open decisions. Nothing gets posted, scheduled or automated. The plan is a proposal the user judges first.

Build on these skills; do not restate them:

| Skill | Use |
|---|---|
| `social-media-context-sms` | context file |
| `content-strategy-sms`, `platform-strategy-sms` | strategy, pillars, platforms |
| `content-calendar-sms` | the calendar |
| `hook-writer-sms` | hook variants |
| `post-writer-sms`, `thread-writer-sms`, `caption-writer-sms` | copy |
| `content-repurposer-sms` | spreading one piece across platforms |
| `/hyperframes` (`hyperframes:hyperframes` as a plugin) | every video |

Track progress with a task list. These are the steps:

0. Preflight
1. Tone
2. Study
3. Context and facts
4. Strategy
5. Calendar
6. Hooks and copy
7. Media
8. Page
9. Validate and review
10. Hand-off

## Input

Invoked as `/social-month-plan <subject> [tone and style] [anything else]`.

- **Subject**: a folder, a repo, a URL or a description. The study scope is the whole folder or site, not one file.
- **Tone**: a preset from `references/tones.md` or free words ("chill but nerdy", "savage, roast ourselves").
  - If the tone is missing, ask one AskUserQuestion with the presets: Formal, Professional, Chill, Meme-ish (savage is a stronger Meme-ish; mention it in that option's description). "Other" is the free-text option.
  - Ask nothing else up front. Everything else comes from the study.
- **Extras the user may give**: length (default 4 weeks, never less), start date (default the next Monday after today), platforms, account, link, things to avoid.
- Save the user's words verbatim in the context file under "Brief (from the user)". Later steps check against it.
- Build fresh. Ignore older social plans in the subject folder unless the user points at them.

## 0. Preflight

Run `bash ~/.claude/skills/social-month-plan/scripts/preflight.sh`.

| Check | If missing |
|---|---|
| HyperFrames (skill or plugin, and a CLI that runs) | Tell the user now, at step 0, with the install line the script prints, and stop. Continue only if the user wants a plan with no video (run the script with `NO_VIDEO=1`). Never drop video quietly or swap in another video tool. |
| The 14 `*-sms` skills | Show the install command the script prints and ask before running it. |
| `node`, `ffmpeg` | Required. |
| `uv` (memes), `codex` (generated images), Chrome (page checks) | Optional. Say what is lost without them. |

## 1. Tone

Map the tone to the knobs in `references/tones.md`:

- voice
- the subject-vs-stories split
- which pillars exist (formal tones get no meme pillar)
- hook patterns
- meme and fiction use
- emoji and hashtags
- call to action

Write the mapping into the context file. Every later step reads it from there.

## 2. Study

This is the expensive step. Spend the effort here, because a shallow study gives generic posts. Follow `references/study.md` for the subject type (game, app/site, product, other). The output is `social/STUDY.md`, containing:

- what the subject is, in one sentence
- status (out, coming, link)
- who it is for
- what is unique, and gaps nobody fills
- an asset inventory (footage sources, fonts, sounds, art, screenshots)
- a story mine of 15 or more "stories around it"

Run the thing when you can: build it, play it, click through it. Footage you capture beats any description.

## 3. Context and facts

1. Run `social-media-context-sms` and save to `<subject>/.agents/social-media-context-sms.md`. Mark unknowns as OPEN; do not invent them. Unknowns include the account, an example of the user's own voice, and a link.
2. Write `social/FACTS.md`. Every number or claim that will appear in a post goes here with its source: a file and line, a command and its output, or a URL. Compute numbers with code where you can, and save the script under `social/tools/`. A claim that is not in FACTS.md does not go in a post.

## 4. Strategy

1. Run `content-strategy-sms`, then `platform-strategy-sms`.
2. Set the split from the tone. The default is about half about the subject itself and half the stories around it: making-of, numbers, programming or craft topics, decisions, labelled in-world fiction, memes.
   - A subject that is simple to show gets bored fast if every post is the subject.
3. Pillars: 4 to 6, none above 40%, promotional under 15% (mark it `promo: true`).
4. Pick 2 to 4 platforms. One is primary.

## 5. Calendar

1. Run `content-calendar-sms` for 4 weeks or more.
2. Keep about 20% of slots flexible. Mark holidays as off.
3. Run one trend scan now, following `references/trends-and-memes.md`. Verify every event date with a web search and keep the source URL.
   - Put trend posts on the verified dates.
   - Never set up a recurring scan unless the user asks.
4. Each day may carry an evening `also` post.

## 6. Hooks and copy

1. For every posting day, write 5 hook variants with `hook-writer-sms`, pick one, and say why.
   - At least one hook-first Short per week, using `references/hooks.md`: the claim lands in the first 1 to 2 s and the proof by 10 s.
2. Write the copy with `post-writer-sms`, `thread-writer-sms` and `caption-writer-sms`, in the tone's voice.
3. Copy keys name the platform: "X post", "X thread", "Bluesky post", "LinkedIn post", "Shorts caption", "TikTok caption", "Reels caption", "YouTube Shorts title", "Alt text", and so on. The validator reads the limits from those prefixes.
4. Add alt text for every image.

## 7. Media

Follow `references/media.md`. In short:

- **Real first.** Captured footage and the subject's own pixels, fonts and sounds come first. Composed stills come next. Generated images come last (Codex CLI) and are cleaned before use.
- **Shorts** go through `/hyperframes`. Each one is a fixed full view, 1080x1920, with no pans and no screen flashes. Captions use the subject's own font. Audio comes from the subject's own sounds and is normalized to -14 LUFS. Run `check`, then render, then review a contact sheet.
- **Memes** use the original template image, never a redraw. No template appears twice, in this plan or in earlier plans for the same account. Render them with `scripts/meme_text.py` or `scripts/meme_faces.py`.

## 8. Page

1. Run `bash ~/.claude/skills/social-month-plan/scripts/scaffold.sh <subject>/social`. It copies the page template and an example `calendar.js`.
2. Rewrite `calendar.js` for this plan, following `references/calendar-schema.md`. All page text lives there, so leave `index.html` alone unless the plan needs a new section.
3. Open the page with `open <subject>/social/index.html`.

## 9. Validate and review

1. Run `node ~/.claude/skills/social-month-plan/scripts/validate.mjs <subject>/social`. Fix every FAIL.
   - It checks: platform limits and hashtag counts, banned patterns, missing media, period of 28 days or more, pillar caps, gaps per platform, no repeated meme template (pass `--ledger <subject>/.agents/memes-used.json` to cover earlier plans), and that every trend has a source.
2. Run the headless check (the page over `file://`, screenshot) from `references/checks.md`, and look at the screenshot.
3. Self-review against `references/lessons.md`. Each Short's captions must match its picture at the right frames, each claim must be in FACTS.md, and each fiction post must carry its label.
4. If the user wants an artifact, publish it:
   1. Run `node ~/.claude/skills/social-month-plan/scripts/artifact.mjs <subject>/social`.
   2. Publish `artifact.html` with the Artifact tool and pass `artifact-files.json` as `files`.
   - Otherwise offer it in one line.

## 10. Hand-off

1. Append each meme template used to `<subject>/.agents/memes-used.json` as `{template, date, period}`.
2. Send the notification the user's setup asks for.
3. Reply with:
   - the path, plus the artifact link if there is one;
   - the posting count and the split;
   - the first post to make;
   - the open decisions (account, link, numbers to re-measure, audio nobody has listened to yet);
   - one next action.

## Rules that hold in every tone

- **True claims only.**
  - Numbers are computed or sourced.
  - "Real board" or "real footage" only when it is.
  - Fiction carries a visible "Fiction" label in the image and the post.
- **Generated art.** Follow the user's disclosure choice and record it in the context file. Never claim generated art is hand-made. Check the policy of the place the subject ships to (for example, the Playdate Catalog rejects generative-AI assets) and flag any conflict.
- **Who the joke is on.** It is on us or on the situation, never on the audience or a named person. No tragedy, politics or lawsuits as meme fuel.
- **No automation.** No posting, scheduling, routines or recurring scans until the user approves the plan.
- **Worked example.** `references/example-playdate-game.md` shows a full run on a Playdate game (Exact). Read it before the first build of a new subject type.
