/*

Currying is a functional programming technique in JavaScript 
where a function is transformed into a sequence of functions, 
each taking a single argument. Instead of taking all arguments 
at once, a curried function takes the first argument and returns 
a new function that takes the second argument, and so on, until 
all arguments have been provided. This allows for partial 
application of functions, where some arguments are fixed and 
the resulting function can be called with the remaining arguments 
later.

*/


function curryAdd(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  const curriedAdd = curryAdd(1)(2)(3); // 6
  console.log(curriedAdd); // 6


  // Infinite Currying

  function add(a){
    return function(b){
        if(b){
            return add(a+b)
        }
        return a;
    }
  }

  console.log(add(2)(3)(6)(9)())  // 20