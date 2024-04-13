'use strict';
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const maximum = movements.reduce((acc, curr) => {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// }, movements.at(0));
// console.log(maximum);
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

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an array s of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge1 = function (dogsArray) {
// dogsArray.forEach(function (dogsAge, i) {
//   dogsArray[i] = dogsAge <= 2 ? 2 * dogsAge : 16 + dogsAge * 4;
// });
//   dogsArray = dogsArray.map(function (dogsAge) {
//     if (dogsAge <= 2) {
//       return 2 * dogsAge;
//     } else {
//       return 16 + dogsAge * 4;
//     }
//   });
//   const newDogsArray = dogsArray.filter(val => val >= 18);
//   const averageDogAge =
//     newDogsArray.reduce((acc, curr) => acc + curr, 0) / newDogsArray.length;
//   console.log(averageDogAge);
// };
// const dogsArray = [5, 2, 4, 1, 15, 8, 3];
// calcAverageHumanAge1(dogsArray);

/* The Magic of Chaining Methods */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
// const totalDepositsInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
// .map((mov, i, arr) => {
//   console.log(arr);
//   return mov * eurToUsd;
// })
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(totalDepositsInUSD);

/* Challenge 3 */

// const calcAverageHumanAge = function (dogsArray) {
//   const averageDogAge = dogsArray
//     .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
//   console.log(averageDogAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

/* Find Method */

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/* FindIndex Method */

/* Some and Every */

// Equality
// console.log(movements.includes(-130));

// SOME: Condition
// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// EVERY: Condition

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

/* Flat and FlatMap */

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, curr) => acc + curr, 0);

// flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(overallBalance);

// flatMap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(overallBalance2);

/* Sort Arrays */

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements.sort());

// return < 0, A,B (keep Order)
// return > 0, B,A (swicth Order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

/* More Ways of Creating and Filling Arrays */

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);

x.map(() => 5);
// console.log(x);
x.fill(1, 2, 5);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 4);
console.log(arr);

// Array.from()

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll());
