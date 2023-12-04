let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
let userInput = document.querySelector("#guessField");
const prevGuessSlot = document.querySelector(".guesses");
const lastRemaining = document.querySelector(".lastResult");
const lowOrhign = document.querySelector(".loOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement('p')
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
    if (numGuess === 10) { 
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
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Tooooo High`);
  }
  console.log(guess);
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuessSlot.innerHTML += `${guess}, `;
  numGuess++;
  lastRemaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
  lowOrhign.innerHTML = `<h2>${message}</h2>`
  console.log(message);
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess = 1;
    prevGuessSlot.innerHTML = '';
    lastRemaining.innerHTML = '10'; // Reset remaining guesses
    userInput.removeAttribute("disabled");

    
    if (startOver.contains(p)) {
      startOver.removeChild(p);
    }
    
    playGame = true;
  });
}

