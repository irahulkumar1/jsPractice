const rollNo = [1, 3, 34, 34, 55, 4657, 8, 88, 6, 4, 433, 2, 3];

const studentRoll = rollNo.filter((num) => num > 4); //using explicit return
// console.log(studentRoll)

const sortedStudentRoll = rollNo.sort((a, b) => a - b);

// console.log(sortedStudentRoll);

const newRoll = rollNo.filter((num) => {
  return num > 4;
});
// console.log(newRoll)

let newNum = [];

rollNo.forEach((item) => {
  if (item <  4) {
    newNum.push(item);
  }
});

// console.log(newNum);

// chaining
const mynum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const newNumbers = mynum.map((item)=> item * 10).filter((item)=>item > 20)

// console.log(newNumbers)

const myReduse = mynum.reduce((acc, currVal)=>{
    console.log(`acc : ${acc} and currVal = ${currVal}`)
    return acc + currVal;
})
console.log(myReduse)