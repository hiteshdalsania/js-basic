/*

Any function that is passed as an argument to another function so that it can be exected
in that other function is called as a callback function.

A javascript callback is a function which is to be executed after another function finish
execution.

Callbacks are often used to handle asynchronous operations like loading 
data from a server or reading files.

*/

console.log("1")
console.log("2")

setTimeout(()=>{
    console.log("3")
}, 2000)

console.log("4")

// 1 2 4 3

function sum(a,b, mulCallback){
    setTimeout(()=>{
        console.log(a+b);
        mulCallback(a,b)
    }, 2000)
}

function multiply(a,b){
    console.log(a*b)
}

sum(4,5, multiply)

/* CallBack Hell */

/*
Callback Hell
When dealing with multiple asynchronous operations, 
callbacks can lead to deeply nested code, often referred to as "callback hell":
*/

function firstOperation(callback) {
    setTimeout(function() {
      console.log('First operation');
      callback();
    }, 1000);
  }

  function secondOperation(callback) {
    setTimeout(function() {
      console.log('Second operation');
      callback();
    }, 1000);
  }
  
  function thirdOperation(callback) {
    setTimeout(function() {
      console.log('Third operation');
      callback();
    }, 1000);
  }

  firstOperation( function(){
        secondOperation( function(){
            thirdOperation( function(){
                console.log("Complete")
            })
        })
  } )

 // firstOperation(()=>secondOperation( ()=>thirdOperation(()=>console.log("Complete")) ))