
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

// Take this example:

function makeUser() {
    return {
        name: 'Tobias',
        ref: this
    };
}

let user3 = makeUser();
console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

// The value of `this` inside makeUser() is undefined, because it is called as
// a function, not as a method with dot syntax.

// One final note: Arrow functions don't have a `this` property.

// Calculator exercise

let calculator = {
    read() {
        this.a = +prompt('A?')
        this.b = +prompt('B?')
    },
    sum() {return this.a + this.b },
    mul() {return this.a * this.b },
};

// Write this function so you can chain methods like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};