// singleton 

// object literalas 
// const mySybl = Symbol("&&#&");

const jsUsers = {
    name : "rahul",
    "full Name" : "Rahul Kumar",
    age : 18,
    mySybl : Symbol("myKey1"),
    class : "VII"
}

// console.log(jsUsers.name)
// console.log( typeof jsUsers["name"])   //another way fo accesssing object is square bracket notation
// console.log(jsUsers["full Name"])
// console.log( typeof jsUsers["mySybl"])  

// jsUsers.greeting = function(){
//     console.log(`hello ${this["full Name"]}`)
// }
// console.log(jsUsers.greeting())


// part 2 

const obj = {1: "a", 2: "b"}
const obj1 = {3: "a", 4: "b"}

// const obj3 = {obj, obj1}
// const obj3 = Object.assign({}, obj, obj1)
// console.log(obj, obj1)
// console.log( obj3);

// we can also use spread operator 
// const allObj = { ...obj, ...obj1};
// console.log(allObj)
 

const tinderUser = {};

tinderUser.name = "rahul";
tinderUser.class = 20;
tinderUser.fullName = "Rahul Kumar"
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)) // this will make keys and value in a array
console.log(tinderUser.hasOwnProperty("isLogin"))