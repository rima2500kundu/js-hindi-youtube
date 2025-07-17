const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros.flat(Infinity));

// console.log(Array.isArray("rima")); // returns true or false
console.log(Array.isArray([1, 2, 3]));

// console.log(Array.from("rima"));
// console.log(Array.from([1, 2, 3], (x) => x * 3));

// console.log(Array.from({name: "rima"})); // interesting []

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));



