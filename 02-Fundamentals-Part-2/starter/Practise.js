"use strict";

// console.log("Hello World");
// let driversLicense = false;
// let passTest = true;

// if (passTest) driversLicense = true;
// if (driversLicense) console.log("Go");

// const private = 534;

/* Functions */

// function logger() {
//   console.log("My name is aman");
// }

// // calling / running / invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/* Function Declaration vs Expression */

// Declaration

// console.log(calcAge1(990));
// console.log(calcAge2(990));
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const myAge = calcAge1(2000);
// console.log(myAge);

// // Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const myAge1 = calcAge2(1999);
// console.log(myAge1);

/* Arrow Function */

// const calcAge = (birthYear) => 2037 - birthYear;
// const myAge = calcAge(1999);
// console.log(myAge);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1999, "Aman"));

/* Functions calling other Functions */

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} applePieces and ${orangePieces} orangePieces`;
//   return juice;
// }

// console.log(fruitProcessor(2, 4));

/* Reviewing Functions */

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const retirement = 65 - calcAge(birthYear);
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1973, "Aman"));

/* Challenge */

// const calcAverage = (firstScore, secondScore, thirdScore) => {
//   return (firstScore + secondScore + thirdScore) / 3;
// };

// const checkWinner = (avgDolphins, avgkoalas) => {
//   let winner;
//   if (avgDolphins > avgkoalas * 2) {
//     winner = `Dolphins win (${avgDolphins} vs. ${avgkoalas})`;
//   } else if (avgkoalas > avgDolphins * 2) {
//     winner = `Koalas win (${avgkoalas} vs. ${avgDolphins})`;
//   } else {
//     winner = "No team wins...";
//   }
//   return winner;
// };

// let scoreDolphins = calcAverage(44, 23, 71);
// let scorekoalas = calcAverage(65, 54, 49);

// console.log(checkWinner(scoreDolphins, scorekoalas));
// console.log(checkWinner(222, 110));

/* Arrays */

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1994, 2000);
// console.log(years[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Aman";
// console.log(friends);
// friends[3] = "Payal";
// console.log(friends);

// const aman = ["Aman", "Mittal", 2037 - 1999, friends];
// console.log(aman);

/* Basic Array Operation(Methods) */

// const friends = ["Michael", "Steve", "Peter"];
// const newLength = friends.push("Aman");
// console.log(newLength);
// console.log(friends);

// const p = friends.unshift("John");
// console.log(p);
// console.log(friends);

// const popped = friends.pop();
// console.log(popped, friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steve", 1));
// console.log(friends.indexOf("Stev"));
// console.log(friends.includes("Steve"));
// console.log(friends.includes("Stee"));

// if (friends.includes("Steve")) {
//   console.log("You have a friend called Steve");
// }

/* Challenge */

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// console.log(calcTip(100));

/* Introduction to Objects */

// const aman = {
//   firstName: "Aman",
//   lastName: "Mittal",
//   age: 2037 - 1999,
//   job: "Software Enginner",
//   friends: ["Michael", "Steven", "Peter"],
// };
// console.log(aman["firstName"]);
// console.log(aman);
// console.log(aman.lastName);
// const namekey = "Name";
// console.log(aman["first" + namekey]);
// console.log(aman."first" + namekey);
// const interestedIn = prompt("What do you want to know about aman");
// console.log(aman[interestedIn]);

// if (aman[interestedIn]) {
//   console.log(aman[interestedIn]);
// } else {
//   console.log("Wrong Request");
// }

// aman.location = "India";
// aman["twitter"] = "aman@twitter.com";

// console.log(
//   `${aman.firstName} has ${aman["friends"].length} friends, and his best friend is called ${aman["friends"][0]}`
// );

/* Objects Methods */

// const aman = {
//   firstName: "Aman",
//   lastName: "Mittal",
//   birthYear: 1999,
//   job: "SoftWare Engineer",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     // console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       aman.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(aman["calcAge"]());
// console.log(aman.age);
// console.log(aman.age);
// console.log(aman.getSummary());

/* Challenge */

// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (john.BMI > mark.BMI) {
//   console.log(
//     `John Smith's BMI ${john.BMI} is higher than Mark Miller's ${mark.BMI}`
//   );
// } else {
//   console.log(
//     `Mark Millers's BMI ${mark.BMI} is higher than John Smith's ${john.BMI}`
//   );
// }

/* For Loop */

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(rep);
// }

// const aman = [
//   "Aman",
//   "Mittal",
//   2037 - 1999,
//   "teacher",
//   ["Michael", "Steven", "Peter"],
//   true,
// ];

// let typesArray = new Array();
// for (let i = 0; i < aman.length; i++) {
//   if (aman[i].length > 1 && typeof aman[i] === "object") {
//     for (let j = 0; j < aman[i].length; j++) {
//       console.log(aman[i][j]);
//     }
//   } else {
//     console.log(aman[i]);
//   }
//   typesArray.push(typeof aman[i]);
// }

// console.log(typesArray);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue and break

// for (let i = 0; i < aman.length; i++) {
//   if (typeof aman[i] !== "string") {
//     continue;
//   }
//   console.log(typeof aman[i], aman[i]);
// }

// const aman = [
//   "Aman",
//   "Mittal",
//   2037 - 1999,
//   "Software Engineer",
//   ["Michael", "Steven", "Peter"],
//   true,
// ];

// for (let i = aman.length - 1; i >= 0; i--) {
//   console.log(aman[i]);
// }

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, j);
  }
}
