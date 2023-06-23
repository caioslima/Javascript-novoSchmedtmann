// console.log('Hello, world!');
const chinese = 1200000000;
const spanish = 700000000;
const ensglish = 600000000;
//population of the world
const countrys = {
  china: 1250000000,
  portugal: 11500000,
  brazil: 212000000,
};

const country = [20000000, 35000000, 541000000, 24000000];

for (let i = 0; i < country.length; i++) {
  if (country[i] > 33000000) {
    console.log(`${country[i]}'s population is above average`);
  } else {
    console.log(`${country[i]}'s population is below average`);
  }
}
console.log(countrys);
