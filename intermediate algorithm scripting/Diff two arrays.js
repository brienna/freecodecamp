/*  Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return the 
symmetric difference of the two arrays.  */

function diffArray(arr1, arr2) {
  var newArr = [];

  var arr1Filtered = arr1.filter(function(value) {
    if (arr1.length == 0) {
        return value;
    }

    for (var i = 0; i < arr2.length; i++) {
        // Return value if arr doesn't contain it
        if (arr2.indexOf(value) == -1) {
            return value;
        }
    }
  });

  var arr2Filtered = arr2.filter(function(value) {
    if (arr1.length == 0) {
        return value;
    }

    for (var i = 0; i < arr1.length; i++) {
        // Return value if arr doesn't contain it
        if (arr1.indexOf(value) == -1) {
            return value;
        }
    }
  });
  newArr = arr1Filtered.concat(arr2Filtered);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  // returns [4]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // returns ["pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // returns ["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], 
    ["andesite", "grass", "dirt", "dead shrub"]);  // returns [] 
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);  // returns ["piglet", 4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);  // returns ["snuffleupagus", "cookie monster", "elmo"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);  // returns [1, "calf", 3, "piglet", 7, "filly"]

