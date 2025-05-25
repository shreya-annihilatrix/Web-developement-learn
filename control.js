// if(2=="2"){
//     console.log("2 is equal to 2 without type checking");
// };
// if(2==="2"){
//     console.log("2 is equal to 2 with type checking");
// }
// const temp=40
// if(temp>40){
//     console.log("It's a hot day");
// }
// else{
//     console.log("It's not a hot day");
// }
// console.log('Did not enter the if block')
// const level=2
// if(level>=2){
//     const power='jump'
//     console.log(`You can ${power} now`);
// }
// console.log('power :', power); // This will throw an error because 'power' is not defined in this scope
// const val=2
// if(val==2) console.log(true)// multiple statements can be written in one line scope of if by using a comma but is not preffered
//BASIC SYNTAX
// switch (key) {
//     case value:
//        Statements
//         break;
//     case value:
//        statements
//         break;
//     default:
//        break;
// }
// const day = 2;
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }
// IF BREAK IS NOT ADDED THEN IT WILL CONTINUE TO EXECUTE THE NEXT CASES EXCEPT THE DEFAULT CASE
//----------------------------------TRUTHY AND FALSY VALUES--------------------------------
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: everything else (including objects, arrays, non-empty strings, etc.)  
// const email='shristishreya@gmail.com'
// if(email){
//     console.log("Email is present");
// } else{
//     console.log("Email is not present");
// }
// const email='' // empty string is a falsy value
// if(email){
//     console.log("Email is present");
// } else{
//     console.log("Email is not present");
// }
// const email=[] // empty array is a truthy value
// if(email){
//     console.log("Email is present");
// } else{
//     console.log("Email is not present");
// }
// //how to check if an array is empty
// if(email.length === 0){ // can use == as well, but === is preferred for strict equality
//     console.log("Email array is empty");
// }
// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty");
// }
//truthy and falsy values are used in conditions to determine the flow of the program
// falsy values : 0,-0, "", null, undefined, NaN , bigint 0n , false, empty array [], empty object {}
// truthy values : everything else (including objects, arrays, non-empty strings, etc.) 'false', '0', ' ', [], {}, true, 1, -1, 3.14, Infinity, -Infinity, BigInt(0), BigInt(1), new Date(), function() {}, Symbol('symbol'), etc.
// for database  if we get null or undefined value it is problematic
// so we have NULLISH COALESCING OPERATOR (??) to handle such cases
// let val1= 5??10
// console.log(val1); // 5
// val1 = null ?? 10
// console.log(val1); // 10
// val1 = undefined ?? 10
// console.log(val1); // 10
// val1 = 0 ?? 10
// console.log(val1); // 0
// val1=null?? 10??3
// console.log(val1); // 10
// val2=undefined?? null ??3
// console.log(val2); // 3
//--------------------------------------TERNSARY OPERATOR--------------------------------
// condition ? expressionIfTrue : expressionIfFalse
let age=18
age>=18 ? console.log("You can vote") : console.log("You cannot vote");