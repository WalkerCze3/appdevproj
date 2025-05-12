// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpaWtmxu0gSWmphmvcG6R6O4yM5WcajT8",
    authDomain: "toiletfinder-9d777.firebaseapp.com",
    projectId: "toiletfinder-9d777",
    storageBucket: "toiletfinder-9d777.firebasestorage.app",
    messagingSenderId: "330063124834",
    appId: "1:330063124834:web:bae2cf6415b62ed2e3743b",
    measurementId: "G-700K7L928P"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const signup = document.getElementById("createAccountButton"); 
  signup.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            alert("User created successfully! Please log in.");
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});


