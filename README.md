# NCFE Level 2 Cyber Security — Interactive Learning Platform

A single-file, self-contained HTML application covering all 6 units of the
NCFE Level 2 Cyber Security qualification. Each unit has 6 tabs (Content,
several button-driven interactive activities, Worksheets, and a Practice
exam), designed so no two tabs across the whole platform reuse the same
activity type.

## Files

- `cyber_security_with_all_worksheets.html` — the entire platform (content,
  styling, and JavaScript) in one file. This is the only file that needs to
  be opened/deployed.
- `ANSWER_KEY.md` — the answer key for the auto-graded multiple-choice
  questions in Units 4, 5 and 6's practice/mock exams, with confidence
  notes for a tutor to double-check before relying on it for assessment.
- `.github/workflows/pages.yml` — GitHub Actions workflow that deploys the
  site to GitHub Pages on every push to `main`.

## Running it locally

No build step, no dependencies. Just open
`cyber_security_with_all_worksheets.html` directly in a browser.

## Hosting on GitHub Pages

The deploy workflow is already set up, but GitHub Pages needs one
one-time manual step from a repo admin (this can't be done via the API used
by this session):

1. Go to **Settings → Pages** on this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or re-run the "Deploy site to GitHub Pages" workflow from
   the **Actions** tab) — the site will then be published automatically at
   `https://beckystar01.github.io/Level-2-/`.

## Activity inventory (no repeats across the whole platform)

- **Unit 1:** Threat Actor Match, password-deduction worksheet with a
  suggested-answer reveal
- **Unit 2:** Sound the Alarm, Network City Builder, CIA Dispatch Center,
  Peel the Web Layers, CIA Combination Lock
- **Unit 3:** Courtroom Judge, Guess the Penalty, Vault Lock and Key, File
  Classification sorting, Moral Compass, Emoji Mood Picker
- **Unit 4:** Detective Case Files, 5-Star Risk Rating, Unscramble Terms,
  Smart Home Builder, Safe or Unsafe
- **Unit 5:** Incident Response Ordering, Traffic Light Safety, Cipher
  Decoder, Hat Hacker Detective, Word Hunt, Firewall Defender Game, Fact or
  Fiction
- **Unit 6:** Flip Cards, Spin the Wheel, Type to Learn, Personality Quiz

## For students: exporting your answers

Every worksheet text answer autosaves to your browser's local storage, so
it survives a page reload on the same device/browser. There is also a
**⬇️ Export My Answers** button (top of the sidebar) that downloads a text
file of everything you've typed, in case you need to hand it in or move
between devices.

## Known limitations

- The multiple-choice answer key (see `ANSWER_KEY.md`) was derived from
  general cybersecurity/NCFE-curriculum knowledge, not an official mark
  scheme — a tutor should verify it before students rely on it for exam
  prep.
- There's no server-side component, so there's no way for a tutor to see
  what a student typed unless the student uses the export button and sends
  the file on.
- Verified in a headless Chromium browser at desktop and a 400px mobile
  viewport; not yet tested on a physical phone.
