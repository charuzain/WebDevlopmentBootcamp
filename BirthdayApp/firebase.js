  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCVPbR8xsJEVgvWTT5agaonauqCvJ3Ijc0",
    authDomain: "birthdayapp-9b0a6.firebaseapp.com",
    projectId: "birthdayapp-9b0a6",
    storageBucket: "birthdayapp-9b0a6.appspot.com",
    messagingSenderId: "863361332987",
    appId: "1:863361332987:web:e3949665c8ff193dc9a25e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}
