let multiply= (x,y)=>{
    console.log(x*y, "curring by bind");
}

let multiplybyTwo= multiply.bind(this,2,3);
multiplybyTwo(5);
//if we add 3 that will ignore 5 which is passed in multiplybytwo

let multiplybyTwo2= multiply.bind(this);
multiplybyTwo2(2,3);
//what if we pass 2 and 3 in multiplybytwo

let multiplybyThree= multiply.bind(this,3);
multiplybyThree(5);


/*
this is function curring using bind method
we make a copy of multipy method and we create more methods out of it 
by presetting some arguments inside the functions
*/

//now with function clousers

let closureMultiply = function(x){
    return function (y){
        console.log(x * y,"curring by clouser");
    }
}

let clouserMultiplyByTwo= closureMultiply( 2);
clouserMultiplyByTwo(5)



/*
curring id a functional programming technique where a ficntion with a multiple arguments is transformed in
a sequense of nested function, each function takes a single argument.

this allow us to partially apply the fucntion to some arguments and recieves a new function which takes 
the remaining arguments
*/ 