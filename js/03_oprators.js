/* In JavaScript operators are symbols or keyword used to perform
operation on values or variable.

Types of operator

1) Arithmetic Operator
2) Assignment Operator
3) Comparison Operator
4) Logical Operator
5) Conditional or Ternary Operator
6) Typeof Operator
7) Instanceof Operator
8) Optional Chaining Operator

1) Arithmetic Operator
Addition ( + )
Subtraction ( - )
Multiplication ( * )
Division ( / )
Modulus ( % )
Increment ( ++ )
Decrement ( -- )

*/

let sum = 5 + 3; // 8
let difference = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.6666666666666667
let remainder = 5 % 3; // 2
let power = 5 ** 3; // 125

let a = 10;
let b = 3;
let result = (a + b) * (a - b); // (10 + 3) * (10 - 3) = 13 * 7 = 91

/* Assignment Operator 

use to assign a value to a variable 

1 Simple Assignment ( = ): Assigns the right-hand operand's value to the 
left-hand operand.

2 Addition Assignment ( += ): Adds the right-hand operand to the 
left-hand operand and assigns the result to the left-hand operand.

3 Subtraction Assignment ( -= )
4 Multiplication Assignment ( *= )
5 Division Assignment ( /= )
6 Remainder Assignment ( %= )
7 Exponentiation Assignment ( **= )

other bitwise oprators are not cover here

*/
let x = 10; 

let y = 10;
y += 5; // y is now 15
y = y+5 // same as above but now y is 20

let z = 10;
z -= 5; // x is now 5

/* 
Comparision Operator

Comparison operators in JavaScript are used to compare two 
values and return a boolean value 

1 Equal ( == )
2 Not Equal ( != )
3 Strict Equal ( === )
4 Strict Not Equal ( !== )
5 Greater Than ( > )
6 Greater Than or Equal ( >= )
7 Less Than ( < )
8 Less Than or Equal ( <= )

*/

console.log(5 == 8) // false
console.log(5 == '5') // true

console.log(5 === 5) // true
console.log(5 === '5') // false

console.log(5 != 8)  // true
console.log(5 != '5')  // false

console.log(5 !== 8)  // true
console.log(5 !== '5')  // true
console.log(5 !== 5)  // false

console.log (5 > 8) // false
console.log (5 < 8) // true
console.log (5 >= 5) // true
console.log (8 <= 5) // false

/* 
Logical Operator

logical operators are used to combine conditional statements. 

1 Logical AND (&&)  both side condition fulfill than return true
2 Logical OR (||) any one side condition fulfill than return true
3 Logical NOT (!)

*/

console.log( (6<10) && (3>1) ) // true
console.log( (5=='5') || (52<35) ) // true
console.log( !(5==8) ) // true
console.log( !(5===5) ) // false

/*
Conditional or Ternary Operator

In JavaScript, the conditional (ternary) operator is a shorthand 
for the if...else statement. It allows you to assign a value 
to a variable based on a condition in a single line of code. 
The syntax for the ternary operator is:

condition ? expr1 : expr2

expr1 is the value returned if the condition is true.
expr2 is the value returned if the condition is false.

*/

let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";

console.log(canVote);  // Output: Yes, you can vote.

/* 
Typeof Operator

return data type of a variable/Object/function

*/

console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a historical quirk in JavaScript)
console.log(typeof Symbol('symbol')); // "symbol"
console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function

/*
Instanceof Operator

The instanceof operator in JavaScript is used to check if an object is an 
instance of a particular class or constructor function. 
It returns true if the object is an instance of the specified constructor, 
otherwise, it returns false.

*/

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function() {} instanceof Function); // true

 /* 
  Optional Chaining Operator(?)

The optional chaining operator (?.) in JavaScript allows you to safely access deeply 
nested properties of an object without having to explicitly check if each reference 
in the chain is valid. 
 
 */

 const car = {
    type : "Fiat",
    model : 500,
    color : "white"
}

console.log(car.name)  // undefined bcaz here object is not deeply nested

let user = {
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Wonderland"
    }
};

console.log(user?.address?.city); // "Wonderland"
// console.log(user.contact.phone); // giving error
console.log(user?.contact?.phone); // undefined

// some examples



