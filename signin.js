
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBpaWtmxu0gSWmphmvcG6R6O4yM5WcajT8",
    authDomain: "toiletfinder-9d777.firebaseapp.com",
    projectId: "toiletfinder-9d777",
    storageBucket: "toiletfinder-9d777.firebasestorage.app",
    messagingSenderId: "330063124834",
    appId: "1:330063124834:web:bae2cf6415b62ed2e3743b",
    measurementId: "G-700K7L928P"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const signin = document.getElementById("loginButton");
signin.addEventListener("click",
    function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("User signed in successfully!");
    window.location.href = "main.html"; 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error: " + errorMessage);
  });
})