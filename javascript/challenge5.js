/* In order to learn the alphabet, there is a game to
show some letters on the page. And the kids need to
tell how many different letters here. Write the
javascript code to get the correct number of how many
different letters for any string.



Example: s: "cabca"          output: 3
         s: "aba"            output: 2
         s: "ccccccccccc"    output: 1


Input: string         3 <= s.length <= 1000    A string of lowercase English letters.
Output: integer
*/


const solution = (s)=>{
  let result = {};
  for (let char of s) {
    result[char] ? result[char]++ : result[char] = 1;
  }
  return Object.keys(result).length;
};

console.log(solution("cabca"));            // output: 3
console.log(solution("aba"));              // output: 2
console.log(solution("ccccccccccc"));      // output: 1