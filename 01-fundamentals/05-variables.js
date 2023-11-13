"use strict";

// Create variables with the let keyword.
// The following line declares the "message" variable.

let message;

message = "Howdy";

// You can now use the "message" variable in any function:

alert(message)

// You can also declare and assign values to variables in one line:

let other_message = "Howdy"

// You can also declare multiple variables on one line, but this isn't best practice:

let user = 'John', age = 25, height = 76.0;

// It's better to define variables on their own lines:
let userName = 'John'
let userAge = 25
let userHeight = 76.0

// Older scripts use "var" to declare variables. There are differences between
// how "let" and "var" work. All you need to know now is that "let" is the new,
// correct way to declare variables.

// You cannot re-declare the same variable. This code will produce an error:
// let message = 'Howdy';
// let message = 'Oops';

// To re-use the variable "message", refer to it without the "let" keyword:

message = "This works";
message = "and so does this";

// Variables can contain any combination of alpha, numeric, $ and _ characters.
// Variables may not start with a number.
// Valid variables:

let $
let _
let abc123
let variable_name

// NOTE: It's common convention to use camelCase when defining longer variable names.

// Variable names are case sensitive.

// Non-Latin characters are allowed, but discouraged.

let имя = '...';
let 我 = '...';

// These work, but are difficult to maintain and shouldn't be used.

// There is a list of reserved words which may not be used as variable names:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// In old versions of JavaScript, it was possible to use a variable without
// first declaring it, as in:

// number = 5;
// alert(number) // 5

// This is now bad practice, and won't work when strict mode is enabled:
// "use strict";
// number = 5 // error: num is not defined

// Constants are variables that never change after assignment.

const someDate = '1986-12-04';

// trying to re-assign the variable will throw an error:

someDate = '2004-06-12'; // cannot reassign constant

// There is a widespread convention to use uppercase constants for hard-coded
// data that won't change and is known prior to execution.

const COLOR_RED = "#F00";

// Use it like this:
let color = COLOR_RED;
alert(color) // #F00

// Avoid generic names for variables like "data" or "value" unless the data and
// value they refer to is especially clear from the context of the code.

// In most cases, it's better to use descriptive variable names as often as needed.