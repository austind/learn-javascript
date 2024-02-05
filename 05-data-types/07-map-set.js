//https://javascript.info/map-set

// Maps are like objects, but Map allows keys of any type.

/**
 * new Map() - creates the map.
 * map.set(key, value) - stores value by key.
 * map.get(key) - returns value by key, undefined if key doesn't exist.
 * map.has(key) - returns true if key exists, false otherwise.
 * map.delete(key) - removes the key/value pair.
 * map.clear() - removes everything from the map.
 * map.size - element count
 */

let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// Maps can even use objects as keys!

// Calling map.set() returns the map, so you can chain calls!

// Iteration

/**
 * map.keys() - iterate over keys.
 * map.values() - iterate over values.
 * map.entries() - iterate over key, value pairs.
 */

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

for (let entry of recipeMap) { // Same as of recipeMap.entries()
  alert(entry); // cucumber,500 and so-on
}

// NOTE: Iteration goes in insertion order

// You can also create maps from arrays or objects:
map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);
alert(map.get('1')); // "str1"

// If you want to convert objects to maps, use Object.entries() like this:
let obj = {
  name: "John",
  age: 30
}
map = new Map(Object.entries(obj));
alert(map.get('name')); // "John"

// You can also do the reverse: create objects from arrays:
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4],
]);
alert(prices.orange); // 2

// You can also use Object.fromEntries to get a plain object from Map.
map = new Map();
map.set('banasna', 1);
map.set('orange', 2);
map.set('meat', 4);
obj = Object.fromEntries(map.entries());
// This would also work: Object.fromEntries(map);
alert(obj.orange); // 2

// A set is like a list with no duplicates.

/**
 * new Set([iterable]) - creates the set, and if an iterable is provided, copies values from it.
 * set.add(value) - adds a value, returns the set itself.
 * set.delete(value) - removes the value, returns true if value existed, otherwise false.
 * set.has(value) - returns true if the value exists in the set, false otherwise.
 * set.clear() - remove everything from the set.
 * set.size - number of elements in the set.
 */

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(3);
alert(set.size); // 3, since only unique values are stored

// Loop over a set with for..of
let fruits = new Set(['oranges', 'apples', 'bananas']);
for (let fruit of fruits) alert(fruit);
// Can also use built in forEach() method
fruits.forEach((value, valueAgain, set) => {
  alert(value);
});

/**
 * Sets also support:
 * set.keys() - iterate over values (not keys, there are no keys! :)
 * set.values() - same as set.keys() for compatibility with map()
 * set.entries() - returns an iterable objects, for compatibility with map()
 */

