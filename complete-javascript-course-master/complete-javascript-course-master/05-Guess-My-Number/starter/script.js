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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
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
