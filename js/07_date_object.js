/*
JavaScript provides the Date object for working with dates and times. 
The Date object includes several methods for creating, manipulating, 
and formatting dates.
*/

let now = new Date();
console.log(now); // Wed Jul 24 2024 14:09:16 GMT+0530 (India Standard Time)

let specificDate = new Date('July 20, 2024 18:30:00');
console.log(specificDate); // Sat Jul 20 2024 18:30:00 GMT+0530 (India Standard Time)

// new Date(year,month,day,hours,minutes, seconds,miliseconds)
// Month is zero-indexed (0 = January, 6 = July, 11 = December)

let fromComponents = new Date(2024, 2, 13, 23, 30, 45); 
console.log(fromComponents); // Wed Mar 13 2024 23:30:45 GMT+0530 (India Standard Time)

let date = new Date();

/* Following example calculate from current date and time */

console.log(date.getFullYear());    // Gets the 4-digit year
console.log(date.getMonth());       // Gets the month (0-11)
console.log(date.getDate());        // Gets the day of the month (1-31)
console.log(date.getDay());         // Gets the day of the week (0-6, 0 = Sunday)
console.log(date.getHours());       // Gets the hour (0-23)
console.log(date.getMinutes());     // Gets the minutes (0-59)
console.log(date.getSeconds());     // Gets the seconds (0-59)
console.log(date.getMilliseconds()); // Gets the milliseconds (0-999)
console.log(date.getTime());        // Gets the time in milliseconds since January 1, 1970


