/*

Getters and setters in JavaScript are special methods that allow you to get and set 
the values of object properties in a controlled way. They provide a way to control 
the access to an object's properties and can include additional logic when getting 
or setting the property values.

*/

const person = { 
	firstName: "Hitesh", 
	lastName: "Dalsania", 
	get fullName() { 
		return `${this.firstName} ${this.lastName}`; 
	}, 
	set fullNameSet(name) { 
		const parts = name.split(" "); 
		this.firstName = parts[0]; 
		this.lastName = parts[1]; 
	}, 
}; 

console.log(person.firstName); // "Hitesh"
console.log(person.fullName); // "Hitesh Dalsania" 
person.fullNameSet = "Jane Smith"; 
console.log(person.firstName); // "Jane" 
console.log(person.lastName); // "Smith"

person.fullName(); // error fullName is not function

