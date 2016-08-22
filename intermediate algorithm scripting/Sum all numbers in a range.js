/*  We'll pass you an array of two numbers. Return the sum of those two numbers 
and all numbers between them. The lowest number will not always come first.  */

function sumAll(arr) {
  var lowest = Math.min(...arr);
  var highest = Math.max(...arr);
  var sum = 0;
  for (var i = lowest; i <= highest; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
