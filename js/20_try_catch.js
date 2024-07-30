/*

In JavaScript, the try...catch statement is used to handle exceptions, allowing you to 
execute code and catch any errors that may occur during its execution. This is useful 
for error handling and for preventing your application from crashing due to unexpected 
errors. Here's how you can use it:

*/

/* Syntax

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of whether an error occurred or not (optional)
}

*/

try {
	let result = someFunctionThatMightThrow();
	console.log(result);
} catch (error) {
	console.error('An error occurred:', error.message);
} finally {
	console.log('This will run regardless of an error.');
}

/*
Explanation

try block: This block contains the code that you want to execute, 
which might throw an error.

catch block: If an error occurs in the try block, the control is transferred to the 
catch block, where you can handle the error. The error parameter 
contains the error object.

finally block (optional): This block contains code that will always execute 
after the try and catch blocks, regardless of whether an error was thrown or not. 
This is useful for cleanup actions, like closing files or releasing resources.
*/

try {
	let data = JSON.parse('{"key": "value"}'); // Valid JSON
	console.log(data);
} catch (error) {
	console.error('Failed to parse JSON:', error.message);
} finally {
	console.log('Parsing attempt finished.');
}



