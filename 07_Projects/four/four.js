let RndNo = parseInt(Math.random() * 100 + 1);
//console.log(RndNo);

const btnSubmit = document.querySelector('#subt');
const form = document.querySelector('form');
const input = document.querySelector('#guessField');
const pGusses = document.querySelector('.guesses');
const resultParas = document.querySelector('.resultParas');
const resultLoworHigh = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let numberOfAttempts = 10;
let previousGusses = [];
let playGame = true;
if (playGame) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInput(input.value);
  });
}
function validateInput(input) {
  if (isNaN(input)) {
    alert('Please enter a valid number');
  } else if (input < 1) {
    alert('Please enter number greater than 1');
  } else if (input > 100) {
    alert('Please enter number less than 100');
  } else {
    validateGame();
    input.value = '';
  }
}
function validateGame() {
  if (numberOfAttempts > 0 && numberOfAttempts <= 10) {
    startGame();
    console.log(numberOfAttempts);
  } else {
    endGame();
  }
}
function startGame() {
  if (input.value == RndNo) {
    displayMessage(
      `<h2 style='color:green'>Hurry you have accurate answer</h2>`
    );
    endGame();
  } else if (input.value < RndNo) {
    displayMessage(
      `<h2 style='color:red'>Enter number is less than Hidden Number</h2>`
    );
  } else if (input.value > RndNo) {
    displayMessage(
      `<h2 style='color:red'>Enter number is greater than Hidden Number</h2>`
    );
  } else {
    endGame();
  }
  previousGusses.push(input);
  pGusses.innerHTML += input.value + ', ';
  numberOfAttempts = numberOfAttempts - 1;
  const lastResult = (document.querySelector('.lastResult').innerHTML =
    numberOfAttempts);
}
function displayMessage(message) {
  resultLoworHigh.innerHTML = message;
}

function endGame() {
  playGame = false;
  btnSubmit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2>Start New Game</h2>`;
  resultParas.appendChild(p);
  newGame();
}
function newGame() {
  p.addEventListener('click', function (e) {
    btnSubmit.removeAttribute('disabled');
    playGame = true;
    previousGusses = [];
    numberOfAttempts = 10;
    RndNo = parseInt(Math.random() * 100 + 1);
    pGusses.innerHTML = '';
    resultLoworHigh.innerHTML = '';
  });
}
