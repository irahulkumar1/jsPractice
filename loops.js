// loops

// For loop
// for(let){

// Itterations

// for( let i = 0  ; i <= 10; i++ ){
//    const element =(i);
//   if(element === 5){
//     console.log(element,"this is best")
//      };
//     console.log(element);
// };
//

// Loops inside loops

// for( let i = 1  ; i <= 10; i++ ){
//  console.log( `table of ${i}`)
//  for ( let j = 1 ; j <= 10; j ++){
//     console.log(`${i} * ${j} = ${i * j}`)
//  }
// };

// for loop with array

const myArray = ["shaktiman", "Batman", "Superman"];

// for ( let i = 0; i <myArray.length; i++ ){
//     console.log( myArray[i])
// }

// break and continue

// for ( let i = 0; i <= 20; i++){
//     if (i === 5){
//         console.log(`${i} is the best number`)
//         break;
//     }
//     console.log(`vlaue of i is ${i}`)
// }
// for ( let i = 0; i <= 20; i++){
//     if (i === 5){
//         console.log(`${i} is the best number`)
//         continue;
//     }
//     console.log(`vlaue of i is ${i}`)
// }

// let i = 0;
// while (i <= 10) {
//   console.log(`Value of index is ${i}`);
//   i = i + 3;
// }
// let arr = 0;
// while ( arr < myArray.length){
// console.log(`value is  ${myArray[arr]}`)
// arr = arr +1
// }


// do while 

// let score = 11
// do {
// console.log( `this is the value ${score}`)
//  score ++
// }while (score <= 10);

// for of loop 

for ( const num of myArray){
    // console.log(num);
}

let greetings = ' hello world !'

for ( const greet of greetings){
    if(' ' === greet){
        // cnsole.log();
        continue
    }
    // console.log(`each char is ${greet}`)
}

// maps 

const maps = new Map();
maps.set("IN", "India");
maps.set("UN", "United State");
maps.set("Pak", "Pakistan");
maps.set("Pak", "Pakistan");
// console.log(maps)


for ( const [country, value] of maps){
    console.log(`${country} :- ${value}`)
}