/*
Create function that takes in one argument that is passed through a
conditional statement. Return the result as an alert or console.log. Test all
of your conditions to make sure you can receive all of your results back.
*/

var arg1 = 1500;
var arg2 = 1000;
var arg3 = 400;

var result = conditionChecker(arg2);

function conditionChecker (arg) {
  if (arg > 1000) {
    return "That's too many!";
  }

  else if (arg < 1000) {
    return "Bummer, you don't have enough points..";
  }

  else {
    return "Ah, just the right amount.";
  }
}

window.alert(result);
