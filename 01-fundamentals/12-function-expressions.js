
// Functions can be defined as a *Function Declaration*, like normal:

function sayHi() {
    alert('Hello!');
}

// Functions can also be defined as a *Function Expression*, like this:

let sayHello = function() {
    alert('Hello!');
};

// This demonstrates how functions are a value, in this case, stored in the
// variable "sayHello".
// NOTICE the trailing semicolon after the function expression

// Callback Functions

// You can pass functions as arguments to other functions, like this:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert('You agreed.');
}

function showCancel() {
    alert('You canceled the execution.');
}

ask('Do you agree?', showOk, showCancel);

// You can achieve the same thing with function expressions:

ask(
    "Do you agree?",
    function() { alert('You agreed.'); },
    function() { alert('You canceled the exection.'); }
);

// Function declarations are available globally, by all code,
// before any other code is executed.

// Function expressions are only available once the expression
// is called.

// In strict mode, function declarations within a code block are
// only available inside that code block.