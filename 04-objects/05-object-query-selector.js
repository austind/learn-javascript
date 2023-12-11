
// Optional chaining ?. is a safe way to access nested object properties, even if
// an intermediate property doesn't exist.

let user = {};

alert(user.address.street); // Error
alert(user.address ? user.address.street : undefined); // Works but inelegant
alert(user?.address?.street); // undefined (no error)

// You can use ?. to call functions that may not exist:

user.admin?.() // No error

// Summary:

obj?.prop       // Returns obj.prop if obj exists, otherwise undefined
obj?.[prop]     // Returns obj[prop] if obj exists, otherwise undefined
obj.method?.()  // Calls obj.method() if obj.method exists, otherwise returns undefined