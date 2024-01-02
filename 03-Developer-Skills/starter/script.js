// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const temprature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temprature2 = [3, -2, -6, -1, "error", 9, 13, 17, 17, 14, 9, 5];

const calcTempAmplitude = function (temprature) {
  let max = temprature[0];
  let min = temprature[0];
  for (let i = 1; i < temprature.length; i++) {
    if (temprature[i] === "error") {
      continue;
    } else if (temprature[i] > max) {
      max = temprature[i];
    } else if (temprature[i] < min) {
      min = temprature[i];
    }
  }
  let ans = [max, min];
  return ans;
};

console.log(calcTempAmplitude(temprature));

console.log(calcTempAmplitude(temprature2));
