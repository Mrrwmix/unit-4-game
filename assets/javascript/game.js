// Variables

var targetNumber;
var counter = 0;
var hiddenValues = [];
var wins = 0;
var losses = 0;

// Starting Text

function rewriter(){
    counter = 0;
    hiddenValues = [];
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#totalScore").text(counter);
    $("#winnies").text(wins);
    $("#lossies").text(losses);
    $("#randomNumber").text(targetNumber);
}

rewriter();

// Randomizing hiddenValues indices

function valueRandomizer() {
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.ceil(Math.random() * 12);
        hiddenValues[i] = randomNumber;
        for (var j = 0; j < i; j++){
            if (randomNumber == hiddenValues[j]){
                i--;
                break;
            }
        }
    }
}

valueRandomizer();

// Assigning a random value to each crystal-image

function crystalValues(){
    $(".crystal-image").each(function(index){
        $(this).attr("data-crystalvalue", hiddenValues[index]);
    })
}

crystalValues();


// on click

$(".crystal-image").on("click", function(){
    var crystalAddend = $(this).attr("data-crystalvalue");
    crystalAddend = parseInt(crystalAddend);
    counter += crystalAddend;
    $("#totalScore").text(counter);

    if (counter === targetNumber){
        wins++;
        valueRandomizer();
        crystalValues();
        rewriter();
        $("#totalScore").text("You won!");
    }
    else if (counter > targetNumber){
        losses++;
        valueRandomizer();
        crystalValues();
        rewriter();
        $("#totalScore").text("You lost!");
    }
})