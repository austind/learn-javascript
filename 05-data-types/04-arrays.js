
// Arrays are like lists in Python.

// Two ways to create an empty array:
let arr = new Array();
arr = []; // Most common
let fruits = ["Apple", "Orange", "Persimmon"];

// Arrays are zero-indexed just like Python lists.
console.log(fruits[0]); // "Apple"

// Arrays are mutable, meaning you can change values.
fruits[2] = "Pear";

// You can append to an array too.
fruits[3] = "Lemon";

// Find the number of elements with the length property
console.log(fruits.length); // 4

// Arrays can store elements of any type.

// Unlike Python, you can't access the last element of an array with -1 index.
console.log(fruits[-1]); // undefined

// Instead, you can calculate it like this:
console.log(fruits[fruits.length - 1]); // "Lemon"

// There is a recent addition to the language that simplifies this:
console.log(fruits.at(-1)); // "Lemon"

// Arrays support both LIFO (last-in-first-out) and FIFO (first-in-first-out) methods.

// Pop extracts the last element from an array and returns it.
console.log(fruits.pop()); // Remove "Lemon" and log it to console
// This is different from fruits.at(-1) because pop removes the element, but at doesn't.

// Push appends an element to the array
fruits.push("Cherry");
console.log(fruits); // Apple, Orange, Persimmon, Pear, Lemon, Cherry

// Shift extracts the first element of an array and returns it.
console.log(fruits.shift()); // Remove "Apple" and log it to console

// Unshift adds the element to the beginning of the array
fruits.unshift("Apple"); // Apple is now back at the beginning of the array

