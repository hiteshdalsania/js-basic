/*

Throtling is JS technique used to limit function call if 
function call execute multiple times.
This technique is useful in situation when function call
execute multiple time in short period of time like when user
is scrolling or resizing windows or click button instantly
multiple time */

/* 
 below example user can not click button for 5 second
 once he click button
 */

function btnClick(){
    document.getElementById('myBtn').disabled = false;
    console.log("Button Clicked")
}

function myThrotling(callback, delay){
    return function(){
        document.getElementById('myBtn').disabled = true;
        setTimeout(()=>{
            callback()
        }, delay)
    }
}

const throtExample = myThrotling(btnClick, 5000)