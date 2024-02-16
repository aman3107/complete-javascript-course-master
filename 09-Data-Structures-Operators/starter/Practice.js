'use strict';

console.log('hello world');

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(time, address, startIndex, mainIndex);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via al sole 2',
  mainIndex: 2,
  startIndex: 3,
});

restaurant.orderDelivery({
  address: 'del monto',
  mainIndex: 2,
});
/* Destructuring Objects */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantaName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantaName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating
let a = 110;
let b = 119;
const obj = { a: 23, b: 20, c: 10 };
({ b, a } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

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
