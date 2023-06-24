// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
PROBLEM:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of tempertures of one day, calculate the temperture amplitude. Keep in mind that sometimes there might be a sensor error."
*/
/*
const tempertures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(min, max);
  return `Temperature amplitude ${max - min}`;
};

console.log(calcTempAmplitude([23, 4, 16, 8]));
console.log(calcTempAmplitude(tempertures));
*/
// (2) Breaking up into sub-problems:
// - How to ignore erros?
// - Find max value in temp. array
// - Find min value in temp. array
// - Subtract min from max and return it (amplitude)

//Problem 2:
// function should now receive 2 arrays of temps
//(1) Understanding the problem:
// - With 2 arrays, should I implement the functionality twice? Answer: No, just merge two arrays

// (2) Breaking up into sub-problems:
// - Merge 2 arrays

const calcTempAmplitudeNew = function (tp1, tp2) {
  const temps = tp1.concat(tp2); // - Merge 2 arrays

  console.table(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(min, max);
  return `Temperature amplitude ${max - min}`;
};

console.log(calcTempAmplitudeNew([1, 2, 3], [4, 5, 6]));
