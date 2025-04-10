/* ternary or conditional operator
we use ternary operator when we want to assign a variable depending on a condition
let result = condition ? value1 : value2;
*/
let name = "Brian"
let result = (name == "Brian") ? true : false; //recommended to use parentheses to make it more readable.
let answer = name == "Emma" ? true : false;
console.log(result)
console.log(answer)


//multiple '?' ternary operator
let age = "ef"
let message = (age < 18) ? "Hi" :
              (age < 50) ? "Hello" :
              (age > 100) ? "Hey" : "Uknown"

console.log(message)