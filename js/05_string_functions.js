/*
 JavaScript provides a variety of methods for manipulating and working with strings. 
 Here are some commonly used string methods:
*/

 let str = "Hello, world!";

 /*
1. charAt(index)
   Returns the character at the specified index.
2. charCodeAt(index)
   Returns the Unicode value of the character at the specified index.
*/

console.log(str.charAt(1)); // "e"
console.log(str.charCodeAt(1)); // 101

/*
 3. concat(str1, str2, ...)
 Concatenates the string arguments to the calling string and returns a new string.
*/

let greeting = "Hello";
let subject = "world";
console.log(greeting.concat(", ", subject, "!")); // "Hello, world!" 


/*
4. indexOf(substring, start)
Returns the index of the first occurrence of the specified substring, starting the 
search at the specified index.

5. lastIndexOf(substring, start)
Returns the index of the last occurrence of the specified substring, starting the search 
backward at the specified index.
*/

console.log(str.indexOf("world")); // 7
console.log(str.lastIndexOf("o")); // 8

/*
6. replace(substring | regex, newSubstring | function)
Replaces occurrences of a substring or matches a regular expression with 
a new substring or the result of a function.
*/

console.log(str.replace("world", "there")); // "Hello, there!"

/*
7. search(regex)
Searches for a match between the regular expression and the string. 
Returns the index of the match.
*/

console.log(str.search(/world/)); // 7

/*
8. slice(startIndex, endIndex)
Extracts a section of a string and returns it as a new string.
If endIndex is omitted: extracts characters to the end of the string
*/

 console.log(str.slice(1, 5)); // "ello"
 console.log(str.slice(1)); // "ello, world!"
 console.log(str.slice(5, 1)); // no output

/*
9. split(separator, limit)
Splits a string into an array of substrings using the specified separator and 
returns the array.
*/

console.log(str.split(", ")); // ["Hello", "world!"]

/*
10. substring(startIndex, endIndex)
Extracts a section of a string and returns it as a new string.
If endIndex is omitted: extracts characters to the end of the string.
If start > stop, then substring will swap those 2 arguments.
If either argument is negative or is NaN, it is treated as if it were 0.
*/

console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(2)); // "llo, world!"
console.log(str.substring(2, 5)); // "llo"
console.log(str.substring(5, 2)); // "llo"

/*
11. toLowerCase()
Converts the entire string to lower case.
12. toUpperCase()
Converts the entire string to upper case.
*/

console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"

/*
13. trim()
Removes whitespace from both ends of the string.
14. trimStart()
Removes whitespace from start of the string.
15. trimEnd()
Removes whitespace from end of the string.
*/ 

let spacedStr = "   Hello, world!   ";
console.log(spacedStr.trim()); // "Hello, world!"
console.log(spacedStr.trimStart()); // "Hello, world!   "
console.log(spacedStr.trimEnd()); // "   Hello, world!"

/*
16. padStart()
The padStart() method in JavaScript is used to pad the current string with 
another string (repeated, if needed) until the resulting string reaches the given length. 
The padding is applied from the start (left) of the current string.

17. padEnd()
The padEnd() method in JavaScript is used to pad the current string with 
another string (repeated, if needed) until the resulting string reaches the given length. 
The padding is applied from the start (left) of the current string.
*/ 

let str1 = "abc";
console.log(str1.padStart(6, "x")); // Output: "xxxabc"

let str2 = "hello";
console.log(str2.padStart(10, "123")); // Output: "12312hello"

let str3 = "Hello";

// Pad with a longer custom string
console.log(str3.padEnd(10, "abc")); // "Helloabcab"

/*
18. repeat(count)
 Returns a new string with a specified number of copies of the string.
*/

console.log(str.repeat(2)); // "Hello, world!Hello, world!"

/*
19. startsWith(substring, start)
Checks if the string starts with the specified substring, starting from a given index

20. endsWith(substring, length)
Checks if the string ends with the specified substring.
*/

console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("rld!")); // true

/*
21. includes(substring, start)
Checks if the string contains the specified substring, starting from a given index.
*/

 console.log(str.includes("world")); // true

 /* Other Example */
let text = "Javascript";
let columnText = text.split("").join("\n");
console.log(columnText);
/*
J
a
v
a
s
c
r
i
p
t
*/ 