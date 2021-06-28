// global variables - HTML recalls -
var startButtonHtml = document.querySelector("#startButton");
var quizContainerHtml = document.querySelector("#quizContainer");
var quizQuestionHtml = document.querySelector("#quizQuestion"); //here's where the question goes
var quizAnswersHtml = document.querySelector("#quizAnswers"); // here's where the 4 option buttons go
var buttonOneHtml = document.querySelector("#oneHtml");
var buttonTwoHtml = document.querySelector("#twoHtml");
var buttonThreeHtml = document.querySelector("#threeHtml");
var buttonFourHtml = document.querySelector("#fourHtml");
var timerCountHtml = document.querySelector("#timerCount");

// 4 question/answer objects
var questionInsect = {
    question: 'How many legs does an insect have?',
    answer1: 7,
    answer2: 8,
    answer3: 1000,
    answer4: 6 //correct answer that is our fourHTML
};
var questionSquid = {
    question: 'how many tentacles does a squid have?',
    answer1: 'squid\'s don\'d have tentacles',
    answer2: 10, //correct answer
    answer3: 80,
    answer4: 300
};
var questionCow = {
    question: 'have many stomachs does a cow have?',
    answer1: 4, //correct answer
    answer2: 50,
    answer3: 1,
    answer4: 24
};
var questionOctopus = {
    question: 'how many hearts does an octopus have?',
    answer1: 7,
    answer2: 0,
    answer3: 2, //correct answer
    answer4: 30
};

// also global variables that we'll use for the logic below like functions and if/else stmnts
var finalScore = 100;
var timeLeft = 60;
var i = 0;

// array of all objects that have question/answers
var questionAnswerArray = [questionInsect, questionSquid, questionCow, questionOctopus];
// array of the one correct answer
var correctAnswerArray = [questionAnswerArray[0].answer4, questionAnswerArray[1].answer2, questionAnswerArray[2].answer1, questionAnswerArray[3].answer3];
//var showQuestionAnswersArray = [showQuestionAnswer1, showQuestionAnswer2, showQuestionAnswer3, showQuestionAnswer4]

// WHEN I click the start button
startButtonHtml.addEventListener("click", function(event) {
    countdown();
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    buttonOneHtml.innerHTML = questionAnswerArray[i].answer1;
    buttonTwoHtml.innerHTML = questionAnswerArray[i].answer2;
    buttonThreeHtml.innerHTML = questionAnswerArray[i].answer3;
    buttonFourHtml.innerHTML = questionAnswerArray[i].answer4;
});

quizAnswersHtml.addEventListener("click", function(event) {
    var targetHtmlElement = event.target;
    if (((targetHtmlElement.matches("#fourHtml")) && (buttonFourHtml.innerHTML == correctAnswerArray[0])) ||
        ((targetHtmlElement.matches("#twoHtml")) && (buttonTwoHtml.innerHTML == correctAnswerArray[1])) ||
        ((targetHtmlElement.matches("#oneHtml")) && (buttonOneHtml.innerHTML == correctAnswerArray[2])) ||
        ((targetHtmlElement.matches("#threeHtml")) && (buttonThreeHtml.innerHTML == correctAnswerArray[3]))) {

        var correctAnswerMsg = document.createElement("div");
        correctAnswerMsg.innerHTML = "you got question " + (i + 1) + " correct! ✔️";
        document.getElementById('quizContainer').appendChild(correctAnswerMsg);

        setTimeout(function() {
            correctAnswerMsg.innerHTML = '';
        }, 1000);


    } else {
        //console.log('oops, that is not correct')

        var wrongAnswerMsg = document.createElement("div");
        wrongAnswerMsg.textContent = "dang it! the correct answer to question " + i + " was " + questionAnswerArray[i].answer4;
        document.getElementById('quizContainer').appendChild(wrongAnswerMsg);

        setTimeout(function() {
            wrongAnswerMsg.innerHTML = '';
        }, 1000);

        // take 10 points away from user and keep track of that in our finalScore variable
        finalScore = (finalScore - 10);
        console.log(finalScore + "score after user gets it wrong");


    }
    i++
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    buttonOneHtml.innerHTML = questionAnswerArray[i].answer1;
    buttonTwoHtml.innerHTML = questionAnswerArray[i].answer2;
    buttonThreeHtml.innerHTML = questionAnswerArray[i].answer3;
    buttonFourHtml.innerHTML = questionAnswerArray[i].answer4;



    if (quizQuestionHtml.innerHTML = questionAnswerArray[3].question) {
        var scoreBox = document.createElement("div");
        scoreBox.innerHTML = "you did it! your score is " + finalScore + "%";
        document.getElementById('scoreContainer').appendChild(scoreBox);
    }
});
console.log(finalScore + " score after answering")

// use appendList or appendChild div that shows the score

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
            timerCountHtml.innerHTML = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerCountHtml.innerHTML = timeLeft + ' second remaining HURRY UP';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerCountHtml.innerHTML = '0';
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
// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// // also global variables that we'll use for the logic below like functions and if/else stmnts
// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

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

//write a function that takes in a string and outputs the number of vowels (not counting y).
// Ex:
// Input: "hello"
// Output: 2
// Input: "you are great!"
// Output: 6
// Input: "why?"
// Output: 0