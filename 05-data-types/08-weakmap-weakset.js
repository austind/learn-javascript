// https://javascript.info/weakmap-weakset

// Weak maps and sets don't prevent garbage collection of key objects.

// Also, keys must be objects, not primitives.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works because key is an object
weakMap.set("test", "oops"); // Error because key is a primitive

let john = { name: "John" };
weakMap = new weakMap();
weakMap.set(john, "Is a person");
john = null; // John is removed from weakMap and memory

// WeakMap does not support iteration and keys(), values(), or entries().

/**
 * Methods:
 * 
 * weakMap.set(key, value)
 * weakMap.get(key)
 * weakMap.delete(key)
 * weakMap.has(key)
 */


// The main use case for weak maps is for additional data storage. 
let visitCountMap = new WeakMap();
function countVisits(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

// You can also use WeakMaps as a cache.

// WeakSets behave similarly to WeakMaps.