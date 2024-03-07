'use strict';

const weekdDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderAman(...amanmenu) {
    console.log(amanmenu);
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(time, address, startIndex, mainIndex);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/* Maps: Iteration */

// const question = new Map([
//   ['question', 'What is the best programming in the world'],
//   [1, 'C'],
//   [2, 'JAVA'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);

// console.log(question);
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Enter your answer'));
// const answer = 3;
// console.log(
//   answer === question.get('correct') ? question.get(true) : question.get(false)
// );

// console.log([...question.keys()]);
// console.log([...question.values()]);

/* Maps */

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenzy Italy');
// rest.set(2, 'Lisbon Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Itilian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');
// // console.log(rest);
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// const arr = [1, 2];
// rest.set(arr, 20);
// console.log(rest);
// console.log(rest.get(arr));
// rest.clear();
// console.log(rest);

/* Sets */

// const orderSet = new Set([
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(new Set('Aman'));
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Pizza');
// console.log(orderSet);
// for (const value of orderSet) {
//   console.log(value);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const stuffUnique = [...new Set(staff)];
// console.log(stuffUnique);

// orderSet.clear();
// console.log(orderSet);

/* Looping Objects */

// Property Names
// const properties = Object.keys(openingHours);
// let openStr = `We are open ${properties.length} days :`;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day} ,`;
// }
// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// for (const { open, close } of values) {
//   console.log(open, close);
// }

// Entries

// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(key, open, close);
// }

/* Optional chaining (?) */

// if (restaurant.openingHours && restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
// const Days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of Days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} will open on ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisot?.(0, 1) ?? 'Method does not exist');

// Arrays

// const arr = [{ name: 'Aman', email: 'aman@gmail.com' }];
// console.log(arr[1]?.name ?? 'User does not exist');
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// restaurant.orderAman(...restaurant.starterMenu);

/* Looping Arrays: The for-of loop */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// /* Logical Assignment Operators */

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   Owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Logical Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 20;

// Nullish Logical Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 20;

// rest2.Owner = rest2.Owner && '<ANONYMOUS>';
// rest1.Owner = rest1.Owner && '<ANONYMOUS>';

/* AND Logical Assignment Operator */
// rest2.Owner &&= '<ANONYMOUS>';
// rest1.Owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
/* The Nullish Coalescing Operator */

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guests1 = restaurant.numGuests ?? 10;
// console.log(guests1);

/* Short Circuting (&& and ||) */
// console.log('--------------OR --------------');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || null || 0 || '' || 'Hello' || true || 1);

// restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);
// console.log('-------------- AND --------------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/* Rest Pattern and Parameters */

// Spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// Rest, because on left side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, Risotto, otherFood);

/* Objects Rest */
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

/* Functions Rest */

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 6, 7);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [1, 2, 4];
// add(...x);
// restaurant.orderPizza('mushroom', 'onion', 'tomato', 'capsicum');

/* Spread Operator */

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 or more Arrays

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const str = 'Aman';
// const letters = [...str, 'M'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's makes pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = { founder: 'Guisippe', ...restaurant, founded: 1999 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Son of Swad';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via al sole 2',
//   mainIndex: 2,
//   startIndex: 3,
// });

// restaurant.orderDelivery({
//   address: 'del monto',
//   mainIndex: 2,
// });

// /* Destructuring Objects */
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantaName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantaName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating
// let a = 110;
// let b = 119;
// const obj = { a: 23, b: 20, c: 10 };
// ({ b, a } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// console.log(restaurant['name']);
/* Destructuring Arrays */

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondoray] = restaurant.categories;
// console.log(main, secondoray);

// Swap the values of variables

// [main, secondoray] = [secondoray, main];
// console.log(main, secondoray);

// destructure the function return values

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring

// const nested = [2, 4, [5, 6]];
// const [a, , [b, c]] = nested;
// console.log(a, b, c);

// Default value in destructuring

// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);
