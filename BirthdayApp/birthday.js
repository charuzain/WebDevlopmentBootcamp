import {auth, signOut} from "./firebase.js";
$(document).ready(() => {

  let firstName = localStorage.getItem('firstName')
  let dob = localStorage.getItem('dob')
  console.log(firstName)
  console.log(dob)
  const dobDate = dob.split("-")
  console.log(dobDate)

  // Convert dob string into array and find month , year and date
  const dobDay = Number(dobDate[2])
  const dobMonth = Number(dobDate[1])
  const dobYear = Number(dobDate[0])
  console.log( dobDay)
  console.log(dobMonth)
  console.log(dobYear)


  $('h3').append(", " + firstName[0].toUpperCase() + firstName.slice(1))

  // Today's date
  const todayDate = new Date()
  const currentDate = todayDate.getDate()
  const currentMonth = todayDate.getMonth() + 1
  const currentYear = todayDate.getFullYear()
  console.log( dobDay)
  console.log(currentDate)
  console.log(dobMonth)
  console.log( currentMonth)
  // console.log(currentYear)

  if (currentDate === dobDay && currentMonth === dobMonth) {
    console.log("Happy birthday")
    fetch("https://type.fit/api/quotes").then((res) => {
      return res.json()
    }).then((res) => {
      console.log(firstName)
      
      const randomQuoteNum = Math.floor(Math.random()* res.length)
      const randomQuote = res[randomQuoteNum]
      const quote = randomQuote.text
      const author = randomQuote.author
      console.log(author)

      $(".container").append(`<h1 class="text-center my-5">Happy Birthday  ${firstName[0].toUpperCase()+firstName.slice(1)} !!!</h1>
      <p class="text-center"> "${quote}" </p>
      <p class="text-center">${author} </p> `)



    })
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