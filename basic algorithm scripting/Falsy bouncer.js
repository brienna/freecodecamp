/*  Remove all falsy values from an array. Falsy values in JavaScript are 
false, null, 0, "", undefined, and NaN.  */

function bouncer(arr) {
  var result = arr.filter(function(value) {
    if (value) {
      return value;
    }
  });
  
  return result;
}

bouncer([7, "ate", "", false, 9]);

