/*
JavaScript Destructuring

Destructuring in JavaScript is a concise way to extract values from 
arrays or objects into distinct variables.
*/

/*
Array Destructuring
Array destructuring allows you to unpack values from arrays into variables.
*/

const numbers = [1, 2, 3];
const [one, two, three] = numbers;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3

const [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3

const [a = 1, b = 2] = [undefined, 4];
console.log(a); // 1
console.log(b); // 4

/*
 Object Destructuring
 Object destructuring allows you to unpack values from objects into variables.
 */

const person1 = {
    empName: 'Alice',
    empAge: 25
};
const { empName, empAge } = person1;
console.log(empName); // Alice
console.log(empAge);  // 25

/*  Renaming Variables */

const person2 = {
    name: 'Alice',
    age: 25
};
const { name: firstName, age: years } = person2;
console.log(firstName); // Alice
console.log(years);     // 25

/*  Default Values */

const person3 = {
    stName: 'Alice'
};
const { stName, stAge = 30 } = person3;
console.log(stName); // Alice
console.log(stAge);  // 30

/*  Nested Destructuring */

const person4 = {
    plName: 'Alice',
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};
const { plName, address: { city, zip } } = person4;
console.log(plName); // Alice
console.log(city); // Wonderland
console.log(zip);  // 12345