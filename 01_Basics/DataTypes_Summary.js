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
console.log(heros);
console.log(typeof myObj);