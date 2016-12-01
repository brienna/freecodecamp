$(document).ready(function() {
    getQuote();
    $("button").on("click", getQuote);
});

function getQuote() {
    $.ajax({
        url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random", 
        cache: false // for IE so can get new quotes?
    }).done(function(data) {
        var quote = data.message;
        $("p").text(quote);
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
    var color = "rgb(" + x + ", " + y + ", " + z + ")";
    $(e).css("background-color", color);
    $(".btn").css("background-color", color);
    $("p").css("color", color)
}
