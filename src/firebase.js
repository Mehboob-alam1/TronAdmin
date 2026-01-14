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
  apiKey: "AIzaSyAiUeUUrqtR1-dC7k94LBd1RoSU0fSg1MI",
  authDomain: "usdtgroup-276d4.firebaseapp.com",
  databaseURL: "https://usdtgroup-276d4-default-rtdb.firebaseio.com",
  projectId: "usdtgroup-276d4",
  storageBucket: "usdtgroup-276d4.firebasestorage.app",
  messagingSenderId: "78994945282",
  appId: "1:78994945282:web:9a63a02d4b90570f823e1b",
  measurementId: "G-2DSG2PJLLE"
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

