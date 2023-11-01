const user ={
    username :"Imran",
    LoginCount:8,
    signedIn:true,

    getUserDrtails:function(){
    //console.log("get user detail from database");
    //console.log(`username: ${username}`);
    
    //console.log(`username: ${this.username}`);
    //console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDrtails());

function User(username, loginCount, isLoggedIn)
{
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn;
return this;
//console.log(this);
}

const userOne = new User("Imran Ahmed Awan",3,false);
const userTwo = new User("ChaiaurCode",11,true);
console.log(userOne);
console.log(userTwo);
//console.log(username);