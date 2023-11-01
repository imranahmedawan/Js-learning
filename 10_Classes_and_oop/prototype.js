// let myName = "Imran      "
// let myChannel ="chai     "
// console.log(myName.truelength());


let myHeros =["thor","spiderman"]


let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.imran = function(){
    console.log(`imran is present in all objects`);
}


Array.prototype.heyImran = function(){
    console.log(`imran is present in all array`);
}

//heroPower.imran()
myHeros.imran()
myHeros.heyImran()
//heroPower.heyImran()



//inheritence

const user={
    name:"Chai",
    email:"Chai@gmail.com"
}

const Teacher ={
    makeVedio:true
}

const TeachingSUpport ={
    isAvailable:false
}


const TASupport ={
    makeAssignment :"Js assignment",
    fulTime:true,
    __proto__:TeachingSUpport
}


Teacher.__proto__ = user;

Object.setPrototypeOf(TeachingSUpport, Teacher)

let anotherUsername ="ChaiAurCode        "
String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"imran".trueLength();
"iceTea          ".trueLength();