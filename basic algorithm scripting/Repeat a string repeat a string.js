/*  Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.  */

function repeatStringNumTimes(str, num) {
  var result = "";
  if (num < 1) {
    return result;
  } else {
    for (var i = 1; i <= num; i++) {
      result += str;
    }
    return result;
  }
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);