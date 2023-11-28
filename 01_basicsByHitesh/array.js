const myArr = [1, 2, 2, 34, 5, 6];

// console.log(myArr[4])
// myArr.push(4)
// myArr.push(7)
// myArr.pop()
// myArr
// console.log(myArr.includes(3)); 
// console.log(myArr.indexOf(34))
// const newArr = myArr.join();
// join converts the array into string 
// console.log(newArr)
// console.log(typeof(newArr))

// slice or splice 
const myArr1= myArr.slice(0, 3)
console.log(myArr1)
console.log("original", myArr)
const myArr2 = myArr.splice(0, 3)
console.log(myArr2)
console.log("original", myArr)