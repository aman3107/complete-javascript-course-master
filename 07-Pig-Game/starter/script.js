'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn-hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
let currentScore0 = 0;
let currentScore1 = 0;

// Initial value of both players
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

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
    currentScore0 += diceNumber;
    current0El.textContent = currentScore0;
  } else {
    // Switch to next player
  }
});
