
var trivia = [{
  "question": "Which of the below nations have not won a World Cup title",
  "answer": "Mexico",
  "choiceOne": "Spain",
  "choiceTwo": "England",
  "choiceThree": "Mexico",
  "choiceFour": "France",
  "userGuess": [],
},

{
  "question": "Who were the first club to win a 'treble'?",
  "answer": "Manchester United",
  "choiceOne": "Manchester United",
  "choiceTwo": "Juventus",
  "choiceThree": "Barcelona",
  "choiceFour": "Ajax",
  "userGuess": [],
},

{
  "question": "Which player holds the record for most Ballon d'Or awards?",
  "answer": "Lionel Messi",
  "choiceOne": "Zinadine Zidane",
  "choiceTwo": "Lionel Messi",
  "choiceThree": "Cristiano Ronaldo",
  "choiceFour": "Thierry Henry",
  "userGuess": [],
},

{
  "question": "What year was the first World Cup played?",
  "answer": "1930",
  "choiceOne": "1890",
  "choiceTwo": "1910",
  "choiceThree": "1930",
  "choiceFour": "1950",
  "userGuess": [],
},

{
  "question": "What is the name of England's offical cup-final venue?",
  "answer": "Wembly",
  "choiceOne": "Wembly",
  "choiceTwo": "White Hart Lane",
  "choiceThree": "Anfield",
  "choiceFour": "Old Trafford",
  "userGuess": [],
  // "correctImage": "<img src='assets/images/Gehrig.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
},

{
  "question": "What is the farthest that the United States have reached in the World Cup Finals?",
  "answer": "Semi-Finals",
  "choiceOne": "Champion",
  "choiceTwo": "Semi-Finals",
  "choiceThree": "Quarter-Finals",
  "choiceFour": "Quarter-Finals",
  "userGuess": [],
  // "correctImage": "<img src='assets/images/Ryan.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
},

{
  "question": "In what year was the English Premier League founded?",
  "answer": "1992",
  "choiceOne": "1912",
  "choiceTwo": "1942",
  "choiceThree": "1962",
  "choiceFour": "1992",
  "userGuess": [],
  "correctImage": "<img src='assets/images/McGwire.jpeg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
},

{
  "question": "Which country has won the most World Cup titles?",
  "answer": "Brazil",
  "choiceOne": "Germany",
  "choiceTwo": "Italy",
  "choiceThree": "Brazil",
  "choiceFour": "Uruguay",
  "userGuess": [],
}


];
var userSelected;
var correctAnswer;
var i = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;
var time = 10;
var timer;

$("#start-button").on("click", function () {
startGame();
})

function startGame() {
startTimer();
}

function updateScore() {
$("#correct-answers").html(correctGuesses);
$("#incorrect-answers").html(incorrectGuesses);
}



function sendValues(i) {
$("#submit-button").click(function () {
  userSelected = $(this).val();
  trivia[i].userGuess = userSelected;
  checker(i);
  stopTimer();
  console.log(correctGuesses);
  console.log(incorrectGuesses);
})
}

function checker(i) {
correctAnswer = trivia[i].answer;
if (userSelected === correctAnswer) {
  wins++;
} else {
  $("#result").html(trivia[i].correctImage);
  losses++;
}
updateScore();
}

function nextQuestion() {
if (i + 1 === trivia.length) {
  endGame();
  return;
}
$("#answers").empty();
$("#result").empty();
i++;
time = 10;
$("#display").html("Time Remaining: 00:" + time)
stopTimer();
startGame();
}

function endGame() {
setTimeout(gameOver, 3000);
}

function gameOver() {
$("#answers").empty();
$("#result").empty();
i = 0;
wins = 0;
losses = 0;
time = 10;
setTimeout(function () {
  $("#answers").empty();
  updateScore();
  $("#start-button").show();
  $("#display").html("Time Remaining: 00:" + time)
}, 3000)
}

function startTimer() {
timer = setInterval(checkTimesUp, 1000);
}

function stopTimer() {
clearInterval(timer);
}



function checkTimesUp() {
if (time <= 0) {
  nextQuestion();
  losses++;
  unanswered++;
  updateScore();
} else {
  time--;
  $("#display").html("Time Remaining: 00:0" + time)
}
};

