

function printPattern(row){
    for(let i = 1; i<= row; i++){
       let star = "";
        for (let j = 1; j<= i; j++){
            // it appends an asterisk to the star string for each iteration, effectively building the pattern.
           star += "*";
        };
        console.log(star);
    };
}

printPattern(10);