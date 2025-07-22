// global scope
// var c = 300
let a = 300

// block scope
if(true){
    let a  = 10
    const b = 20
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = "rima"

    function two(){
        let website = "youtube"
        console.log(username);       
    }
    // console.log(website);  
    // two()
}
// one()

if(true){
    const username = "rima"

    if(username === "rima"){
        const website = " youtube"
        // console.log(username + website);        
    }
    // console.log(website);   
}
// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}


