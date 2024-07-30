/* javascript is programming language for web.
javascrpt used to create interactive and dynamic content on website. 
It can use with HTML and CSS. 

if someone disable javascript in browser than following code is execute

<noscript>Javascript is not enable</noscript>

<script src="js/arrow.js">  // arrow.js will execute
    console.log("Hello")  // this line not execute
</script>

<script src="js/arrow.js" /> // this will not work

<script src="js/arrow.js"></script> // this will work

<script defer src="js/arrow1.js"></script>

<script src="js/arrow2.js"></script>

In above example first arrow2 execute than arrow1 will execute.

*/

/*
variable used for storing data.
four way to assign variable.
*/

var x = 5;
let y = "Hello"
const price = 53
z = 45

/*

variable with var keyword use global scope. 
we can reassign and redeclare in block or global scope.

varibale with let keyword use block scope. 
we can reassign in same block scope. but can not redeclare.

variable with const keyword use block scope. 
It is read only named constant, can not reassign and redeclare.

we must declare value with const keyword.

const price = 53
price = 43 // give error

In array and object you can change value in const but can not redeclare and reassign
whole variable.

*/

const cars = ["Maruti", "Ford", "Tata"]

cars[1] = "Toyota"

console.log(cars) // [ "Maruti", "Toyota", "Tata"]

// cars = ["Toyota", "Audi"] // error


const student = {
    name : "Ramesh",
    gender : "male",
    age : 20
}

student.name = "Rakesh"
student.age = 22

console.log(student) //{name: 'Rakesh', gender: 'male', age: 22}

student.city = "Rajkot"

console.log(student) //{name: 'Rakesh', gender: 'male', age: 22, city: 'Rajkot'}










