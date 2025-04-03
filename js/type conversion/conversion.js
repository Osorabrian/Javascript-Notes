// Most of thetime operators and functions automatically convert the values given to them to the right type.
// Mathematical operations convert values to numbers except for concatenation.

// String conversin String(value).
let age = 24
let myAge = String(age)
console.log(typeof myAge, myAge)

//Number conversion Number(value)
let distance = "22.5"
let theDistance = Number(distance)
console.log(typeof theDistance, theDistance)

//Numeric converison in mathematical operatrions happen automatically
let answer = "6" / "2"
console.log(typeof answer, answer)

// if you try to convert a non digit to Number you get a NaN
let father = "John Doe"
console.log(Number(father))

/* 
when you convert various types to number type:
undefined it becomes NaN
null it becomes 0
true and false it becomes 1 and 0
string - it removes whitespaces from start and end. if remaining string is empty then it becomes 0.
Otherwise the number is read from string and the error gives NaN.
*/ 

// Boolean conversion using Boolean(value)

/*
Values that are intuitively empty like 0, an empty string, null, undefined, and NaN become False.
Other values become true, values like non-empty string e.g "0", " "
*/

console.log(Boolean(""), Boolean(0))
console.log(Boolean(" "), Boolean("0"))
console.log(Boolean(null), Boolean(undefined))

