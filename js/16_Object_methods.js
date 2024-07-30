/*
In JavaScript, objects come with a variety of built-in methods that help with managing 
and manipulating data. Here’s a rundown of some key inbuilt methods you might find useful
*/

/*
 1. `Object.keys(obj)`: Returns an array of a given object's own enumerable 
 property names.
 */

const obj1 = { a: 1, b: 2 };
console.log(Object.keys(obj1)); // ["a", "b"]

/*

 2. `Object.values(obj)`: Returns an array of a given object's own enumerable 
 property values.
 */

const obj2 = { a: 1, b: 2 };
console.log(Object.values(obj2)); // [1, 2]

/*

 3. `Object.entries(obj)`: Returns an array of a given object's own enumerable 
 string-keyed property [key, value] pairs.
 */

const obj3 = { a: 1, b: 2 };
console.log(Object.entries(obj3)); // [["a", 1], ["b", 2]]

/*

4. `Object.assign(target, ...sources)`: Copies all enumerable own properties from 
one or more source objects to a target object.
*/

const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // {a: 1, b: 2}

/*

5. `Object.freeze(obj)`: Freezes an object so that no changes can be made to it 
(e.g., no new properties can be added).
*/

const obj4 = { a: 1 };
Object.freeze(obj4);
obj4.a = 2;
console.log(obj4.a); // 1

/*

 6. `Object.seal(obj)`: Seals an object, preventing new properties from being added 
 and marking all existing properties as non-configurable.
 */

const obj = { a: 1 };
Object.seal(obj);
obj.b = 2;
console.log(obj.b); // undefined

/*

 7. `Object.hasOwnProperty(prop)`: Returns a boolean indicating whether the object 
 has the specified property as its own property (not inherited).
 */

const obj = { a: 1 };
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('b')); // false