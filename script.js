//storing the questions
var questionsArray = [
  "How would you declare a JavaScript variable named 'animals' ?",
  "In CSS, how do you call an ID ?",
  "What does 'CSS' stand for ?",
  "Which HTML attribute is used to define inline styles ?",
  "What does 'HTML' stand for ?",
];

//potential answers
var answersArray = [
  ["variable = 'animals';", "var animals;", "variable animals;", "$var animals;"],
  ["#id", ".id", "{ id }", "( id )"],
  ["Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
  ["font", "class", "styles", "style"],
  ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "I have no idea."],
];

// storing the correct answers 
var correctArray = [
  "B. var animals;",
  "A. #id",
  "C. Cascading Style Sheets",
  "D. style",
  "B. Hyper Text Markup Language",
];




var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;
var counter = 0;
var time = 0;
var timerCounter = 50;



$("#startGame").on("click", function(event) {
    $("#startGame").hide();
    clock();
    generateHTML();

});

$("body").on("click", ".answer", function(event) {
    event.preventDefault();
    selectedAnswer = $(this).text();

    if (selectedAnswer === correctArray[counter]) {
        // clearInterval(time);
        correctAnswer();
    } else {
        // clearInterval(time);
        wrongAnswer();
    }
});

function clock() {
    time = setInterval(fifty, 1000);
      function fifty() {
        if (timerCounter === 0) {
            // clearInterval(time);
            questionTimeout();
        }
        if (timerCounter > 0) {
            timerCounter --
        }
        $(".timer").html(timerCounter);
    }
}

function generateHTML() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h3><h2 class='text-center'>" + questionsArray[counter] +
        "</h2><h3 class='answer'>A. " + answersArray[counter][0] +
        "</h3><h3 class='answer'>B. " + answersArray[counter][1] + 
        "</h3><h3 class='answer'>C. " + answersArray[counter][2] +
        "</h3><h3 class='answer'>D. " + answersArray[counter][3] +"</h3>";
    $(".gameDiv").html(gameHTML);
};


function correctAnswer() {
    correctNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Correct! " + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2000);
}

function wrongAnswer() {
    incorrectNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Incorrect! The answer is: " +
        correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2000);
}
function questionTimeout() {
    notAnsweredNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>You ran out of time!</h3>" +
        "<h3>The correct answer is: " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 1000);
}

// displays text at the end of the game
function endOfGame() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>All done, here's how you did!</h3>" +
        "<h3 class='summary-correct'>Correct Answers: " + correctNum +
        "</h3><h3>Wrong Answers: " + incorrectNum + "</h3><h3>Unanswered: " +
        notAnsweredNum + "</h3>" +
        "<h3 class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></h3>";
    $(".gameDiv").html(gameHTML);


}

function wait() {
    if (counter < 4) {
        counter++;
        generateHTML();
        timerCounter = 50;
        clock();
    } else {
        endOfGame();
    }
}









  
