$(document).ready(function() {
    $("button").on("click", getQuote);
});

function getQuote() {
    $.ajax({
        url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random", 
        cache: false
    }).done(function(data) {
        var quote = data.message;
        $("#message").text(quote);
    }).fail(function(err){
        // handle error 
    });

    changeBackgroundColor("body"); 
}

// Changes an element's background color randomly (not possible in CSS AFAIK)
function changeBackgroundColor(e) {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    $(e).css("background-color", "rgb(" + x + ", " + y + ", " + z + ")");
}
