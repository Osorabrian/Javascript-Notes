'use strict'
/*
THIS
this is a keyword used to access an object.
this is not bound to an object it could be defined in a function and bind later.
Method is a function that is a property of a object.
Arrow functions have no this.
*/

let dict = {name: 'Brian', age: 24}

// add a method to our object
dict.sayHi = function(){
    return `Hi ${this.name}`
}

console.log(dict.sayHi())

// using this which is not bound to an object
function info() {
    return `${this.name} is ${this.age} years old.`
}

// binding the function to an object
dict.f = info

// calling the method in the object
console.log(dict.f())

// when we use strict calling a function where this is not bound will return an error
// if there is no use strict it will return undefined or the global object "Window" in browsers.
console.log(info())
