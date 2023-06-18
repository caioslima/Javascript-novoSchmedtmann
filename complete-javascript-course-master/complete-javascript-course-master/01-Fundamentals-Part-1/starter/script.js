/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';
// console.log(job);

lastName = 'Schmedtmann';
console.log(lastName);
*/

//Assigments operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
*/
//Comparison operators
/*
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)
*/
/*
const firstName = 'Caio';
const job = 'teacher';
const birthYear = 1993;
const year = 2037;

const caio = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(caio);

const caioNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(caioNew);

console.log(`use this simble
to write
multiple
lines,
I can use this template literals all the time`);
*/
/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚘`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
const favorite = Number(prompt("What's your age?"));
console.log(favorite, typeof favorite);

if (favorite > 60) {
    console.log("Meus parabens!!! O(A) senhor(a) ja viveu quase toda sua vida, mas ainda tem muita coisa pra aprender");
} else if (favorite > 29) {
    console.log("Meus parabens!!! O(a) senhor(a) ja viveu metade da sua vida");
} else if (favorite >= 18) {
    console.log("Meus parabens!!! O(a) senhor(a) ja virou um adulto e pode sofrer coisas de adulto");
} else if (favorite < 18) {
    console.log("Meus parabens!!! O(a) senhor(a) acabou de começar a sua vida");
}
*/
/*
const day = 'Saturday';

if (day === 'Monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'Tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log(`Write code examples`);
} else if (day === 'Friday') {
    console.log(`Record videos`);
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log(`Enjoy the weekend 😎`);
} else {
    console.log(`Not a valid day!`);
}
*/

//Challenge#4
const bill = 275;
let tip;

bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * .20;

console.log(tip);

const msgTip = `The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}.`

console.log(msgTip);