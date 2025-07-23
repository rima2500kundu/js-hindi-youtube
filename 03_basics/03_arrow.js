const user = {
    username: "rima",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // node environment reffer {} - empty object, browser shows window object

// function chai(){
//     let username = "rima"
//     console.log(this.username);   
// }
// chai()

// const chai = function(){
//     let username = "rima"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "rima"
    console.log(this);
}
// chai()

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(10, 4));

// implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));

const addThree = (num1, num2, num3) => (num1 + num2 + num3) 
// console.log(addThree(2, 5, 1));

const addTwo = (num1, num2) => ({username: "rima"}) // object return
// console.log(addTwo(3, 4));

// const name = (fname, lname) => (fname + lname)
// console.log(name("rima", " kundu"));

const name = (fname, lname) => ({fname: "rima", lname: "kundu"})
// console.log(name());



