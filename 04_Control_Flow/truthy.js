const userEmail = "a@gmail.com"
// if(userEmail)
// {
//     console.log("got user email");
// }
// else{
//     console.log("donot have email");
// }


//falsy values are below
//false, 0, -0, bigint 0n, null, undefined , NaN


//truthy values
//true, "0", "false", " ",[],{}, function (){}


// const userEmail1 = []
// if(userEmail1.length === 0)
// {
// console.log("this Array is empty");    
// }


// const emptyObj = {name:"Imran"}
// if(Object.keys(emptyObj).length === 0)
// {
// console.log("This object is empty");
// }


// Nullish Coalescing Operator (??) 
// especially designed for null and undefined
// just check value is null or undefined then assign values after ?? operator
let val1;
// val1=5 ?? 10;
// val1 = null ?? 10;
//val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20


//console.log(val1);


//Terniary Perator 
//condition ?true:false;

const iceTeaPrice = 60
iceTeaPrice > 80?console.log("greater than 80"):console.log("less than 80");;