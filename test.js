// console.log("HELLO WORLD")
// "use Strict";//treat all js code as newer version
// //alert(2+2) will give error as we are using node js not browser
// console.log(typeof null);// undefined type is undefined and null is an object
// let value="33"
// let changevalue = Number(value);
// console.log(typeof changevalue);
// // let value="33abc" this would also result the data type as number but when we try to access the value it shows up as NaN
// // let changevalue = Number(value);
// // console.log(typeof changevalue);
// //DATA TYPE SYMBOL the values are unique even if they are same 
// const id = Symbol("123");
// const newid= Symbol("123")
// console.log(id==newid)
//ARRAY
// const actors=["salman","shahid"]
// let myobj={
//     name:"shristi",
//     age:19,
// }
// console.log(myobj)
// const myfunction=function(){
//     console.log('hi shristi')
// }
// const username= String('SHRISTI')
// console.log(username[1])
// console.log(username.__proto__)
// console.log(username.toLowerCase)
// console.log(username.charAt(2))
// console.log(username.indexOf('T'))
// const username="shristi-shreya-choudhary"
// // const url="https://shristi shreya.com/shristi"
// // console.log(url.replace(' ','-'))
// // console.log(url.includes('Shreya'))
// console.log(username.split('-'))
// console.log(`Hello I am ${username}`);
//-------------------------------------------------------
//NUMBER AND MATHS
// const num=400
// console.log(num)
// const num2=new Number(900)
// console.log(num2)
// console.log(num2.toFixed(3))
// console.log(num2.toString().length)
// const num=1123.45
// console.log(num.toPrecision(4))
// console.log(num.toPrecision(3))
// const num=5000000
// console.log(typeof(num.toLocaleString()))
//                 IMP
// const min=1
// const max=6
// console.log(Math.floor(Math.random()*(max-min+1))+min)
// //-------------------------------DATES-----------------------------
// let d= new Date()
 // console.log(d)
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toISOString())
// console.log(d.toJSON())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleString())
// let mydate=new Date(2025,11,23,22,50)
// console.log(mydate.toLocaleString())
// let mytime=Date.now()
// console.log(mytime)
// console.log(mydate.getTime())
// console.log(mydate.getDate())
// d.toLocaleString('default',{
//     weekday:"long"
// })
//----------------ARRAY---------------------------------
//DECLARATION
// const arr1=[1,2,3,4,5]
// const arr2=["shreya","shristi","krishn","shiwangini"]
// const arr3= new Array(2,3,4,5,6)
//ARRAY METHODS
// arr1.push(8)
// console.log(arr1)
// console.log(arr1.pop())//removes the last element which has been popped
// console.log(arr1)
// arr1.unshift(9)//add element to the beginning
// arr1.shift()
// console.log(arr1.includes(5))//boolean return
// console.log(arr1.indexOf(8))
// const newarr=arr1.join()
// console.log(newarr)
// console.log(arr1)
// console.log(typeof(newarr))
// console.log('A ',arr1)
// const myn1=arr1.slice(0,4)
// console.log(myn1)
// console.log('B ',arr1)
// const myn2=arr1.splice(0,4)
// console.log(myn2)
// console.log('C ',arr1)
//------------------------ARRAY2----------------------------------------
// const num1=[1,2,3,4,5,6]
// const num2=[9,7,8,6]
//num1.push(num2)
//console.log(num1)
// const newlst= num1.concat(num2)
// console.log(newlst)
// const newarr=[...num1,...num2]
// console.log(newarr)
// const arr3=[1,2,,3,4,[5,6,7,[9,0]],[8,9],10,23,45,[90,78,45]]
// const arr4= arr3.flat(2)
// const arr4=arr3.flat(Infinity)
// console.log(arr4)
// console.log(Array.isArray("SHRISTI"))
// console.log(Array.from("SHRISTI"))
// console.log(Array.from({name: "shreya"}))//results into [] becuase it does not known where to make array from key or value
// const a=10
// const b=23
// let name='shreya'
// console.log(Array.of(a,b,name))
//--------------------------OBJECT----------------------------------------
// const mysym=Symbol('key1')
// const newuser={
//     fname :'Shristi',
//     lname:'Shreya',
//     age:19,
//     sex: 'F',
//     "address":"Ranchi",
//     ['mysym']:'key1'
// }
// console.log(newuser.fname)
// console.log(newuser['lname'])//use quotes or else error
// console.log(newuser['address'])//for address we cannot use '.' to acces it 
// console.log(newuser['mysym'])// either use quotes at both means console and object or else dont
// newuser.address="JAMSHEDPUR"
// console.log(newuser["address"])
// Object.freeze(newuser)// function cannot be added if freeze is used
// newuser.address="Ranchi"
// console.log(newuser["address"])
//  newuser.greeting=function(){
//     console.log("Hello New user");
//  }
// newuser.greeting2=function(){
//     console.log(`GOOD AFTERNOON ${this.fname} ${this.lname}`)
// }
// // console.log(newuser.greeting)//this funstion is not executed we have just got a reference
// // console.log(newuser.greeting()) 
// console.log(newuser.greeting2())
//---------------------------------------OBJECT2-------------------------------------------------------
// const newuser1 = new Object()
// const newuser1={}
// newuser1.name='Shreya'
// newuser1.id='123A'
// newuser1.islogin=true;
// console.log(newuser1)
// const newuser2={
//     userid:'2023UGEE026',
//     // fullname:{
//         user1:{
//             fname:'SHRISTI',
//             lname:'SHREYA'
//         }
//     // }
// }
// console.log(newuser2.fullname?.user1)//? is used to check if fullname exists or not
// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
//const obj3={obj1,obj2}
// console.log({obj1,obj2})
// const obj3=Object.assign(obj1,obj2)
// // console.log(obj3)
// console.log({...obj1,...obj2})
// const newuser1 = new Object()
// newuser1.name='Shreya'
// newuser1.id='123A'
// newuser1.islogin=true;
// // console.log(Object.values(newuser1))
// // console.log(Object.keys(newuser1))
// // console.log(Object.entries(newuser1))
// console.log(newuser1.hasOwnProperty('fname'))
// const course = {
//     code:'EE123',
//     name:'ANALOG N DIGITAL ELECTRONICS',
//     course_instructor:'AMIT TRIVEDI',
//     lectures:30

const { use } = require("react")

// }
// const{course_instructor:prof}=course
// console.log(prof)

//-------------------------FUNCIONS--------------------------------
// function add(num1,num2){ //parameters
//     console.log(num1+num2)
// }
// // add(2,3)//arguments
// const ans=add(3,4)
// console.log(`Result: ${ans}`)//would be undefined as the funstion is not returning any value but only printing it
// function sub(a,b){
//     let ans=a-b
//     return ans
// }
// // let ans=sub(9,6)
// ans=sub()//results into NaN , In case of a string we get undefined 
// console.log(`Result : ${ans}`)
// function logincred(user2){ // or we can set a default value like user2="shreya"..if value is passed then it would be overwritten
//     if(user2===undefined){ //if(user2)
//         console.log("ENTER A USERNAME")
//         return
//     }
//     return `HI ${user2}`
// }
// console.log(logincred())
// console.log(logincred("SHREYA"))
//REST OPERATOR
// function calculatecartprice(...num1){
//     return num1
// }
// console.log(calculatecartprice(1200,3400,4500,5600))
// function calculatecartprice(val1,val2, ...num1){
//     return num1
// }
// console.log(calculatecartprice(1200,3400,4500,5600))
// const user={
//     username : "SHREYA",
//     balance : 20000
// }
// function handleobj(anyobj){
//     console.log(`Username is ${anyobj.username} and balance is ${anyobj.balance}`)
// }
// handleobj(user)
// handleobj({
//     username:"shreya",
//     balance:20000
// })
// function printarray(arr2){
//     return arr2[5]
// }
// const arr1=[2,9,8,7,3]
// console.log(printarray(arr1))

//---------------------------------------------SCOPE-----------------------------------------------------
// var c=200
// if(true){
//     let a=20
//     b=30
//     var c=90
// }
// // console.log(a) // local scope only within if 
// console.log(b) // both b and c are printed (taking default type)
// console.log(c) 
//local and global scope
// let a=200
// if(true){
//     let a=20
//     console.log(a)
    
// }
// console.log(a)
// NESTED SCOPE
// function one(){
//     const name="shreya"
//     function two(){
//         const value=200
//         console.log(name)
//     }
//     // console.log(value)
//     // two()
   
// }
// one()
//---------------------------------------ARROW AND THIS--------------------------------
// const user = {
//     username: "hitesh",
//     price: 999,
//     welcomemsg: function () {
//         console.log(`${this.username}, welcome to the website`);
//     }
// };

// user.welcomemsg();
// user.username = "shreya";
// user.welcomemsg();
