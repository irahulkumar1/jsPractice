// function statement aka functin declaration

a();
// b();
function a (){
    console.log("a called")
}
// function expression 

let b = function ( ){
    console.log("a called expression")
}


// function declaration same as function statement
// Anonymouse Function : - 
/* the major difference between these two is hoisting.
b is treated as like any other valriable 

funtion (){

}
this will throw a erroe we can not declare without name
Use: used in place where funtions are used as a v

/* a funtion without name is anonymous function
it does not have there own identity
*/


// named Function Expression 

let named = function xyz ( ){
    console.log("a called expression")
}
// nothing but a name of a function inside the variable
xyz() // it will throw an error 

// named function Expression 
// Difference between parameters and arguments

// these are parameters and local vlaue of the function can only accessed inide the function 
function identifier(){
console.log("params and arguments")
};
// these are arguments 
identifier();

// first Class Functions 

function citizens(param1, params2 ){
    console.log("first class citizens",param1)
};

citizens(
    function (){
        console.log("this will return this function")
    }
);
function xyz(){
console.log(
    "for using in argumets"
)
}
citizens(xyc)
/*
we can pass xyz funtion in the params of citizens funtion 

the ability to use function as values is first class functions
and can be passed to another functions arguments 
and can be returned form any function is known as first class citizens
it is a programming concept 
*/
// Arrow Functions 