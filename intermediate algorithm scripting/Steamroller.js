// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    var result = arr.reduce(flatten, []);
    
    function flatten(a, b) {
        if (Array.isArray(b)) {
            return b.reduce(flatten, a);
        } else {
            a.push(b);
            return a;
        }
    }
  
  console.log(result);
  return result;
}

steamrollArray([[["a"]], [["b"]]]);  // returns ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]);  // returns [1, 2, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]);  // returns [1, {}, 3, 4]