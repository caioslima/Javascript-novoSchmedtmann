'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 30;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 16;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
//Click botton Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When input is not valid
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  //When you win the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is diferente the secrete number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈👆 Too high' : '📉👇 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💣💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // ------------------------ REFACTORING -------------------------------------
  //When your guess is higher
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈👆 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💣💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When your guess is lower
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉👇 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💣💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//Click botton again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/* MINHA TENTATIVA DEU CERTO 😎🤩
  const numRandom = Math.trunc(Math.random() * 20) + 1;
  console.log('random', numRandom);

  if (guess < numRandom) {
    document.querySelector('.message').textContent = 'Number too low!';
  } else if (guess > numRandom) {
    document.querySelector('.message').textContent = 'Number too high!';
  }

  console.log(numRandom, guess);


// Eu tenho que fazer a frase do lado do input aparecer "Correct answer!" quando eu colocar o valor certo

// - (1) O que devo fazer:
// - criar um número random entre 1 e 20, e armazenar em um variavel
// - Confirmar se o valor se o valor do input confere com o da variavel com ovafor gerado
// - se for correto mudar a mensagem para "Correct answer!"
*/
