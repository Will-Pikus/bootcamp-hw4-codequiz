var timeElement = $("#time");
var startButton = $("#start-button")
var viewHighscroe = $("#view-hs")
var tutorialText = $("#tutorial-text")
var mainText = $("#main-text")
var olList = $("#list")
var answer1 = $("#quiz-btn1")
var answer2 = $("#quiz-btn2")
var answer3 = $("#quiz-btn3")
var answer4 = $("#quiz-btn4")

var timer;
var timerCount;
var score;
var questionNum = 0;

var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statment is enclosed within_________.", "Arrays in JavaScript can be used to store ________.", "String values must be enclosed within ________ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"]
var answersArray = [["strings", "booleans", "alerts", "numbers",], ["quotes", "curly brackets", "parentheses", "square brackets"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parentheses"],["JavaScript", "terminal/bash", "for loops", "console.log"] ]
var answers = {
    q1 : {
        a1 : "strings",
        a2 : "booleans",
        ca : "alerts",
        a4 : "numbers"
    },
    q2 : {
        a1 : "quotes",
        a2 : "curly brackets",
        ca : "parentheses",
        a4 : "square brackets"
    },
    q3 : {
        a1 : "numbers and strings",
        a2 : "other arrays",
        a3 : "booleans",
        ca : "all of the above"
    },
    q4 : {
        a1 : "commas",
        a2 : "curly brackets",
        ca : "quotes",
        a4 : "parentheses"
    },
    q5 : {
        a1 : "JavaScript",
        a2 : "terminal/bash",
        a3 : "for loops",
        ca : "console.log"
    }
}

// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startTimer()
    setUp()
    populatePage()
    olList.on('click', '.button-clicked', isCorrect)

}

function populatePage() {

    if (questionNum == 0){
        mainText.text(questions[questionNum])
        $("#quiz-btn1").text(answersArray[questionNum][0])
        $("#quiz-btn2").text(answersArray[questionNum][1])
        $("#quiz-btn3").text(answersArray[questionNum][2])
        $("#quiz-btn4").text(answersArray[questionNum][3])
    } 
    else if (questionNum == 1){
        mainText.text(questions[questionNum])
        $("#quiz-btn1").text(answersArray[questionNum][0])
        $("#quiz-btn2").text(answersArray[questionNum][1])
        $("#quiz-btn3").text(answersArray[questionNum][2])
        $("#quiz-btn4").text(answersArray[questionNum][3])
    }
    else if (questionNum == 2){
        mainText.text(questions[questionNum])
        $("#quiz-btn1").text(answersArray[questionNum][0])
        $("#quiz-btn2").text(answersArray[questionNum][1])
        $("#quiz-btn3").text(answersArray[questionNum][2])
        $("#quiz-btn4").text(answersArray[questionNum][3])
    }
    else if (questionNum == 3){
        mainText.text(questions[questionNum])
        $("#quiz-btn1").text(answersArray[questionNum][0])
        $("#quiz-btn2").text(answersArray[questionNum][1])
        $("#quiz-btn3").text(answersArray[questionNum][2])
        $("#quiz-btn4").text(answersArray[questionNum][3])
    }
    else if (questionNum == 4){
        mainText.text(questions[questionNum])
        $("#quiz-btn1").text(answersArray[questionNum][0])
        $("#quiz-btn2").text(answersArray[questionNum][1])
        $("#quiz-btn3").text(answersArray[questionNum][2])
        $("#quiz-btn4").text(answersArray[questionNum][3])
    }
    
}

function isCorrect(event) {
    var btnClicked = $(event.target);

    if (btnClicked.text == answers.q1.ca.text){
        score += 10
        questionNum ++
    } 
    else{
        timerCount = timerCount - 10
        questionNum ++
    }
    populatePage()
}

function setUp(){
    // remove p tag
    tutorialText.remove()
    // remove start button
    startButton.remove()
    // addbuttons
    olList.append('<button class="button-style button-clicked" id="quiz-btn1">answer1</button>')
    olList.append('<button class="button-style button-clicked" id="quiz-btn2">answer1</button>')
    olList.append('<button class="button-style button-clicked" id="quiz-btn3">answer1</button>')
    olList.append('<button class="button-style button-clicked" id="quiz-btn4">answer1</button>')
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timeElement.text("Time: " + timerCount);
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}


// Attach event listener to start button to call startGame function on click
startButton.on("click", startGame);

