/* To help the kids to tell the time from digital clocks
and analog clocks, Tom created a game. In this game,
there is one digital clock and one analog clock in the page.
Kids can input the time in the digital clock then the time
will be shown in the analog clock. Write javascript code to
check if the input is a 24 hour format.

Example: time: "13:58"          output: true
         time: "25:51"          output: false
         time: "02:76"          output: false


Input: string         A string in HH:MM format
Output: boolean

*/


const solution = (time)=>{
  const [hour , mins]  = time.split(":");
  if (hour >= 0 && hour < 24) {
    if (mins >= 0  && mins <= 59) {
      return  true;
    }
  }
  return false;
};

console.log(solution("13:58"));         // output: true
console.log(solution("25:51"));         // output: false
console.log(solution("02:76"));         // output: false