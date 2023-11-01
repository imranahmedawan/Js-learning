// const promiseOne = new Promise(function(resolve, reject)
// {
//     // Do an async task
//     // DB Calls, Cryptography, network calls
//     setTimeout(function() {
//         console.log("Async task is complete");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function (resolve, reject){
//     setTimeout(function() {
//        console.log("async Task 2"); 
//        resolve();
//     }, 1000);
// }).then(function(){
//     console.log("async2 resolved");
// })


// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(function(){
// resolve({username:"Chai", Email:"chai@example.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
// console.log(user.username);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error)
//         {
//             resolve({username:"Imran", Password:"123"})
//         } else
//         {
//             reject("Error: Somthing wrong")
//         }
//     }, 1000)
// })

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("the promise is either resolved or rejected"));


// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve({username:"Javascript", Password:"123"})
//         } else
//         {
//             reject("Error: JS went wrong")
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
 
// }
// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         //console.log(response);
//         const data =await  response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("errorrrr", error);
//     }

// }
// getAllUsers();



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error));



fetch("http://cs.rescue.gov.pk/Dashboard/RM/DashBoardRM.aspx/GetTotalAlerts")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));
