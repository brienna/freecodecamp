/*  Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and value 
pairs (second argument). Each property and value pair of the source object 
has to be present in the object from the collection if it is to be included 
in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the 
third object from the array (the first argument), because it contains the 
property and its value, that was passed on as the second argument.  */

function whatIsInAName(collection, source) {
  var arr = [];  // array to be returned
  var hits = 0;  // to keep track of matching key and value pairs
  
  // Collect source keys into an array
  var sourceKeys = Object.keys(source);
  
  // Loop over collection objects
  for (var i = 0; i < collection.length; i++) {
    // Loop over source keys
    for (var j = 0; j < sourceKeys.length; j++) {
        // Check if collection object and source share key
        if (collection[i].hasOwnProperty(sourceKeys[j])) {
            // Mark as a hit if keys' values are equal
            if (collection[i][sourceKeys[j]] === source[sourceKeys[j]]) {
                hits++;
            }
        }
    }
    
    // If number of hits equals number of source keys
    if (hits == sourceKeys.length) {
        // Include object in returned array
        arr.push(collection[i]);
    } 
    
    // Reset hits
    hits = 0;
  }
  
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });