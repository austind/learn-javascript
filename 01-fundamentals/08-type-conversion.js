// JS automatically converts variable to the appropriate type for 
// the operation. For example, alert always converts variables to strings.

// You can cast a value to a certain type manually too:

let value = true;
value = String(value); // now a string called "true"
typeof value // "string"

// Numeric conversion also happens automatically:

console.log("6" / "2"); // 3

// You can also cast a value to number directly:

value = "12345"
let number = Number(value)
typeof number // "number"

// Explicit conversion is usually necessary when we read a value from a string-based
// source, but expect a number to be returned.

// Numeric conversion rules:
// undefined -> NaN
// null -> 0
// true/false -> 1 or 0
// string: trim leading and following whitespace. if the string is empty, return 0.
//         if the string is a number, return the number. Otherwise, NaN.

console.log(Number("   123   ")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("     ")); // 0

// Boolean conversion:

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true (non-empty string is no the same as numeric 0)
console.log(Boolean(" ")); // true (non-empty string)