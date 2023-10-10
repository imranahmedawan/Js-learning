const coding =["js", "ruby","java", "py","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNUms = myNum.filter((num)=> num>4)
// console.log(newNUms);
// const newNUms = myNum.filter((num)=>
// {
//     console.log(num);
//     return num>4
// }
// )


// const newNUms=[]
// myNum.forEach( (num) => {
//     if(num > 4)
//     {
//         newNUms.push(num);
//     }
// })
// console.log(newNUms);

const books = [
    {title : 'Book One', genre: 'Fiction', Publish:1981, edition: 2004},
    {title : 'Book two', genre: 'Non-Fiction', Publish:1992, edition: 2008},
    {title : 'Book three', genre: 'History', Publish:1999, edition: 2007},
    {title : 'Book four', genre: 'Non-Fiction', Publish:1989, edition: 2010},
    {title : 'Book five', genre: 'Science', Publish:2009, edition: 2014},
    {title : 'Book six', genre: 'Fiction', Publish:1987, edition: 2010},
    {title : 'Book Seven', genre: 'History', Publish:1986, edition: 1996},
    {title : 'Book Eight', genre: 'Science', Publish:2011, edition: 2016},
    {title : 'Book Nine', genre: 'Non-Fiction', Publish:1981, edition: 1989},
]

let userBooks = books.filter((bk) => bk.genre==="History")

userBooks = books.filter((bk)=> {return bk.Publish >= 1995 && bk.genre == "History"})
console.log(userBooks);