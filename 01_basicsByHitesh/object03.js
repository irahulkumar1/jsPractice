// object destructuring

const course = {
  courseName : "udemy JS course",
  price : "342",
  courseInstructor : "Rahul"
}

// console.log(course.courseName)
const {courseInstructor: teacherName, courseName}= course;
console.log(teacherName, courseName)