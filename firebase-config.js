import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ISI_DENGAN_API_KEY_LAMA_ANDA",
  authDomain: "ISI_DENGAN_AUTH_DOMAIN_LAMA_ANDA",
  projectId: "ISI_DENGAN_PROJECT_ID_LAMA_ANDA",
  storageBucket: "ISI_DENGAN_STORAGE_BUCKET_LAMA_ANDA",
  messagingSenderId: "ISI_DENGAN_MESSAGING_SENDER_ID_LAMA_ANDA",
  appId: "ISI_DENGAN_APP_ID_LAMA_ANDA"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,

  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  runTransaction,
  serverTimestamp
};