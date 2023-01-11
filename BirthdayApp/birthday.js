import { auth, signOut } from "./firebase.js";
// import JSConfetti from 'js-confetti'


$(document).ready(() => {

  let firstName = localStorage.getItem('firstName')
  let dob = localStorage.getItem('dob')
  console.log(dob)
  const dobDate = dob.split("-")
  console.log(dobDate)

  // Convert dob string into array and find month , year and date
  const dobDay = Number(dobDate[2])
  const dobMonth = Number(dobDate[1])
  const dobYear = Number(dobDate[0])


  $('h3').append(", " + firstName[0].toUpperCase() + firstName.slice(1))

  // Today's date
  const todayDate = new Date()
  const currentDate = todayDate.getDate()
  const currentMonth = todayDate.getMonth() + 1
  const currentYear = todayDate.getFullYear()


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

      $(".container").append(`<h1 class="text-center mt-5">Happy Birthday  ${firstName[0].toUpperCase() + firstName.slice(1)} !!!</h1>
      <p class="text-center">🎊🎂🎊</p>
      <p class="text-center"> "${quote}" </p>
      <p class="text-center">${author} </p> `)
  setInterval(() => {
      
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
          
          // emojis: ["🎊","🎈"],
          confettiRadius: 7,
          confettiNumber: 500,
        })
      }, 2000)
      // const jsConfetti = new JSConfetti()
      // jsConfetti.addConfetti({
        
      //   // emojis: ["🎊","🎈"],
      //   confettiRadius: 7,
      //   confettiNumber: 5500,
      // })




    })
  }
  else {
    const today = new Date()
    const currentMon = today.getMonth() + 1
    console.log(currentMon)
    let bdayYear = today.getFullYear()
    console.log(bdayYear )
   

      if (currentMon === dobMonth && today.getDate()> dobDay) {
        bdayYear = bdayYear + 1
    }  
    console.log(dobDate[1]) // month
    console.log(dobDate[2]) // date

    const nextBirthday = new Date(`${bdayYear}/${dobDate[1]}/${dobDate[2]}
    `)
    console.log(nextBirthday)
    const dayInMilliseconds = 1000 * 60 * 60 * 24;

    const remainingDays = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) /
      (dayInMilliseconds)
      
    );
    console.log( remainingDays)
    $(".container").append(`<h1 class="text-center my-5">Hey ${firstName[0].toUpperCase()+firstName.slice(1)} !!!</h1>
    <p class="text-center"> ${remainingDays} Days Left </p>
    <p class="text-center">until your birthday </p> `)
  }

  $('button').on('click', () => {
    signOut(auth).then(() => {
      localStorage.removeItem('firstName')
      // localStorage.removeItem('dob')
      window.location.href = 'index.html'
    }).catch((error) => {
     console.log(error)
    });
  })
})