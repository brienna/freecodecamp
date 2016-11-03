/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string 
to their corresponding HTML entities.  */

function convertHTML(str) {
    // NOTE: Include global flag to match all occurrences 
    str = str.replace(/&/g, '&amp;');  
    str = str.replace(/"/g, '&quot;');  
    str = str.replace(/'/g, '&apos;'); 
    str = str.replace(/>/g, '&gt;');  
    str = str.replace(/</g, '&lt;');
    return str;
}

convertHTML("Dolce & Gabbana");  // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");  // Hamburgers &lt; Pizza &lt; Tacos
convertHTML('Stuff in "quotation marks"');  // Stuff in &quot;quotation marks&quot;