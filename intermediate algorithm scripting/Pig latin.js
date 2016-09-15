/*  Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.  

Input strings are guaranteed to be English words in all lowercase.  */

function translatePigLatin(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	
	if (vowels.includes(str.charAt(0))) {
		str += 'way';
	} else {
		for (var i = 0; i < str.length; i++) {
			if (vowels.includes(str.charAt(i))) {
				str = str.slice(i, str.length) + str.slice(0, i) + 'ay';
				break;
			}
		}
	}
	
  return str;
  
}

translatePigLatin("consonant");  // returns onsonantcay
translatePigLatin("california");  // returns aliforniacay
translatePigLatin("algorithm");  // returns algorithmway
translatePigLatin("glove");  // returns oveglay
