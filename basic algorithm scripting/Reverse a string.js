function reverseString(str) {
  var letters = str.split("");
  letters.reverse();
  return letters.join("");
}

reverseString("hello");