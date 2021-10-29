/*
Create a function that takes in two arguments and returns a concatenated
string either as a console.log or alert.
*/

var arg1 = "(~˘▾˘)~ happy (~˘▾˘)~";
var arg2 = " ⚆ _ ⚆ spooky ⚆ _ ⚆";
var arg3 = "Halloween, Gords and Ghouls!";

var sentence = message(arg2, arg3);

function message (arg1, arg2) {
  return "Have a " + arg1 + " " + arg2;
}

window.alert(sentence);
