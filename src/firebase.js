// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAI_cqpz7744vmQcH5unhwbe6h75QxEd5E",
  authDomain: "zentel-insight-1.firebaseapp.com",
  projectId: "zentel-insight-1",
  storageBucket: "zentel-insight-1.appspot.com",
  messagingSenderId: "259362550302",
  appId: "1:259362550302:web:f5c96e3c64f8ff5f9af40f",
  measurementId: "G-ZTK98TLPH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);