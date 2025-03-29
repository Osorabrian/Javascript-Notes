"use strict"

let jsName = "ECefveve"

// if statement for checking name of JavaScript
if (jsName == "ECMAScript"){
    console.log("Right!")
} else{
    console.log('You don\'t know? "ECMAScript"')
}

// create a prompt that takes a number
let number = prompt("Enter a number", 12)

// checks for the number using if statement and returns an alert
if (number > 0){
    alert(1)
} else if (number < 0){
    alert(-1)
} else{
    alert(0)
}

// create a ternary operator that stores results
let result = (a + b < 4)? 'Below' : 'Over'

let login = "Director"

// create multiple ternary operator
let message = (login == "Employee")? "Hello":
            (login == "Director")? "Greetings":
            (login == '')? "No login": ''



