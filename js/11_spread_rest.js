/*
 Spread Operator (`...`)
 The spread operator allows you to expand an iterable (like an array or object) into individual elements. 
This can be useful for copying, merging, or adding elements to arrays or objects.
*/

// Original array
const fruits = ['apple', 'banana', 'cherry'];
// Copying the array using the spread operator
const moreFruits = [...fruits, 'date', 'elderberry'];
console.log(moreFruits);
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Find Max number from array
let numbers = [6, 8 , -5, 25]
console.log(Math.max(...numbers)) // 25
console.log(Math.min(...numbers)) // -5

// Find unique numbers from array
let numb = [56,23,5,9,12,1,78,56,99,12,5]
let uniqueNumbers = [...new Set(numb)]
console.log(uniqueNumbers) //  [56, 23, 5, 9, 12, 1, 78, 99]


// Original object
const person = { name: 'Alice', age: 25 };
// Creating a new object by copying and modifying the original object
const updatedPerson = { ...person, age: 26, city: 'New York' };
console.log(updatedPerson); // Output: { name: 'Alice', age: 26, city: 'New York' }

/*
Rest Operator (`...`)
The rest operator allows you to collect multiple elements into a single array or object. 
It's used in function parameters and destructuring assignments.
*/

// Function using rest operator to collect arguments into an array
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

/* Object Example (Destructuring) */

// Object with multiple properties
const personName = { name: 'Alice', age: 25, city: 'New York', job: 'Engineer' };
// Destructuring the object and using rest operator to collect remaining properties
const { name, age, ...otherDetails } = personName;
console.log(name); // Output: 'Alice'
console.log(age);  // Output: 25
console.log(otherDetails); // Output: { city: 'New York', job: 'Engineer' }

/*
 In summary:
Spread Operator: Expands an array or object into individual elements.
Rest Operator: Gathers multiple elements into an array or object.
*/