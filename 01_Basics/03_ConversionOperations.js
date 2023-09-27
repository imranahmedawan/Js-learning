let score = "33A"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33
// "33abc" -> NAN
// Null => 0
// "Imran" => NAN
// Undefined => NAN (not a number)
// true => 1