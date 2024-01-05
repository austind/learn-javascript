
// The internal format for strings is always UTF-16, regardless of page encoding

// Strings can be enclosed in single quotes, double quotes, or backticks:
let single = 'Single quotes';
let double = 'Double quotes';
let backticks = `Backticks`;

// Single and double quotes are essentially the same.
// Backticks allow embedding of any expression into the string
let message = "what's up?";
let greeting = `Hey bro, ${message}` // "Hey bro, what's up?"

// Backticks also allow strings to span multiple lines
let guests = `Guests:
 * Austin
 * Alyssa
 * Amelia
`;

// You can use special characters too
guests = "Guests: Austin\n Alyssa\n Amelia";

// Other special characters: \' \" \` are literal characters
// \\ is a literal backslash
// \t is a tab

// Strings have the length property:
console.log("Hello".length); // 5

// You can access characters in a string with indexes
console.log("hello"[0]); // "h"
console.log("hello".charAt(2)); // "l"
console.log("hello".charAt(-1)); // "o"

// You can iterate over characters in a string with for..of
for (let char of "hello") {
  console.log(char); // h, e, l, l, o
}

// Strings are immutable. They can't be changed.

// You can change a string's case:
console.log('Hello'.toUpperCase()); // "HELLO"
console.log('Hello'.toLowerCase()); // "hello"

// You can search for a substring with indexOf
let str = "Hello my name is Austin";
console.log(str.indexOf("Hello")); // 0, Hello is at the first character
console.log(str.indexOf("hello")); // -1, not found

// You can also check for the existence of a substring with includes:
console.log(str.includes("name")); // true
console.log(str.includes("sucka")); // false

// You can also check for beginning and ending strings:
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith("Austin")); // true

// https://javascript.info/string#getting-a-substring