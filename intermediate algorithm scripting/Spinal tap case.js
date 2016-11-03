/*  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.  */

function spinalCase(str) {
    // Replace all 'aB' instances with 'a B' (inserting a space)
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Replace whitespace and/or underscore with hyphen
    str = str.replace(/(\s|_)+/g, '-');
    return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('AllThe-small Things');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("The_Andy_ _ _   _ _Griffith_Show");