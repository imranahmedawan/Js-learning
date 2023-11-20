class User{
constructor(email, password){
    this.email = email;
    this.password = password;
    }

    get password(){
        return `${this._password}Imran`
    }

    set password(value){
        this._password =value;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
            this._email = value
    }

}

const imran = new User("imran@gmail.com","abc")
console.log(imran.password);
console.log(imran.email);