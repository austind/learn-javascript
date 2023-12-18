// https://javascript.info/symbol

// Two primitive types may serve as object property keys:
// 1. Strings
// 2. Symbols

// If you use a different type, it is automatically converted to string.
// obj["1"] is the same as obj[1] and obj["true"] is the same as obj[true]

// A symbol represents a unique identifier.

let id = Symbol();

// You can give symbols a name:

let name = Symbol("name");

// Symbols are guaranteed to be unique

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

// Symbols do not auto-convert to strings

alert(id1); // TypeError: Cannot convert a Symbol value to a string
alert(id1.toString()); // "id"
alert(id1.description); // "id"

// Symbols are useful for creating unique IDs to objects created in third party apps.

let user = {
    name: "John"
};

user[id] = 1;
console.log(user[id]);

// To use a symbol in an object literal, use square brackets:

let user2 = {
    name: "John",
    age: 30,
    [id]: 2
}

// Symbols do not participate in for..in loops

for (let key in user2) alert(key); // name, age (no symbols)

// Global symbols

// There's a global symbol registry. Repeated access to the same reference
// returns the same symbol.

let id3 = Symbol.for("id"); // created if doesn't already exist
let anotherID = Symbol.for("id"); // another reference to same symbol
console.log(id == anotherID); // true

// Get symbol by name
let sym = Symbol.for("name");

// Get name by symbol
alert( Symbol.keyFor(sym) ); // "name"

// System symbols
// https://tc39.github.io/ecma262/#sec-well-known-symbols


