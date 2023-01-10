import {auth,createUserWithEmailAndPassword} from "./firebase.js";

$(document).ready(() => {

  
  $('button').on("click", (e) => {
    e.preventDefault();

    console.log(e)
    const firstName = e.target.form[0].value
    const lastName = e.target.form[1].value
    const dob = e.target.form[2].value
    const email = e.target.form[3].value
     const password = e.target.form[4].value
     console.log(firstName)
     console.log(dob)
     console.log(email)
     console.log(password)
 
 
 

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
})
})