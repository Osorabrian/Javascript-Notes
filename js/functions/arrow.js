//Arrow Functions

/*
These are function expressions and are executed when the execution flow reaches at them
let func = (args1, args2, args3 ..... argsN) => {body}
*/

//if we have only one argument the parentheses around them can be omitted
let greeting = name => `hello ${name}`
console.log( greeting("Brian") )

//If we have multiple statements in the body we use
let sum = (a, b) => {
    let add = a + b;
    return add
}

console.log( sum(1, 2) )
