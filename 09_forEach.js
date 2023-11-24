const language = ["javaScript", "ruby", "c++", "kotlin", "swift"];

// language.forEach(function (item){
//     // console.log(item)
// })
// // with arrow function 
// language.forEach((item)=>{
// console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// language.forEach(printMe)

language.forEach((item, index, arr )=>{
    // console.log(item, index, arr )
})

// object iteration with forEach 
const iteratingObj = [
    { id: 'p_id', title: 'RespondentID' },
    { id: 'sid', title: 'SurveyId' },
    { id: 'uid', title: 'UID' },
    { id: 'var3', title: 'var3' },
    { id: 'participantIp', title: 'IP Address' },
    { id: 'status', title: 'Status' },
] 
iteratingObj.forEach((item)=>{
    // console.log(item.title)
})

// forEach never return any value 

const lanValue = language.forEach((value) => {
    // console.log(value)
    return value;


});
console.log(lanValue) // it return undefined, it doesn't produce new array