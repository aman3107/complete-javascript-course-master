'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDeliver: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `${this.starterMenu[startIndex]}, ${this.mainMenu[mainIndex]} ${time}`
    );
  },
  orderPata: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1} ${ing2} and  ${ing3}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* Spread Operator */

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const mergeArray = [...badNewArr, ...newMenu];
console.log(mergeArray);
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets
const str = 'Aman Mittal';
const strArr = [...str];
console.log(strArr);
console.log(...str);
// console.log(`${...str}`);
// const ingredients = [
//   prompt("Let's make pasta Ingredient 1?"),
//   prompt('Ingredient2'),
//   prompt('Ingredient3'),
// ];
// restaurant.orderPata(...ingredients);
// restaurant.orderPata(ingredients[0], ingredients[1], ingredients[2]);

// Objects

const newRestaurant = { foundIn: 1999, ...restaurant, founder: 'Aman' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Chacha';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/* Destructuring Objects */

// restaurant.orderDeliver({
//   time: '22:30',
//   address: '12345 FL',
//   mainIndex: 2,
//   startIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantname,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantname, hours, tags);

//Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(c);

// Mutating Variables
// let a = 11;
// let b = 22;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
/* Destructuring Arrays */

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(a, b, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// nested Destructuring
// const nested = [2, 3, [4, 5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
