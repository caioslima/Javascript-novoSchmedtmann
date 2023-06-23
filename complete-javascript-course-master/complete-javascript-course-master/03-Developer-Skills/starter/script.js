// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
PROBLEM:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of tempertures of one day, calculate the temperture amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const tempertures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] === typeof 'string') continue;
    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }
  console.log(min, max);
  return `Temperature amplitude ${max - min}`;
};

console.log(calcTempAmplitude([23, 4, 16, 8]));
console.log(calcTempAmplitude(tempertures));

//(1) Understanding the problem:
// - What is temperture amplitude? Answer: It's the difference between the hightest and the lowest temp.
// - How to compute the max and min temp.?
// - What is a sensor error? And what to do?

// (2) Breaking up into sub-problems:
// - How to ignore erros?
// - Find max value in temp. array
// - Find min value in temp. array
// - Subtract min from max and return it (amplitude)
