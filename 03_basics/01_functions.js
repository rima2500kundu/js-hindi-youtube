function sayMyname(){
    console.log("R");
    console.log("I");
    console.log("M");
    console.log("A");
}
// sayMyname -- this is reference
// () -- this is execution
// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 15)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

    /*
        In JavaScript, the following are considered falsy:
        undefined
        null
        0
        NaN
        "" (empty string)
        false
    */
   
    if(!username){
        console.log("please enter a username");
        return
    }
    else if(username === ""){
        console.log("Please enter a typed username");       
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pola"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 2000));

// pass object in function
const user = {
    username: "rima",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); 
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// pass array in function
const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     console.log(`my 2nd array is ${getArray[1]}`);
// }
// returnSecondValue(myNewArray)

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 500, 1000]));















