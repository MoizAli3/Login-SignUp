
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,  updatePassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


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

let signUpForm = document.querySelector("#signUpForm").elements;

let signup = document.querySelector(".signup");


signup.addEventListener("click",() => {
  let user = {};

  if (
    signUpForm.user.value &&
    signUpForm.email.value &&
    signUpForm.pass.value &&
    signUpForm.conf_pass.value
  ) {
    if (signUpForm.pass.value === signUpForm.conf_pass.value) {
      user = {
        user: signUpForm.user.value,
        email: signUpForm.email.value,
        pass: signUpForm.pass.value,
      };

      createUserWithEmailAndPassword(auth, user.email, user.pass)
      .then( async (userCredential) => {
        try {
          const user = userCredential.user;
          Swal.fire({
                  title: "Thank You!",
                  text: "Form Has Been Successfully Submited!",
                  icon: "success",
                });
          
  
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Credentials!",
          });
      
        } 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      localStorage.setItem("user", JSON.stringify(user));

      signUpForm.user.value = "";
      signUpForm.email.value = "";
      signUpForm.pass.value = "";
      signUpForm.conf_pass.value = "";
    } else {
      alert("Password Doesn't Match");
    }
  } else {
    alert("Fill All Filed!");
  }
});


