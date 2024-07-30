let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let childOne = document.querySelector(".child-one")

// parent.addEventListener('click', ()=>{
//     console.log("Parent Clicked")
// })

child.addEventListener('click', ()=>{
    console.log("Child Clicked")
})

/*
Here when we click on child , both event will call.
first child event and than parent event will call.
this call as event bubbling.
event bubbling occurs in child to parent way.
*/


parent.addEventListener('click', ()=>{
    console.log("Parent Clicked")
}, true)

/*
But if we pass true value in parent than parent will call
first and than child. this call event capturing.
event capturing occurs in parent to child way.
*/


child.addEventListener('click', (event)=>{
    event.stopPropagation()
    console.log("Child Clicked")
})


/* 
When we apply event.stopPropogation() in child even than
only child event will execute no parent will call.
*/


childOne.addEventListener('click', (event)=>{
    event.stopImmediatePropagation()
    console.log("Child Clicked ImmediatePropagation 1")
})

childOne.addEventListener('click', (event)=>{
    console.log("Child Clicked ImmediatePropagation 2")
})

/* 
sometime multiple events apply on one element same time.
but If we want to apply only current event and no other
event at this time we can use event.stopImmediatePropagation()
function.
*/