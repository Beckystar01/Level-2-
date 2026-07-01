# One-time setup: login accounts + admin dashboard

The website now has real login accounts (first name + password) and an
admin dashboard, backed by Firebase (Google's free app-backend service).
This requires a one-time setup that only you (as the project owner) can
do, since it needs your own Google account and can't be done through this
session's GitHub access.

It takes about 10 minutes and is entirely free for a class-sized amount of
data.

## 1. Create the Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
   and sign in with any Google account.
2. Click **Add project**, give it a name (e.g. "ncfe-cyber-security"),
   and finish the wizard (you can turn off Google Analytics, it's not
   needed).

## 2. Enable Email/Password sign-in

1. In the left sidebar: **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable **Email/Password**.

## 3. Create the Firestore database

1. In the left sidebar: **Build → Firestore Database → Create database**.
2. Choose **Start in production mode** (the security rules below will
   handle access control), pick any region, click **Create**.
3. Once created, go to the **Rules** tab and replace the contents with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /students/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
         allow read: if request.auth != null &&
           exists(/databases/$(database)/documents/admins/$(request.auth.uid));
       }
       match /admins/{uid} {
         allow read: if request.auth != null;
         allow write: if false;
       }
     }
   }
   ```

   This means: a student can only ever read/write their *own* record, and
   an admin (see step 5) can read everyone's.

4. Click **Publish**.

## 4. Register the web app and get your config keys

1. In the left sidebar, click the **gear icon → Project settings**.
2. Under **Your apps**, click the **</>** (web) icon to register a new
   web app. Give it any nickname. You don't need Firebase Hosting.
3. Firebase will show you a `firebaseConfig` object with your `apiKey`,
   `authDomain`, `projectId`, etc.
4. Open `firebase-config.js` in this repo and paste those exact values in
   place of the `PASTE_...` placeholders. Commit and push (or send them to
   me and I'll do it).

These keys are safe to be public — they identify your project, they don't
grant access by themselves. Actual access control is the Firestore rules
from step 3.

## 5. Make yourself (or a colleague) an admin

The admin dashboard is only visible to accounts listed in Firestore's
`admins` collection. To add yourself:

1. First, log into the website once with the account you want to be
   admin (e.g. use your own first name to sign up).
2. In the Firebase Console, go to **Build → Authentication → Users** and
   find your account. Copy its **User UID**.
3. Go to **Build → Firestore Database → Data**, click **Start collection**,
   name it `admins`.
4. Set the **Document ID** to the UID you copied. You don't need to add
   any fields inside it — the document just needs to exist.
5. Save. Reload the website and log back in — you should now see a
   "🎓 Admin Dashboard" link in the sidebar.

Repeat step 5 for any other teacher who needs admin access.

## What students see vs. what you see

- Students log in with **first name + password** they choose themselves
  the first time ("Create Account"). If two students share a first name,
  the second one should add a last initial (e.g. "Jordan B") since
  usernames must be unique behind the scenes.
- Every worksheet answer a student types autosaves to their account
  (and also to that browser's local storage as a backup if they're
  briefly offline).
- Every multiple-choice practice/mock exam answer is recorded with
  whether it was correct.
- The **Admin Dashboard** page lists every student, their practice-exam
  scores per unit, and lets you expand to see every written answer and
  every MCQ selection (with the correct answer shown next to any wrong
  one).

## If the login screen gets stuck on "Connecting..."

That means it can't reach Firebase — most likely `firebase-config.js`
still has the placeholder values, or there's no internet connection. After
about 8 seconds it will show a **"Continue without login (offline mode)"**
button so the site is never completely unusable — but in offline mode,
answers only save to that one device/browser and the admin dashboard has
nothing to show for that session.
