//console.log(Date);

let myDate = new Date();

//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-01");
//let myCreatedDate = new Date("2023-01-02");
//let myCreatedDate = new Date("01-01-2023");
let myCreatedDate = new Date("02-01-2023");
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{weekday:"long"})
