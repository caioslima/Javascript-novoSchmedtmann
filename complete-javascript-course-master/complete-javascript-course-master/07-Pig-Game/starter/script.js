'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerActive = document.querySelector('.player--active');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true
  if (dice !== 1) {
    //Add to current score
    if (player0.classList.contains('player--active')) {
      currentScore += dice;
      current0El.textContent = currentScore;
    } else if (player1.classList.contains('player--active')) {
      currentScore += dice;
      current1El.textContent = currentScore;
    }
  } else {
    // Switch to next player
    if (player0.classList.contains('player--active')) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      current1El.textContent = 0;
    } else if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      current0El.textContent = 0;
    }
  }
});
