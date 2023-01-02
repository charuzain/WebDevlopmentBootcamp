/* There is another game. Input some letters randomly. If the string is exactly the  same as the one it is reversed. The page will show ‘you win’, otherwise the page  will show ‘you lose’. Write javascript code to check if the string is the same when it is reversed.

Example: inputString: "aabaa" output: true
inputString: "abac" output: false
inputString: "a" output: true

Input: string A non-empty string consisting of lowercase characters.
Output: boolean  */


const pallindrome = (input)=>{
  return input.trim().split("").reverse().join("") === input.trim();
  
};

console.log(pallindrome(" aabaa  aabaa"));
console.log(pallindrome("abac"));
console.log(pallindrome(""));
