// Write your algorithm here

function reverseString(word){
  // make an array from the string
  const wordArray = word.split(''); // const wordStr = [...word];
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // Make a string from the reversed array
  const wordReversed = reversedWordArray.join('');
  // Return the reversed string
  return wordReversed;
}

function isPalindrome(word) {
  const wordReversed = reverseString(word);
  if (word === wordReversed) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Variables
  / Reverse string
  Function
  / Pass in string 
  / if string === string backards, return true
  / otherwise, return false
*/

/*
  Add written explanation of your solution here
  Prep -->
  Take a given string, break it into an array, reverse array, and join back together as a reversed string.
  Palindrome Function -->
  Compare string with reversed string. If they are equal ( === ), return true. Otherwise, return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;