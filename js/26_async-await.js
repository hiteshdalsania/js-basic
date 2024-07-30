/*
In JavaScript, async and await are syntactic sugar built on top of Promises, 
introduced in ECMAScript 2017 (ES8) to make asynchronous code look and behave 
more like synchronous code. This helps in writing cleaner and more readable 
asynchronous code.

async Keyword
The async keyword is used to define an asynchronous function. When a function 
is declared as async, it automatically returns a Promise. 

await Keyword
The await keyword can only be used inside an async function. It makes JavaScript 
wait until the Promise is resolved and returns the result. Essentially, it pauses 
the execution of the async function and waits for the Promise.

*/

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("In Promise 1");
            let error = false;
            if (!error) {
                resolve()
            }
            else {
                reject()
            }

        }, 2000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("In Promise 2");
            let error = false;
            if (!error) {
                resolve()
            }
            else {
                reject()
            }

        }, 2000)
    })
}

function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("In Promise 3");
            let error = false;
            if (!error) {
                resolve()
            }
            else {
                reject()
            }

        }, 2000)
    })
}

function promiseDone() {
    console.log("Promise Done")
}

function promiseError() {
    console.log("Promise Error")
}

async function allFuncCall() {
    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
    promiseDone();
}

allFuncCall()

/*
Example: Fetching Data from an API
To demonstrate async and await in a more practical example
*/

async function getUserData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  getUserData();
  