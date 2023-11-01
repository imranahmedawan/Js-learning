class User{
    constructor (username){
        this.username = username;
    }


    logMe()
    {
        console.log(`Username : ${this.username}`);
    }


    static createID(){ //static ID means this can not be used 
        return `123`
    }
}

const imran = new User("Imran");
//console.log(imran.createID());

class Teacher extends User{
    constructor (username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("IPhone","i@phone.com")
iphone.logMe();
console.log(iphone.createID());// reyurn error beacuse createdID() is static