function SetUserName(username)
{
    //complex db calls
    this.username = username;
    console.log(username);
}

function createUser(username, email, password)
{
    SetUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@faceboo", "123")
console.log(chai);