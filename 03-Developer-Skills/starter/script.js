// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

// const temprature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temprature2 = [3, -2, -6, -1, "error", 9, 13, 17, 17, 14, 9, 5];

// const calcTempAmplitude = function (temprature) {
//   let max = temprature[0];
//   let min = temprature[0];
//   for (let i = 1; i < temprature.length; i++) {
//     if (temprature[i] === "error") {
//       continue;
//     } else if (temprature[i] > max) {
//       max = temprature[i];
//     } else if (temprature[i] < min) {
//       min = temprature[i];
//     }
//   }
//   let ans = [max, min];
//   return ans;
// };

// let temprature3 = temprature.concat(temprature2);
// console.log(calcTempAmplitude(temprature));

// console.log(calcTempAmplitude(temprature2));
// console.log(calcTempAmplitude(temprature3));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree Celsius")),
//   };
//   console.log(measurement);
//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const temprature = [3, -2, -6, -1, "error", 9, 13, 17, 17, 14, 9, 5];

const calcTempAmplitudeBug = function (temprature1, temprature2) {
  let temprature = temprature1.concat(temprature2);
  console.log(temprature);
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

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
