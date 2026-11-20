# Study the subject

Goal: know the subject well enough to write 30 posts that only this subject could have. Budget real time here: read everything relevant and run the thing.

Output: `social/STUDY.md` with the sections at the bottom of this page.

## Every subject

1. Read the folder or site end to end. This means READMEs, design docs, notes, changelogs, git log (`git log --oneline | head -200`), TODOs, store or landing pages and press kits. Read memory files that mention the subject.
2. Find what is true and checkable. Note the numbers (counts, sizes, fps, levels, users, versions) and the source of each one.
3. Find what is unique: the one rule, feature or decision nobody else has. Search for 3 to 5 comparable things to confirm it.
4. Find the status: released or not, the link, the price, the platforms. Unknown means OPEN.
5. Inventory the assets you can reuse: fonts, sounds, music, voice, sprites, icons, screenshots, logos, colors.

## A game (repo with source)

1. **Build and play it.**
   - Use the engine's simulator or emulator. Write down the rules as the code implements them, not as the README describes them.
   - Use one simulator instance at a time.
2. **Port the core rules to a small JS module** when posts need puzzles, routes, odds or "N ways to win" numbers. Use it to:
   - generate and solve boards;
   - prove uniqueness;
   - compute the stats that become hooks.
3. **Make a film build**: a copy of the source plus a script that plays scripted shots deterministically.
   - Log every sound event with its frame and every screen offset.
   - Capture PNG frames. This gives footage, and lets audio be rebuilt from the game's own files in sync.
4. **Mine the story list** from the making of the game. Sources:
   - performance passes (before and after numbers);
   - art pipeline (sprite sheets, headings, palettes);
   - rule changes and why;
   - accessibility choices (no flashes);
   - recorded voices;
   - the puzzle generator;
   - rejected ideas.

## An app or website

1. **Run it locally** or open the live URL.
   - Walk the main flows.
   - Record vertical screen captures at the device size with a headless browser: playwright, or Chrome with `--window-size`. Take PNG screenshots of each state.
2. **Read the code paths behind the 3 flows that matter most.** They give programming-topic posts (how X works, a bug and its fix, a speed-up with numbers).
3. **Read the changelog and issues.** They give dated news and "we shipped" posts.
4. **Check pricing, onboarding and empty states.** They give relatable POV hooks.

## A physical product, service or brand

1. Fetch the site, specs, reviews and FAQs. Collect real customer phrases as hook material.
2. **Ask the user for photos or video** if none exist. Do not generate fake product shots presented as real.

## A described idea (no files)

1. Ask for anything that already exists: a name, a sketch, a link.
2. Plan media that does not need the product: process posts, polls, waitlist hooks. Mark the calendar "pre-product".

## STUDY.md sections

1. One line: what it is.
2. Status and link (or OPEN).
3. Audience: primary, secondary, and reach (who shares this kind of thing).
4. Unique: 3 points, each with the comparable you checked.
5. Gaps to own: what similar accounts never post.
6. Assets: a table of asset, path, and use.
7. Story mine: 15 or more stories around the subject. Each gets a working title, a type, and a fact source.
   - Types: making-of, number, decision, failure, programming or craft topic, people and voices, in-world fiction, comparison, meme angle.
8. Risks: claims to avoid, store or platform policies, and sensitive topics.
