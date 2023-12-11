
// Curly brace syntax {...} allows us to create one object.
// If we need to create many of the same object, we use constructor
// functions and the "new" operator.

// Conventions for constructor functions:
// 1. Named with a capital letter
// 2. Only executed with the "new" operator

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name) // "Jack"
console.log(user.isAdmin) // false

// Constructors shouldn't have a return statement.

// Two functions - one object exercise

let obj = {};
function A() { return obj; }
function B() { return obj; }
let a = new A()
let b = new B()
console.log(a == b);

// New calculator 

function Calculator() {
    this.read = function() {
        this.a = +prompt("A?");
        this.b = +prompt("B?");
    },
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}
let calculator = new Calculator();
