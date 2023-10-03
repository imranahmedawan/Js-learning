const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_Heros=["superman","flash", "batman"];

//marvel_heros.push(dc_Heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//marvel_heros.push("djaksdajskhdsa","aa");
//console.log(marvel_heros);


const allHeros = marvel_heros.concat(dc_Heros,dc_Heros);
//  console.log(allHeros);

const all_New_Heros = [...marvel_heros,...dc_Heros,...dc_Heros];
//console.log(all_New_Heros);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_Array.flat(Infinity);
// console.log(real_another_array);




console.log(Array.isArray("Imran"));
//console.log(Array.from("123"));
// console.log(Array.from({name:"imran"})); // interesting return empty array because tell compilar to convert to array keys or values 

let score1 = 100
let score2 = 200
let score3 = "300"
let score4 =[1,2,3]
//console.log(Array.of(score1,score2,score3, score4));