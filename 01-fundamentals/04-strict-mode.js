"use strict";

/*
This script has "strict mode" enabled by the presence of "use strict"; as
the first line in the file.

Strict mode was introduced in 2009 with ECMAScript 5. It enables certain modern
features that are not enabled by default, to ensure backwards compatibility with
old code.

"use strict" can also be placed at the beginning of functions to enable strict
mode only on those functions.

*/

console.log('Some message');

"use strict";

// This does not enable strict mode, as there is code above the statement.

// NOTE: There is no way to negate strict mode once enabled (i.e, there is
//       not a "no use strict"; statement.)

// Browser consoles do not enable strict mode by default. The way to enable it is
// to type 'use strict';<Shift+Enter for a newline>
// then any additional code you want to use strict mode.

// Classes and modules automatically enable strict mode, so any code that uses
// classes and modules does not need to explicily enable strict mode.