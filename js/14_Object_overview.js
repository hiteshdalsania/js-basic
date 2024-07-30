/*

 In JavaScript, an object is a collection of related data and functionality, 
 typically represented as properties (which are key-value pairs) and methods 
 (functions that operate on the object's properties). 
 Objects are fundamental to JavaScript and are used to store and manage data, as well 
 as to create more complex data structures.
 Here's a basic overview of objects in JavaScript
*/

/*
 Creating an Object
 You can create an object using either the object literal syntax or the `new Object()` 
 syntax. The object literal syntax is more commonly used because it's more concise and 
 readable.
 */

let person1 = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

/*  Using the `new Object()` Syntax */

let person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.isEmployed = true;
person2.greet = function () {
    console.log("Hello, my name is " + this.name);
};

/*

 Accessing Object Properties
 You can access the properties of an object using dot notation or bracket notation.

*/

console.log(person2.name);  // Outputs: John
console.log(person2.age);   // Outputs: 30
console.log(person2["name"]);  // Outputs: John
console.log(person2["age"]);   // Outputs: 30

/*

Modifying Object Properties
You can add or modify properties of an object using either dot notation or bracket 
notation.

 */

person2.name = "Jane";
person2["age"] = 25;
console.log(person2.name);  // Outputs: Jane
console.log(person2.age);   // Outputs: 25

/*
 Adding Methods to an Object
 Methods are functions that are stored as object properties. 
 You can define methods when you create  the object or add them later.
*/

person2.greet = function () {
    console.log("Hello, my name is " + this.name);
};
person2.greet();  // Outputs: Hello, my name is Jane

/*

Objects and Inheritance
JavaScript supports prototypal inheritance, where objects can inherit properties 
and methods from other objects. This is achieved using prototypes.

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

/*

Built-in Objects
JavaScript includes several built-in objects like `Date`, `Math`, `Array`, and `String`. 
These objects come with their own properties and methods that are useful for various 
operations.

*/

let date = new Date();
console.log(date.getFullYear());  // Outputs the current year
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);      // Outputs: 5
console.log(Math.max(...numbers));  // Outputs: 5

