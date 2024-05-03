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
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

/* Setters and Getters */

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 209, 310],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// account.latest = 50;
// console.log(account.latest);
// console.log(account.latest);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there!');
//   }
// }

// const jessica = new PersonCl('aman mittal', 2000);
// PersonCl.hey();
// console.log(jessica.age);
// console.log(jessica);

// jessica.fullName = 'aman';
// const walter = new PersonCl('Walter White', 1967);

/* Static Methods */

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('aman', 2000);

// Person.hey = function () {
//   console.log('Hey there!');
// };

// Person.hey();
// console.log(Person.prototype);
// // jonas.hey();

// class PersonCl {
//   constructor() {}
//   static hey() {
//     console.log(`Hey there!`);
//   }
// }

// const aman = new PersonCl();
// PersonCl.hey();

/* Object.create */

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2001;
// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);

/* Coding Challenge 2 */

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`'${this.make}' going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 100);
// bmw.brake();
// console.log(bmw.speedUS);
// bmw.speedUS = 120;
// console.log(bmw);
// console.log(bmw.speedUS);

// bmw.brake();

/* Inheritance Between Classes: Constructor Functions */

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__.__proto__);
// console.dir(Student.prototype.constructor);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// mike.calcAge();

/* Challenge 3 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 110, 95);
// console.log(tesla);
// tesla.accelerate();
// tesla.chargeBattery(98);
// tesla.accelerate();
// tesla.brake();

/* Inheritance Between Classes: ES6 classes */

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`hey there!`);
//   }
// }

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${
//         2037 - this.birthYear
//       } years old but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       } `
//     );
//   }
// }

// const martha = new Student('Martha Jones', 2022, 'Computer Science');
// martha.introduce();
// martha.calcAge();
// console.log(martha.age);

/* Inheritance Between Classes: Object.create */

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// const jay = Object.create(StudentProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// jay.init('Jay', 2010, 'Computer Science');
// jay.calcAge();

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// jay.introduce();

/* Another Class Example */

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(` Thanks for opening an account, ${owner}`);
  }

  deposit(value) {
    this.movements.push(value);
  }

  withdrawl(value) {
    this.deposit(-value);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const account1 = new Account('Jonas', 'EUR', 1111);
console.log(account1);

// account1.movements.push(250);
// account1.movements.push(-140);

account1.deposit(250);
account1.withdrawl(140);
// account1.pin = 1221;
account1.requestLoan(1000);
account1.approveLoan(1000);
