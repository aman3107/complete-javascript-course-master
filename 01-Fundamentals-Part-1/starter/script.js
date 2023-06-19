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

// let n = 6;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i + ":" + "even");
//   } else {
//     console.log(i + ":" + "odd");
//   }
// }

// n = 10;
// for (let i = 1; i <= 10; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

// n = 5;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log("Square of " + i + " = " + i ** 2 + " : " + "even");
//   }
//   else{
//     console.log("Square of " + i + " = " + i ** 2 + " : " + "odd");
//   }
// }

// n = 88;
// if(n >= 75){
//     console.log('Good');
// }
// else if(n < 75 && n >= 50){
//     console.log('Average');
// }
// else{
//     console.log('Poor')
// }

// let n = 3;
// str = '';
// for(let i = 1; i <= n; i++){
//     if(i % 2 != 0)
//         str = str + 'X';
//     else
//         str = str + 'Y';
//     console.log(str);
// }

// let n = 10;
// let a = 'A';
// let ansStr = '';
// let j = 0;
// for(let i = 0; i < n; i++){
//     if(i % 3 == 0){
//         a = 'A';
//         j = 0;
//     }
//     let code = a.charCodeAt()+j;
//     ansStr = ansStr + String.fromCharCode(code);
//     j++;
// }

// console.log(ansStr);

// let n = 4;
// let char = "P";
// let ansStr = "";
// let j = 0;
// for (let i = 0; i < n; i++) {
//   if (i % 3 == 0) {
//     char = "P";
//     j = 0;
//   }
//   let code = char.charCodeAt() + j;
//   ansStr = ansStr + String.fromCharCode(code) + (i + 1);
//   j++;
// }
// console.log(ansStr);

// let n = 9;
// let ansStr = '';
// for(let i = 1; i <= n; i++){
//     if(i % 2 == 0){
//         ansStr = ansStr + '#';
//     }
//     else{
//         ansStr = ansStr + i;
//     }
// }

// console.log(ansStr);

// let n = 6;
// let ansStr = "";
// for (let i = 1; i <= n; i++) {
//   if (i % 2 != 0) {
//     ansStr = ansStr + "-" + i;
//   } else {
//     ansStr = ansStr + "+" + i;
//   }
// }

// console.log(ansStr);

// let n = 6;
// let ansStr = "";
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 != 0) {
//     ansStr = ansStr + "-" + i;
//     sum = sum - i;
//   } else {
//     ansStr = ansStr + "+" + i;
//     sum = sum + i;
//   }
// }

// console.log(ansStr + "=" + sum);

// let n = 7;
// let ansStr = '';
// for(let i = n; i > 0; i--){
//     if(i % 3 == 0){
//         ansStr = ansStr + 'x';
//     }
//     else{
//         ansStr = ansStr + i;
//     }
// }
// console.log(ansStr);

// let n = 9;
// let divide = '';
// let notDivide = '';
// for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//         divide = divide + i + '#';
//     }
//     else{
//         notDivide = notDivide + i + '#';
//     }
// }

// console.log('Divide: '+divide);
// console.log('Not Divide: '+notDivide);

// let n = 9999;
// let sum = 0;
// for(let i = n; i > 0; i = Math.floor(i / 10)){
//     let rem = i % 10;
//     sum = sum + rem;
// }
// console.log(sum);

// let str = 'az+bz=4';
// let c = str.length;
// str = str.replace('z','x');
// console.log(str);
// console.log(c);

// let str = 'JavaMasters';
// let c = str.length
// let newStr = '';
// for(let i = 0; i < c; i++){
//     if(i % 2 === 0){
//         newStr = newStr + str[i];
//     }
// }

// console.log(newStr);

// let str = 'qw2B**5g';
// let newStr = '';
// let c = str.length;
// for(let i = 0; i < c; i++){
//     let code = str[i].charCodeAt();
//     if(code >= 97 && code <= 122 || code >=65 && code <= 90){
//         newStr = newStr + str[i] + str[i];
//     }
//     else if(code >= 48 && code <= 57){
//         newStr = newStr + str[i] + str[i] + str[i];
//     }
//     else{
//         continue;
//     }
// }
// console.log(newStr);

// let str = '123123';
// let len = str.length;
// console.log(len/2-1)
// let c = str[len/2];
// console.log(c)
// let str1 = str.substring(0,len/2);
// let str2 = str.substring(len/2,len);
// if(str1 === str2){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

// let str = 'ABCDE';
// let len = str.length;

// if(len % 2 === 0){
//     let mid = len/2-1;
//     console.log(str[mid]);
// }

    // let mid = (len-1)/2;
    // console.log(str[mid])

// let str = 'A1B2C3';
// let len = str.length;
// let even = '';
// let odd = '';
// for(let i = 0; i < len; i++){
//     if(i % 2 == 0){
//         even = even + str[i];
//     }
//     else{
//         odd = odd + str[i];
//     }
// }
// console.log("Odd :"+ odd +" Even :" + even)

// let str = 'AAXXXBBYYYCXXDYY';
// let len = str.length;
// let ansStr = '';
// let c = 0;
// while(c < len){
//     if(str[c] == 'X' && str[c+1] == 'X'){
//         c = c + 2;
//         continue;
//     }
//     else if(str[c] == 'Y' && str[c+1] == 'Y'){
//         c = c + 2;
//         continue;
//     }
//     else{
//         ansStr = ansStr + str[c];
//         c++;
//     }
// }

// console.log(ansStr);

// let str1 = 'ABCDABCDABCD';
// let str1 = 'AB ABC ABCD ABCD ABC AB'
// let len1 = str1.length;
// let c1 = 0;
// let count = 0;
// while(c1 < len1){

//     if(str1[c1] =='A' && str1[c1+1] =='B' && str1[c1+2] == 'C' && str1[c1+3] == 'D'){
//         count = count+1;
//         c1 = c1 + 4;
//     }
//     else{
//         c1++;
//     }
// }
// console.log(count);

// let str = '))a+b((';
// let leftBracket = []
// let rightBracket = []
// for(let i = 0; i < str.length; i++){
//     if(str[i] === '('){
//         leftBracket.push('(')
//     }
//     else if(str[i] === ')'){
//         leftBracket.pop();
//     }
//     else{
//         continue;
//     }
// }

// if(leftBracket.length > 0){
//     console.log('false');
// }
// else{
//     console.log('True');
// }

// if(rightBracket === leftBracket){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// function greaterChar(str,char1,char2){
//     let count1 = 0;
//     let count2 = 0;
//     for(let i = 0; i < str.length;i++){
//         if(str[i] === char1){
//             count1++;
//         }
//         else if(str[i] === char2){
//             count2++;
//         }
//     }
//     if(count1 > count2){
//         return 1;
//     }
//     else if(count1 === count2){
//         return 0;
//     }
//     else{
//         return -1;
//     }
// }

// let ans = greaterChar('moozoom','m','o');
// console.log(ans);

/* Switch Statement */

// const day = 'monday';
// const fname = String(prompt("Enter your name"));
// console.log(fname);

// const day = 'thursday';
// const day = String(prompt("Enter day"));

// switch(day){
//     case 'monday':
//         console.log('Plan Course Structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday' :
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record Videos');
//         break;
//     case 'saturday':
//     case 'sunday'  :
//         console.log('Enjoy Weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// function prime(n){
//     if(n == 1)
//         return false;
//     let prime = true;
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             prime = false;
//             return prime;
//         }
//         else{
//             prime = true;
//         }
//     }
//     return prime;
// }

// console.log(prime(5));
// console.log(prime(49));
// console.log(prime(97));

/* Ternary Operator */

// const age = 23;
// age >= 18 ? console.log('Adult'): console.log('Child');

// (`I am ${age >= 18 ? console.log('Adult'): console.log('Child')}`);



// function stringCount(str,char){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             count++;
//         }
//     }
//     return count;
// }
// let str = 'abracadabra';
// let maxchar = 0;

// for(let i = 0; i < str.length; i++){
//     let charCount = stringCount(str,str[i]);
//     if(maxchar < charCount){
//         maxchar = charCount
//     }
//     else{
//         continue;
//     }
// }

// console.log(maxchar);

// let charArr = new Array(26);

// for(let i = 0; i < 26; i++){
//     charArr[i] = 0;
// }

// for(let i = 0; i < str.length; i++){
//     let char = str[i].charCodeAt();
//     let code = char - 97;
//     charArr[code] = charArr[code] + 1;
// }

// let max = Number.MIN_VALUE;

// for(let i = 0; i < 26; i++){
//     if(max < charArr[i]){
//         max = charArr[i];
//     }
// }
// console.log(max);


function sumDigit(n){
    let sum = 0;
    for(let i = n; i > 0; i = Math.floor(i / 10)){
        let rem = i % 10;
        sum = sum + rem;
    }
    return sum;
}
console.log(sumDigit(24681));


function sumDigit(n){
    let sum = 0;
    for(let i = n; i > 0; i = (i / 10)|0){
        let rem = i % 10;
        sum = sum + rem;
    }
    return sum;
}
console.log(sumDigit(24681));