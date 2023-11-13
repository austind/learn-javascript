/*
There are 8 basic data types in JavaScript:
Seven primitive data types:
- number: includes integers or floats. Integers are limited by +-(2^53-1)
- bigint: for integer numbers of arbitrary length. Not supported on IE.
- string: zero or more characters.
- boolean: true/false
- null: unknown values. Equivalent to None in python.
- undefined: for unassigned values.
- symbol: for unique identifiers.

One non-primitive data type:
- Object: More complex data types. Includes arrays, hashes, etc.
*/

// JS is dynamically typed; you don't have to declare the type of a variable.

let message = "hello";
message = 12345; // No error. Dynamically re-cast from string to number.

// There are a few special numeric values: Infinity, -Infinity, NaN

console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
console.log("string" / 2); // NaN

// NaN is sticky. Any further mathematical operation on NaN returns NaN:

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN

// Any mathematical errors won't cause JS to stop executing; it will only
// return NaN.

// Numbers can only store values from -9007199254740991 to 9007199254740991.
// This is (2^53-1).
// If you need numbers larger than that, use bigInt. BigInts end with "n":

const bigInt = 1234567890123456789012345678901234567890n;

// Strings can be declared a couple ways:

let str = "hello"; // Double quotes
let str2 = 'hello again'; // Single quotes work too
let str3 = `embed another string, like ${str2}`; // Backticks allow string interpolation

// Booleans store true/false values

let boxIsChecked = true;
let fieldIsSelected = false;

// Booleans result from comparisons like:

let isGreater = 4 > 1; // true

// Null just means no value, or an un-initialized value:

let age = null;

// Undefined is for variables that were declared, but not assigned a value, as in:

let height;
console.log(height); // undefined

// Don't assign "undefined" to a variable. Leave it for its intended purpose: a
// default value for variables that have not been assigned a value. Use null instead.

// The typeof operator shows us the type of a variable, as in:

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"
typeof alert // "function"

// Note: functions are a special type of object. The typeof operator should return
// "object" for typeof alert, but doesn't for historical reasons.

