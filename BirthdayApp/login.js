import {auth,signInWithEmailAndPassword,db,ref,child, get} from "./firebase.js";

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
      const dbRef = ref(db);
      const userId = user.uid
      
      get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot)
          console.log(snapshot.val());
          console.log(snapshot.val().firstName)

          localStorage.setItem('firstName', snapshot.val().firstName)
          localStorage.setItem('dob',snapshot.val().dob)
          window.location.href = 'birthday.html'

        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

    });
  

  });


});