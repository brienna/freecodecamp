
/*  Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.  */

function fearNotLetter(str) {
    // Loop over letters, beginning with second letter
    for (var i = 1; i < str.length; i++) {
        // Convert previous & current letters to ASCII
        var previous = str.charCodeAt(i-1);
        var current = str.charCodeAt(i);
        // If the difference is greater than 1
        if (current - previous > 1) {
            // Return missing letter
            var missing = previous + 1;
            return String.fromCharCode(missing);
        }
    }
    
    return undefined;
}

fearNotLetter("abce");  // returns 'd'
fearNotLetter("bcd");  // returns undefined
fearNotLetter("abcdefghjklmno");  // returns 'i'