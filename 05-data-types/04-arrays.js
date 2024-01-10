
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

// Push and unshift can add multiple elements at once
let cars = ['Model S']
cars.push("Model 3", "Model Y");
cars.unshift("Cybertruck");
console.log(cars); // Cybertruck, Model S, Model 3, Model Y

// Arrays are a special kind of object.
// They are copied by reference, not by value
// You can misuse arrays like objects, but don't do it. It will invalidate
// optimizations. Use regular objects if you need an object.

// Push/pop are fast, shift/unshift are slow. Why gets complicated.

// Loops

// Super old way to loop with indices
let array = ['Apple', 'Orange', 'Pear'];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Simpler way
for (let fruit of fruits) {
  console.log(fruit);
}

// Even though it's possible to use for..in, don't do it. The reasons get complicated.

// the length property is a misnomer. It's not actually the count of
// the number of elements in the array, it's the highest index + 1.
let jsIsDumb = [];
jsIsDumb[12345] = "Derrrrp";
console.log(jsIsDumb.length); // 12346
// *facepalm*

// Just as stupid, the length property is *writable*.
arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr); // 1, 2

// So, to empty an array, do this:
arr.length = 0;
// *double facepalm*

// You can use arrays like matrices
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]); // 5

// Arrays have their own toString method
arr = [1, 2, 3];
console.log(arr); // 1,2,3
console.log(String(arr) == '1,2,3'); // true

// Since arrays are objects, don't compare them with ==
// Remember, objects are only equal if they are references to the same object
// You can only compare arrays item-by-item in a loop or iteration
// *triple facepalm*

