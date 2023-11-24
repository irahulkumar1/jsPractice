const myObj = {
    key : "value",
    js : "javaScript",
    cpp : "c++",
    py : "paython"
};

for ( const key in myObj){
    // console.log(`${key} is the shotrtcut of ${myObj[key]}`)
};

// what if we want to use for in with array 

const myArray = ["paython","javaSctipt", "c++", "java", "Django"]

for (const key in myArray){
    // console.log(myArray[key]);
};

const maps = new Map();
maps.set("IN", "India");
maps.set("UN", "United State");
maps.set("Pak", "Pakistan");
maps.set("Pak", "Pakistan");

for ( const key in maps){
    // console.log(key)
    //  map is not iteratable thats why it is not giving the result
    // if anything is not iteratable it can not be written in the form of loop
};


// for Each 
