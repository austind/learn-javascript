
// https://javascript.info/array-methods

// Splice is the Swiss army knife of arrays.
// NOTE: Negative indices ARE allowed.

// Delete elements
let arr = ["I", "like", "Python"];
arr.splice(1, 1); // from index 1, remove 1 element
// Note that splice returns any deleted elements

// Replace elements
arr = ["I", "want", "to", "study", "JavaScript"];
arr.splice(3, 2, "go", "hiking");
console.log(arr); // I,want,to,go,hiking

// Insert elements
// Set deleteCount (second argument) to 0
arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript"

// arr.slice([start], [end]) returns a new array copying all items from start to end,
// not including end.

arr = ['t', 'e', 's', 't'];
console.log(arr.slice(1, 3)); // e, s (copy from index 1 to index 3)
console.log(arr.slice(-2)); // // s, t (copy from -2 to end)
console.log(arr.slice()); // t, e, s, t (copy entire array -- useful in many cases)

// arr.concat(arg1, arg2...) concatenates any values into an array.
arr = [1, 2];
console.log(arr.concat([3, 4])); // 1, 2, 3, 4
console.log(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6
console.log(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

// Normally, it only copies elements from arrays. Other objects, even if they
// look like arrays, are added as a whole:

arr = [1, 2];
let obj = {
  0: "something",
  length: 1
};
console.log(arr.concat(obj)); // 1, 2, [object Object]

// But if an array-like object has a special Symbol.isConcatSpreadable property,
// then it is treated like an array by concat:
obj = {
  0: "foo",
  1: "bar",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
console.log(arr.concat(obj)); // 1, 2, something, else

// arr.forEach runs a function on every element of the array.
arr.forEach(function(item, index, array) {
  // do something with item
});
// Log each name to console
["Bilbo", "Frodo", "Gandalf"].forEach(console.log);
["Bilbo", "Frodo", "Gandalf"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// arr.indexOf(item, from) looks for item starting from index from, and returns
// index where it was found, or -1 if not found.
// arr.includes(item, from) looks for item starting from index from, returns true if found.

arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

// Note: indexOf uses strict comparison (===) so it will only look for false, not 0.