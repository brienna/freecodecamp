/*  Title case a sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting 
words like "the" and "of".  */

function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  for (var word in words) {
    words[word] = words[word].charAt(0).toUpperCase() + words[word].slice(1, words[word].length);
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");