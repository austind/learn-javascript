
// `this` is a special keyword to access properties within objects

let user = {
    name: "John",
    age: 27,

    sayHi() {
        alert(this.name)
    }
}

user.sayHi(); // John

// `this` is unbound. It can be used in any function, even outside an object.
// It is evaluated at runtime. So you can do this:

function sayHi() {
    alert(this.name);
}

let user1 = { name: 'Austin' };
let user2 = { name: 'Alyssa' };

user1.hi = sayHi;
user2.hi = sayHi;

user1.hi() // 'Austin'
user2.hi() // 'Alyssa'

// The unbound nature of `this` can be useful, as in the above example where
// a function can be defined outside an object. But it can also lead to errors
// and confusion.

// One final note: Arrow functions don't have a `this` property.