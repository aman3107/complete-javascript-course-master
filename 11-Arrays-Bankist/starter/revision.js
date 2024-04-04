'use strict';

/* Simple Array Methods */

// const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

// console.log(arr.slice(1));
// console.log(arr);
// console.log(arr.slice(-1));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE

// console.log(arr.splice(1));
// console.log(arr.splice(1, 2));
// console.log(arr.splice(-1));
// console.log(arr);

// REVERSE

// const arr2 = ['j', 'h', 'i', 'g', 'm'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN

// console.log(letters.join('- '));

/* The new at method */

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(-1));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log('jonas'.at(0));

/* Looping Arrays: forEach */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('------ forEach ------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`mov ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`mov ${i + 1}: You withdraw ${Math.abs(mov)}`);
//   }
// });

/* forEach with Maps and Sets */

// Map
const currencies = new Map([
  ['USD', 'United States dollar '],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
