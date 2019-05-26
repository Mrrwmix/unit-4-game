// Variables

var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var hiddenValues = [];
var wins = 0;
var losses = 0;

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
console.log(hiddenValues);

// Assigning a random value to each crystal-image

function crystalValues(){
    $(".crystal-image").each(function(index){
        $(this).attr("data-crystalvalue", hiddenValues[index]);
        console.log($(this).attr("data-crystalvalue"));
    })
}

crystalValues();



// on click
