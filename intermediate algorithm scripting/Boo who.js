/*  Check if a value is classified as a boolean primitive. Return true or false.  */

function booWho(bool) {
    if (typeof bool == "boolean") {
        return true;
    } 
    return false;
}

booWho(null);       // returns false 
booWho(1);          // returns false
booWho("true");     // returns false
booWho(false);      // returns true
booWho([1, 2, 3]);  // returns false