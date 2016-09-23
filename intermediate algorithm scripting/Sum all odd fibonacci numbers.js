/*  Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six 
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than 10 are 1, 1, 3, and 5.  */

function sumFibs(num) {
  // Generate Fibonacci numbers
  var fibs = [1, 1];
  while (fibs[fibs.length - 2] + fibs[fibs.length - 1] <= num) {
  	var next = fibs[fibs.length - 2] + fibs[fibs.length - 1];
  	fibs.push(next);
  }
  
  // Filter for odds only
  var odds = fibs.filter(function(a) {
  	if (a % 2 !== 0) {
  		return a;
  	}
  });
  
  // Add up
  var sum = odds.reduce(function(a, b) {
  	return a + b;
  });
  
  return sum;
}

sumFibs(1000);  // returns 1785
sumFibs(75025);  // returns 135721
