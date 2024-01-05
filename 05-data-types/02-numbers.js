
// There are two types of numbers in modern JavaScript:
// 1. Regular numbers: 64-bit double-precision floating point numbers
// 2. BigInts: numbers of arbitrary size (can be larger than 2^53-1 or smaller than -2^53-1)

// You can write numbers with underscores to make them more readable:
// These are the same:
let billion = 1_000_000_000;
billion = 1000000000;

// You can also use scientific notation:
billion = 1e9;

// This also works for small numbers:
let microsecond = 1e-6;

// You can also use hexadecimal numbers:
alert( 0xFF ); // 255
alert( 0xff ); // 255 (case insensitive)

// Binary and octal are also supported, but rarely needed:
let a = 0b11111111; // Binary form of 255
let b = 0o377; // Octal form of 255
alert( a == b ); // true, same number

// Numbers have a built-in method toString(base)
let num = 255;
alert( num.toString(16) ); // "ff"
alert( num.toString(2) ); // "11111111"

// Two dots call a method on a number directly, e.g.:
123456..toString(); // "123456"

// The Math function provides rounding
console.log(Math.floor(3.14)); // 3
console.log(Math.ceil(3.14)); // 4
console.log(Math.round(3.14)); // 3
console.log(Math.trunc(3.14)); // 3; removes everything after decimal with no rounding

// Rounding to a given decimal place can be done in two ways:
num = 1.23456;
console.log(Math.round(num * 100) / 100); // 1.23
console.log(num.toFixed(1)); // "1.23" (note, this is a string, not a number)

// Numbers that exceed the 64-bit size become a special numeric value Infinity
console.log(1e500); // Infinity

// There's some unexpected side-effects of the number system in place:
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// This is due to the way binary can't store certain numbers exactly, and rounds
// them to the nearest number. The way around this is using toFixed, optionally
// casted back to Number with unary plus:
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3

// Special numeric values:
// Infinity and -Infinity
// NaN

console.log(isNaN(NaN)); // true
console.log(isNaN("string")); // true

// NaN can't be compared with anything, even itself
console.log(NaN === NaN); // false

// isFinite converts to number and checks if it's not a special number
console.log(isFinite("15")); // true
console.log(isFinite("string")); // false, because it evaluates to NaN
console.log(isFinite(Infinity)); // false

// Converting to numbers with unary + or Number() is strict.
// It fails if the value isn't a number:
console.log(+"100px"); // NaN

// The only exception is if there are spaces before or after the string:
console.log(+"  100  "); // 100

// parseInt and parseFloat read a string until a number is found
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5
console.log(parseInt('12.3')); // 12, only integer is returned
console.log(parseFloat('12.3.4.5')); // 12.3, second point stops reading

// Both return NaN if the first symbol is not a number
console.log(parseInt('a1234')); // NaN

// You can also pass a radix base for other systems
console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, works without 0x
console.log(parseInt('2n9c', 36)); // 123456

// There is a built-in math library with a few functions and constants
// Returns a random number from 0 to 1 (excluding 1)
console.log(Math.random()); // 0.5435252343232

// Find the largest and smallest numbers in an arbitrary number of args
console.log(Math.max(3, 5, 8, -5, 0, 6)); // 8
console.log(Math.min(0, 1, 2)); // 0

// Arbitrary exponentiation
console.log(Math.pow(2, 3)); // 8

// More details:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math