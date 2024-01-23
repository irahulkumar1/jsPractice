var User = function(userName, courseCount){
  this.userName = userName;
    this.courseCount = courseCount;
    const getCoursecount = function(){
      console.log(`count is : ${this.courseCount}`)
    }
    getCoursecount()
}

let rahul = new User("Rahul", 2)
let mahes = new User("Mahes", 4)
console.log(rahul, mahes)

function Person(name, age) {
  this.name = name;
  this.age = age;
}
 
console.log( new Person("Rahul", 3))