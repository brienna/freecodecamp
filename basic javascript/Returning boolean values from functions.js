/*  Returning boolean values from functions

All comparison operators return a boolean true or false value.

A common anti-pattern is to use an if/else statement to do a comparison and 
then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}

Instructions: Fix the function isLess to remove the if/else statements.  */

function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);


// My answer: 

function isLess(a, b) {
  return a < b;
}

isLess(20, 10);

