/*  Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.

The provided number may not be a prime.  */

function sumPrimes(num) {
    var sum = 0;
    
    // Loop through numbers up to num
    for (var number = 2; number <= num; number++) {
        // Test whether number is a prime 
        if (isPrime(number)) {
            // If it is prime, add it to the sum
            console.log(number, sum);
            sum += number;
    }
  }
  
  // Test whether a number is a prime
  function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
  }
  
  return sum;
}

sumPrimes(10);  // returns 17
sumPrimes(977);  // returns 73156