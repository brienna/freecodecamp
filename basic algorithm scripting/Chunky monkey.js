/*  Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var groups = [];
  // Loop through array, incrementing by size 
  for (var i = 0; i < arr.length; i += size) {
    // Split array into groups
    groups.push(arr.slice(i, i+size));
  }
 
  return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);  // returns [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);  // returns [[0, 1, 2, 3], [4, 5]]