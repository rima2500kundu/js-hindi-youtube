// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "rima",
            lastname: "kundu"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 5: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);
// console.log(obj3 === obj1);
// console.log(obj1);

// when objects come from database it comes as array of object
const users = [
    {
        id: 1,
        email: "rima@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // output_keys in array: [ 'id', 'name', 'isLoggedin' ]
// console.log(Object.values(tinderUser)); // output_values in array: [ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser)) // output_entries in array: [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedin', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedin"));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// object data destructuring
const {courseInstructor: instructor} = course
// console.log(instructor);

// json
/*
{
    "name": "rima",
    "coursename": "js in hindi",
    "price": "free"
}
*/

/*
[
    {},
    {},
]
*/

const myarr = [0, 1, 2, 3, 4, 5, 6]
console.log("A ", myarr);

console.log(myarr.slice(1, 3));

console.log("B ", myarr);

console.log(myarr.splice(1, 3));

console.log("C ", myarr);


