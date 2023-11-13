// Alerts shows a message and waits for the user to press OK:

alert("Hello");

// The window that appears is called a "modal window". This means
// the visitor can't interact with the rest of the page until they
// press "OK."


// Prompts give users a way to provide information. The first argument
// is the prompt message, and the second is an optional default value.

let result = prompt('What is your age?', 21);

// The input is stored as the 'result' variable, or null if the prompt
// was cancelled by the user.

// For backwards compatibility with IE, always supply the default argument.

// Confirms ask a yes or no question, and store true or false:

let isBoss = confirm("Are you the boss?");
console.log(isBoss); // true if the user clicks "OK", false if user clicks "cancel".

