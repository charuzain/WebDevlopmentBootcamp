// Tom wants kids to learn the concept of the century. So he created a game. In this
// game, kids need to input the year and the web page will show them which
// century the year is in. Write javascript code to finish this functionality.

// Example: year: 1905 output: 20
// year: 1700 output: 17
// year: 374 output: 4

// Input: integer 1 <= year <= 2005
// Output: integer

const centuray = (year)=>{
  return Math.ceil(year/100)
  
}
console.log(centuray(1)) //
console.log(centuray(1708)) //17
console.log(centuray(374)) //4
console.log(centuray(100)) //1
console.log(centuray(10))//1
