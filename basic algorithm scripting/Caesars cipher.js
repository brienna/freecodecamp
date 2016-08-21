/*  One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns 
a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.  */

function rot13(str) { 
    var decoded = "";
    var ascii;
    
  // Iterate over each character
  for (var i = 0; i < str.length; i++) {
    // Convert character to ASCII 
    ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
        // Decode character if between A-Z
        newAscii = ascii - 13;
        if (newAscii < 65) {
            newAscii = 90 - (64 - newAscii);
        }
        decoded += String.fromCharCode(newAscii);
    } else {
        // Otherwise keep character as is
        decoded += str[i];
    }
  }
  
  return decoded;
}

rot13("SERR PBQR PNZC");  // returns "FREE CODE CAMP"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");  // returns "THE QUICK 
                                                         // BROWN DOG JUMPED 
                                                         // OVER THE LAZY FOX." 

// Try to write an answer using the string.replace() method