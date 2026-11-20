# Media

Every posting day ships with its finished media. Put files in `social/assets/` (images, clips) and `social/shorts/<id>/renders/<id>.mp4` (Shorts). Paths in `calendar.js` are relative to `social/`.

## Order of preference

1. **Captured from the subject:**
   - simulator frames;
   - browser recordings;
   - app screenshots;
   - the subject's own sounds, music and voice.
2. **Composed from real pixels:**
   - puzzle cards, thread images and before/after pairs;
   - charts from computed numbers;
   - fiction cards built from the subject's own sprites and fonts.
3. **Generated (Codex CLI)**, only where nothing real exists, such as concept sheets or a scene that cannot be captured.
   - Pixel art goes through `pixel-cleanup` before use.
   - Follow the user's disclosure choice; never call it hand-made.
   - Check whether the subject's store bans generated assets before using any.

## Shorts (HyperFrames)

1. Load `/hyperframes` (or `hyperframes:hyperframes` for the plugin) and follow its contract. One project per Short, at `social/shorts/<id>/`.
2. Format: 1080x1920, 10 to 30 s.
3. Picture rules:
   - **Fixed full view.** The whole screen stays in frame at all times: no pans, no zoom moves.
   - **No screen flashes or inversions.**
   - **Pixel art** is scaled by a whole number, nearest neighbour.
   - **Small screens** (handhelds, phones) sit inside a simple device frame with room above and below for captions.
4. Captions:
   - Set them in the subject's own font. For pixel or bitmap fonts, render caption stickers from the font file so they match the subject.
   - Anchor each caption to the frame where its event happens in the source shot, then convert to output time through the segment offsets.
   - Check captions against the logged events. On the first build, 3 Shorts used source-shot frame numbers as output times without converting them, and the captions drifted.
5. Audio:
   - Build the mix from the subject's own sound files at the logged event times, plus its music bed.
   - Normalize to -14 LUFS integrated with `ffmpeg loudnorm`.
   - Record in the open decisions that nobody has listened to the audio yet, unless you actually did.
6. Run `check`, then render, then make a contact sheet of the frames. Look at it before calling the Short done.

## Images

- **Pixel art:** scale by a whole number; never smooth.
- **Puzzle and board cards:** capture after every tile is on screen. Do not use frame 0 if pieces pop in.
- **Charts:** label every value, keep labels inside the chart, and source every number from FACTS.md.
- **Fiction cards:** put a visible "Fiction" label on the card and in the post.
- **Alt text:** every image gets an "Alt text" copy block.

## Memes

See `trends-and-memes.md`.

## Clips for answers and replies

Short horizontal or square clips (5 to 10 s) answering a puzzle or a question. Use the same capture, without the vertical frame. Encode as H.264 MP4 with `-pix_fmt yuv420p` and `+faststart`.
