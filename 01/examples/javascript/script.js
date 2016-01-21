var firstName = 'greg',
  lastName = 'goforth',
  fullName = firstName + ' ' + lastName,
  otherName = lastName + ', ' + firstName,
  address = '2625',
  age = 36,
  kids = 2,
  ageAddress = age + address,
  isHuman = true,
  homework = null,
  explodingCats = undefined;

console.log(age + kids);
console.log(ageAddress);
console.log(fullName, otherName);
console.log(firstName, lastName);
console.log(address, age);
console.log(isHuman);
console.log(homework);
console.log(explodingCats);

var greg = {
  firstName: 'Greg',
  lastName: 'Goforth',
  age: 36,
  worksAt: 'Bitwise Industries',
  likesCarrots: false
};

var christine = {
  firstName: 'Christine',
  lastName: 'Goforth',
  age: 33,
  worksAt: 'Bitwise Industries',
  likesCarrots: true
};

var people = [greg, christine];
var numbers = [1, 2, 3, 4, 5];

console.log(greg.firstName + ' ' + greg.lastName);
console.log('There are ' + people.length + ' people in the array');
console.log('There are ' + numbers.length + ' numbers in the array');

var alertString = 'The browser will show this message.';
alert(alertString);

var confirmString = 'Are you sure you want to do that?';
var answer = confirm(confirmString);
console.log(answer); //will be true or false

var promptString = 'Enter your first name';
var answer = prompt(promptString); //enter your name
console.log(answer); //will be your name entered in the previous step






