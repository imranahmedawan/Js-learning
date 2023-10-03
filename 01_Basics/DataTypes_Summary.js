//there are two types of datatypes

//============== 01 primitive 
// total types 07: String, Number, Boolean, null, undefined, Symbol, BigInt


const score =100
const scoreValue = 100.3

const isLoggedIn = false;
const OutSideTemp = null;
let userEmail;
//console.log(userEmail);

const id=Symbol('123');
const anotherID = Symbol('123');
//console.log(id == anotherID);

const bigNumber = 23432432432432432432n;


//============== 02 Non- primitive meaning Reference Type 
// Arrays, Objects, FUnctions
const heros = ["Imran Khan", "Nawazsharif","Zardari"]

let myObj = {
    name:"Imran Ahmed",
    age: 41
}
// console.log(heros);
// console.log(myObj);
// console.log(typeof myObj);

// two types of Memory used in javascript
// stack (primitive), 2- Heap memory (Non_primitive)
//Stack momery used we get copy and when heap memory used we get reference 

let myYoutubeChannel ="myYoutubeChanneelName";

let anotherName = myYoutubeChannel;
anotherName="anotherNameString";
console.log(myYoutubeChannel);
console.log(anotherName);

let user ={
name:"Imran Ahmed Awan",
email:"imranmcs@gmail.com",
PhoneNo:"03217348557"
}
let user2 = user;
user2.email = "eocp1122@gmail.com";
console.log(user);
console.log(user2);