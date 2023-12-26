// console.log("Hello World");
// alert("Hello World");

// let js = "Amazing";
// if (js == "Amazing") {
//   alert("JavaScript is fun!");
// }
// console.log("Aman Mittal");
// console.log("How are you");

/* Values and Variables */

// console.log("Jonas");
// console.log(23);

// let firstName = "Payal";
// console.log(firstName);

// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

/* Data Types */

// let age = 23;
// let firstName = "Aman";
// let fullAge = true;
// let children;
// console.log(age, firstName, fullAge, children);
// console.log(typeof age);
// console.log(typeof firstName);
// console.log(typeof fullAge);
// console.log(typeof children);

// fullAge = "Papa";
// console.log(fullAge);

/* let, const and var */

// const birthYear = 1999;
// birthYear = 2000; Giving Error
// const job;  Giving Error

// var job = "Programmer";
// job = "Teacher";
// console.log(job);

/* Basic Operators */

// const now = 2037;
// const ageAman = now - 1999;
// const ageSarah = now - 2019;
// console.log(ageAman, ageAman * 2, ageAman / 2, ageAman ** 3);
// console.log(ageSarah);

// const firstName = "Aman";
// const lastName = "Mittal";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x++;
// x--;
// console.log(x);

// console.log(ageAman > ageSarah); <, >, <=, >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// Challenge

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

/* Strings and Template Literals */

// const firstName = "Aman";
// const job = "Teacher";
// const birthYear = 2000;
// const year = 2037;

// const aman =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(aman);

// const amanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(amanNew);

// console.log("String with \nHello");
// console.log(`String
// with
// Multiple`);

/* Taking Decisions, If/Else Statement */

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   console.log(`Sarah is too young, need to wait ${18 - age} years`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Challenge 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than John's (${BMIMark})!`);
// }

// console.log("Aman Mittal");

/* Type Conversion and Coercion */

// const inputYear = "1999";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(Number("jonas"));
// console.log(typeof NaN);
// console.log(String(23) + "Jonas");

// console.log("I am " + 23 + " Years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(typeof n, n);

/* Truthy and Falsy Values */

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean("Aman"));
// console.log(Boolean({}));
// console.log(Boolean([]));

// const money = 1;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job`);
// }

// let height = "";
// if (height || height === 0) {
//   console.log(`Height is defined`);
// } else {
//   console.log(`Height is not defined`);
// }

/* Equality Operator: == vs === */

// const age = 19;
// if (age === 18) {
//   console.log(`You just became an adult`);
// }

// console.log(18 === 18);
// console.log(18 == "18");
// console.log(18 === "18");

// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log(`Cool 23 is an amazing number`);
// } else if (favourite === 7) {
//   console.log("7 is also an cool number");
// } else {
//   console.log("Number is not 23 \or 7");
// }

// if (favourite !== 23) {
//   console.log("Why not 23");
// }

/* Switch Statement */

// let weekDay = "Wednesday";

// switch (weekDay) {
//   case "Monday":
//     console.log("Today is monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//     break;
//   case "Saturday":
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("Today is Sunday");
//     break;
// }

/* Ternary Operator */

// const age = 13;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("you are not adult");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`You can have ${age >= 18 ? "wine" : "water"}`);

// Challenge

// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }`
// );
