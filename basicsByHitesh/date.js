// console.log("asdfasd")
let currentDate = new Date();

// console.log(currentDate.toDateString());
// console.log(currentDate.toString());
// console.log(currentDate.toLocaleString());
// console.log( typeof currentDate);

// const localDate = new Date("12-02-1996");
// console.log(localDate.toLocaleString())


// const timeStamp = Date.now();
// console.log(Math.floor(timeStamp/1000));
// console.log(currentDate.getMonth());
// console.log(currentDate.getDay());

currentDate.toLocaleString("default",{
    weekday: "long"
})

console.log(currentDate)