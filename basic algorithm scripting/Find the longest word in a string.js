/*  Find the longest word in a string

Return the length of the longest word in the provided sentence.

Your response should be a number.  */

function findLongestWord(str) {
  var len = 0;
  var words = str.split(" ");
  for (var word in words) {
    if (words[word].length > len) {
      len = words[word].length;
    }
  }
  return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");