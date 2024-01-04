
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

// Left off: https://javascript.info/number#tostring-base