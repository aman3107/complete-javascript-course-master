'use strict';

/* Constructor Functions and the new Operator */

// const Person = function (firstName, birthYear) {
//   // Instances Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('jonas', 1991);
// const aman = new Person('aman', 2000);
// console.log(aman);

// 1. New Empty Object({}) is Created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return{}
// console.log(jonas.birthYear);
// console.log(jonas instanceof Person);
// const jay = 'Jay';
// console.log(jay instanceof Person);

/* Prototypes */

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// aman.calcAge();
// console.log(jonas.__proto__);
// Object.prototype
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// console.log(Person.__proto__);

/* Prototypal Inheritance on Built-In objects */

// const arr = [1, 2, 3, 4, 5, 6, 5, 6, 1, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique(arr));
// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

/* Challenge 1 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 110);
// console.log(bmw);
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed}  km/h`);
// };

// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

/* ES6 Classes */

// class Expression
// const PersonCl1 = class {};

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
