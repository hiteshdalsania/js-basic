/*
Debouncing delay the execution of a functin for certain amount of time.
ex. like search in flipkart product search box.
To avoid unnecessary api call on each keystroke.
*/

/*
<input type="text" onkeyup="betterFunction()" />
*/

let counter = 0;

function getData(){
    console.log("Fetching Data", ++counter)
}

function myDebounce(callback, wait){
    let timeout;
    return function(...args){
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout( () => {
            callback.apply(context, args)
        }, wait);
    }
}

const betterFunction = myDebounce(getData,500)


