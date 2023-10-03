// Singleton
 //object.create //obejct can be created this way are singleton 

// objects literals (in this case sigleton not created)

const mySym = Symbol("Key1");

const JSUser = {
    name: "Imran",
    "full name":"Imran Ahmed Awan",
    [mySym]:"mykey1",
    age:42,
    location:"Lahore",
    email: "imran@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
};
// console.log(JSUser.name);
// console.log(JSUser["name"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);

// JSUser.email = "imranmcs@gmail.com";
// Object.freeze(JSUser); // to lock the object not object can not be updated
// console.log(JSUser);
// JSUser.email= "imran@microsoft.com";
// console.log(JSUser);

JSUser.greeting =function()
{
console.log("Hello Js User");
}
JSUser.greeting2 =function()
{
console.log(`Hello Js User, ${this.name}`);
}
console.log(JSUser.greeting2());
console.log(JSUser);


