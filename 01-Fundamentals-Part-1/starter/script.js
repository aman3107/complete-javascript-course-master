// let js = 'amazing';
// if(js === 'amazing'){
//     alert('Javascript is fun');
// }

// console.log(40+8+9-10);

/* Values and Variables */

// console.log('Aman');
// console.log(23);

// let firstName = 'Aman';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let Person = 'Aman'; // Not writing variables with the Uppercase
let peron = "Aman Mittal";
// let PI = 3.145;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// console.log(myFirstJob,myCurrentJob);

// var n = 3;
// var str = '';
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){

//         str = str + 'A' + j;
//     }
//     console.log(str);
//     str = '';
// }

// n = 10;
// let ans = 1;
// for(let i = 1; i <= n; i++){
//     console.log(ans);
//     ans = ans + (2*(i+1)-1);
// }

// n = 4;
// for(let i = 1; i <= 4; i++){
//     let a = i;
//     let b = i+1;
//     let c = a+b
//     console.log(a+'+'+b+'='+c);
// }
// str = '';
// for(let i = 1; i <= n; i++){
//     str = str + 'XY';
//     let a = i + (i-1);
//     str = str + a + (a+1);
// }
// console.log(str);

// str = '';
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         str = str + 'M';
//     }
//     str = str + '+';
// }
// console.log(str);

// n = 3;
// let a = 1;
// for(let i = 1; i <= n; i++){
//     console.log(a);
//     a = a + 3;
// }

/* Data Types */

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof(true));
// console.log(typeof(javascriptIsFun));
// console.log(typeof(23));

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 991;
// console.log(typeof year);

// console.log(typeof null);

/* Let, Const and Var */

// let age = 31;
// age = 31;

// const birthYear = 1999;
// birthYear = 1990;

// const job;

// var job = 'Programmer';
// job = 'teacher';

// lastName = 'Mittal';

/* Basic Operators */

// const now = 2037;
// const ageAman = now - 1999;
// const ageSarah = now - 2018;
// console.log(ageAman);
// console.log(ageSarah);
// console.log(ageAman * 2);
// console.log(ageAman / 2, 2 ** 3); // 2**3 means 2 to the power 3 = 2 * 2 * 2

// const fName = "Aman";
// const lName = "Mittal";
// console.log(fName + " " + lName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// console.log(ageAman > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

/* Operator Precedene */

// console.log(25-10-5);
// let x, y;
// x = y = 25-10-5;
// console.log(x,y)
// const now = 2037;
// const ageAman = now - 1999;
// const ageSarah = now - 2019;
// const avgAge = (ageAman + ageSarah) / 2;
// console.log(avgAge);

/* Strings and Template Literals */

// const firstName = 'Aman';
// const job = 'Enginner';
// const birthYear = 1999;
// const year = 2023;

// const aman = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;

// console.log(aman);

// const amanNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}`;
// console.log(amanNew);

// console.log(`Just a regular string ...`);
// console.log(`String with
// Multiple
// Lines`)

/* IF / ELSE Statements */

// const age = 15;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }

// const birthYear = 2021;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// }
// else{
//     century = 21;
// }

// console.log(century);

/* Type Conversion and Coercion */

// type conversion

// const inputYear = '1999';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Aman'));
// console.log(typeof NaN);

// console.log(String(23) + 20);

// type Coercion

// console.log('I am ' + 23 + ' years old')
// console.log('23' - 10 - 3);
// console.log('23' * 2);
// let n = 1 + '1'; // '11'
// n = n - 1; // 11 - 1 = 10
// console.log(n);

/* Truthy and Falsy Values */

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Aman'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let money = 0;

// if(money){
//     console.log("Don't spend it all");
// }
// else{
//     console.log("You should get a job");
// }

// let height;
// if(height){
//     console.log("YaY! Height is defined");
// }
// else{
//     console.log("Height is undefined");
// }

/* Equality Operators : == vs === */

// const age = '18'; 

// if(age == 18){
//     console.log('You just became an adult (loose)');
// }

// if(age === 18){
//     console.log('You just became an adult (strict)');
// }
// console.log(18 == '18');
// console.log(18 === '18');

// const favoriteNumber = Number(prompt("What's your favorite number"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if(favoriteNumber == 23){
//     console.log('Cool 23 is an amazing number (loose)');
// }

// if(favoriteNumber === 23){
//     console.log('Cool 23 is an amazing number (strict)');
// }
// else if(favoriteNumber === 7){
//     console.log('7 is also a cool number');
// }
// else{
//     console.log('Number is not 23 or 7');   
// }

/* Logical Operators */

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense)

// const shoulDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive');
// }
// else{
//     console.log('Someone should have drive');
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive');
// }
// else{
//     console.log('Someone should have drive');
// }


