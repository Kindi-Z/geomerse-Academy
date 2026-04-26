// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Ganti dengan konfigurasi dari Step 4
const firebaseConfig = {
  apiKey: "AIzaSyD...",  // ← GANTI DENGAN PUNYA ANDA
  authDomain: "geomers-academy.firebaseapp.com", // ← GANTI
  projectId: "geomers-academy", // ← GANTI
  storageBucket: "geomers-academy.firebasestorage.app", // ← GANTI
  messagingSenderId: "123456789", // ← GANTI
  appId: "1:123456789:web:abcdef" // ← GANTI
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export agar bisa dipakai di file lain
export { auth, signInWithEmailAndPassword };
