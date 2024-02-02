
// You can create your own iterators. They need a special Symbol.iterator object
// with a next() method, like this:
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
}

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

// Strings are iterable
for (let char of "test") {
  alert(char); // t, e, s, t
}

// You can also call an iterator explicitly.
// this does the same as:
//for (let char of str) alert(char);
let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // H, e, l, l, o
}

// Iterables and array-likes are similar but different.
// Iterables are objects that implement the Symbol.iterator method
// Array-likes are objects that have indexes and the length property (i.e., look like arrays)
// Strings, for example, are both iterable and array-like.
// This is array-like but not iterable:
let arrayLike = {
  0: "Hello",
  1: "world",
  length: 2,
  // Has no Symbol.iterator method, so it's not an iterator
}

// You can convert something to an array with Array.from()
let arr = Array.from(arrayLike);
alert(arr.pop()); // "World"

// Array.from() also provides a mapping function, which applies to each item before
// adding it to the resulting array.
arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25
