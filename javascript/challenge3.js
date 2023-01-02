/* For practising the multiplication, there is a card game. On the page, there is a
row of cards with a number in each card. Kids need to multiply the numbers in
adjacent cards and find the largest one. Write javascript code to implement this
functionality.

Example: inputArray: [3, 6, -2, -5, 7, 3] output: 21
inputArray: [-1, -2] output: 2
inputArray: [-23, 4, -3, 8, -12] output: -12

Input: array 2 <= inputArray.length <= 10
Output: integer */

const solution = (inputArray) => {
  
  if (!Array.isArray(inputArray)) {
    return "Input should be array only!";
  }
  if (inputArray.length < 2) {
    return "length of array should be greater than or equal to 2";
  }

  let result = inputArray[0] * inputArray[1];
  if (inputArray.length === 2) {
    return result;
  } else {
    for (let i = 1; i < inputArray.length - 1; i++) {
      if (inputArray[i] * inputArray[i + 1] > result) {
        result = inputArray[i] * inputArray[i + 1];
      }
    }
  }
 
  return result;
};

console.log(solution([3, 6, -2, -5, 7, 3]));   // output: 21
console.log(solution([1,1,-2,3,0]));               // output: 2
console.log(solution([-23, 4, -3, 8, -12]));   // output: -12