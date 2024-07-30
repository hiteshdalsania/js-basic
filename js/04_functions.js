/*
In JS function is a block of code it is designed to perform perticular task for signle or
multiple time

function functionName(parameters){
    code to execute
}

functionName(arguments)
*/


function greet(name){
    console.log("Hello, " + name)
}

greet("Hitesh") // "Hello, Hitesh"


/* Function Expression is a technique or process of assigning a 
anonymous function to a variable  like above example */

var personName = function(){
    console.log("Hitesh")
}

personName() //  Hitesh


/* Function can return value using return statement, if no 'return'
spefied it return undefine */

 function square(x){
    return x * x
}

const holdValue = square(5) 
console.log(holdValue) // 25

/*
    Immediately Invoked Function Expression (IIFE)
    An IIFE is function that runs as soon as it is defined
*/

/*
(function(){
    var message = "Hello, World!";
    console.log(message);
})(); //Hello, World!
*/


/*

Any Function which is taking anoher function as a argument that function 
is called Higher Order Function 

Here print and anonymous function passed in line no 8 are called callback 
function and myFunc is HOF 

*/

/* HOF example pass function as argument */ 

function myFunc(f){
    console.log(f);
    f();
}

myFunc ( function(){
    console.log("Hello");
});

/*

ƒ (){
    console.log("Hello")
}
 Hello

 */

/* another example of HOF pass as argument */

const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

/* Following HOF example of function retuning function */

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


/* Arrow function provide a shorter syntex for writing function  
introduced in ECMAScript 6 (ES6) */

/* No parameter */

const print = () => console.log("Hello Print");
print() //  Hello Print

/* Single parameter without parentheses */

const singleParameter = param => param * 2
console.log(singleParameter(7));  // 14

/* Multiple parameters , single line */ 

const multiParameter = (a,b) => a+b;
console.log(multiParameter(5,12));  //17

/* Multiple parameters , multiple line */ 

const multiLine = (a, b) => {
    let result = a + b;
    return result;
}

const multiLineResult = multiLine(15,17);
console.log(multiLineResult);  //32
// OR
console.log(multiLine(15,17));  //32

/* Named vs Anonymous Functions */

/* 
In JavaScript, functions can be defined in two main ways: as named functions and 
as anonymous 
functions. Each has its own characteristics and use cases. Here's a breakdown of each:

Named Function
 
A named function has a name and can be used for better readability and debugging. 
It can be defined 
using the `function` keyword.

Characteristics:
Can be called before its definition due to function hoisting.
Name is useful for debugging as the function name appears in stack traces.

*/

// Named function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!

/*
An anonymous function in JavaScript is a function that does not have a name. 
These functions are often used as a function expression.
These functions are often used for tasks where a one-time use is sufficient. 
They can be defined using the function keyword or the arrow function syntax.
*/

const sayHello = function() {
    console.log("Hello!");
  };
sayHello();

const add = (a, b) => a + b;
console.log(add(2, 3));

/* Pure vs Impure Functions */

/*
A pure function is a function that:
 1. Always returns the same output for the same input. 
 Given the same arguments, it will produce the same result.
 2. Does not cause side effects. It does not alter any state 
 or interact with the outside world (e.g., modifying global variables, 
 performing I/O operations).
 */

 function addFunc(a, b) {
    return a + b;
}

/*
 Same Input → Same Output: `add(2, 3)` will always return `5`.
 No Side Effects: It doesn’t modify any external state or variables.
 */

 /*
 An impure function is a function that:
 1. May return different results for the same input. 
 The output can vary depending on the state or external factors.
 2. May cause side effects. It can modify external state, interact 
 with the outside world, or depend on external variables.
 */

 let total = 0;
 function addToTotal(value) {
    total = total + value;
    return total;
 }

 console.log(addToTotal(5)) //5
 console.log(addToTotal(5)) //10
 console.log(addToTotal(5)) //15

 /*
Variable Output: The result of `incrementCounter()` changes each time it is called.
Side Effects: It modifies the `counter` variable, which is external to the function.
*/
