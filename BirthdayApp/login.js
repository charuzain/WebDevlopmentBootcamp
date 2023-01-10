import {auth,signInWithEmailAndPassword} from "./firebase.js";

$(document).ready(() => {
  $('button').on('click', (e) => {
    e.preventDefault();
    console.log('click');


    const email = e.target.form[0].value;
    const password = e.target.form[1].value;
    // console.log(email);
    // console.log(password);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      window.location.href = 'birthday.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  

  });


});