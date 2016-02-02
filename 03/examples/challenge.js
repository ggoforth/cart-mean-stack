var question = 'Enter a name';
var names = [];

for (var i = 0; i < 5; i++) {
  names.push(prompt(question));
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

var longest = '';

//loop over all names
for (var j = 0; j < names.length; j++) {
  console.log(capitalize(names[j]));

  //figure out the longest name
  if (names[j].length >= longest.length) {
    longest = names[j];
  }
}

console.log('The longest name is: ' + capitalize(longest));