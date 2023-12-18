
// Objects are converted to primitives when added, subtracted, or printed

// obj1 + obj2 will never result in another object

// All objects are boolean true.
// Only string and numeric conversions exist.

// Numeric conversion happens when we use mathematical functions.
// String conversion happens when we try to print an object.

// What happens in ambiguous cases?

let total = obj1 + obj2;
if (user == 1) { ... };

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

// Left off: https://javascript.info/object-toprimitive#tostring-valueof