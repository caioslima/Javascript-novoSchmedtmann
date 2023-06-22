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
/*
const pointsDolphins1 = 44;
const pointsDolphins2 = 23;
const pointsDolphins3 = 71;

const pointsKoalas1 = 65;
const pointsKoalas2 = 54;
const pointsKoalas3 = 49;

const pointsDolphins11 = 85;
const pointsDolphins12 = 54;
const pointsDolphins13 = 41;

const pointsKoalas11 = 23;
const pointsKoalas12 = 34;
const pointsKoalas13 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(pointsDolphins1, pointsDolphins2, pointsDolphins3);

const scoreKoalas = calcAverage(pointsKoalas1, pointsKoalas2, pointsKoalas3);

const scoreDolphins1 = calcAverage(pointsDolphins11, pointsDolphins12, pointsDolphins13);

const scoreKoalas1 = calcAverage(pointsKoalas11, pointsKoalas12, pointsKoalas13);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        const res = `Dolphins wins (${avgDolphins} vs. ${avgKoalas})`;
        return res;
    } else if (avgKoalas > avgDolphins * 2) {
        const res = `Koalas wins (${avgKoalas} vs. ${avgDolphins})`;
        return res;
    } else {
        const res = `No team wins... `;
        return res;
    }
}

const data1 = checkWinner(scoreDolphins, scoreKoalas);
const data2 = checkWinner(scoreDolphins1, scoreKoalas1);

console.log(scoreDolphins, scoreKoalas);
console.log(data1);

console.log(scoreDolphins1, scoreKoalas1);
console.log(data2);
*/
/*
const oldFriends = ['Alan', 'Alexandre', 'Bruno', 'Jhonatan'];
console.log(oldFriends);
console.log(oldFriends[oldFriends.length - 1]);

const firstName = 'Caio';
const lastName = 'Silva Lima';
const idade = 2023 - 1993;

const dadosPessoais = new Array(firstName, lastName, idade, 'Quem sabe 🤪', oldFriends);
console.log(dadosPessoais);

dadosPessoais[3] = 'Programação';
console.log(dadosPessoais);
*/

//Challenge#2 Fundam. part2
/*
function calcPorcTip(bill) {
    const tip = calcTip(bill);
    return bill + (bill * tip);
}

function calcTip(tipPorc) {
    return tipPorc >= 50 && tipPorc <= 300 ? .15 : .2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]) * bills[0], calcTip(bills[1]) * bills[1], calcTip(bills[2]) * bills[2]];
console.log(tips);
*/
/*
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = new Array(125, 555, 44);

const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/
/*
//little Challange
const names = 'Caio';
const friends = ['Michael', 'Peter', 'Steven']
console.log(friends);

console.log(`${names} has ${friends.length} friends, and his best friend is called ${friends[0]}.`)
*/
/*
const caio = {
    firstName: 'Caio',
    lastName: 'S. Lima',
    birthYear: 1993,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    getSummary: function () {
        if (this.hasDriversLicense) {
            this.age = 2037 - this.birthYear;
            this.can = `a`;
        } else {
            this.age = 2037 - this.birthYear;
            this.can = `no`;
        }
        return `${this.firstName} is a ${this.age}-years old ${this['job']}, and he has ${this.can} driver's license.`
    }
}

caio.getSummary();

console.log(caio['getSummary']());
*/
/*
//Challange#3 fundam 2
const marks = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const johns = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const higherBMI = marks.calcBMI() > johns.calcBMI() ? `${marks.fullName}'s BMI (${marks.BMI}) is higher than ${johns.fullName}'s (${johns.BMI})!` : `${johns.fullName}'s BMI (${johns['BMI']}) is higher than ${marks.fullName}'s (${marks.BMI})!`
console.log(higherBMI);
//${marks['calcBMI']()}
console.log(marks.BMI, johns.BMI);
*/
/*
const caioArray = [
    'Caio',
    'S. Lima',
    2037 - 1993,
    'Aluno',
    ['Michael', 'Peter', 'Steven'],
    true,
];

const types = [];

for (let i = 0; i < caioArray.length; i++) {
    console.log(caioArray[i], typeof caioArray[i]);

    types[i] = typeof caioArray[i];
}

console.log(types);

const years = [1993, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log('_____continue_______');
for (let i = 0; i < years.length; i++) {
    if (typeof caioArray[i] !== 'string') continue;

    console.log(caioArray[i], typeof caioArray[i]);
}

console.log('_____break with number_______');

for (let i = 0; i < years.length; i++) {
    if (typeof caioArray[i] === 'number') break;

    console.log(caioArray[i], typeof caioArray[i]);
}
*/
//Fazer o loop de tras para frente
/*
const caioArray = [
    'Caio',
    'S. Lima',
    2037 - 1993,
    'Aluno',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = caioArray.length - 1; i >= 0; i--) {
    console.log(i, caioArray[i]);
}

//Loop dentro de outro loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}.`);
    }
}
*/

//while loop
/*
console.log(`------For() Loop-------`)

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}.`);
}

console.log(`------While() Loop-------`)

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}.`);
    rep++;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}
*/

//Challenge#4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tips[i]);
    console.log(bills[i], '+', tips[i], '=', totals[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));