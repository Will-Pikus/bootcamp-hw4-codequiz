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
var i;

var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statment is enclosed within_________.", "Arrays in JavaScript can be used to store ________.", "String values must be enclosed within ________ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"]

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
    populatePage()

}

function populatePage() {
    // remove p tag
    tutorialText.remove()
    // remove start button
    startButton.remove()
    // addbuttons
    olList.append('<button class="button-style" id="quiz-btn1">answer1</button>')
    olList.append('<button class="button-style" id="quiz-btn2">answer1</button>')
    olList.append('<button class="button-style" id="quiz-btn3">answer1</button>')
    olList.append('<button class="button-style" id="quiz-btn4">answer1</button>')

    for(i = 0; i< questions.length;) {
        mainText.text(questions[i])
            for (var j = 0; j<answers[i].length;j++){
                answer1.text(answers[i][j])
                answer2.text(answers[i][j])
                answer3.text(answers[i][j])
                answer4.text(answers[i][j])
            }
        handleSelection()

    }

}

function handleSelection(event){

    var btnClicked = $(event.target);
    if(btnClicked.text == answers.q+i.ca)
        score += 10
    else
    i++
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

