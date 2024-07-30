/*
In JavaScript, a class is a blueprint for creating objects with specific properties 
and methods. Classes were introduced in ECMAScript 2015 (ES6) and provide a more 
convenient and clearer syntax to create objects and handle inheritance.
*/

class Car {
    carName = "Car";

    constructor(cc, brand) {
        this.cc = cc;
        this.brand = brand;
    }

    startCar() {
        console.log(this)
        console.log("Start Car")
    }
    stopCar = () => {
        console.log(this)
        console.log("Stop Car")
    }
}

let maruti = new Car(1000, "celerio");
console.log(maruti.cc); // 1000
console.log(maruti.brand); // celerio
maruti.startCar(); // complete Car object , "Start Car"
maruti.stopCar(); // complete Car object , "Stop Car"

/*
Inheritance
Classes can inherit from other classes using the extends keyword. 
This allows a class to inherit all the properties and methods from another class.
*/

class Ford extends Car {

   // Constructor Method: Initializes object properties.
    constructor(cc, brand, color) {
        super(cc, brand); // Call the parent class constructor
        this.color = color
    }

    startEngine = () => {
        console.log("start engine")
    }

    startCar() {
        console.log(this)
        console.log("Child Start Car")
    }
}

let figo = new Ford(1200, "abc", "white");
console.log(figo.cc) // 1200
figo.startCar() //Child Start Car
console.log(figo)

/*
Private Fields
Starting from ECMAScript 2022, you can define private fields using the # prefix, 
which are only accessible within the class.
*/

class Person {
    #age;  // Private field
  
    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
  
    getAge() {
      return this.#age;
    }
  }
  
  const person1 = new Person('Alice', 30);
  console.log(person1.getAge());  // Output: 30
  // console.log(person1.#age);  
  // SyntaxError: Private field '#age' must be declared in an enclosing class

 /////////////////////

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

let myDog = new Dog('Rex', 'German Shepherd');

console.log(typeof(Animal)) //function
console.log(typeof(Dog)) //function
console.log(typeof(myDog)) //object
console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true
console.log(myDog instanceof Array); // false