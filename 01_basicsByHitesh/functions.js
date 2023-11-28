// functions

// console.log("R");
// console.log("a");
// console.log("h");
// console.log("u");
// console.log("l");

function callName() {
  console.log("R");
  console.log("a");
  console.log("h");
  console.log("u");
  console.log("l");
}
// callName()

// function addTwoNum(num1, num2){
//   console.log( num1 + num2 )
// }
// addTwoNum(1,2);
// addTwoNum(1,"2");
// addTwoNum(1,"a")

// function addTwoNum(num1, num2){
//    return( num1 + num2 )
//   }
//  const result = addTwoNum(1,2);
//   addTwoNum(1,"2");
//   addTwoNum(1,"a");
//   console.log(result);

function loggedInuser(userName = "guest") {
  if (!userName) {
    console.log(`Please enter a user name`);
    return
  }
  return `${userName} , how are you?`;
}
console.log(loggedInuser());
