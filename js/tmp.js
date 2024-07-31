const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];


 for(let user of people){
    for(let obj in user){
        console.log(user[obj])
    }
    console.log("=========")
 }