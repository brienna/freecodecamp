/*  Check for palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward 
and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces 
and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and 
"race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", 
and "2_A3*3#A2".  */

function palindrome(str) {
  // Remove all non-alphanumeric characters, 
  // turn everything lowercase, and
  // turn the string into an array
  var letters = str.replace(/[\W_]+/g, "").toLowerCase().split("");
  // Check if palindrome  
  for (var i = 0; i <= letters.length/2; i++) {
    if (letters[i] != letters[letters.length - 1 - i]) {
      return false;
    } 
  }
  return true;  
}

palindrome("_eye");

// NOTE: The reg ex /\W/, the shorthand equivalent
// for [^a-zA-Z0-9], leaves the underscore
