
// Objects are converted to primitives when added, subtracted, or printed

// obj1 + obj2 will never result in another object

// All objects are boolean true.
// Only string and numeric conversions exist.

// Numeric conversion happens when we use mathematical functions.
// String conversion happens when we try to print an object.

// What happens in ambiguous cases?

let total = obj1 + obj2;
if (user == 1) { /* ... */ };

// Both of these cases use the "default" case.

// Call obj[Symbol.toPrimitive](hint)
// If hint is "string", try calling obj.toString() or obj.valueOf(), if they exist
// If hint is "number" or "default", try calling obj.valueOf() or obj.toString(), if they exist

let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

alert(user); // hint: string => {name: "John"}
alert(+user); // hint: number => 1000
alert(user + 500); // hint: default => 1500

// toString and valueOf are old ways of hinting.
// They must return a primitive value. If they return an object, they're ignored.

user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

/*
The important thing to know about all primitive-conversion methods is that they do
not necessarily return the “hinted” primitive.

There is no control whether toString returns exactly a string, or whether
Symbol.toPrimitive method returns a number for the hint "number".

The only mandatory thing: these methods must return a primitive, not an object.
*/

let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
        return "2";
    }
}

alert(obj * 2); // 4, object converted to string "2", then multiplication made it an integer
alert(obj + 2); // "22", binary plus operator converts to string if any operand is a string

