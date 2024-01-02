// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const temprature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let max = temprature[0];

const calcTempAmplitude = function (temprature) {
  for (let i = 1; i < temprature.length; i++) {
    if (temprature[i] === "error") {
      continue;
    } else if (temprature[i] > max) {
      max = temprature[i];
    }
  }
  return max;
};

console.log(calcTempAmplitude(temprature));
