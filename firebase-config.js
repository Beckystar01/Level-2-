// Fill these in with YOUR Firebase project's values.
// Firebase Console -> Project settings -> General -> "Your apps" -> Web app -> SDK setup and configuration.
// These values are safe to be public in a client-side app - they are not secrets.
// Real access control is enforced by the Firestore security rules (see FIREBASE_SETUP.md).
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// The fake email domain used to turn a first name into something Firebase Auth
// (which requires an email address) will accept. Students never see this -
// they only ever type their first name.
export const LOGIN_EMAIL_DOMAIN = "ncfe-cyber-students.local";
