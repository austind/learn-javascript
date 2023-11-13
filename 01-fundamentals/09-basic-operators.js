// Terms: unary, binary, operand

// Operand: what operators are applied to. E.g., in 5 + 2 the operands are
//          5 and 2.
// An operator is unary if it has a single operand. E.g., the unary negation
// operator - reverses the sign of a number:

let x = 1;
x = -x
console.log(x); // -1

// An operator is binary if it has two operands. The - operator can also be binary:

let y = 2, z = 3;
console.log(z - x); // 1

// Technically these are two different operators (negation and subtraction)
// with the same symbol (-)

// Math operators:
// Addition: +
// Subtraction: -
// Multiplication: *
// Division: /
// Remainder: %
// Exponentiation: **

console.log(5 % 2); // 1 -- remainder of 5 divided by 2
console.log(2 ** 2); // 4 (2^2 = 4)

// You can use exponentiation with non-integer numbers, e.g. for square or cubic roots:

console.log(4 ** (1/2)); // 2 -- square root of 4 is 2
console.log(8 ** (1/3)); // 2 -- cubic root of 8 is 2

// String concatenation works with binary +

console.log("my" + "string") // mystring

// If any operand is a string, the other is converted to string too:

console.log('1' + 2); // "12"
console.log(2 + "1"); // "21"

// Concatenation works left to right:

console.log(2 + 2 + '1'); // 41 -- the first operation is 2+2=4, then concatenated to "1"
console.log('1' + 2 + 2); // 122 -- string "1" concatenated to "2" then "2" again

// Only addition does this conversion to strings. Other operators convert operands to numbers:

console.log(6 - '2'); // 4
console.log('6' / '2'); // 3

// The unary plus operator does nothing to numbers, even negative numbers:

let integer = -1
console.log(+integer); // -1 -- the + unary operator does NOT negate sign!
console.log(-integer); // 1 -- only the - unary operator negates signs.

// The unary + operator converts other values to numbers:

console.log(+true); // 1
console.log(+""); // 0

// In effect, the unary + operator is a shorthand for Number()
// This comes in handy when doing math operations on data received from
// HTML forms, which returns them as strings.

let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", binary plus concatenates strings

// If you want to perform math:

console.log(+apples + +oranges); // 5

// Unary operators have higher precedence than binary operators. I.e., they
// are evaluated first, as in order of operations in math.

// = is also a binary operator with low precedence (evaluated after all others).

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

// You can also chain assignments:

let d, e, f;
d = e = f = 2 + 2;
console.log(d); // 2
console.log(e); // 2
console.log(f); // 2

// You can also modify values in place:

let n = 2;
n = n + 5; // this is the same as:
n += 5; // shorter, more concise way to add 5 to n

// Also works with multiplication:

n *= 2; // 14

// You can also add or remove one from numbers:

let counter = 2;
counter++;
console.log(counter); // 3
counter = 2;
counter--;
console.log(counter); // 1

// You can use the increment (++) or decrement (--) operators before or
// after variable names, known as prefix or postfix form. To see the difference,
// see this example:

counter = 1;
console.log(++counter); // 2 -- the counter variable is incremented, and the new value is returned
counter = 1;
console.log(counter++); // 1 -- the counter variable is incremented, but the old value is returned

// The same rules apply to decrement.

/*
There are several bitwise operators, but they aren't commonly used outside cryptography and a few
other edge cases:

- AND (&)
- OR (|)
- XOR (^)
- NOT (~)
- LEFT SHIFT (<<)
- RIGHT SHIFT (>>)
- ZERO-FILL RIGHT SHIFT (>>>)
*/

// The comma operator lets us evaluate several expressions, but only
// the last one is returned.

let g = (1 + 2, 3+ 4);
console.log(a); // 7 (the result of 3 + 4)

// This is mostly used to declare several variables on one line, as in:
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
// }

// But since this isn't very readable, don't do that without thinking about
// why you're doing it.