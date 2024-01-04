// Review:

// Seven primitive types: string, number, bigint, boolean, symbol, null, and undefined

// Primitives are not objects in JavaScript, unlike Python and other languages

// Methods on primitives are achieved through wrapper objects
let str = "Hello";
alert( str.toUpperCase()); // "HELLO"

/*
Here’s what actually happens in str.toUpperCase():
1. The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
2. That method runs and returns a new string (shown by alert).
3. The special object is destroyed, leaving the primitive str alone.
*/
