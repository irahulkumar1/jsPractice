const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const userInput = document.querySelector("#guessField");
const prevGuessSlot = document.querySelector(".guesses");
const lastRemaining = document.querySelector(".lastResult");
const lowOrhign = document.querySelector(".loOrHi");
const resultParas = document.querySelector(".resultParas");

// console.log(useInput);

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validationGuess(guess);
    displayGuess(guess);
  });
}

function validationGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter greater than 1");
  } else if (guess > 100) {
    alert("Please enter less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, random number was ${randomNumber}`);
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }else if ( guess < randomNumber){
    displayMessage(`Number is Tooooo low`)
  }else if ( guess > randomNumber){
    displayMessage(`Number is Tooooo High`)
  }
  console.log(guess);
}

function displayGuess(guess) {
    userInput.value = ''
  console.log(guess);
}
function displayMessage(message) {
  console.log(message);
}

function endGame() {}

function newGame() {}
