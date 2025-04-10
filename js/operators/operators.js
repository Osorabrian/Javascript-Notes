//Basic Operators

/*
Operand - is what operators are applied to. e.g 5*2, 5 and 2 are operands
Unary - an operator is unary if it has only one operand. e.g +x
Binary - an operator is bainary if it has two operands. e.g y - x
*/

//Math Operators
// Addition +, Subtraction -, Multiplication *, Division /, Remainder %, Exponential **

//String concatenation
let s = "new" + "string"
console.log(s)

//if any of the operands is a string then the other is converted to string.
let a = 2 + 2 + "1" //41
let b = 1 + "2" + 1 //121
let c = 1 + "2" //12
console.log(a)
console.log(b)
console.log(c)

//NOTE: Only the binary + operator works with strings that waythe other operators convert the operands to numbers.

//Numery conversion unary +
// The + operator applied to a single value does not do anything to numbers, but if its not a number it converts it to a number.

console.log(+true)
console.log(+" ")
console.log(+false)

// Unary negation -
let nums = 4
let ans = -nums
console.log(ans)

//Assignment Operator = 

//chaining statements a=b=c2+2 could be written as
c=2+2
a=c
b=c

/* inrement and decrement
increment++ increases value by 1
decrement-- decreses value by 1
*/


//post increment
let d = 1
console.log(d++) // does not reflect
console.log(d) //reflects the increment

let f = 2
console.log(f--)
console.log(f)

//pre increment
let e = 2
console.log(++e) // reflects the increment
console.log(e)

let g = 6
console.log(--f)
console.log(f)

/*
COMMA OPERATOR
Allows us to evaluate several expressions, dividing them with a comma.
Each of them is evaluated but only the result of the last one is returned.
*/






