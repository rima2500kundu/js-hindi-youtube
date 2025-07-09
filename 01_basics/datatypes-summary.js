// primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint

// js is dynamically typed language

const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outsideTemp = null

let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

const bigNumber = 454874543543556456n
// console.log(typeof(bigNumber))

// reference(non primitive)
// array, object, function

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Rima",
    age: 18
}

const myFunc = function(){
    console.log("hello world");
    
}
// myFunc()

// console.log(typeof(heros));



// +++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)

let myYoutubeName = "RimaKundu"
let anotherName = myYoutubeName

anotherName = "Tumpa"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "goa.com",
    upi: "goa@ybl"
}

let userTwo = userOne

userTwo.email = "mumbai.com"

console.log(userOne.email);
console.log(userTwo.email);
