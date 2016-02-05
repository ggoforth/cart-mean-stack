//Create a function called `capitalize` that will capitalize any word passed into it.
function capitalize(str) {
  //str === 'faith'
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

//Create a function called `looper` that will loop over an array that's passed in and capitalize each of the items in the array and log it to the console.
function looper(arr) {
  debugger;
  for (var i = 0; i < arr.length; i++) {
    console.log(capitalize(arr[i]));
  }
}

//Create a function called `adder` that will add two numbers together and `return` the result
function adder(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

//Prompt the user for 5 names (all lowercase).
//Add each name to an array
var names = [];
for (var i = 0; i < 5; i++) {
  names.push(prompt('Enter a name'));
}

//Call the `looper` function passing to it the array.  Do all names get capitalized and logged to the console?
looper(names);

//Prompt the user for two numbers
var num1 = prompt('Enter a number');
var num2 = prompt('Enter another number');

//Call the `adder` function, passing to it both numbers.  EX: `console.log(adder(num1, num2));`
console.log(adder(num1, num2));

//Log to the console all names in the array on one line, delimited by `~~~` (remember our `join('~~~~')` function?)
console.log(names.join('~~~'));


