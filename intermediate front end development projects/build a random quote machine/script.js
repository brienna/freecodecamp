$(document).ready(function() {
    $("button").on("click", getQuote);
});

function getQuote() {
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status) {
        var quote = data.message;
        $("#message").text(quote);
    });

    changeBackgroundColor("body"); 
}

// Changes an element's background color
function changeBackgroundColor(e) {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    $(e).css("background-color", "rgb(" + x + ", " + y + ", " + z + ")");
}
