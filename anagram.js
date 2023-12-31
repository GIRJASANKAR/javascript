/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Remove non-word characters and convert strings to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // Check if the lengths of the cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Sort the characters in both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  module.exports = isAnagram;
//   not working as expeceted
// not able to check why it is not working some permutation issue is facing
// length logic is working fine 
// after sorting logic is working fine
// any special character creating the issue