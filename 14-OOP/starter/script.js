'use strict';

/* Constructor Functions and the new Operator */

const Person = function (firstName, birthYear) {
  // Instances Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('jonas', 1991);
const aman = new Person('aman', 2000);
console.log(aman);

// 1. New Empty Object({}) is Created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return{}
console.log(jonas.birthYear);
console.log(jonas instanceof Person);
const jay = 'Jay';
console.log(jay instanceof Person);

/* Prototypes */

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
aman.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
