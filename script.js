console.log('quiz time');

// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores

// global variables - HTML recalls -
var startButtonHtml = document.querySelector("#startButton");
var quizContainerHtml = document.querySelector("#quizContainer");
var quizQuestionHtml = document.querySelector("#quizQuestion"); //here's where the question goes
var quizAnswersHtml = document.querySelector("#quizAnswers"); // here's where the 4 option buttons go
var oneHtml = document.querySelector("#oneHtml");
var twoHtml = document.querySelector("#twoHtml");
var threeHtml = document.querySelector("#threeHtml");
var fourHtml = document.querySelector("#fourHtml");
var timerCount = document.querySelector("#timerCount");

// also global variables that we'll use for the logic below like functions and if/else stmnts
// var  = "";
// var  = 0;
// var  = 0;
// var  = 0;
// var isWin = false;
var timeLeft = 60;

// Arrays used to create blanks and letters on screen
var questions = [questionInsect, questionSquid, questionCow, questionOctopus];
// var answersInsects = ['1','2','3','6'];
// var = [];
// var = [];

var questionInsect = {
    question: 'how many legs does an insect have?',
    answer1: 4,
    answer2: 10,
    answer3: 2,
    answer4: 6 //correct answer that is our fourHTML
};

var questionSquid = {
    question: 'how many tentacles does a squid have?',
    answer1: 4,
    answer2: 10, //correct answer
    answer3: 2,
    answer4: 6
};

var questionCow = {
    question: 'have many stomachs does a cow have?',
    answer1: 4, //correct answer
    answer2: 10,
    answer3: 2,
    answer4: 6
};

var questionOctopus = {
    question: 'how many hearts does an octopus have?',
    answer1: 4,
    answer2: 10,
    answer3: 2, //correct answer
    answer4: 6
};

// WHEN I click the start button
// need a button 
// need a click event listener that does something when button is clicked
startButtonHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionInsect.question
    console.log(questionInsect.question);
    oneHtml.innerHTML = questionInsect.answer1;
    console.log(questionInsect.answer1);
    twoHtml.innerHTML = questionInsect.answer2;
    console.log(questionInsect.answer2);
    threeHtml.innerHTML = questionInsect.answer3;
    console.log(questionInsect.answer3);
    fourHtml.innerHTML = questionInsect.answer4;
    console.log(questionInsect.answer4);

    countdown();
    console.log(timeLeft);
});

// WHEN I answer a question
// user has a list of options that are buttons to choose from and one is "correct" rest are "incorrect"
// THEN I am presented with another question
// after user clicks, a pop up shows them if it's correct or incorrect
// also after user click, a new question with new option buttons to choose from comes up
// also I keep track of correct/incorrect score to present at user at the end of the quiz
quizAnswers.addEventListener("click", function(event) {
    var clickAnswer = event.target;

    // Checks if element is a button
    if (quizAnswers.matches("button") === true) {
        console.log(clickAnswer + 'cool, a button was clicked in my quizAnswers div...')
            // if person clicks questionInsect.answer4 add a plus one to a var called right answer 
    } else {
        console.log('button not working try again')
            // if users clisk ... then add a plus to wrong answer var
    }
    quizQuestionHtml.innerHTML = questionInsect.question
    console.log(questionInsect.question);
    oneHtml.innerHTML = questionInsect.answer1;
    console.log(questionInsect.answer1);
    twoHtml.innerHTML = questionInsect.answer2;
    console.log(questionInsect.answer2);
    threeHtml.innerHTML = questionInsect.answer3;
    console.log(questionInsect.answer3);
    fourHtml.innerHTML = questionInsect.answer4;
    console.log(questionInsect.answer4);
});


// THEN a timer starts a countdown from a specified time (60sec) and I am presented with a question
// timer function to start on that click event listener
// and show a question from our array of question/answer objects 
// Timer that counts down from 5
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerCount.innerHTML = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerCount.innerHTML = timeLeft + ' second remaining HURRY UP';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerCount.innerHTML = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
        }
    }, 1000);
}



// WHEN i answer a question incorrectly time is subtracted from the clock
// user incorrect and correct answer is stored to present user at end of quiz

// WHEN all questions are answered or the timer reaches 0
// if user answers all questions BEFORE time runs out, stop time and store that time to show user at end
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// show user score / grade / time left on clock / initials / button that says wanna play again?


//---------------------- this is mini project for reference ---------------------------------------------

// global variables - HTML recalls - that are looking at classes and ids in the index
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

// also global variables that we'll use for the logic below like functions and if/else stmnts
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
// function init() {
//     getWins();
//     getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount >= 0) {
//             // Tests if win condition is met
//             if (isWin && timerCount > 0) {
//                 // Clears interval and stops timer
//                 clearInterval(timer);
//                 winGame();
//             }
//         }
//         // Tests if time has run out
//         if (timerCount === 0) {
//             // Clears interval
//             clearInterval(timer);
//             loseGame();
//         }
//     }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//     // Randomly picks word from words array
//     chosenWord = words[Math.floor(Math.random() * words.length)];
//     lettersInChosenWord = chosenWord.split("");
//     numBlanks = lettersInChosenWord.length;
//     blanksLetters = []
//         // Uses loop to push blanks to blankLetters array
//     for (var i = 0; i < numBlanks; i++) {
//         blanksLetters.push("_");
//     }
//     // Converts blankLetters array into a string and renders it on the screen
//     wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//     lose.textContent = loseCounter;
//     localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//         winCounter = 0;
//     } else {
//         // If a value is retrieved from client storage set the winCounter to that value
//         winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;
// }

// function getlosses() {
//     var storedLosses = localStorage.getItem("loseCount");
//     if (storedLosses === null) {
//         loseCounter = 0;
//     } else {
//         loseCounter = storedLosses;
//     }
//     lose.textContent = loseCounter;
// }

// function checkWin() {
//     // If the word equals the blankLetters array when converted to string, set isWin to true
//     if (chosenWord === blanksLetters.join("")) {
//         // This value is used in the timer function to test if win condition is met
//         isWin = true;
//     }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//     var letterInWord = false;
//     for (var i = 0; i < numBlanks; i++) {
//         if (chosenWord[i] === letter) {
//             letterInWord = true;
//         }
//     }
//     if (letterInWord) {
//         for (var j = 0; j < numBlanks; j++) {
//             if (chosenWord[j] === letter) {
//                 blanksLetters[j] = letter;
//             }
//         }
//         wordBlank.textContent = blanksLetters.join(" ");
//     }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//     // If the count is zero, exit function
//     if (timerCount === 0) {
//         return;
//     }
//     // Convert all keys to lower case
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//     // Test if key pushed is letter
//     if (alphabetNumericCharacters.includes(key)) {
//         var letterGuessed = event.key;
//         checkLetters(letterGuessed)
//         checkWin();
//     }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins()
//     setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);