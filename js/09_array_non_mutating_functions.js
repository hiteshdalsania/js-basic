/*
 In JavaScript, non-mutating methods for arrays do not change the original array. 
 Instead, they return a new array or a value, leaving the original array unchanged. 
 These methods are useful when you want to ensure that the original data remains intact, 
 which can be crucial for functional programming and state management in applications.
 Here are some common non-mutating array methods
 */

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

/*
 1. map()
   map() creates a new array by applying a function to each element of the original array.
*/

const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

let descriptions = users.map(user => `${user.name} is ${user.age} years old`);
console.log(descriptions);
// ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 35 years old"]

/*
 2. filter()
 filter() creates a new array with all elements that pass the test implemented by 
 the provided function.
*/

const adults = users.filter(user => user.age >= 30);
console.log(adults);
// [{ id: 2, name: 'Bob', age: 30 }, { id: 3, name:'Charlie', age: 35 }]

/*
3. reduce()
 reduce() applies a function against an accumulator and each element in the array 
 to reduce it to a single value.
*/

const doSum = [5, 8, 23, 12];
const doSumTotal = doSum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(doSumTotal); // 48

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 90

/*
4. concat()
    concat() merges two or more arrays and returns a new array.
*/

const moreUsers = [
    { id: 4, name: 'David', age: 40 },
    { id: 5, name: 'Eve', age: 45 }
];
const allUsers = users.concat(moreUsers);
console.log(allUsers);
// [{ id: 1, name: 'Alice', age: 25 }, ... , { id: 5, name:'Eve', age: 45 }]

/*
 5. slice()
   slice() returns a shallow copy of a portion of an array into a new array object.

   The slice() method is useful when you need to extract a portion of an array 
   without modifying the original array.
*/

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Using slice to get a portion of the array
let slicedFruits1 = fruits.slice(1, 3); // From index 1 to index 3 (not including 3)
console.log(slicedFruits1); // ["Banana", "Cherry"]

// Using slice to get all elements from index 2 to the end of the array
let slicedFruits2 = fruits.slice(2);
console.log(slicedFruits2); // ["Cherry", "Date", "Elderberry"]

// Using slice with negative index to get elements from the end of the array
let slicedFruits3 = fruits.slice(-3);
console.log(slicedFruits3); // ["Cherry", "Date", "Elderberry"]

/*
 6. find()
    find() returns the value of the first element in the array that satisfies 
    the provided testing function.
 */

const user = users.find(user => user.name === 'Charlie');
console.log(user); //  { id: 3, name: 'Charlie', age: 35 }

/*
 7. findIndex()
    findIndex() returns the index of the first element in the array that satisfies 
    the provided testing function.
 */

const index = users.findIndex(user => user.name === 'Charlie');
console.log(index); //  2

/*
 8. every()
    every() tests whether all elements in the array pass the test implemented by 
    the provided function.
 */

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // Output: true

/*
 9. some()
    some() tests whether at least one element in the array passes the test implemented 
    by the provided function.
*/

const hasTeenagers = users.some(user => user.age < 20);
console.log(hasTeenagers); // Output: false

/*
10. includes()
   includes() determines whether an array includes a certain value among its entries, 
   returning true or false.
*/

const ids = users.map(user => user.id);
const hasId = ids.includes(2);
console.log(hasId); // Output: true

/*
11. indexOf()
indexOf() returns the first index at which a given element can be found in the array, 
or -1 if it is not present.
*/

const names = users.map(user => user.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
const indexOfBob = names.indexOf('Bob');
console.log(indexOfBob); // Output: 1

/*
12. join()
    join() joins all elements of an array into a string and returns this string.
*/

const userNamesString = names.join(', ');
console.log(userNamesString); // Output: 'Alice, Bob, Charlie'

/*
13. flat()
    flat() creates a new array with all sub-array elements concatenated into it 
    recursively up to the specified depth.
*/

const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flatArray1 = nestedArray.flat(1);
console.log(flatArray1); // Output: [1, 2, 3, 4, [5, 6]]

const flatArray2 = nestedArray.flat(2);
console.log(flatArray2); // Output: [1, 2, 3, 4, 5, 6]

/*
14. flatMap()
flatMap() first maps each element using a mapping function, then flattens the result 
into a new array. It is identical to a map() followed by a flat() of depth 1.
*/

const newUsers = users.flatMap(user => [user.name, user.age]);
console.log(newUsers); // Output: ['Alice', 25, 'Bob', 30, 'Charlie', 35]


/* Use all together */

const students = [
    { name: "Alice", age: 20, grades: [85, 92, 88] },
    { name: "Bob", age: 22, grades: [78, 81, 79] },
    { name: "Charlie", age: 23, grades: [95, 97, 99] },
    { name: "David", age: 21, grades: [60, 65, 58] },
    { name: "Eve", age: 20, grades: [88, 91, 84] }
];

/*
 Using forEach
 First, let's use forEach to print each student's name and their average grade.
 */

students.forEach(student => {
    const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;
    console.log(`${student.name} has an average grade of ${averageGrade}`);
})

//Alice has an average grade of 88.33333333333333
//Bob has an average grade of 79.33333333333333
//Charlie has an average grade of 97
//David has an average grade of 61
//Eve has an average grade of 87.66666666666667

/*
 Next, let's use `map` to create a new array of objects where each object contains the 
 student's name and their average grade
*/

const studentsWithAverageGrades = students.map(student => {
    const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;
    return { name: student.name, averageGrade: averageGrade };
});

console.log(studentsWithAverageGrades);

/* Output 
[
    { name: 'Alice', averageGrade: 88.33333333333333 },
    { name: 'Bob', averageGrade: 79.33333333333333 },
    { name: 'Charlie', averageGrade: 97 },
    { name: 'David', averageGrade: 61 },
    { name: 'Eve', averageGrade: 87.66666666666667 }
]
*/

/*  Now, let's use `filter` to get a list of students who have an 
average grade of 85 or higher.
*/

const highAchievers =
    studentsWithAverageGrades.filter(student => student.averageGrade >= 85);
console.log(highAchievers);

/* Output
[
    { name: 'Alice', averageGrade: 88.33333333333333 },
    { name: 'Charlie', averageGrade: 97 },
    { name: 'Eve', averageGrade: 87.66666666666667 }
]
*/

/*
 Finally, let's combine `map` and `filter` to directly get the names of students 
 who have an average grade of 85 or higher.
 */

const highAchieverNames = students
    .map(student => {
        const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) /
            student.grades.length;
        return { name: student.name, averageGrade: averageGrade };
    })
    .filter(student => student.averageGrade >= 85)
    .map(student => student.name);
console.log(highAchieverNames);

// ['Alice', 'Charlie', 'Eve']