/*

A promise in JavaScript is an object that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value. Promises provide a more elegant way 
to handle asynchronous operations compared to traditional callback functions, helping to 
avoid issues like "callback hell."

States of a Promise
A promise can be in one of three states:

1 Pending: The initial state, neither fulfilled nor rejected.
2 Fulfilled: The operation completed successfully, and the promise has a value.
3 Rejected: The operation failed, and the promise has a reason for the failure (an error).

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

function promiseDone() {
    console.log("Promise Done")
}

function promiseError() {
    console.log("Promise Error")
}

asyncFunc1().then(promiseDone).catch(promiseError)

/*
In Promise 1
Promise Done
*/

/*
Promises Chaining
Promises can be chained to handle a sequence of asynchronous operations.
*/

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
                resolve('Success In Promise 3')
            }
            else {
                reject()
            }

        }, 2000)
    })
}

function asyncFunc4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("In Promise 4");
            let error = false;
            if (error) {
                resolve()
            }
            else {
                reject('Error In Promise 4')
            }

        }, 2000)
    })
}



asyncFunc1().then().then(asyncFunc2).then(asyncFunc3).then(value=>{
    console.log(value)
}).then(promiseDone)


/*
In Promise 1
In Promise 2
In Promise 3
Success In Promise 3
Promise Done
*/


asyncFunc1().then().then(asyncFunc2).then(asyncFunc3).then(value=>{
    console.log(value)
}).then(asyncFunc4).catch(promiseError)


/*
In Promise 1
In Promise 2
In Promise 3
Success In Promise 3
In Promise 4
Promise Error
*/