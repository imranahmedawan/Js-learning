// for of


// const arr=["a",2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings="hello World"
// for (const greet of greetings) {
//     console.log(greet);
// }


//Maps
const map= new Map();
map.set('PK', "Pakistan")
map.set("usa", "United SA")
map.set("fr", "Farance")
map.set('PK', "Pakistan")

    //console.log(map);
// for (const iterator of map) {
//     console.log(iterator[0]);
// }


// for (const [key, value] of map) {
//     console.log(key, " :- ", value);
// }


const myObject = {
game1:"NFS",
game2:"GTA"
}

for (const [key, value] of myObject) {
    console.log(key, " :- ", value);
}
