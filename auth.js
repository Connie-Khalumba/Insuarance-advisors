// require('dotenv').config();
// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const database = getDatabase(app);
const auth = getAuth();

const firestore = getFirestore(app);

const main = document.getElementById("main");
const returnBtn = document.getElementById("return-btn");



const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");

const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);

// Start with this
const createacctbtn = document.getElementById("create-acct-btn");



var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
        window.location = "./destinations/destination.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

submitButton.addEventListener("click", function () {
    email = emailInput.value;
    password = passwordInput.value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.alert("Success! Welcome back!");
        window.location = "./destinations/destination.html";
      })
      .catch((error) => {
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        window.alert("Error occurred. Try again.");
      });
  });
  

// Navigate through the login / Register components

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});