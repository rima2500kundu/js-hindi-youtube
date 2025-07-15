// dates - count from 1st jan 1970

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2025, 6, 15)
// console.log(mycreatedDate.toDateString());

// let mycreatedDate = new Date(2025, 6, 15, 18, 3)
// let mycreatedDate = new Date("2025-07-15")
// let mycreatedDate = new Date("07-15-2025")
// console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getTime());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

let formatDate = newDate.toLocaleString('default', {
    weekday: "long",
    minute: "2-digit",
})

console.log(formatDate);
