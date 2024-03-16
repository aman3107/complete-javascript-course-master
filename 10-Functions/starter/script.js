'use strict';

/* How Passing Argument Works: Value vs Reference */

const flight = 'LH123';
const aman = {
  name: 'Aman Mittal',
  passport: 4269173654,
};

const checking = function (flightNum, passenger) {
  flightNum = 'LH899';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 4269173654) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

checking(flight, aman);
console.log(flight);
console.log(aman);

const passenger = { ...aman };
passenger.name = 'Aman';
console.log(aman);
console.log(passenger);
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
