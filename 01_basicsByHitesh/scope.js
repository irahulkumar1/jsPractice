// var c = 4

// if (true) {
//   let a = 3;
//   const b = 4;
//   var c = 5;
//   console.log(a,b,c)
// }
// console.log(c);
// we cannot access a and b because of block  scopping 

// let a = 300
// if (true) {
//   let a = 3;
//   const b = 4;
//   var c = 5;
// console.log(a, "inner vlue")
//   console.log(a,b,c)
// }
// // console.log(a);

// ************ scope 2 *************

// function one (){
//     const userName = "Rahul"

//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     }
//     // console.log(website)
//     two()
// }
// one()


earlyAccessData(1)
function earlyAccessData(num){
console.log(num)
}

// cantEarlyAccessData(1)
const cantEarlyAccessData = function (num){
console.log(num)
}
cantEarlyAccessData(5 )