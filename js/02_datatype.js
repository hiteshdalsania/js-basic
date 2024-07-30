/*
In JavaScript, data types can be broadly categorized into 
two groups: 
1 primitive data type and 
2 complex data type OR Refrence data type OR objects. 
Here's a detailed overview of each type:

Primitive Data Types

1 Number: Represents both integer and floating-point numbers.
2 String: Represents a sequence of characters.
3 Boolean: Represents a logical entity and can have two values: true(1) and false(0).
4 Undefined: A variable that has been declared but not assigned a value.
5 Null: Represents the intentional absence of any object value.
6 Symbol: A unique and immutable primitive value and may be used as the key of an object property.
7 BigInt: Represents whole numbers larger than 2^53 - 1, which is the largest 
number JavaScript can reliably represent with the Number primitive.

*/

let num = 42;
let float = 3.14;

let str = "Hello, World!";

let isTrue = true;
let isFalse = false;

let notDefined;
console.log(notDefined) // undefined

let emptyValue = null;
console.log(emptyValue) // null

let sym = Symbol('description');
console.log(sym) // Symbol(description)

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt) // 1234567890123456789012345678901234567890n

/*

Complex data type OR Refrence data type OR objects

1 Object: General container for properties and methods.
2 Array: List-like objects whose prototype has methods to perform traversal and mutation operations.
3 Function: First-class objects that can be defined and called with a set of parameters.
4 Date: Represents a single moment in time in a platform-independent format.
5 RegExp: Used for pattern matching within strings.

*/

let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];
function greet() {
  return "Hello!";
}
let now = new Date();
let regex = /ab+c/;