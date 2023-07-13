// Task 23

// let arr = [2];
// let num = 5;
// let index = arr.length;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > num){
//         index = i;
//         break;
//     }
// }

// if(index === arr.length){
//     arr.push(num);
// }
// else{
//     for(let i = arr.length; i > index; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[index] = num;
// }

// console.log(arr);

// Task 24

// // Ist Methos
// let arr1 = [5,18,26,30];
// let arr2 = [40,6];
// // let arr3 = arr1.concat(arr2);

// // 2nd Method
// let arr3 = [];
// for(let i = 0; i < arr1.length; i++){
//     arr3.push(arr1[i]);
// }
// for(let i = 0; i < arr2.length; i++){
//     arr3.push(arr2[i]);
// }
// console.log(arr3);

//Task 25
// let arr1 = [5, 18, 26, 30];
// let arr2 = [101, 102];
// let arr3 = [];
// let len1 = arr1.length;
// let len2 = arr2.length;
// if (len1 > len2) {
//   for (let i = 0; i < len1; i++) {
//     arr3.push(arr1[i]);
//     if (i < len2) {
//       arr3.push(arr2[i]);
//     } else {
//       continue;
//     }
//   }
// } else if (len2 > len1) {
//   for (let i = 0; i < len2; i++) {
//     if (i < len1) {
//       arr3.push(arr1[i]);
//     }
//     else{
//         continue;
//     }
//     arr3.push(arr2[i]);
//   }
// }
// else{
//     for(let i = 0; i < len1; i++){
//         arr3.push(arr1[i]);
//         arr3.push(arr2[i]);
//     }
// }

// console.log(arr3);

// Task 20

// let arr = [20,14,2,7,18];
// let len = arr.length;
// let ans = '';
// for(let i = len-1; i >= 0; i--){
//     ans = ans + arr.shift() + ' '
// }
// console.log('Shift = '+ans)

// // Task 21

// let arr = ['Jack','Bob','Ed','Steve'];
// let fname = 'Jack';
// let index = arr.indexOf(fname);
// for(let i = index; i < arr.length-1; i++){
//     arr[i] = arr[i+1];

// }
// arr.pop();
// console.log(arr);

// Task 22

// let arr = [5, 18, 26, 30, 40, 6];
// let max = 0;
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//     index = i;
//   }
// }

// for (let i = index; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.pop();
// console.log(arr);

// // Task 17

// // let arr = [5,18,26,30,40,6,9];
// let arr = [6];
// let evenArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evenArr.push(arr[i]);
//     }
//     else{
//         continue;
//     }
// }
// console.log(evenArr);

// // Task 18

// let arr = [5,18,26,30,40,6,3];
// // let arr = [6];
// let evenArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evenArr.unshift(arr[i]);
//     }
//     else{
//         continue;
//     }
// }
// console.log(evenArr);

// // Task 19

// let arr = [40,6,9];
// let ansStr = '';
// for(let i = arr.length; i > 0; i--){
//     ansStr = ansStr + arr.pop() + ' ';
// }
// console.log('Pops = '+ansStr);

// // Task 16

// // let str = 'javascript';
// let str = 'abcdef';
// let abFound = false;
// for(let i = 0; i < str.length; i++){
//     if(str[i] === 'a' && str[i+1] === 'b'){
//         abFound = true;
//         break;
//     }
//     else{
//         abFound = false;
//     }
// }

// if(abFound){
//     console.log('AB FOUND');
// }
// else{
//     console.log('AB NOT FOUND');
// }

// // Task 15

// // let arr = [2,3,4,5,6,7];
// // let arr = [4,9,16,25,49];
// let arr = [7]
// let even = false;
// let odd = false;
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 0){
//         if(arr[i] % 2 == 0){
//             even = true;
//         }
//         else{
//             even = false;
//         }
//     }
//     else{
//         if(arr[i] % 2 != 0){
//             odd = true;
//         }
//         else{
//             odd = false;
//         }
//     }
// }

// if(even && odd || arr.length === 1 && even){
//     console.log('ALTERNATING');
// }
// else {
//     console.log('NOT');
// }

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

const arry = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Nick", country: "France", age: 32 },
  { name: "Francis", country: "France", age: 44 },
  { name: "Sophie", country: "France", age: 29 },
];

// Task 7.4

const countryName = arry.filter(function (arry) {
  return arry["country"] === "USA" || arry["country"] === "India";
});
console.log(countryName);

// Task 7.5

const minAge = 30;
const minAgeArry = arry.filter(function (arry) {
  return arry["age"] > minAge;
});

let ind = 0;

for (let i = 0; i < arry.length; i++) {
  if (arry[i]["age"] > minAge) {
    ind = i;
    break;
  }
}
console.log(ind);
console.log(minAgeArry);
