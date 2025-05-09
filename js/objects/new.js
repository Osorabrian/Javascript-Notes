/*
Constructor, operator "new"
Constructor is a function that is used to create many similar objects.
There are two convention:
1) Function name starts with a capital letter
2) it requires only the "new" operator to be called.
*/

function User(name) {
    this.name = name
    this.isAdmin = false
}

// we use the "new" operator to execute the constructor
let john = new User("John")
console.log(john.name)
console.log(john.isAdmin)

// immmediately call a constructor
let car = new function() {
    this.name = "Mercedes"
    this.isSportsCar = false
}

console.log(car.name)
console.log(car.isSportsCar)

/*
Constructor mode test new.target
- we use the new.target property to check whether its called with newor without it
- it is undefined for regular calls and equals the function if called with new
*/

function Person() {
    this.name = "Brian"
    this.isMale = false
}

// this wiil return undefinde because it is not executed with the "new" operator
console.log(Person())

// this will return the function if called
console.log(new Person())

// we can modify to identify if it is not executed by "new operator"
function House(address) {
    if(!new.target) {  //if the constructor is not executed by new we execute using new
        return new House(address)
    }
    this.address  = address
}

// if we execute the constructor without the "new operator"
let grad = House("88 E San Carlos Street")
console.log(grad.address)

//Methosds in Constructors
function Doctor(name) {
    this.name = name;
    this.description = function() {
        return `My name is Dr.${this.name}.`
    }
}

let doc = new Doctor("Brian")
console.log(doc.description())