// https://javascript.info/keys-values-entries

// keys(), values() and entries() are convention for iterating over objects.

/**
 * For plain objects, these methods are also available:
 * 
 * Object.keys(obj) - returns an array of keys
 * Object.values(obj) - returns an array of values
 * Object.entries(obj) - returns an array of [key, value] pairs
 */

// Note that this is not the same as obj.keys(), which might be implemented
// differently for that object.

// Transforming objects
// Objects lack methods that exist for arrays like map, filter, etc.
// We can simulate similar behavior with Object.entries and Object.fromEntries:
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);
alert(doublePrices.meat); // 8
