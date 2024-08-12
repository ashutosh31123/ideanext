// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-9b8b4.firebaseapp.com",
  projectId: "loop-9b8b4",
  storageBucket: "loop-9b8b4.appspot.com",
  messagingSenderId: "302034190871",
  appId: "1:302034190871:web:d8a4d2b1adbc8aef109252",
  measurementId: "G-NS6JE6CTXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
