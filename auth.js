// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBt8E_ET9F_uaT99D2kBlREpaPCNOYBJVI",
  authDomain: "health-insurance-2076a.firebaseapp.com",
  projectId: "health-insurance-2076a",
  storageBucket: "health-insurance-2076a.appspot.com",
  messagingSenderId: "1039106417461",
  appId: "1:1039106417461:web:f5697ba0ed02dd8803227c",
  measurementId: "G-B2TPR7EY86"
};

const app = initializeApp(firebaseConfig);

const signUp = document.getElementById("signUp");
signUp.addEventListener("click")