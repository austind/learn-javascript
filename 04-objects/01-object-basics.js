
// Objects store keyed values (lists and dicts in python)

// Two ways to create objects:
let user = new Object(); // "object constructor" syntax
user = {}; // "object literal" syntax

user = {            // object
    name: "John",   // key "name" stores value "John"
    age: 30         // key "age" stores value 30
}

// Get property values:

console.log(user.name);
console.log(user.age);

// Add a property:

user.isAdmin = true;

// Remove a property:

delete user.age;

// Can also access properties using square brackets:

user["likes birds"] = true;

// Square brackets are more powerful than dot notation, but more cumbersome to write.
// Usually dot notation is used.

// In real code, we oftren use existing variables as values for property names.

function makeUser(name, age) {
    return {
        name,   // same as name: name,
        age,    // same as age: age
    };
}

// Object properties can have any name, even ones that are otherwise reserved:

let obj = {
    for: 1,
    let: 2,
    return: 3
}

// In JavaScript, nonexistent properties don't raise an exception -- they merely
// return `undefined`. 

console.log(user.noSuchProperty === undefined); // true means "no such property"

// Also the `in` operator:

"key" in obj

console.log('age' in user) // true, user.age property exists
console.log('foo' in user) // false, user.foo property does not exist

// You can loop over objects with this syntax:

for (key in obj) {
    // Executed for each key in obj's properties
}

// Object properties are ordered like this:
// Integer properties are sorted, all others appear in creation order

