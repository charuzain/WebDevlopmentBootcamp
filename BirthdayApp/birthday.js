import {auth, signOut} from "./firebase.js";
$(document).ready(() => {

  let firstName = localStorage.getItem('firstName')
  let dob = localStorage.getItem('dob')
  // console.log(firstName)
  // console.log(dob)
  const dobDate = dob.split("-")

  // Convert dob string into array and find month , year and date
  const dobDay = Number(dobDate[0])
  const dobMonth = Number(dobDate[1])
  const dobYear = Number(dobDate[2])
  console.log(typeof dobDay)
  console.log(dobMonth)
  console.log(dobYear)


  $('h3').append(", " + firstName[0].toUpperCase() + firstName.slice(1))

  // Today's date
  const todayDate = new Date()
  const currentDate = todayDate.getDate()
  const currentMonth = todayDate.getMonth() + 1
  const currentYear = todayDate.getFullYear()
  console.log(typeof currentDate)
  console.log(typeof currentMonth)
  console.log(typeof currentYear)

  if (currentDate === dobDay && currentMonth === dobMonth) {
    console.log("Happy birthday")
  }
  else {
    console.log("your birthday is after ")
  }




  $('button').on('click', () => {
    signOut(auth).then(() => {
      localStorage.removeItem('firstName')
      window.location.href = 'index.html'
    }).catch((error) => {
     console.log(error)
    });
  })
})