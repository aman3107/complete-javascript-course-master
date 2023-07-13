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

