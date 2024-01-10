
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

// Getting a substring

// 3 methods to get a substring: substring, sbustr, and slice.

// str.slice(start, [, end])
// Returns the part of the string from start to, but not including, end.
str = 'stringify';
console.log(str.slice(0, 5)); // 'strin'
console.log(str.slice(0, 1)); // 's'

// If there is no second argument, slice goes to the end of the string
console.log(str.slice(2)); // 'ringify'

// Negative values are possible too. They read from the end of the string.
console.log(str.slice(-4, -1)); // 'gif'

// str.substring(start, [, end])
// Returns the part of the string between start and end, but not including end.
// This is almost the same as slice, but allows start to be greater than end,
// which simply swaps start and end values.
console.log(str.substring(2,6)); // 'ring'
console.log(str.substring(6,2)); // 'ring'
// Negative arguments aren't supported.

// str.substr is deprecated and not recommended to use.

// Comparing strings

// Some weird things happen
console.log('a' > 'Z'); // true, lowercase letters are always greater than uppercase

// Remember, JavaScript uses UTF-16 to encode strings.
// Each character has its own corresponding decimal value.
console.log("a".codePointAt(0)); // 97
console.log("Z".codePointAt(0)); // 90

// You can also do the reverse
console.log(String.fromCodePoint(90)); // 'Z'
console.log(String.fromCodePoint(0x5a)); // 'Z' (hexadecimal also works)

