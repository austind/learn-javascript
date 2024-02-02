
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

// arr.find(fn) finds an element in an array. This is similar to using a list
// comprehension in Python for finding an element.

let result = arr.find(function(item, index, array) {
  // if found, item returned and iteration stops
  // if falsy returns undefined
});

let users = [
  {id: 1, name: 'Austin'},
  {id: 2, name: 'Aaron'},
  {id: 3, name: 'Ace'},
];

let user = users.find(item => item.id == 1);
console.log(user.name); // "John"

// arr.findIndex() has the same syntax, but returns the index instead of the item.
// arr.findLastIndex() is also the same, but starts from the end of the array.

// If there may be many items matching a query, use arr.filter()

users = [
  {id: 1, name: 'Alyssa'},
  {id: 2, name: 'Amelia'},
  {id: 3, name: 'Alexi'},
  {id: 4, name: 'Annalyse'},
];

let foundUsers = users.filter(item => item.id < 3);
console.log(foundUsers.length); // 2 (Alyssa and Amelia, as their id is less than 2)

// arr.map() runs a function on each element of an array, and returns the array of results.

let names = [
  'Bilbo',
  'Gandalf',
  'Frodo',
];
let nameLengths = names.map(item => item.length);
console.log(lengths); // 5, 7, 5

// arr.sort() sorts the array *in place*, changing the element order.
// It also returns the sorted array, but this is usually ignored.
// This might have unexpected results, as in this example:
arr = [1, 2, 15];
arr.sort();
console.log(arr); // 1, 15, 2

// This is because all elements are sorted as strings.
// To sort numerically, you need to pass a sorting function to sort()
console.log(arr.sort( (a, b) => a - b ));

// arr.reverse() reverses the order in place
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // 5, 4, 3, 2, 1

// arr.split(delim, [limit]) splits a string on a delimiting character, for an optional
// limited number of iterations
names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ', 2);
console.log(arr); // Bilbo, Gandalf (as an array)

// arr.join(glue) does the reverse of split()
arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');
console.log(str); // "Bilbo;Gandalf;Nazgul"

// arr.reduce() and arr.reduceRight() are similar to arr.map() but more complex.
// Example:
arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
// The first argumente is the aggregate value
// Current is the value of the current item
// the result of the function is added to sum
// reduceRight does the same as reduce, but in reverse array order.

// Since arrays are just objects, typeof isn't helpful in identifying arrays.
// So we have Array.isarray()
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

