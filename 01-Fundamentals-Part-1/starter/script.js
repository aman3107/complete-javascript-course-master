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

const now = 2037;
const ageAman = now - 1999;
const ageSarah = now - 2018;
console.log(ageAman);
console.log(ageSarah);
console.log(ageAman * 2);
console.log(ageAman / 2, 2 ** 3); // 2**3 means 2 to the power 3 = 2 * 2 * 2

const fName = "Aman";
const lName = "Mittal";
console.log(fName + " " + lName);

let x = 10 + 5; // 15
x += 10; // x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageAman > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

n = 28;
if(n % 10 == 0){
    console.log('Multiple of 10');
}
else{
    console.log('Not Multiple of 10');
}
