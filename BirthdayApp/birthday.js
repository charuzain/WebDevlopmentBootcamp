import {auth, signOut} from "./firebase.js";
$(document).ready(() => {
  $('button').on('click', () => {
    signOut(auth).then(() => {
      window.location.href = 'index.html'
    }).catch((error) => {
     console.log(error)
    });
  })
})