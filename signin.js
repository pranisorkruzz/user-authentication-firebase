  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

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

  const submit = document.getElementById("submit");
  
  submit.addEventListener("click" , (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password){
        alert("please enter email and password")
    }
    
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("error");
    });  
  });
