'use strict';

/* Challenge 1 */
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const checkDogs = function (dogsJulia, dogsKate) {
//   const newDogsJulia = [...dogsJulia];
//   newDogsJulia.splice(0, 1);
//   newDogsJulia.splice(-2);
//   const allDogsArray = [...newDogsJulia, ...dogsKate];
//   allDogsArray.forEach(function (val, i) {
//     const ans =
//       val >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${val} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(ans);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

/* Simple Array Methods */

// const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// arr.slice();
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
// const currencies = new Map([
//   ['USD', 'United States dollar '],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Sets

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

/* Map Looping Arrays */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD1 = movements.map(function (value) {
//   return value * eurToUsd;
// });
// const movementsUSD = movements.map(value => value * eurToUsd);
// console.log(movements);
// console.log(movementsUSD1);
// console.log(movementsUSD);

// const movementsDesc = movements.map((mov, i, arr) => {
//   return `mov ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
//     mov
//   )}`;
// });

// console.log(movementsDesc);

/* Filter Looping Arrays */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (val, ind) {
//   return val > 0;
// });
// console.log(deposits);
// const depositsFor = [];
// for (const val of movements) {
//   if (val > 0) {
//     depositsFor.push(val);
//   }
// }

// console.log(depositsFor);

// const withdrawals = movements.filter(val => val < 0);
// console.log(withdrawals);

/* Reduce Looping Arrays */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const maximum = movements.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements.at(0));
console.log(maximum);
// console.log(movements);
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// const balance3 = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance3);
