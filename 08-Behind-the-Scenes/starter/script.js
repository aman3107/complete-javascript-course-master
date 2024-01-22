'use strict';

// console.log('Hello World');

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
// console.log(firstName);
// function printAge() {
// let output = `${firstName}, You are ${age}, born in ${birthYear}`;
// console.log(output);

// if (birthYear >= 1981 && birthYear <= 1996) {
//   var millenial = true;
//   const firstName = 'Aman';
//   const str = `Oh, and you are a millenial, ${firstName}`;
//   console.log(str);

//   function add(a, b) {
//     return a + b;
//   }
//   // output = 'Aman Output';
//   const output = 'Aman Output';
// }
// console.log(str);
//   console.log(millenial);
//   console.log(output);
//   // console.log(add(2, 3));
// }
// printAge();
// return age;
//}

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age);
// printAge();
// console.log(millenial);

/* Variable Hoisting */

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Aman';
// let job = 'Engineer';
// const year = 1999;

/* Function Hoisting */

// console.log(addD(2, 3));
// console.log(addEx(2, 3));
// console.log(addArr(2, 3));
// console.log(addEx);

// function addD(a, b) {
//   return a + b;
// }

// var addEx = function (a, b) {
//   return a + b;
// };

// const addArr = (a, b) => {
//   return a + b;
// };

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const aman = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// aman.calcAge();
// calcAgeArrow(1991);

// const shiva = {
//   year: 2017,
// };

// shiva.calcAge = aman.calcAge;
// shiva.calcAge();

// const f = aman.calcAge;
// console.log(f);
// f();

// var firstName = 'Aman';

// const aman = {
//   firstName: 'Aman',
//   year: 1999,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

/* Solution 1*/

// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
//   // console.log(this.year >= 1981 && this.year <= 1996);
// };

/* Solution 2 */

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };

// aman.greet();
// aman.calcAge();
// console.log(this.firstName);

// Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments.length);
// };

// addExpr(2, 3, 4, 5, 6);

// var addArr = (a, b) => {
//   console.log(arguments);
// };

// addArr(1, 2);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Aman',
//   age: 30,
// };

// const friend = me;
// friend.age = 32;
// console.log(me);
// console.log(friend);

// Primitive Types
let lastName = 'Mittal';
let oldLastName = lastName;
lastName = 'Gupta';
console.log(lastName);
console.log(oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage ', jessica);
console.log('After Marriage ', marriedJessica);

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage ', jessica2);
console.log('After Marriage ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage ', jessica2);
console.log('After Marriage ', jessicaCopy);
