// console.log("Aman");
/* Activating Strict Mode */

"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest){
//     hasDriversLicense = true;
// }

// if(hasDriversLicense){
//     console.log('I can drive');
// }

// const interface = 'Audio';
// const private = 12;

/* Functions */

// function logger(){
//     console.log('My name is Aman');
// }

// calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples,oranges){
// console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');

/* Function Declaration vs Expressions */

// let arr = [4,8,12,20,6];
// let len = arr.length;
// let first = arr[0];
// let last = arr[len-1];
// if(first > last){
//     console.log('First:'+first);
// }
// else if(last > first){
//     console.log('Last:'+last);
// }
// else{
//     console.log('Equal:'+first);
// }

// let arr1 = [1,2,3];
// let arr2 = [10,20,30];
// let sum1 = 0;
// let sum2 = 0;

// for(let i = 0; i < arr1.length;i++){
//     sum1 = sum1 + arr1[0];
// }

// for(let i = 0; i < arr2.length;i++){
//     sum2 = sum2 + arr2[0];
// }

// if(sum1 > sum2){
//     console.log('Big1');
// }
// else if(sum2 > sum1){
//     console.log('Big2');
// }
// else{
//     console.log('Equal');
// }

// let arr = [12,13,12,12,12];
// let allSame = false;
// let x = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         allSame = false;
//         break;
//     }
//     else{
//         allSame = true;
//     }
// }

// if(allSame){
//     console.log('ALLSAME');
// }
// else{
//     console.log('DIFFERENT');
// }

/* Function Declaration */
// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1998));
// const age1 = calcAge1(1999);
// console.log(age1);

// /* Function Expression */
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age1,age2);

/* Arrow Functions */

// const calcAge1 = function (birthYear){
//     return 2037 - birthYear;
// }

/* Arrow Function */
// const calcAge2 = (birthYear) =>{
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037-birthYear;

// const age1 = calcAge1(1999);
// const age2 = calcAge2(2000);
// const age3 = calcAge3(2001)
// console.log(age1,age2,age3);

// const yearsUntilRetirement = (birthYear,firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// const retirementAge = yearsUntilRetirement(1998,'Aman');
// console.log(retirementAge);

/* Functions Calling Other Functions */

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples,oranges){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

/* Reviewing Functions */

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }
//     else{
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1999,'Aman'));
// console.log(yearsUntilRetirement(1970,'Pushpa'));

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (firstScore, secondScore, thirdScore) =>{
//     const averageScore = Math.floor((firstScore+secondScore+thirdScore)/3);
//     return averageScore;
// }

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins > avgKoalas * 2){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if(avgKoalas > avgDolphins * 2){
//         console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else{
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas);

/* Arrays */

// const friends = ['Michael','Steven','Peter'];
// console.log(friends);

// const year = new Array(1991,1984,2008,2020);
// console.log(year);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Aman';
// console.log(friends);

// friends = ['Bob','Alice']; // We cannot do this in array with const variables

// const aman = ['Aman','Mittal', 23,'Engineer', friends];
// console.log(aman)
// console.log(aman[3].length);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990,1967,2002,2010,2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

/* Basic Arrays Operations(Methods) */

// Add Elements

// const friends = ['Aman','Vishes','Vipul'];
// const newLength = friends.push('Devansh');
// console.log(friends);
// console.log(newLength)

// friends.unshift('Nitesh');
// console.log(friends);

// Remove Elements

// friends.pop();
// const removeElement = friends.pop();
// console.log(friends);
// console.log(removeElement);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Vishes'));
// console.log(friends.indexOf('Vipul'));
// console.log(friends.includes('Aman'));
// console.log(friends.includes('Vipul'));

// const calcTip = function(bill){
//     if(bill >= 50 && bill <= 300){
//         return bill*0.15;
//     }
//     else{
//         return bill*0.20;
//     }
// }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,total);

/* Introduction of Objects */

// const aman = {
//     firstName: 'Aman',
//     lastName: 'Mittal',
//     age: 2037-1999,
//     job: 'Engineer',
//     friends: ['Vishesh','Vipul','Devansh']
// };

// console.log(aman['firstName']);

/* DOT vs Bracket Notation */

// console.log(aman.lastName);
// console.log(aman['lastName']);

// const nameKey = 'Name';
// console.log(aman['first'+nameKey]);
// console.log(aman['last'+nameKey]);

// const interestedIn = prompt('What do you want to know about aman choose between firstName, lastNane, age, job, friends');
// console.log(aman[interestedIn]);
// if(aman[interestedIn]){
//     console.log(aman[interestedIn]);
// }
// else{
//     console.log('Wrong Request');
// }

// aman.location = 'Meerut';
// aman['twitter'] = 'aman@mittal';

// console.log(aman);
// console.log(`${aman['firstName']} has ${aman['friends'].length} friends , and his best friend is called ${aman['friends'][0]}`)

/* Object Methods */

const aman = {
  firstName: "Aman",
  lastName: "Mittal",
  birthYear: 1999,
  job: "Engineer",
  friends: ["Vishesh", "Vipul", "Devansh"],
  hasDriverLicense: true,
  // caclAge: function(birthYear){
  //   return 2037 - birthYear;
  // }
  caclAge: function () {
    // console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(aman["caclAge"](aman.birthYear));
console.log(aman["caclAge"]());

// let student1 = {
//   name: "Mark",
//   Maths: 80,
//   English: 75,
//   Science: 63,
// };

// let student2 = {
//   name: "Bob",
//   Maths: 90,
//   English: 81,
//   Science: 88,
// };

// let student3 = {
//   name: "Julia",
//   Maths: 88,
//   English: 87,
//   Science: 89,
// };

// let student4 = {
//   name: "Anthony",
//   Maths: 60,
//   English: 64,
//   Science: 61,
// };

// let studentArry = [student1, student2, student3, student4];
// let subArry = [
//   {
//     name: "Mark",
//     Computers: 90,
//   },
//   {
//     name: "Anthony",
//     Computers: 70,
//   },
//   {
//     name: "Julia",
//     Computers: 88,
//   },
//   {
//     name: "Bob",
//     Computers: 81,
//   },
// ];

// // function addField(studentArry){
// //   for(let i = 0; i < studentArry.length; i++){
// //     studentArry[i]['totalMarks'] = studentArry[i]['Maths'] + studentArry[i]['English'] + studentArry[i]['Science'] + studentArry[i]['Computers'];
// //   }
// // }

// function checkName(student,subArry){
//   for(let i = 0; i < subArry.length; i++){
//     let studentName = student['name'];
//     if(studentName === subArry[i]['name']){
//       student['Computers'] = subArry[i]['Computers'];
//     }
//   }
// }

// checkName(student1,subArry);
// checkName(student2,subArry);
// checkName(student3,subArry);
// checkName(student4,subArry);
// console.log(studentArry);

// function addField(studentArry){
//   for(let i = 0; i < studentArry.length; i++){
//     studentArry[i]['totalMarks'] = studentArry[i]['Maths'] + studentArry[i]['English'] + studentArry[i]['Science'] + studentArry[i]['Computers'];
//   }
// }

// addField(studentArry);
// console.log(studentArry);


// let student1={
// 	name:'Mark',
// 	Maths:80,
// 	English:75,
// 	Science:63,
// }
// let student2={
// 	name:'Bob',
// 	Maths:90,
// 	English:81,
// 	Science:88,
// }
// let student3={
// 	name:'Julia',
// 	Maths:88,
// 	English:87,
// 	Science:89,
// }
// let student4={
// 	name:'Anthony',
// 	Maths:60,
// 	English:64,
// 	Science:61,
// }
// const studentArry=[student1,student2,student3,student4];
// // let comp1={
// // 	name:'Mark',
// // 	computers: 90,
// // }
// // let comp2={
// // 	name:'Anthony',
// // 	computers:70,
// // }
// // let comp3={
// // 	name:'Julia',
// // 	computers:88,
// // }
// // let comp4={
// // 	name:'Bob',
// // 	computers:81,
// // }
// // const compArry=[comp1,comp2,comp3,comp4];
// // function addArry(student,compArry){
// // 	for(let i=0;i<compArry.length;i++){
// // 		let studentName=student['name'];
// // 		if(studentName==compArry[i]['name']){
// // 			student['computers']=compArry[i]['computers'];
// // 		}
// // 	}
// // }
// // addArry(student1,compArry);
// // addArry(student2,compArry);
// // addArry(student3,compArry);
// // addArry(student4,compArry);
// //console.log(studentArry)
// function addFriend(compArry){
// 	for(let i=0;i<compArry.length;i++){
// 		compArry[i]['totalmarks']=compArry[i]['Maths']+compArry[i]['English']+compArry[i]['Science'];
//   }
// }

// addFriend(studentArry);
// console.log(studentArry);


// let marksArray = [];
// function marks(studentArry,marksArray){
//   for(let i = 0; i < studentArry.length; i++){
//     let avgMarks = (studentArry[i]['Maths']+ studentArry[i]['English'] + studentArry[i]['Science'])/3;
//     let maxMarks = 0;
//     if(studentArry[i]['Maths'] > studentArry[i]['Science'] && studentArry[i]['Maths'] > studentArry[i]['English']){
//       maxMarks = studentArry[i]['Maths'];
//     }
//     else if(studentArry[i]['English'] > studentArry[i]['Science'] && studentArry[i]['English'] > studentArry[i]['Maths']){
//       maxMarks = studentArry[i]['English'];
//     }
//     else{
//       maxMarks = studentArry[i]['Science'];
//     }
//     marksArray.push({'name':studentArry[i]['name'],'avgMarks':avgMarks,'maxMarks':maxMarks});
//   }
// }


// marks(studentArry,marksArray);
// console.log(marksArray)

// function deletejson(studentArry,deleteName){
//   let index = 0;
//   for(let i = 0; i < studentArry.length; i++){
//     if(studentArry[i]['name'] === deleteName){
//       index = i;
//     }
//   }
//   studentArry.splice(index,1);
// }

// deletejson(studentArry,'Bob');
// console.log(studentArry)

// let strArr = ['Hello','React','Java','Pyhthon','Hibernate','JavaScript'];
// let ch = 'a';
// let count = 0;
// for(let i = 0; i < strArr.length; i++){
//   if(strArr[i].indexOf(ch) != -1){
//     count = i;
//     break;
//   }
// }
// let langName = strArr.filter(function(str){
//    if(str.indexOf(ch) != -1){
//     return str;
//    }
// })

// console.log(count + ' and ',langName);  

const arry =[
  {name:'Jack',country:'USA',age:35},
  {name:'Amit',country:'India',age:38},
  {name:'Edward',country:'USA',age:41},
  {name:'Vishal',country:'India',age:30},
  {name:'Annie',country:'USA',age:27},
  {name:'Nick',country:'France',age:32},
  {name:'Francis',country:'France',age:44},
  {name:'Sophie',country:'France',age:29},
]

// Task 7.4

const countryName = arry.filter(function(arry){
  return arry['country'] === 'USA' || arry['country'] === 'India'
})
console.log(countryName);

// Task 7.5

const minAge = 30;
const minAgeArry = arry.filter(function(arry){
  return arry['age'] > minAge;
})

let ind = 0;

for(let i = 0; i < arry.length; i++){
  if(arry[i]['age'] > minAge){
    ind = i;
    break;
  }
}
console.log(ind);
console.log(minAgeArry);