
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendPasswordResetEmail   } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCYgRzNBWp8W9Bpf3xdl-uN9fGFcuE0ebM",
  authDomain: "web-app-61b4a.firebaseapp.com",
  projectId: "web-app-61b4a",
  storageBucket: "web-app-61b4a.firebasestorage.app",
  messagingSenderId: "435935739027",
  appId: "1:435935739027:web:084b959a35b9a50cb16166",
  measurementId: "G-881CBNBTEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signInForm = document.querySelector("#form").elements;
let signin = document.querySelector("#login");
let forget = document.getElementById("forget");


signin.addEventListener("click",() => {

    if (
      signInForm.email.value &&
      signInForm.pass.value
    ) {
    let user = {
      email: signInForm.email.value,
      pass: signInForm.pass.value,
    };
  
    signInWithEmailAndPassword(auth, user.email, user.pass)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "userpage.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials!",
      });
    });
    }
});

forget.addEventListener("click",()=>{

    let email = signInForm.email.value
    if (email) {
        const auth = getAuth();
        
        sendPasswordResetEmail(auth, email)
          .then(() => { 
             Swal.fire({
            title: "Email Sent!",
            text: "Email Has Been Successfully Sended!",
            icon: "success",
          });
    
          })
          .catch((error) => {
            console.error("Error sending password reset email:", error);
            // Handle errors (e.g., invalid email, user not found)
          });
    }else{
        Swal.fire({
            icon: "Empty",
            title: "Oops...",
            text: "Please Enter Something",
          });
    }
      
})
  