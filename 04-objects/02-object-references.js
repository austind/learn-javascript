
// Objects are stored and copied by reference, primitives copied by value

let message = "Hello!";
let phrase = message;

// message and phrase are two separate variables, which can be changed independently

let user = { name: "John" };
let admin = user;

// user and admin both refer to the same object; changing either one will change the other.

admin.name = 'Peter';
console.log(user.name) // 'Peter'

// Objects are only equal if they are the same object

let a = {};
let b = a;
console.log(a == b); // true
console.log(a === b); // true

let c = {};
let d = {};
console.log(c == d); // false

// Objects declared as constants can have their properties changed. The object itself
// must stay the same, but properties can be modified:

const person = {
    name: 'Austin'
};

person.name = 'David';
console.log(user.name); // "David"

// You can copy objects by creating a new object and copying all properties to the new object

let clone = {};
for (let key in person) {
    clone[key] = person[key];
}
clone.name = 'Roger';
console.log(person.name); // "David"

// Nested cloning is important if object properties are also objects. The easiest way to do this]
// is with structuredClone()

let someone = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    }
};

let clone = structuredClone(someone)