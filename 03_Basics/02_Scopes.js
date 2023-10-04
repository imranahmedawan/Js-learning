let a = 300

if(true)
{
let a = 10
const b = 20
var c = 30
//console.log("inner a", a);
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username ="Imran";

    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
one();


if(true){
    const username ="Imran"
    if(username==="Imran")
    {
        const website =" Youtube";
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//+++++++++++++++++ intersting ++++++++++++++++++
console.log(addone(5));
function addone(num) {
    return num+1;
}
console.log(addone(5));


//console.log(addTwo(8));
const addTwo = function(num)
{
    return num+2;
}
console.log(addTwo(8));