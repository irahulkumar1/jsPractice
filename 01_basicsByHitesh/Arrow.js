// this reffers current context
// const user = {
//     userName : "rahul",
//     price: 999,

//     welcomeGreeting: function (){
//         console.log(`hello ${this.userName} and the price is ${this.price}`)
//     }
// }

// user.welcomeGreeting();
// user.userName= 'sam';
// user.welcomeGreeting();

// console.log(this) returns empty {} in node environment and in browser return to global object which is DOM

// function one( ){
//     console.log(this)
// }
// one( )

// const chai = () => {
//   console.log(this,"return empty object");
// };
// chai()

// arrow function 
// const addTwo = (num1,  num2)=>{
//     return ( num1 + num2)
// }
// console.log(addTwo(1,2))
//

//implicit rerunt function (maan lena ) and similariy explicit return where we need to put return 
 const implicitReturn = (num1, num2) => num1 + num2;

console.log( implicitReturn(2,4))