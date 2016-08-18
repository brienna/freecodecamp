/*  Return an array consisting of the largest number from each provided 
sub-array. For simplicity, the provided array will contain exactly 
4 sub-arrays.  */

function largestOfFour(arr) {
  var largestNums = [];
  var largest = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      } 
    }
    largestNums.push(largest);
    largest = -Infinity;
  }
  return largestNums;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], 
    [32, 35, 37, 39], [1000, 1001, 857, 1]]);