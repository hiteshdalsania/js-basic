/* Lexical scoping */

/*
Lexical scope is a fundamental concept in programming that determines 
the accessibility of variables and functions within a program. In simple terms, 
the lexical scope is the scope of a variable or function based on where it is defined 
in the source code. The scope is determined by the placement of variables and functions 
in the code, and it remains the same throughout the execution of the program.
*/

function outerFunc(){
    let rollNo = 42;
    let nameofStudent = "Hitesh"

    function innerFunc(){
        console.log(rollNo);
        console.log(nameofStudent);
    }

    innerFunc();
}

outerFunc();  

// 42 
// Hitesh


/*

Closures are functions that refer to independent (free) variables. 
In other words, the function defined in the closure ‘remembers’ the environment 
in which it was created.

*/

function outer(){
    empName = "Rajesh"
    function inner(){
        console.log("Inner", empName)
    }
    return inner;
}

console.log(outer())

/*
    ƒ inner(){
        console.log("Inner", empName)
    }
 */       

let catchName = outer();

catchName()  // Inner Rajesh



function outerComplex(){
    empName = "Rajesh"
    function innerComplex(){
        console.log("innerComplex", empName)
    }
     empName = "Suresh"
    return innerComplex;
}

let catchNameComplex = outerComplex();

catchNameComplex()  // Inner Suresh