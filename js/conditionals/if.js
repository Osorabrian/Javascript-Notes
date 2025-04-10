/*
The if(...) statement evaluates a condition in parentheses and if the result is true, executes a block of code.
 */

let year = 2025

if(year == 2025) console.error("WELLLLL")

// if the statement is more than one line we enclose it in curly braces.

if(year == 2025){ // evaluates the condition in brackets
    console.log("This is your year") //it will print this is your year
}

// Boolean Conversion
if(0){
    // 0 is falsy the statement will not be executed
    console.log("0 is falsy")
}

if(1){
    // 1 is truthy the statement will be executed
    console.log("1 is truthy")
}

// else clause - it executes if the condition is falsy

if(year == 2023){ //this is false
    console.log("It is 2023")
}else{
    console.log("It is 2025")// so it executes this.
}

