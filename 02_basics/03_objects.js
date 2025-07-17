// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "rima",
    "full name": "rima kundu",
    [mySym]: "mykey1",
    age: 18,
    location: "kolkata",
    email: "rima.com",
    isLoggedIn: false,
    lastloginDays: ["monday", "saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym); // symbol

// jsUser["full name"] = "tumpa kundu"
// Object.freeze(jsUser)
jsUser.email = "tumpa.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user"); 
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

