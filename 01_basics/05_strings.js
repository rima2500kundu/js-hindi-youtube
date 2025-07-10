const name = "rima"
const repoCount = 50

// console.log(name + repoCount + " value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rima-rk-tk") // uses js object
// console.log(gameName);
// console.log(gameName[0]);
// console.log(typeof gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(`${gameName.toUpperCase()}`);

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

const newStringOne = "    rima   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.google.com/rima%20kundu"
// console.log(url.replace("%20", "-"))
// console.log(url.includes("rima"));

// console.log(gameName.split("-"));

// const newChar = gameName.charAt(3)
const newChar = gameName.indexOf("i")
console.log(newChar);




