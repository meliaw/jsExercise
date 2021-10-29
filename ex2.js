/*
2. Create a conditional statement that compares two numbers.
You can choose if those numbers will be equal, less than, greater than,
less than or equal to, or greater than or equal to each other. Include an
if, else if, and else statement. Create an alert that gives your user feedback
based on the number. Test your statement with different numbers to make sure
all alerts work.
*/

var num1 = 15;
var num2 = 1.67;
var num3 = 9;
var num4 = 1.67;

if (num2 < num1) {
  window.alert("One of these is smaller than the other...");
}

else if (num2 == num1) {
  window.alert("They're the same!");
}

else {
  window.alert("Math is tiring. Come back later.");
}
