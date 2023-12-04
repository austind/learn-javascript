
// There is another concise syntax for creating functions:

let sum = (a, b) => +a + +b;

// This function adds a and b, converting to integer as necessary

console.log(sum("1", "2")) // 3

// Arrow functions are mostly used for one-liners and callbacks


let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );