'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

rollDice.addEventListener('click', function () {
  const numRandom = Math.trunc(Math.random() * 6) + 1;
  console.log(numRandom);
});
