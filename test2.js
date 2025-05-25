// const user = {
//     username: "hitesh",
//     price: 999,
//     welcomemsg: function () {
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this)
//     }
// };

// // const { use } = require("react");// NOT REQUIRED

// // user.welcomemsg();
// // user.username = "shreya";
// // user.welcomemsg();
// console.log(this)// when this is executed in the global scope, it refers to the global object (window in browsers, global in Node.js) hence {} in node environment and window on chrome
// function test(){
//     console.log(this);
// }
// test(); // In a function, 'this' refers to the global object in non-strict mode, or undefined in strict mode.
// // In strict mode, 'this' inside a function is undefined
// function test2() {
//     let name = "shreya";
//     console.log(this.name); // objects can only access using this keyword
// }
// test2(); // In a function, 'this' refers to the global object in non-strict mode, or undefined in strict mode. 
// const user2= function(){
//     let name = "shreya";
//     console.log(this); 
//     //console.log(this.name); // In a function, 'this' refers to the global object in non-strict mode, or undefined in strict mode.
// }
// user2(); 
//------------------------------------ARROW FUNCTIONS--------------------------------
// const addtwo =(a,b) => {
//     return a+b;
// }
// console.log(addtwo(67,89)); 
//const addimplicit = (num1,num2) => num1+num2 // if wrapped in curly braces, we need to use return statement , if we use parenthese we do not need return in that case as well
// const addimplicit = (num1,num2) => (num1+num2) 
// console.log(addimplicit(67,89)); // Implicit return, no need for curly braces or return statement
// for returning an object, we need to wrap it in parentheses
//  const returnobject = (name,age) => ({name:"shreya",age:20}) // if we use curly braces, it will be considered as a block of code and not an object
//     console.log(returnobject());
//---------------------------------------IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)--------------------------------
//  (function hi(){
//         console.log("Hello, I am an IIFE");
//  })();
// IIFE is a function that runs as soon as it is defined, it is used to avoid polluting the global scope
// It is a common pattern in JavaScript to create a new scope and avoid variable conflicts
// (()=>{
//     console.log("Hello, I am an IIFE using arrow function");
// })()
// ((name)=>{
//     console.log(`Hello, I am ${name}`);
// })('shreya'); // analogous to ()=>() eg .. user2()
//------------------------JAAVSCRIPT EXECUTION CONTEXT--------------------------------------------------------------------------
// Execution context is the environment in which the JavaScript code is executed, it consists of the global execution context and the function execution context // we can also have one more execution context 'eval execution contetx'
// Global execution context is created when the JavaScript code is executed, it is the default context in which the code runs
// Function execution context is created when a function is called, it contains the function's arguments, variables, and the value of 'this'
// Eval execution context is created when the eval() function is called, it is used to execute a string of JavaScript code  
// Execution context is created in a stack, the global execution context is at the bottom of the stack and the function execution context is at the top of the 
//the execution of global EC occurs in two phse , first is creation phase and second is execution phase
let val1=10
let val2=8
function add(x,y){
    let total=val1+val2
    return total
}
let ans=add(val1,val2)
let ans2=add(5,6)
//stepwise execution of the code
// 1. Global execution context is created.(global exceution or global environment is located under this)
// 2. Global variables and functions are hoisted. Memory creation phase is done, where variables are created and assigned undefined, and functions are created and assigned the function definition. val1- undefined, val2-undefined, add- function definition ans and asn2 are also created and assigned undefined.
//  The code is executed line by line. 
// 3. EXECUTION PHASE:
//    - val1 is assigned 10
//    - val2 is assigned 8  
//    - add function is defined now for add a new executional contetx is created having the new variable and execution thread. now thi new EC will undergo memory phase n execution phase
//    - in the new ec , the memory phase would again assign var1,var2,total as undefined and in execution phase the value are num1-10, num2-8 and total as 18. this total gets returned to the global execution context. after this the new Ec gets deleted
// Call stack is a data structure that keeps track of the execution context, it is a stack data structure where the last execution context added is the first one to be removed (LIFO - Last In First Out)
// 
 