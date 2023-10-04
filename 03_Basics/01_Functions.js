

function sayMyName()
{
    console.log("I");
    console.log("M");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("E");
    console.log("D");
}

//sayMyName()

// function addTwoNumbers(number1, number2)
// {
// console.log(number1+number2); 
// }
// addTwoNumbers(3,"a")
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function addTwoNumbers(number1, number2)
{
let result = number1+number2; 
return result;
}
const result = addTwoNumbers(3,5)
//console.log("Result: ", result);


function loginUserMessage(Username="")
{
    if(!Username)
    {
        console.log("Please enter username");
        return
    }
    return `${Username} just logged in `;
}

//console.log(loginUserMessage("Imran"));
//console.log(loginUserMessage("Imran"));


// function calculateCartPrice(num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));


// function calculateCartPrice(...num1) // get more than one arguments 
// {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));


// function calculateCartPrice(val1,val2,...num1) // get more than one arguments 
// {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));


const user=
{
    Username:"Imran",
    Price:199
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.Username} and price is ${anyObject.Price}`);
}
//handleObject(user)
// handleObject({Username:"Imranghg",
// Price:199})


const myNewArray = [200,400,100,600]
function retyrnSecondValue(myArr)
{
    console.log(myArr[2]);
}
retyrnSecondValue(myNewArray)