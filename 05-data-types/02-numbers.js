
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

// https://javascript.info/number#tests-isfinite-and-isnan