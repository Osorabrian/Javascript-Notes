/*
loops are a way to repeat code multiple times
there are several loops in js
1) while loop
2) do...while loop
3) for loop: for(begin;condition;step){}; for..of, for...in
*/

//while loop - executes a code of block if condition is met while(condition){//code}
let age = 18
while(age < 25){ //will check if condition is met if truthy it executes the code block below
    console.log("You are still underage")
    age++ //this increases the age variable in order to close the function when the condition becomes false
}

//if a loop does not have a increment or decrement variable it will loop forever
// while(true){
//     console.log("Brian")
// } this will loop forever (infinite loop)

//do...while loops - exceutes a block of code while, the while statement is true.
let myAge = 16
do{
    console.log("You cannot drink and drive.")
    myAge++
}while(myAge < 21)


//for loop - for(begin; condition; step)
for(let a = 0; a < 10; a++){
    console.log("Hello")
}

/*
In the for loop 
begin - executes upon entering the loop
conditon - checked again before any iteration
body - executed while condition is truthy
step - executes after the body on each iteration
*/



