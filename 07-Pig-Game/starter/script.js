'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const playerActive0El = document.querySelector('.player--0');
const playerActive1El = document.querySelector('.player--1');
// let currentPlayer0 = playerActive0El.classList.contains('player--active');
let currentScore, activePlayer;
let scores = new Array();
// let currentScore1 = 0;
// let activePlayer = 0;
// let scores = [0, 0];

// Initial value of both players
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  // Initial value of both players
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  playerActive0El.classList.remove('player--winner');
  playerActive1El.classList.remove('player--winner');
  playerActive0El.classList.add('player--active');
  playerActive1El.classList.remove('player--active');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  scores = [0, 0];
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerActive0El.classList.toggle('player--active');
  playerActive1El.classList.toggle('player--active');
};

// Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  // Generating a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;

  // Check for rolled 1
  if (diceNumber !== 1) {
    // Add to the current score
    // if (currentPlayer0 === true) {
    //   currentScore0 += diceNumber;
    //   current0El.textContent = currentScore0;
    // } else {
    //   currentScore1 += diceNumber;
    //   current1El.textContent = currentScore1;
    // }
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;
    // playerActive0El.classList.toggle('player--active');
    // playerActive1El.classList.toggle('player--active');
    // if (playerActive0El.classList.contains('player--active')) {
    //   playerActive0El.classList.remove('player--active');
    //   playerActive1El.classList.add('player--active');
    //   currentPlayer0 = false;
    // } else if (playerActive1El.classList.contains('player--active')) {
    //   playerActive1El.classList.remove('player--active');
    //   playerActive0El.classList.add('player--active');
    //   currentPlayer0 = true;
    // }
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
