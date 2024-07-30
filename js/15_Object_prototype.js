/*
Object Protype 

 In JavaScript, prototypes are a fundamental feature that enables inheritance and the 
 creation of objects. Every JavaScript object has a prototype, which is also an object. 
 Through this prototype mechanism, objects can inherit properties and methods from other 
 objects. This concept is known as prototypal inheritance.

 */

/*

Understanding Prototypes

1. Prototype Chain:
When you try to access a property or method of an object, JavaScript first looks for 
the property or method on the object itself.

If the property or method is not found, JavaScript then looks for it on the object's 
prototype.  This process continues up the prototype chain until the property or method 
is found or the chain ends.

2. `__proto__` vs. `prototype`:
`__proto__` is an internal property that points to the prototype of an object.
`prototype` is a property of a constructor function that is used to set the prototype of
objects created by that constructor.

*/

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};
// Creating an object using the constructor
let john = new Person("John", 30);
// Accessing the method
john.greet();  // Outputs: Hello, my name is John
// Checking the prototype chain
console.log(john.__proto__ === Person.prototype);  // Outputs: true

/*
 Using `Object.create` for Prototypal Inheritance
 You can also create objects with a specified prototype using the 
 `Object.create` method
 */

let animal = {
    type: "mammal",
    sound: function () {
        console.log("Some generic sound");
    }
};
let dog = Object.create(animal);
dog.bark = function () {
    console.log("Woof!");
};
console.log(dog.type);  // Outputs: mammal
dog.sound();            // Outputs: Some generic sound
dog.bark();             // Outputs: Woof!

// Checking the prototype chain
console.log(dog.__proto__ === animal);  // Outputs: true

let person = {
    page: 24,
    pfullName: "Hitesh Dalsania",
    sayHello: () => {
        console.log(this)
        console.log("Hello How are u?")
    }
}

person.sayHello();

// Window
// Hello How are u?

let cat = {
    age: 2,
    fullName: "Pussy Brown",
    sayCat() {
        console.log(this)
        console.log("meow meow")
    }
}

cat.sayCat()

// cat object
// meow meow


cat.__proto__ = person;

console.log(cat.pfullName)

// Hitesh Dalsania

/*
 Prototype Property
The `prototype` property is particularly important when dealing with constructor 
functions. It allows you to define properties and methods that should be shared by 
all instances of a particular type of object.
*/

function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.start = function () {
    console.log(this.make + " " + this.model + " is starting.");
};
let myCar = new Car("Toyota", "Corolla");
myCar.start();  // Outputs: Toyota Corolla is starting.
// Checking the prototype chain
console.log(myCar.__proto__ === Car.prototype);  // Outputs: true

/*
 Built-in Objects and Prototypes
 JavaScript built-in objects such as `Array`, `Date`, and `String` also use prototypes. 
 For instance, all array instances inherit from `Array.prototype`.
*/

let numbers1 = [1, 2, 3];
console.log(numbers1.length);  // Outputs: 3
console.log(numbers1.__proto__ === Array.prototype);  // Outputs: true

/*
 Modifying Prototypes
 You can add methods to existing prototypes, but be cautious as this can affect all 
 instances of that prototype.
 */

Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0);
};
let numbers2 = [1, 2, 3];
console.log(numbers2.sum());  // Outputs: 6

/*
 Summary
 
 Every JavaScript object has a prototype, which is another object from which it can 
 inherit properties and methods.

 Prototypes allow for shared properties and methods, which can be defined once and used 
 by many instances.

 The prototype chain is a mechanism by which JavaScript objects inherit features 
 from one another.

 Constructor functions use the `prototype` property to define methods and properties 
 for their instances.

 Modifying prototypes can affect all instances, so it should be done carefully.
 */


 
// instance of check

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar1 = new Car('Toyota', 'Corolla');

console.log(myCar1 instanceof Car); // true
console.log(myCar1 instanceof Object); // true
console.log(myCar1 instanceof Array); // false

/////////////

let date = new Date();

console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
console.log(date instanceof Array); // false

//////////////