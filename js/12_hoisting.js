/*
It is way by which we can use variable and functions before
initializing it.
* Only variable use with var key support hoisting.
* let, const and arrow function not support hoisting.
* normal function + inside var keyword support hoisting.
*/

console.log(person) // undefined
callHim(); // Hello Hi
console.log (people) // error cant access before initialize
add() // error add is not function
console.log(add) // undefined
console.log(printName) // undefined
printName() // error printName is not a function
varUsed() // Hello undefined
letUsed() // erroe cant used 'people' before intialize.

var person = 10;
let people = 52;

function callHim(){
    console.log("Hello Hi");
}

var add = function(){
    console.log("add here")
}

var printName = () =>{
    console.log("Print Full Name")
}

function varUsed(){
    console.log("Hello " + person)
}

function letUsed(){
    console.log("Hello " + people)
}