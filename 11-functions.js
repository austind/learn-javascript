// Functions make re-using code easy.

function showMessage() {
    alert('Hello world!');
}

// Variables declared inside a function are only visible to that function

function sayHello() {
    // This variable is only visible inside the function
    let message = 'Hello, world!';
    alert(message)
}

// Variables declared outside of functions are accessible within functions.

let userName = 'Austin'

function greet() {
    let message = `Hello ${userName}`;
    alert(message)
}
greet() // Hello, Austin

// Functions can also change variables declared outside the function.

function greetAgain() {
    // Notice this does not include the `let` statement.
    // It's referencing the global variable, not declaring a new, local variable.
    userName = 'Bob';
    alert(`Hello ${userName}`); // Bob
}
alert(userName) // Bob -- the function overwrote the global value

// If a function declares a variable with the let keyword, it won't overwrite the global.

function greetYetAgain() {
    let userName = 'Bruce';
    alert(`Hello ${userName}`); // Bruce
}
alert(userName) // Bob -- left unmodified from the last time it was used

// It's best practice to avoid global variables. Modern code has few or no globals.

// Functions can include parameters which pass data into them.

function showAnotherMessage(from, message) {
    alert(`${from}: ${message}`);
}
showMessage('Austin', 'Hello'); // Austin: Hello!
showMessage('Alice', 'Sup?'); // Alice: Sup?

// When a value is passed as a function parameter, it's called an argument.

// Parameter: the variable listed in the funciton declaration
// Argument: the value passed to the function's parameter at run-time.

// If we call showAnotherMessage() without both arguments, we get this:

showMessage('Levi'); // Levi: undefined

// Since the message argument wasn't given, it defaults to undefined.

// You can define default parameter values too:

function showGreeting(from, message = 'Howdy!') {
    alert(`${from}: ${message}`)
}

showGreeting('Austin') // "Austin: Howdy!"

// You can also pass functions as default parameters. These functions will only
// run if that parameter isn't provided when calling the function.

function concatenateStrings(string1, string2 = function() {
    // This code will only run if string2 isn't provided to concatenateStrings()
    return 'default_value'
}) {
    return string1 + string2
}

// There are other ways to provide default parameter values:

function showHello(message) {
    if (message === undefined) {
        text = 'Howdy!';
    }
}

function printText(text) {
    // The || operator means OR (i.e., the preceding operator is falsy)
    text = text || 'Howdy!'
}

// Newer JavaScript versions support the nullish coalescing operator ??
// This operator only treats null and undefined as falsy, but values like 0
// as true.

let value1 = 0;
let value2 = 1;
let value3 = value1 ?? value2 // 0
value1 = null
value3 = value1 ?? value2 // 1


// Functions that return no value return the undefined value

function nullFunction() {
    return;
}
result = nullFunction(); // undefined
result === undefined; // true

// As functions do something, function names should be verbs.

// Functions should also do one action only.

