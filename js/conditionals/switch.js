/*
SWITCH STATEMENT
A switch statement can replace multiple if checks
a switch statememt has one or more case blocks and an optional default.
*/

let age = 23

switch(age){
    case 18: // if case is equal to the variable been checked it executes the next line of code.
        console.log("Officially an adult.");
        break;// breaks the execution, if there is no break statement it continues with the next case without any checks.
    case 23:
        console.log("Welcome to quarter life crisis");
        break;
    case 25:
        console.log("Keep going");
        break;
    default:
        console.log('You are perfect just the way you are')
}

//in a switch type matters equality check is strict

//Grouping case - several variants of case which share the same code can be grouped
let number = 10
switch(number){
    case 1:
    case 2:
        console.log("first and second");
        break;
    case 3:
        console.log("odd number")
        break;
    default:
        console.log("The rest")
}

