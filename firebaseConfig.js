// app/config/firebaseConfig.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsmsnnRbOSL5jTEZwwU6G5ht_RyxUhg84",
  authDomain: "campus-events-hub-6762c.firebaseapp.com",
  projectId: "campus-events-hub-6762c",
  storageBucket: "campus-events-hub-6762c.appspot.com",
  messagingSenderId: "257588775791",
  appId: "1:257588775791:web:3c1494e7c84b1a1066369a",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
