import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt8E_ET9F_uaT99D2kBlREpaPCNOYBJVI",
  authDomain: "health-insurance-2076a.firebaseapp.com",
  projectId: "health-insurance-2076a",
  storageBucket: "health-insurance-2076a.appspot.com",
  messagingSenderId: "1039106417461",
  appId: "1:1039106417461:web:f5697ba0ed02dd8803227c",
  measurementId: "G-B2TPR7EY86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Elements
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
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

// Signup function
createacctbtn.addEventListener("click", () => {
  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;

  if (signupEmail !== confirmSignupEmail) {
    return alert("Email fields do not match. Try again.");
  }

  if (signupPassword !== confirmSignUpPassword) {
    return alert("Password fields do not match. Try again.");
  }

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    return alert("Please fill out all required fields.");
  }

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then(() => {
      alert("Success! Account created.");
      window.location = "./destinations/destination.html";
    })
    .catch(error => {
      alert("Error occurred. Try again.");
      alert(error.message);
    });
});

// Login function
submitButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Success! Welcome back!");
      window.location = "./plans.html";
    })
    .catch(error => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert("Error occurred. Try again.");
    });
});

// Toggle between login and signup views
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacct.style.display = "none";
});

// Function to collect form data and send it to Firestore
async function handleSelectCover(cardId) {
  const card = document.getElementById(cardId);
  const data = {
    outpatientCoverType: card.querySelector(`#outpatient-cover-type-${cardId}`).value,
    outpatientLimit: card.querySelector(`#outpatient-limit-${cardId}`).value,
    maternityLimit: card.querySelector(`#maternity-limit-${cardId}`).value,
    dentalCoverType: card.querySelector(`#dental-cover-type-${cardId}`).value,
    dentalLimit: card.querySelector(`#dental-limit-${cardId}`).value,
    opticalCoverType: card.querySelector(`#optical-cover-type-${cardId}`).value,
    opticalLimit: card.querySelector(`#optical-limit-${cardId}`).value,
    cardId
  };

  try {
    await addDoc(collection(firestore, "insuranceCovers"), data);
    alert('Cover details saved successfully!');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Attach event listeners to "Select this Cover" buttons
document.querySelectorAll('.btn-select-cover').forEach(button => {
  button.addEventListener('click', () => {
    const cardId = button.getAttribute('data-card-id');
    handleSelectCover(cardId);
  });
});
