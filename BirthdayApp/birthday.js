import {auth, signOut} from "./firebase.js";
$(document).ready(() => {

  let firstName = localStorage.getItem('firstName')
  console.log(firstName)
  $('h3').append(", " + firstName[0].toUpperCase()+firstName.slice(1))


  $('button').on('click', () => {
    signOut(auth).then(() => {
      localStorage.removeItem('firstName')
      window.location.href = 'index.html'
    }).catch((error) => {
     console.log(error)
    });
  })
})