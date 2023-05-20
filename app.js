/*                  Question-01. 
Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var num1 = prompt("Enter a positive number");
// document.write(`The number is: ${num1}` + "<br>");

// var roundOffValue = Math.round(num1);
// document.write(`Round off value is: ${roundOffValue}` + "<br>");

// var floorValue = Math.floor(num1);
// document.write(`Floor value is: ${floorValue}` + "<br>");

// var ceilValue = Math.ceil(num1);
// document.write(`Ceil value is: ${ceilValue}`);


/*                  Question-02. 
Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var num2 = prompt("Enter a negative floating number");
// document.write(`The number is: ${num2}` + "<br>");

// var roundOfValue = Math.round(num2);
// document.write(`Round off value is: ${roundOfValue}` + "<br>");

// var florValue = Math.floor(num2);
// document.write(`Floor value is: ${florValue}` + "<br>");

// var ceilValu = Math.ceil(num2);
// document.write(`Ceil value is: ${ceilValu}`);


/*                  Question-03. 
Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

// var num3 = prompt("Enter a number");
// var absoluteValue = num3.


/*                  Question-04. 
Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.*/

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var flrValuue = Math.floor(improvedNum);
// document.write(`Random die value is: ${flrValuue}`);


/*                  Question-05. 
Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */

// var coinToss = Math.random();
// var decisionPoint = (coinToss * 2) + 1;
// var florVlue = Math.floor(decisionPoint);
// if (florVlue === 1) {
//     document.write("Random coin value is Head");
// }
// else {
//     document.write("Random coin value is Tail");
// }


/*                      Question-06. 
Write a program that shows a random number between 1
and 100 in your browser. */

// var num4 = Math.random();
// var getNumber = (num4 * 100) + 1;
// var randomNumber = Math.floor(getNumber);
// document.write(`Random number between 1 and 100 is: ${randomNumber}`);


/*                  Question-07. 
Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

// var weight = +prompt("Enter your weight in kilogram");
// var rndOff = weight.toFixed(2);
// document.write(`The weight of user is: ${rndOff}kgs`);


/*                  Question-08. 
Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */

// var randomSecret = Math.random();
// var secretNumber = (randomSecret * 10) + 1;
// var secretFloor = Math.floor(secretNumber);
// document.write(`Your secret number is: ${secretFloor}` + "<br>");

// var userNumber = prompt("Guess my secret number between 1 to 10");
// if (userNumber > 10) {
//     document.write("Invalid number")
// }
// if (userNumber == secretFloor) {
//     document.write("WoW! You are genius");
// }
// else {
//     document.write("OOPs! Try again");
// }