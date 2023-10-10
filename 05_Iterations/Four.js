const myObjects={
    js:"javascript",
    CPP:"C++",
    RB:"RUBY",
    Swift:"Swfit by Apple"
}

for (const key in myObjects) {
   //console.log(`${key} shortcut for ${myObjects[key]}`);
}


const programming =["js","rb","py","java"]
for (const key in programming) {
    
       // console.log(programming[key]);
}

const map= new Map();
map.set('PK', "Pakistan")
map.set("usa", "United SA")
map.set("fr", "Farance")
map.set('PK', "Pakistan")

for (const key in map) {
    console.log(map.keys);
}
