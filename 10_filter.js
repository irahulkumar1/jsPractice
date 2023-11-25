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

console.log(newNum);
