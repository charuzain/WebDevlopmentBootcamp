/* Write a program that rearranges a given number’s digits based on their alphabetical order.
Sample Input:
123
Sample Output:
132
Sample Input:
590
Sample Output:
590
Sample Input:
2785
Sample Output:
8572 */




const sortNumberAlphabetically = (num) => {

  const numToWords = {
    1 :"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    0:"zero"
  }
  
  // convert number into string , and then split it to create a array containing individual digit
  // if length is 1 return the num 
  // if length is greater than one iterate over the array and convert the digit into word
  // sort the array 
  
    const numToString = num.toString()
    if(numToString.length < 2){
      return num
    }
  const numArray = numToString.split("").map(num => numToWords[num]);
  
  const sortedArrayAlphabetically = numArray.sort();
  console.log(sortedArrayAlphabetically)
  
  
  const arr = Object.keys(numToWords)
  
  const sortedArr = sortedArrayAlphabetically.map(word => arr.find(key => numToWords[key] === word))
  
   return Number(sortedArr.join(""))
  
  }
  
  
  console.log(sortNumberAlphabetically(2785))