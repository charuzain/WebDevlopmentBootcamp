import {auth,createUserWithEmailAndPassword,db,set,ref} from "./firebase.js";

$(document).ready(() => {

const formatYmd = date => date.toISOString().slice(0, 10);


  const date = formatYmd(new Date()); 
  console.log( date)
  $('#dob').attr("max",date)

  
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
 
    const userData = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      password:password
 }
 

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    const userId = user.uid
    // save to db
    set(ref(db, 'users/' + userId), userData)
      .then(() => {

        // pass firstname to another page (birthday.html) usig local storage
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('dob',dob)

      window.location.href ='birthday.html'
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)

  });
})
})