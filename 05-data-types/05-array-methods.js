
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

