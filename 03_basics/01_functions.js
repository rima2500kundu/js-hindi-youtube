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
console.log(loginUserMessage("pola"));






