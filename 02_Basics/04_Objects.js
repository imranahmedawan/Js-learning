//const tinderUser = new Object(); // this is singleton object

const tinderUser={};
tinderUser.id="1234abc";
tinderUser.name = "Sammmy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);


const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Imran",
            lastName:"Awan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a", 2:"b"
}
const obj2 = {
    3:"a", 4:"b"
}

//const obj3 = {obj1, obj2};
//const obj3 =Object.assign({}, obj1, obj2)

const obj3 ={...obj1,...obj2};
//console.log(obj3);


const users =[
{
    id:1,
    email:"I@gmail.com"
},
{
    id:2,
    email:"A@gmail.com"
}
]

users[1].email;
//console.log(users[1].email);
//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    cousreName:"Js",
    price:"999",
    CourseInstructor:"Imran"
}

//course.CourseInstructor

const {CourseInstructor}=course;
console.log(CourseInstructor);
const {CourseInstructor: instructor}=course;
console.log(instructor);


// {
// "name":"Imran",
// "courseName":"Js",
// "price":"free"
// }

[
{},
{},
{}
]