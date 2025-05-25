//for statement
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element === 7) {
//         console.log("THALA"); // skips the rest of the loop when element is 5
//     }
//     console.log(element);
    
// }
//NESTED FOR LOOP
// for(let index=2;index<=4;index++){
//     console.log(`Table of ${index}`);
//     for(let j=1;j<=10;j++){
//         console.log(`${index} * ${j} = ${index*j}`);
//     }
//     console.log('-------------------');
// }
// let names=['shreya','yuvraj','ashutosh','krishn','shristi'];
// for(let index=0;index<names.length;index++){
//     if(names[index] === 'shristi') {
//         console.log("Found Shristi at index:", index);
//         break; // exits the loop when 'ashutosh' is found
//     }
// }
// BREAK AND CONTINUE
// for(let index=0;index<names.length;index++){
//     if(names[index] === 'ashutosh') {
//        // console.log("Found Ashutosh at index:", index);
//        continue; // skips the rest of the loop when 'ashutosh' is found  
//     }
//     console.log(names[index]);
// }

// for(let index=0;index<names.length;index++){
//     if(names[index] === 'ashutosh') {
//        // console.log("Found Ashutosh at index:", index);
//        break; // gets out of the loop when 'ashutosh' is found  
//     }
//     console.log(names[index]);
// }

// while loop
// let index=0
// while (index<10) {
//     console.log(index);
//     index=index+2
// }
//do while
// let score=1;
// do {
//     console.log(`SCORE ${score}`);  
//     score++
// }while(score<7)
// ------------------------------------------------HIGH ORDER ARRAY LOOPS-----------------------------------------------------------------
// let names=['shreya','yuvraj','ashutosh','krishn','shristi'];
// for (const val of names) {
//     console.log(val); // logs each value in the object
// }
// let user="shreya"
// for(const char of user) {
//     console.log(char); // logs each character in the string
// }
//===================================================MAPS======================================================================================
// map is a collection of key-value pairs where keys can be of any type and values can be of any type.object types
// only allow string or symbol as keys. only unique values
// const map=new Map()
// map.set('user1','shreya')
// map.set('age1',19)   
// map.set('user2','krishn')
// map.set('age2',29) 
// // console.log(map);
// for(const key of map){
//     console.log(key); // logs each key in the map
// }
// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`); // logs each key-value pair in the map
// }
// const myobj={
//     user1:'shreya',
//     user2:'krishn',
//     user3:'shiwangini'
// }
// for(const key of myobj) {
//     console.log(key); //objects cannot be iterated like this, it will give an error
// }
// for(const [key,value] of myobj) {
//     console.log(key, ':' , value); // cannot be accessed in this way
// }
// we will use for in loop to iterate over objects
// for(const key in myobj) {
//     console.log(key, ':' , myobj[key]); // logs each key-value pair in the object
// }
// const langs=['java','cpp','python']
// for (const key in langs) {
//    console.log(key,':',langs[key])
// }
// const map=new Map([
//     ['user1','shreya'],
//     ['age1',19],
//     ['user2','krishn'],
//     ['age2',29]
// ]);
// for (const key in map) {
//     console.log(key, ':', map[key]); // will not give any output as map is not iterable with for in loop
// }
//============================================================================ FOR EACH LOOP ========================================================================
// forEach is a method that executes a provided function once for each array element
// const names = ['shreya', 'yuvraj', 'ashutosh', 'krishn', 'shristi'];
// names.forEach (function(user){
//     console.log(`HELLO ${user}`); // logs each value in the array
// } )
// const names = ['shreya', 'yuvraj', 'ashutosh', 'krishn', 'shristi'];
// names.forEach ((user)=>{ // using arrow function
//     console.log(`HELLO ${user}`); // logs each value in the array
// } )
// function greet(user) {
//     console.log(`HELLO ${user}`); // logs each value in the array
// }
// names.forEach(greet); // passing the function as a callback
// arrow function comes with more paramters like index and array itself
// names.forEach((user, index, array) => {
    // console.log(user, index, array); // logs each value in the array with index and array
   // console.log(`HELLO ${user} at index ${index} in array ${array}`); // logs each value in the array with index and array
// } );
//====================================================ITERATION OF OBJECT IN ARRAY========================================================
// const mycoding = [
//     { name: 'shreya', age: 19, language: 'JavaScript' },
//     { name: 'yuvraj', age: 20, language: 'Python' },
//     { name: 'ashutosh', age: 21, language: 'Java' },
//     { name: 'krishn', age: 22, language: 'C++' },
//     { name: 'shristi', age: 23, language: 'Ruby' }
// ];
// mycoding.forEach((user, index, array) => {
//     console.log(`User ${index + 1}: ${user.name}, Age: ${user.age}, Language: ${user.language}`);
   
// });
//====================================================================================================================================================
// const names = ['shreya', 'yuvraj', 'ashutosh', 'krishn', 'shristi'];
// const values=names.forEach((user, index, array) => {
//     console.log(user)
//     return user;
// })
// console.log(values); // forEach does not return anything, it returns undefined
// const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
// console.log(numbers.filter((num)=>num%2==0)) // () returns values in arrow function
// const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
// // console.log(numbers.filter((num)=>  {num%2==0})) //will return [] , we need tp write the return statement
// console.log(numbers.filter((num)=>  {
//     return num%2==0; // will return even numbers
// }))
// const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
// const newnums=[]
// numbers.forEach((num)=>{
//     if(num%2==0){
//         newnums.push(num)
//     }
// })
// console.log(newnums); // will return even numbers
// //======================================================= MAP FUNSTION FOR OPERATION=====================================================================
// const mynums= [1, 2, 3, 4, 5,6,7,8,9,10];
// const num2= mynums.map((num)=> num+10)
// console.log(num2); // will return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const num3=mynums.filter((num)=> num+3)
// console.log(num3); // will not return anything as it is not a boolean condition
//===============================================CHAINING==================================================================
// const num4=mynums.filter((num)=> num%2==0).map((num)=> num+10)
// console.log(num4); // will return [12, 14, 16, 18, 20] as it filters even numbers and then adds 10 to each
// console.log(mynums.map((num)=> num*3).map((num1)=>num1+5));
// console.log(mynums.map((num)=> num*3).map((num1)=>num1+5).filter((num2)=>num2>20)); // will return [26, 29, 32, 35, 38, 41, 44, 47, 50] as it filters numbers greater than 20 after multiplying by 3 and adding 5
//===========================================================REDUCE FUNCTION==================================================================
const array1=[1,2,3,4]
const mytotal=array1.reduce( function(accu, num){
    return accu+num
},3)
console.log(mytotal); // will return 10 as it adds all the numbers in the array
// const myarr=[200,600,78,99,500]
// const intialsum=0
// const finalsum=myarr.reduce((accumulator,num)=>acuumulator+num,intialsum)
// console.log(finalsum); // will return 1477 as it adds all the numbers in the array
// for objects, we write myarr.reduce((acc,item)=> acc+item.value,0)