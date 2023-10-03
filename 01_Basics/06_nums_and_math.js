const score = 400;
//console.log(score);
//console.log(score.toString());

const Balance = new Number(100);
// console.log(Balance);
// console.log(typeof score);


//console.log(Balance.toString())

//console.log(Balance.toFixed(2));

const anotherNumber = 123.866;
// console.log(anotherNumber.toPrecision(4));
// console.log(anotherNumber.toPrecision(2));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString("en-pk"));
// console.log(hundreds.toLocaleString("en-in"));

//======================= Maths ===============

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.66666));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,2,9))
// console.log(Math.max(4,3,2,9))

console.log(Math.random())
console.log(Math.random()*10)

//to avoid zero we add 1
console.log(Math.random()*10+1)

const min = 10
const max = 20;
Math.random() *(max - min + 1);
console.log(Math.floor(Math.random() *(max - min + 1)) + min);