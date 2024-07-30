/*
In JavaScript, `if`, `else if`, and `else` statements are used for conditional logic. Let's 
break down how they work with a complex example involving an array of objects.
*/

// Array of student objects
const students = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 82 },
    { name: 'Charlie', score: 70 },
    { name: 'David', score: 60 }
];
// Function to classify students based on score
function classifyStudent(student) {
    if (student.score >= 90) {
        student.grade = 'A';
        student.performance = 'Excellent';
    } else if (student.score >= 80) {
        student.grade = 'B';
        student.performance = 'Good';
    } else if (student.score >= 70) {
        student.grade = 'C';
        student.performance = 'Average';
    } else {
        student.grade = 'D';
        student.performance = 'Needs Improvement';
    }
}
// Classify each student
students.forEach(student => {
    classifyStudent(student);
});

// Output the classified students
console.log(students);

/* Output
[
   {name: 'Alice', score: 95, grade: 'A', performance: 'Excellent'},
   {name: 'Bob', score: 82, grade: 'B', performance: 'Good'},
   {name: 'Charlie', score: 70, grade: 'C', performance: 'Average'},
   {name: 'David', score: 60, grade: 'D', performance: 'Needs Improvement'}
]
*/


/*
 The `for` loop is a traditional looping structure in JavaScript. It's very flexible and can be used to 
 iterate over arrays by using an index.
*/

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name + ' is ' + users[i].age + ' years old.');
}

/* Output
Alice is 25 years old.
Bob is 30 years old.
Charlie is 35 years old.
*/

/*
The `for...of` loop is used to iterate over iterable objects like 
arrays, strings, maps, and sets. It iterates over the values of an iterable object.
 for (variable of iterable) {
  // code block to be executed
}
*/

const usersOfLoop = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
for (const user of usersOfLoop) {
    console.log(user.name + ' is ' + user.age + ' years old.');
}
/* Output
Alice is 25 years old.
Bob is 30 years old.
Charlie is 35 years old.
*/


/*
 The `for...in` loop is used to iterate over the enumerable properties of an object. 
 It's generally used for objects, but can also be used with arrays  (although this is 
 not recommended because it iterates over the properties and  not the values).
  for (key in object) {
  // code block to be executed
 }
 */

const usersForInArray = { name: 'Alice', age: 25, city :"Rajkot", country:"India" }
    
for (const text in usersForInArray) {
    console.log(text);
}

/* Output
name
age
city
country
*/

let text = ''
for (let x in usersForInArray){
    text += usersForInArray[x]
}
console.log(text); // Alice25RajkotIndia

/*
 Suppose you have an array of objects where each object represents a different type of 
 vehicle. You want to perform different actions based on the `type` property of each 
 vehicle. Here's an array of vehicles and a function that uses a `switch` statement 
 to handle different vehicle types:
*/

const vehicles = [
    { type: 'car', brand: 'Toyota', model: 'Camry' },
    { type: 'bike', brand: 'Harley-Davidson', model: 'Sportster' },
    { type: 'truck', brand: 'Ford', model: 'F-150' },
    { type: 'motorcycle', brand: 'Kawasaki', model: 'Ninja' }
];
function handleVehicle(vehicle) {
    switch (vehicle.type) {
        case 'car':
            console.log(`Car Details: ${vehicle.brand} ${vehicle.model}`);
            // Perform car-specific operations here
            break;

        case 'bike':
            console.log(`Bike Details: ${vehicle.brand} ${vehicle.model}`);
            // Perform bike-specific operations here
            break;
        case 'truck':
            console.log(`Truck Details: ${vehicle.brand} ${vehicle.model}`);
            // Perform truck-specific operations here
            break;
        case 'motorcycle':
            console.log(`Motorcycle Details: ${vehicle.brand} ${vehicle.model}`);
            // Perform motorcycle-specific operations here
            break;
        default:
            console.log('Unknown vehicle type');
    }
}
// Iterate over the array and handle each vehicle
vehicles.forEach(handleVehicle);

/*
Output
Car Details: Toyota Camry
Bike Details: Harley-Davidson Sportster
Truck Details: Ford F-150
Motorcycle Details: Kawasaki Ninja
*/