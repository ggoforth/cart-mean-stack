###Non Primatives

**Non-Primatives**

Non-primative values are data types that can be manipulated / changed without
creating a new version of that 'thing'.  There are two types of non-primative
data types in javascript. 

* Objects
* Array

```javascript
//example of an object literal
var person = {
    firstName: 'greg',
    lastName: 'goforth',
    worksAt: 'Bitwise Industries',
    employeeNumber: 9,
    isCEO: false
};

console.log(person.firstName); //logs 'greg'
```

Notice, an object acts as a set of key value pairs, the left side is the key, 
the right side is the value.  In this way, `objects` can hold other data types
within them.  `firstName`, `lastName`, and `worksAt` are all `String`s.
`employeeNumber` is a `Number` data type, and `isCEO` is `Boolean`.

Now, for an example of an array.  Visualize array's as lists.  Lists of numbers,
strings, boolean, objects, or other strings.  Any other data type actually, can
be stored in an array.

```javascript
var people = [1, 2, 3, 4];
console.log(people);
```

Before, we mentioned that arrays are lists of things.  You can access those
things via an index.  An index is just a number, essentially it's place in
line inside the array.

The only special thin you need to know about these indexes is that they are
zero based.  IE The first item in an array is stored in index `0`, the second
in index `1`, etc...

**Functions**

Functions in javascript are simply some grouped javascript behavior that
performs a specific action.  Javascript ships with some built in functions that
we will explore now.

**alert(...)**

```javascript
var alertString = 'The browser will show this message.';
alert(alertString);
```

The `alert` function will pop up a message that will essentially freeze program
execution until the message is dismissed.

**confirm(...)**

```javascript
var confirmString = 'Are you sure you want to do that?';
var answer = confirm(confirmString);
console.log(answer); //will be true or false
```

The `confirm` function will pop up a message that will essentially freeze
program execution until the message displayed is either confirmed or dismissed. The
function returns boolean depending on if it was dismissed or confirmed.

**prompt(...)**

```javascript
var promptString = 'Enter your first name';
var answer = prompt(promptString); //enter your name 
console.log(answer); //will be your name entered in the previous step 
```

**Try for yourself**

Using [jsbin](http://jsbin.com), create a javascript program that will:

* Ask the user their name
* Ask the user their email
* Ask the user their favorite movie
* Assign all the values prompted for into an object
* Log the object to the console
