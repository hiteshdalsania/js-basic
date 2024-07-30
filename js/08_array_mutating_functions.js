/*
 JavaScript array mutating methods are those that modify the original array directly, 
 rather than creating a new array. These methods alter the array's elements or structure, 
 such as adding, removing, or changing elements. Here are some common mutating methods, 
 along with examples using an array of objects.
*/

/*
 1. push()
 Adds one or more elements to the end of an array and returns the new length of the array.
 */

 let names1 = ["Alice", "Bob", "Charlie"];
 names1.push("David"); 
 // names1 is now ["Alice", "Bob", "Charlie", "David"]
 

/*
 2. pop()
Removes the last element from an array and returns that element.
*/

let names2 = ["Alice", "Bob", "Charlie"];
let lastName = names2.pop(); 
// names2 is now ["Alice", "Bob"], lastName is "Charlie"


/*
 3. shift()
 Removes the first element from an array and returns that element.
*/

let names3 = ["Alice", "Bob", "Charlie"];
let firstName = names3.shift(); 
// names is now ["Bob", "Charlie"], firstName is "Alice"


/*
 4. unshift()
 Adds one or more elements to the beginning of an array and returns the new length 
 of the array.
*/

let names4 = ["Alice", "Bob", "Charlie"];
names4.unshift("Zara"); // names is now ["Zara", "Alice", "Bob", "Charlie"]


/*
 5. splice()
 Adds or removes elements from an array. It can be used to insert, remove, 
 or replace elements.

 array.splice(startIndex, deleteCount, item1, item2, ..., itemN)

*/

/*
  Removing elements
*/

let fruits1 = ["apple", "banana", "cherry", "date"];
let removed = fruits1.splice(1, 2);

console.log(fruits1);  // Output: ["apple", "date"]
console.log(removed); // Output: ["banana", "cherry"]

/*
   Adding elements
*/

let fruits2 = ["apple", "banana", "cherry"];
fruits2.splice(2, 0, "date", "elderberry");

console.log(fruits2);  // Output: ["apple", "banana", "date", "elderberry", "cherry"]

/*
    Replacing Elements
*/

let fruits3 = ["apple", "banana", "cherry"];
fruits3.splice(1, 1, "date");

console.log(fruits3);  // Output: ["apple", "date", "cherry"]

/*
    Removing All Elements from a Specific Index
*/

let fruits4 = ["apple", "banana", "cherry", "date"];
fruits4.splice(2);

console.log(fruits4);  // Output: ["apple", "banana"]

/*
    Inserting Elements without Removing Any
*/

let fruits5 = ["apple", "banana", "cherry"];
fruits5.splice(1, 0, "date", "elderberry");

console.log(fruits5);  // Output: ["apple", "date", "elderberry", "banana", "cherry"]

/*
6. sort()
    Sorts the elements of an array in place and returns the array.
*/ 

let names5 = ["Charlie", "Alice", "Bob"];
names5.sort(); // names is now ["Alice", "Bob", "Charlie"]

let numbers1 = [5,6,1,89,11,53,69];
numbers1.sort(); 
console.log(numbers1) // [1, 11, 5, 53, 6, 69, 89]

let numbers2 = [5,6,1,89,11,53,69];
const sortedNumbers = numbers1.sort( (a,b) => { return a-b } ); 
console.log(sortedNumbers) // [1, 5, 6, 11, 53, 69, 89]

let students = [{ name: 'John', age: 20 }, { name: 'Jane', age: 22 }, 
    { name: 'Mark', age: 23 }];
students.sort((a, b) => a.age - b.age);
console.log(students);
// Output: [{ name: 'John', age: 20 }, { name: 'Jane', age: 22 }, { name: 'Mark', age: 23 }

/*
 7. reverse()
 Reverses the order of the elements in an array.
 */

 let names6 = ["Alice", "Bob", "Charlie"];
 console.log(names6.reverse()); //['Charlie', 'Bob', 'Alice']