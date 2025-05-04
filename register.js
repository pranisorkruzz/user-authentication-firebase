  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCbV0O2Y99_QRt14560imp6SduX8yr0akQ",
    authDomain: "event-259e7.firebaseapp.com",
    projectId: "event-259e7",
    storageBucket: "event-259e7.firebasestorage.app",
    messagingSenderId: "878763663876",
    appId: "1:878763663876:web:aecbf0466b5469a7b54b51",
    measurementId: "G-CEKXTEFT83"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const sumbit = document.getElementById("rsubmit");
  
  sumbit.addEventListener("click" , (e)=>{
    e.preventDefault();
    const email = document.getElementById("remail").value;
    const password = document.getElementById("rpassword").value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("account created");
      window.location.href ="grand.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error");
      // ..
    });  
  });
