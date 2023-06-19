'use strict';

/*
function logger() {
    console.log(`My name is Caio!`);
}

logger();
logger();
*/

//test1
/*
Problema: Calculadora de temperatura
Você está desenvolvendo uma calculadora de temperatura para um aplicativo meteorológico. A calculadora deve ser capaz de converter temperaturas entre Celsius e Fahrenheit. No entanto, você está enfrentando dificuldades para implementar a lógica de conversão.

Requisitos:

- A calculadora deve ser capaz de converter temperaturas de Celsius para Fahrenheit e vice-versa.
- A função deve receber um valor de temperatura e uma unidade de medida (Celsius ou Fahrenheit) como parâmetros.
- Se a unidade de medida for "Celsius" (ou "c"), a função deve retornar o valor de temperatura convertido para Fahrenheit.
- Se a unidade de medida for "Fahrenheit" (ou "f"), a função deve retornar o valor de temperatura convertido para Celsius.
- A função não deve exibir nada no console ou na tela. Ela deve apenas retornar o valor convertido.
*/
/*
function CalculadoraDeTemperatura(temperatura, CelFar) {
    const graus = CelFar === 'c' || CelFar === 'Celsius' ? `Agora a temperatura é ${(temperatura * 1.8) + 32} °F.` : `Agora a temperatura é ${(temperatura - 32) * 0.5556} °C.`;
    return graus;
}

const climaSP = CalculadoraDeTemperatura(32, 'Fahrenheit');
console.log(climaSP);
*/

//test2
/*
Problema: Verificador de paridade
Você precisa implementar uma função que verifique se um número inteiro é par ou ímpar. No entanto, você está com dificuldades para encontrar a solução adequada.

Requisitos:

A função deve receber um número inteiro como parâmetro.
A função deve retornar "Par" se o número for par e "Ímpar" se o número for ímpar.
A função não deve exibir nada no console ou na tela. Ela deve apenas retornar a resposta.
*/
/*
let resultado;

function parOuImpar(número) {
    if (número % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

const casaPedro = parOuImpar(1);
const casaLeandro = parOuImpar(12);
const casaPedo = parOuImpar(321);
console.log(casaPedro);
console.log(casaLeandro);
console.log(casaPedo);
*/

//teste3
/*
Problema: Verificador de números positivos
Você precisa implementar uma função que verifique se um número é positivo. No entanto, você está com dificuldades para encontrar a solução adequada.

Requisitos:

A função deve receber um número como parâmetro.
A função deve retornar "Positivo" se o número for maior que zero e "Não positivo" caso contrário.
A função não deve exibir nada no console ou na tela. Ela deve apenas retornar a resposta.
Seu desafio é implementar a função de verificação de números positivos sem a solução


function positicoNegativo(numero) {
    return numero > 0 ? "Positivo" : "Não positivo";
}

const temperaturaChuva = positicoNegativo(-45);
console.log(temperaturaChuva);
*/

//test 4
/*
Problema: Calculadora de Média
Você precisa criar uma função que calcula a média de três números. A função deve receber três números como parâmetros e retornar a média aritmética desses números.

Requisitos:

A função deve receber três números como parâmetros.
A função deve calcular a média aritmética dos três números.
A função deve retornar o valor da média calculada.
A função não deve exibir nada no console ou na tela. Ela deve apenas retornar o valor da média.
*/
/*
const mediaCalc = function (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

const barAle = mediaCalc(22, 25, 32);
console.log(barAle);
*/

//test 5
/*
Problema: Verificador de Número Primo
Você precisa implementar uma função que verifique se um número é primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo, ou seja, não possui divisores além desses dois.

Requisitos:

A função deve receber um número inteiro positivo como parâmetro.
A função deve verificar se o número é primo.
A função deve retornar true se o número for primo e false caso contrário.
A função não deve exibir nada no console ou na tela. Ela deve apenas retornar a resposta.
*/
/*
function calcPrimo(numero) {
    if (numero % 2 === 0 && numero % 1 === 0) {
        console.log('True')
    } else {
        console.log('False')
    }
    //const resul = numero % numero === 0 && numero % 1 > 0 ? 'False' : 'True';
    //return resul;
}

const mega = calcPrimo(1);
console.log(mega);

faliure
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple(s) and ${orangePieces} pieces of orange(s).`
    return juice;
}

console.log(fruitProcessor(6, 8));
*/

//test 7
/*
Problema: Verificador de Número Perfeito
Você precisa implementar uma função que verifique se um número é um número perfeito. Um número perfeito é aquele em que a soma de seus divisores próprios (excluindo o próprio número) é igual ao número em si.

Requisitos:

A função deve receber um número inteiro positivo como parâmetro.
A função deve verificar se o número é um número perfeito.
A função deve retornar true se o número for perfeito e false caso contrário.
A função não deve exibir nada no console ou na tela. Ela deve apenas retornar a resposta.
*/
/*
let simNao;
function verifcadorPerfeito(numero) {
    return numero > 0 && numero % 2 === 0 ? simNao = numero : 'False';
}

function numInteiro(dado) {
    const resultado = verifcadorPerfeito(dado);
    const mult = 
    if (resultado === !'False') {
        const resulFinal = dado === (mult * mult) ? 'True' : 'False';
    }
}

faliure

*/

