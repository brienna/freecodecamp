/*  Convert the given number into a roman numeral.  */

function convertToRoman(num) {
    var roman = "";
    var letters = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    
    return conversion(num);

    function conversion(num) {
        if (num === 0) {
            console.log(roman);
            return roman;
        } else if (num - letters.M >= 0) {
            roman += "M";
            return conversion(num - letters.M);
        } else if (num - letters.CM >= 0) {
            roman += "CM";
            return conversion(num - letters.CM);
        } else if (num - letters.D >= 0) {
            roman += "D";
            return conversion(num - letters.D);
        } else if (num - letters.CD >= 0) {
            roman += "CD";
            return conversion(num - letters.CD);
        } else if (num - letters.C >= 0) {
            roman += "C";
            return conversion(num - letters.C);
        } else if (num - letters.XC >= 0) {
            roman += "XC";
            return conversion(num - letters.XC);
        } else if (num - letters.L >= 0) {
            roman += "L";
            return conversion(num - letters.L);
        } else if (num - letters.XL >= 0) {
            roman += "XL";
            return conversion(num - letters.XL);
        } else if (num - letters.X >= 0) {
            roman += "X";
            return conversion(num - letters.X);
        } else if (num - letters.IX >= 0) {
            roman += "IX";
            return conversion(num - letters.IX);
        } else if (num - letters.V >= 0) {
            roman += "V";
            return conversion(num - letters.V);
        } else if (num - letters.IV >= 0) {
            roman += "IV";
            return conversion(num - letters.IV);
        } else if (num - letters.I >= 0) {
            roman += "I";
            return conversion(num - letters.I);
        } 
    }
}

convertToRoman(4);  // returns IV
convertToRoman(3999);  // returns MMMCMXCIX 
convertToRoman(798);  // returns DCCXCVIII