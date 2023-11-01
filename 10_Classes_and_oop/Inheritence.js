class User{
    constructor(username){
        this.username= username;
    }

    logMe()
{
    console.log(`Username is ${this.username}`);
}
}

class Teacher extends User{
    constructor(username, email, passwprd)
{
    super(username)
    this.email = email;
    this.password = passwprd;
}

addCourses()
{
    console.log(`a new course was added by ${this.username}`);
}
}
const chai = new Teacher("chai", "cha@gmail.com","123");
chai.addCourses()


const masalaChai = new User("masalaChai");
masalaChai.logMe();

//console.log(chai === masalaChai); // false
//console.log(chai === Teacher); // false because chai is instance of teacher

//console.log(chai instanceof Teacher);
console.log(chai instanceof User); // True because teacher inherites user and chai is instance of teacher so chai is instanceof user