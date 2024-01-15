const User = function (userName, courseCount) {
  this.userName = userName;
  this.courseCount = courseCount;
  this.getCoursecount = function () {
    console.log(`count is : ${this.courseCount}`)
  }
}

let rahul = new User("Rahul", 2)
let mahes = new User("Mahes", 4)
console.log(rahul, mahes)


// this is the other way 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log(new Person("Rahul", 3))
console.log(new Person("mahes", 33))