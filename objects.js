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

console.log(jsUsers.name)
console.log( typeof jsUsers["name"])   //another way fo accesssing object is square bracket notation
console.log(jsUsers["full Name"])
console.log( typeof jsUsers["mySybl"])  

jsUsers.greeting = function(){
    console.log(`hello ${this["full Name"]}`)
}
console.log(jsUsers.greeting())