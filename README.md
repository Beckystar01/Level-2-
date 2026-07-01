# NCFE Level 2 Cyber Security — Interactive Learning Platform

A single-file, self-contained HTML application covering all 6 units of the
NCFE Level 2 Cyber Security qualification. Each unit has 6 tabs (Content,
several button-driven interactive activities, Worksheets, and a Practice
exam), designed so no two tabs across the whole platform reuse the same
activity type.

## Files

- `cyber_security_with_all_worksheets.html` — the platform itself (content,
  styling, and JavaScript). This is the file students open.
- `firebase-config.js` — your Firebase project's connection keys. Ships
  with placeholders — see **Login accounts + admin dashboard** below.
- `FIREBASE_SETUP.md` — the one-time setup steps for login accounts.
- `ANSWER_KEY.md` — the answer key for the auto-graded multiple-choice
  questions in Units 4, 5 and 6's practice/mock exams, with confidence
  notes for a tutor to double-check before relying on it for assessment.
- `.github/workflows/pages.yml` — GitHub Actions workflow that deploys the
  site to GitHub Pages on every push to `main`.

## Login accounts + admin dashboard

Students log in with a first name and a password they choose. Every
worksheet answer and every practice-exam MCQ result is saved to their
account. A separate **Admin Dashboard** page (visible only to accounts you
designate as admin) lists every student and their answers/scores.

This requires a one-time Firebase project setup — see
**[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** for the full walkthrough
(about 10 minutes, free). Until that's done, the login screen will offer
a "Continue without login (offline mode)" fallback so the site is never
completely unusable — but in that mode, answers only save to the local
device and nothing appears in the admin dashboard.

## Running it locally

No build step. Because the login system uses ES modules
(`<script type="module">`), opening the HTML file directly via `file://`
won't load them (browsers block module imports from `file://` for security
reasons) — you'll see the offline-mode fallback instead, which is fine for
checking content but not the login/admin flow. To test login locally, serve
the folder over HTTP, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000/cyber_security_with_all_worksheets.html`.

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
- Usernames are first names only, which can collide between students —
  the second student with a given first name needs to add a distinguishing
  suffix (e.g. a last initial) when creating their account.
- The admin dashboard shows accumulated MCQ scores per unit and every
  saved written answer, but there's no per-question override/re-grade UI —
  correcting a wrong auto-graded answer means editing the answer key in
  the HTML itself (see `ANSWER_KEY.md`).
- Verified in a headless Chromium browser at desktop and a 400px mobile
  viewport; not yet tested on a physical phone. The login flow specifically
  could only be verified up to the point of reaching Firebase, since this
  development sandbox has no outbound internet access — a real device with
  a configured Firebase project should be used to confirm the full
  sign-up/login/admin round trip before relying on it with students.
