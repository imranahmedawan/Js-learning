const user={
    username:"imran",
    price:199,
    welcomeMessage: function (){
        console.log(`${user.username} welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// function chai()
// {
//     let username = "Imran";
//     console.log(this.username); // return undefined because this.username only used in objects not in functions
// }
// chai();


// const chai = function (){
//     let username = "Imran";
//     console.log(this.username);
// }
const chai = () =>{
    let username = "Imran";
    console.log(this);
}
//chai();


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => num1+num2;
// console.log(addTwo(3,4));


// const addTwo = (num1,num2) => (num1+num2);
// console.log(addTwo(3,4));

//const addTwo = (num1,num2) => {username:"Imran"}; // this line generates arror because we want to return an object but actually it is sentax of function so thats why retuen undefined 
const addTwo = (num1,num2) => ({username:"Imran"});
console.log(addTwo(3,4));



const myArray = [2,5,3,4,7];
