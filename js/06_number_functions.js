/*
JavaScript provides a variety of methods for manipulating and working with numbers. 
Here are some commonly used number methods:

Conversion Methods
Mathematical Methods
Trigonometric Methods
Logarithmic Methods
*/

/* Conversion Methods */

/*
1 toString()
Methods returns number as a string
*/
let x = 123;
console.log(x.toString()) //"123"
console.log((123).toString()) //"123"
console.log((100/2).toString()) //"50"

/*
2 toFixed()
Formats a number to a specified number of decimal places.
*/

let y = 9.656;

console.log(y.toFixed(0)) // 10
console.log(y.toFixed(2)) // 9.66
console.log(y.toFixed(4)) // 9.6560
console.log(y.toFixed(6)) // 9.656000

/*
3 parseInt()
parseInt() parses a string and returns whole number
*/

console.log(parseInt("-10")) // -10
console.log(parseInt("-10.33")) // -10
console.log(parseInt("10")) // 10
console.log(parseInt("10.83")) // 10
console.log(parseInt("10 20 30")) // 10
console.log(parseInt("10 Years")) // 10
console.log(parseInt("Years 10")) // NaN

/*
4 parseFloat()
parseFloat() parses a string and returns whole number
*/

console.log(parseFloat("-10")) // -10
console.log(parseFloat("-10.33")) // -10.33
console.log(parseFloat("10")) // 10
console.log(parseFloat("10.83")) // 10.83
console.log(parseFloat("10 20 30")) // 10
console.log(parseFloat("10 Years")) // 10
console.log(parseFloat("Years 10")) // NaN

/* Mathematical Methods */

/* JS Math object allows us to perform mathematical task on numbers */

console.log(Math.PI) // 3.141592653589793

/*
5 Math.round()
return nearest integer
*/

console.log(Math.round(4.4)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.6)) // 5 

/*
6 Math.ceil()
return rounded up to its nearest integer
*/

console.log(Math.ceil(4.9)) // 5
console.log(Math.ceil(4.7)) // 5
console.log(Math.ceil(4.4)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.ceil(-4.2)) // -4
console.log(Math.ceil(-4.9)) // -4

/*
7 Math.floor()
return value rounded down to its nearest integer
*/

console.log(Math.floor(4.9)) // 4
console.log(Math.floor(4.2)) // 4
console.log(Math.floor(-4.2)) // -5

/*
8 Math.trunc()
return integer part of value.
*/

console.log(Math.trunc(4.9)) // 4
console.log(Math.trunc(4.2)) // 4
console.log(Math.trunc(-4.2)) // -4

/*
9 Math.sign()
it returns 1 if value is positive, -1 if negative, 0 if 0 or null
*/

console.log(Math.sign(4)) // 1
console.log(Math.sign(4.9)) // 1
console.log(Math.sign(0)) // 0
console.log(Math.sign(null)) // 0

/*
10 Math.max()
it returns maximmum value

11 Math.min()
it returns minimmum value
*/

console.log(Math.max(4.5, -1 , 9)) // 9
console.log(Math.min(4.5, -1 , 9)) // -1

/*
12 Math.random()
it return a random number between 0 (include) to 1 (exclude)
*/

console.log(Math.random()) // 0.8693314380930988
console.log(Math.floor(Math.random()*10))  // 8 - here random between 1 to 9
console.log(Math.floor(Math.random()*100))  // 80 - here random between 1 to 99
console.log(Math.floor(Math.random()*100)+1)  // 80 - here random between 1 to 100