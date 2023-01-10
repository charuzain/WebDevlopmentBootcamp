import {auth,createUserWithEmailAndPassword} from "./firebase.js";

$(document).ready(() => {

  
  $('button').on("click", (e) => {
    e.preventDefault();

    console.log(e)
 
 

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
})