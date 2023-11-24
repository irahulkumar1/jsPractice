// const userEmail = "irahulkv@gmail.com";
// const userEmail = ""; // empty string means flasy value
const userEmail = []; //empty array have truthy value

if(userEmail){
    console.log("user is present")
}else{
    console.log("Don't have user email")
}

/*
Falsy value

null, undefined, 0, -0, BigInt, false, "" empty sting, NaN,


Truty Values
everything else is true 
- "0", "false ", " " space within string is also true, [], {},
- function(){} empty function is also a truthy value
*/

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty",emptyObj)
// }

// nullish Coalescing Operator   (??)

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

// console.log(val1);

// Ternary Operator 

// Condition  ? truthy : falsy;

let teaPrice = 100;

teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80 ");
