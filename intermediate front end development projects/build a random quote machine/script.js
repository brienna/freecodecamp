$(document).ready(function() {
    changeColor("body");
    $("button").on("click", runMachine);
});

function runMachine() {
    getQuote();
    changeColor();
    turnGears();
    $(".draw").addClass("redraw");
}

function turnGears() {
    $(".gear1").toggleClass("rotate");
    $(".gear2").toggleClass("rotate");
    $(".gear3").toggleClass("rotate");
}

function getQuote() {
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", 
        cache: false, // for IE so can get new quotes?
        headers: {"X-Mashape-Key": "49BXGqtVsEmshNXh2sHLUTBcKQTJp1N572jjsnYPQQCPknAKQi",
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"}
    }).done(function(data) {
        data = JSON.parse(data);
        var quote = data.quote;
        $("p").text(quote);
    }).fail(function(err){
        console.log(err);
    });
}

// Changes an element's background color randomly (not possible in CSS AFAIK)
function changeColor() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    var color = "rgb(" + x + ", " + y + ", " + z + ")";
    $(".btn").css("background-color", color);
    $(".draw").css("border", "4px solid " + color);
}


