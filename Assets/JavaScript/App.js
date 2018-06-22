// alert("JS is linked correctly");

var correctGuesses= 0;
var incorrectGuesses= 0;
var currentScore= 0;

function startGame() {
    currentScore= 0;
    $("#timeleft").html("03:00");
}

startGame();

document.ready(function(){
$(".list-group-item list-group-item-action").click(function(){
    $(".list-group-item list-group-item-action").css("background-color", "red");
});

$("#btn").on("click", function(){
currentScore += correctGuesses;
$(".score").html(currentScore);
});
});

