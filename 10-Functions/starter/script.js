'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/* More Closure Examples */

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

// Example 2

const boardPassengrs = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 123;
boardPassengrs(180, 3);

/* Closures */

// console.log('Hello World');
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);
/* Immediately Invoked Function Expression */

// (function () {
//   console.log(`This will never run again`);
// })();
// (() => console.log(`This will never run again`))();

/* The Call and Apply Methods */

// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ flight: ` ${this.iatacode}${flightNum}` }, name);
//   },
// };

// lufthansa.book(239, 'Aman Mittal');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iatacode: 'EW',
//   bookings: [],
// };

// Call Method

// const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 291, 'Shiva');
// console.log(lufthansa);

// Apply Method

// const flightData = [583, 'Goerge Cooper'];
// book.apply(lufthansa, flightData);
// console.log(lufthansa);

// const flightData1 = [909, 'Ginny'];
// book.call(eurowings, ...flightData1);
// console.log(eurowings);

// Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(43, 'Steven Williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Aman Mittal');
// bookEW23('Dhoni');
// console.log(eurowings);

// With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));

// const addTax1 = function (rate) {
//   return function (value) {
//     console.log(`${value + value * rate}`);
//   };
// };

// const addVat2 = addTax1(0.23);
// addVat2(100);
// addVat2(900);

/* A Closer Look At Functions */

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Aman');
// greeterHey('Jonas');

// greet('Hi')('Justin');

/* Functions Accepting Callback Functions */

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// // Higher Order function */
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name} `);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const high5 = function () {
//   console.log('🖐️');
// };

// document.body.addEventListener('click', high5);
// ['Aman', 'Payal', 'Shiva'].forEach(high5);

/* First CLass and Higher Order Functions */

/* How Passing Argument Works: Value vs Reference */

// const flight = 'LH123';
// const aman = {
//   name: 'Aman Mittal',
//   passport: 4269173654,
// };

// const checking = function (flightNum, passenger) {
//   flightNum = 'LH899';
//   passenger.name = 'Mr ' + passenger.name;
//   if (passenger.passport === 4269173654) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checking(flight, aman);
// console.log(flight);
// console.log(aman);

// const passenger = { ...aman };
// passenger.name = 'Aman';
// console.log(aman);
// console.log(passenger);

/* Default Parameters */

// const bookings = [];

// const createBooking = function (
//   flighName,
//   passenger = 1,
//   price = 199 * passenger
// ) {
// ES5 Default Values
// passenger = passenger || 1;
// price = price || 199;
//   const booking = {
//     flighName,
//     passenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 900);
// createBooking('LH123', undefined, 900);
