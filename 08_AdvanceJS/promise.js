const promisesOne = new Promise(function(resolve, reject){
    //do an async task 
    //db Call , cryptography, network
    setTimeout(()=>{
    console.log("async Task is completed")
resolve()
    },1000)
});

promisesOne.then(()=>{
    console.log("promise consumed")
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async promise 2");
        resolve()
    },3000)
}).then(()=>{
console.log("async 2 resolved")
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({user:"name", email:"rahulk@gmail.com"})
    },1000)
    });

promiseThree.then((user)=>{
console.log(user)
});

const promiseFour = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
    let error = true;
    if(!error){
    resolve({user:"preteek", email: "prateek@mailc.com"})
    }else{
       reject("somthing went wrong")
    }
    console.log(!error)
    },1000)
});
promiseFour
.then((user)=>{
console.log(user)
resolve()
}).catch((error) => {
    console.log(error)
})