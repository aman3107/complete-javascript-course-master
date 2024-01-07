'use strict';
/*
console.log(message.textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.check').addEventListener('click', function () {
//   var guessNumber = Number(document.querySelector('.guess').value);
//   console.log(guessNumber, typeof guessNumber);

//   if (!guessNumber) {
//     document.querySelector('.message').textContent = '⛔ No Number';
//   }
//   document.querySelector('.message').textContent = 'Correct Number!';
//   document.querySelector('.score').textContent = x;
// });

const randomNumber = function () {
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  return secretNumber;
};

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
let secretNumber = randomNumber();
// console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};
// let message = document.querySelector('.message');

const lostGame = function (score) {
  // message.textContent = 'You Lost the Game';
  displayMessage('You Lost the Game');
  // document.querySelector('.score').textContent = 0;
  setScore(0);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no Guess Entered
  if (!guess) {
    // message.textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }
  // When Guess equals to secretNumber
  else if (guess === secretNumber) {
    // message.textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // message.textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      guess > secretNumber
        ? displayMessage('Too High!')
        : displayMessage('Too Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      setScore(score);
    } else {
      lostGame();
    }
  }
  // When guess is greater than secretNumber
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     lostGame();
  //   }
  // }
  // // When guess is less than secretNumber
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     lostGame();
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // secretNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumber = randomNumber();
  score = 20;
  // message.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  setScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// document.querySelector('.again').addEventListener('click', function () {
//   location.reload(true);
// });
