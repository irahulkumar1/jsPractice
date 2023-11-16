// if ( true){
//     console.log("happy to see you")
// }

// let loggedInUser = "rahul"
// if(loggedInUser.length >= 0)console.log("we can write this way also, it is known as implicit scope");
// the above code is very unreadable and also a bad practice

// nesting
// const balance = 1000;

// if (balance < 500){
//     console.log(`yes vlaue is less than ${balance}`)
// }else if (balance < 700){
//     console.log(`yes vlaue is less than 750`)
// }else if (balance < 700){
//     console.log(`yes vlaue is less than 750`)
// }else {
//     console.log("executed")
// }

// const userLoggedIn = true;
// const userHaveDebitCard = true;

// if ( userLoggedIn && userHaveDebitCard){
//     console.log( "conditions are ture allow to purchase ")
// }

// switch case

// switch (key){
//     case value:
//     break;

//     default:
//     break;
// }
// basic syntax

const month = 8;

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("Apri");
    break;
  case 5:
    console.log("May");
    break;
  default:
    console.log("no Match Found");
    break;
}
