# calendar.js schema

`social/calendar.js` sets `window.CAL`. The page template (`assets/index.html`), `validate.mjs` and `artifact.mjs` all read it. It holds all page text, so a new plan only rewrites this file. `assets/calendar.example.js` is a complete small example.

```js
window.CAL = {
  period: "Mon Nov 23 to Sun Dec 20, 2026",
  tz: "US Eastern",
  sides: { subject: "The game", around: "Stories around it" },
  page: {
    title: "Exact Content Calendar",
    kicker: "Studio · Subject · content calendar proposal",
    headline: "4 weeks of *Exact*, ready to post",
    sub: "One paragraph: what the plan does and how to use the page.",
    start: { text: "<b>Start here:</b> Mon Nov 23, 9:00. Post ...", key: "2026-11-23", label: "Open Puzzle #1" },
    quote: "The strategy in 2 or 3 sentences.",
    strategyCards: [{ h: "Who it is for", html: "<ul><li>...</li></ul>" }],
    platforms: [{ name: "X", role: "Primary", why: "...", cadence: "4 per week" }],
    platformNote: "Rules applied: ...",
    trendIntro: "One trend scan, run on Nov 19.",
    trendCards: [{ h: "Meme rules", html: "<p>...</p>" }],
    batching: [{ h: "Weekly rhythm", html: "<ul><li>...</li></ul>" }],
    decisions: [{ h: "1. Which account posts", html: "<p>...</p>" }],
    made: [{ h: "Footage", html: "<p>...</p>" }]
  },
  pillars: [
    { id: "puzzle", side: "subject", name: "Exact Puzzle", angle: "...", formats: "...", share: "25%",
      color: "#2f6fd6", dark: "#6c9cf0", promo: false, fiction: false }
  ],
  weeks: [
    { n: 1, theme: "Meet Exact", days: [ /* day objects, see below */ ] }
  ],
  spares: [ /* day objects without date, spare: true */ ],
  trends: [ { date: "2026-11-19", name: "...", status: "verified", use: "Tue Nov 24 meme", src: "https://..." } ],
  banned: ["—", "isn't just"],
  maxGap: 3
};
```

`headline` wraps one word in `*stars*` to highlight it. The `html` fields are written by you and rendered as they are.

## Day object

| Field | Required | Notes |
|---|---|---|
| `date` | yes | `YYYY-MM-DD`. Days missing from a week render as "No post". |
| `dow` | yes | Mon to Sun |
| `pillar` | yes | A pillar id |
| `title` | yes | Card title |
| `format` | yes | For example "Short, 15 s" or "Thread, 6 posts, 2 images" |
| `platforms` | yes | For example `["X", "Bluesky", "YouTube Shorts", "TikTok", "Reels"]` |
| `time` | yes | For example "X 9:00 · Bluesky 10:00 ET" |
| `media` | yes | `[{type: "img" or "video", src, cap, vertical?, thumb?}]`; `thumb` is the poster time in seconds |
| `hooks` | yes | `{platform, list: [[pattern, text] x5], pick: index, why}` |
| `copy` | yes | `[{k, t}]`; `k` starts with the platform, see below |
| `trend` | no | `true` for trend posts; needs a matching `CAL.trends` entry with `src` |
| `meme` | no | Template name; must be unique across the plan |
| `also` | no | A second (evening) post: a day object without `date`/`dow` |
| `flex` | no | Text for a flexible slot (no other fields needed) |
| `off` | no | Text for a day off (holiday) |
| `hold` | no | Spares only: reason it is on hold |

## Copy keys and the limits the validator applies

Limits for X, Bluesky, Threads, LinkedIn, Instagram, TikTok and YouTube come from `post-writer-sms`, `caption-writer-sms` and `platform-strategy-sms`. The Facebook, Mastodon, Pinterest and Alt text limits are not in those skills; they are platform caps and only produce warnings. Keys match by prefix, longest first.

| Key prefix | Hard limit | Hashtags |
|---|---|---|
| `X thread` | 280 per post; posts start with `1/ `, `2/ ` | 0-2 |
| `X` | 280 | 0-2 |
| `Answer` | 280 | any |
| `Bluesky thread` | 300 per post; posts split by a line holding only `—` | 0 |
| `Bluesky` | 300 | 0 |
| `Threads` | 500 | 0-1 |
| `Mastodon` | 500 (warns) | any |
| `LinkedIn` | 3000 | 3-5 |
| `Facebook` | 63206 (warns) | 0-3 |
| `Instagram`, `Reels caption` | 2200 | 3-10 |
| `TikTok caption` | 2200; under 150 recommended (warns) | 3-5 |
| `Shorts caption` | under 150 and must contain `#shorts` | up to 3 |
| `YouTube Shorts title`, `YouTube title` | 100; over 70 warns | any |
| `Pinterest` | 500 (warns) | 0 |
| `Alt text` | 1000 (warns) | any |

Emoji and other wide characters count as 2.

## Gaps

`maxGap` (default 3) is the longest silence allowed on a platform whose `page.platforms` role starts with "Primary". Other platforms may go 7 days. With no primary marked, every platform uses `maxGap`.
