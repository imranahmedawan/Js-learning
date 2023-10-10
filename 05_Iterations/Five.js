const coding =["js", "ruby","java", "py","cpp"]

// coding.forEach(function (item) {
//    console.log(item); 
// });

// coding.forEach((item)=>{
//     console.log(item); 
// })

function printMe (item)
{
console.log(item);
}

//coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding  = [
    {
        languageName:"Javascript",
        LanguageFileName:"JS"
    },
    {
        languageName:"Java",
        LanguageFileName:"java"
    },
    {
        languageName:"python",
        LanguageFileName:"py"
    }
    // ,   
    // {
    //     OrderName:"python",
    //     OrderValue:"py"
    // }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})