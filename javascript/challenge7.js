/* There is a story game on Tom’s website. Kids play the game
and learn what is vowel: The US Coast Guard has recently
seen increased levels of pirate activity in the East Bay.
To make sure the boats coming in to dock are not pirate ships,
the guards check the tag on every boat.

If a boat has exactly 2 vowels that are consecutive or starts with a vowel and has
only one vowel it is not a pirate ship.

Write a program that
returns true if a ship is a pirate ship and false if the ship
is not a pirate ship. We consider the letters "A","E","I","O","U","Y"
to be vowels for this problem.

Example: tag: "XAERTM"     output: false
         tag: "YPMRGB"     output: false
         tag: "YOMANR"     output: true // it is pirate

Input: string        A string of uppercase letters.
Output: boolean  */

const solution = (tag) => {
  let vowelCount = 0;
  const vowels = ["A", "E", "I", "O", "U", "Y"];

  for (let char of tag) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  if (vowelCount === 1 && vowels.includes(tag[0])) {
    return false;
  }

  if (vowelCount === 2) {
    let vowelPosition = tag
      .split("")
      .findIndex((elem) => vowels.includes(elem));
    if (vowels.includes(tag[vowelPosition + 1])) {
      return false;
    }
  }

  return true;
};

console.log(solution("AERTM")); // output: false
console.log(solution("YPMRGB")); // output: false
console.log(solution("YOMANR")); // output: true
