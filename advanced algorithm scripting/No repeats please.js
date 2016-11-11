/*  Return the number of total permutations of the provided string that don't have 
repeated consecutive letters. Assume that all characters in the provided string are 
each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, 
aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this 
case a) repeating.  */


function permAlone(str) {
    // Calculate permutations
    perms = [];
    fixed = -1;
    permute(str, fixed);
    
    function permute(s, fixed) {
        fixed++;
        
        // If the string is only one letter long,
        if (str.length == 1) {
            perms.push(str);
            return;
        }
        
        // If all letters have been fixed, quit
        if (fixed == s.length - 1) {
            return;
        }
        
        // Otherwise continue swapping
        for (var i = fixed; i < s.length; i++) {
            var perm = s.split("");
            var replacee = perm[fixed];
            perm[fixed] = perm[i];
            perm[i] = replacee;
            perm = perm.join("");
            
            // If on the last fix, push
            if (fixed == str.length - 2) {
                perms.push(perm);
            }
            
            // Fix the next letter
            permute(perm, fixed);
        }
    }
    
    // Check permutations for repeats
    var count = 0;
    var repeats = false;
    // For every permutation
    for (var k = 0; k < perms.length; k++) {
        // For every char
        for (var j = 1; j < perms[k].length; j++) {
            // If char matches char before, break
            if (perms[k][j] == perms[k][j - 1]) {
                repeats = true;
                break;
            }
        }
        if (!repeats) count++;
        repeats = false;
    }
    
    return count;
}


permAlone('aab');  // 2
permAlone("abcdefa");  // 3600
permAlone("a");  // 1 
permAlone("aaabb");  // 12
permAlone("aaa");  // 0