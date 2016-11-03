/*  Compare and update the inventory stored in a 2D array against a second 2D array of a fresh
delivery. Update the current existing inventory item quantities (in arr1). If an item cannot 
be found, add the new item and quantity into the inventory array. The returned inventory array 
should be in alphabetical order by item.  */

function updateInventory(currInv, newInv) {
    var exists = false;
    
    // For every new inventory item 
    for (var i = 0; i < newInv.length; i++) {
        // Check every current inventory item
        for (var j = 0; j < currInv.length; j++) {
            // If new inventory item exist in current inventory, 
            // toggle 'exists' flag to true and update count
            if (currInv[j][1] == newInv[i][1]) {
                exists = true;
                currInv[j][0] += newInv[i][0];
            }
        }
        
        // If item doesn't exist in current inventory, add item and count
        if (!exists) {
            currInv.push(newInv[i]);
        }
        
        // Toggle 'exists' flag back to false
        exists = false;
    }
    
    // Sort current inventory in alphabetical order by item 
    // from http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
    currInv.sort(function(a, b) {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    });
    
    return currInv;
}

updateInventory([[21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]], 
    
    [[2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]]);
    /* 
    [[88, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [3, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [5, "Microphone"], 
    [7, "Toothpaste"]]
    */

updateInventory([], [[2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]]);
    /* 
    [[67, "Bowling Ball"], 
    [2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [7, "Toothpaste"]]
    */