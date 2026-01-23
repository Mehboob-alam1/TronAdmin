import { initializeApp } from 'firebase/app';

// ⚠️ IMPORTANT: Replace ALL placeholder values with your real Firebase config!
// 
// How to get your config:
// 1. Go to Firebase Console → Project Settings → Your apps
// 2. Copy the config values from your web app
// 3. For databaseURL: Go to Realtime Database → Copy the URL shown at the top
//    Format: https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/
//
// See FIREBASE_SETUP_INSTRUCTIONS.md for detailed steps

const firebaseConfig = {
  apiKey: "AIzaSyA2xSmbTtuy23a6x0T2bPAU8XgEUhgWHqQ",
  authDomain: "tronmine-1c7db.firebaseapp.com",
  databaseURL: "https://tronmine-1c7db-default-rtdb.firebaseio.com",
  projectId: "tronmine-1c7db",
  storageBucket: "tronmine-1c7db.firebasestorage.app",
  messagingSenderId: "299757420526",
  appId: "1:299757420526:web:1960e4e130a4d4509b58ff",
  measurementId: "G-DNG3DFY3HF"
};


// Validate that config is not using placeholders
const hasPlaceholders = 
  firebaseConfig.apiKey.includes('YOUR_') ||
  firebaseConfig.projectId.includes('YOUR_') ||
  firebaseConfig.databaseURL.includes('YOUR_');

if (hasPlaceholders && process.env.NODE_ENV !== 'test') {
  console.error('❌ ERROR: Firebase configuration contains placeholders!');
  console.error('Please update admin-panel/src/firebase.js with your real Firebase config.');
  console.error('See FIREBASE_SETUP_INSTRUCTIONS.md for help.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Note: Don't initialize database here to avoid circular dependencies
// Use getDatabase(app) in components instead

export default app;

