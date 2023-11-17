
// A switch statement can replace multiple if checks.

let a = 2 + 2;

switch(a) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log('Unknown value');
}

// WARNING: If there is no break statement, code will continue until
// the end of the switch statement, ignoring the checks. For example:

switch (a) {
    case 3:
      alert( 'Too small' );
    case 4:
      alert( 'Exactly!' );
    case 5:
      alert( 'Too big' );
    default:
      alert( "I don't know such values" );
  }

// If a == 4, we will get these three alerts:

alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );

// Both switch and case statements allow arbitrary expressions

a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

// Several cases that share the same code can be grouped.

a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// Cases evaluate using strict comparison.

let arg = prompt("Give me a number");
switch(arg) {
    case '0':
    case '1':
        alert('One or zero');
        break;
    case '2':
        alert('Two');
        break;
    case 3:
        // This case will never execute because results from prompt
        // are always strings.
        alert('Never executes');
        break;
}