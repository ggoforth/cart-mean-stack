###Control Flow / Math

###Geekwise Academy Cohort JS 1 - Accelerated

**Readability**

One of the best things you can do for yourself is making sure that your code is
readable and clean.  Use of white space, proper variable naming, proper
indentation and code organization **go a long way** towards keeping your code
more maintainable and easier to debug.

If you were jumping into a new project, which would you prefer to see?

```javascript
var foo='bar';
var baz = 'bleep'; var zip ='zop';

if(this){
then(that);} else { whatevs();}
```

OR

```javascript
var foo='bar',
  baz = 'bleep',
  zip ='zop';

if (this) {
  then(that);
} else { 
  whatevs();
}
```

The second code block is much easier to read, uses whitespace to
visually indicate variable declarations from control flow logic, etc...

**camelCasing variable names**

As a practice, we want to give our variables meaningful names,
and that sometimes means we need more than one word for variable names.
Since we can't have spaces in names, we use the camelCasing technique for
naming our variables. Camel Casing simply means lower casing the variable name, and
then upper casing all leters that would start a new word.  For instance, for a
first name variable you might write:

```javascript
var firstName = 'greg';
```

**CaSe SeNsItIvItY**

Javascript is case sensitive.  If you write a variable as
`fooBar` you must access / use it as `fooBar`.  `FooBar`, 
`fOObAR`, or anything else will yield a value of undefined,
so make sure your code always uses case sensitivity.

**Operators**

Operators allow us to take action on variables we may have
already created. Operators enable mathematical operations 
and comperisons so our code can become smarter, more elegant, 
and be capeable of more things.

Mathmatical Operators

* `=` (equals)
* `+` (addition)
* `-` (subtraction)
* `*` (multiplication)
* `/` (division)
* `%` (modulus)

Shorthand Mathmatical operators

* `+=`
* `-=`
* `*=`
* `/=`

Comparison Operators

* `==` (loose comparison)
* `===` (strict comparison)
* `!=` (loose not equal)
* `!==` (strict not equal)
* `<` (less than)
* `>` (greater than)
* `<=` (less than or equal)
* `>=` (greater than or equal)

Logical Oporators

* `&&` (and)
* `||` (or)

**Try it yourself**

Using [jsbin][jsbin] run a few mathmatical calculations and log the results in the console.

The shorthand operators noted above exist for quickly operating on existing variables in a 
less verbose manner.  Turning this:

```javascript
var a = 0;
a = a + 5; //a now equals 5
```

into this:

```javascript
var a = 0;
a += 5; //a now equals 5
```

Try some of these out in [jsbin][jsbin] as well.

**Order of Operations**

```javascript
//what's the answer?
var a = 5 + 5 * 10;
console.log(a);
```

If you wanted to modify the equation to have the addition execute first, you
would need to wrap those in parenthesis.

```javascript
//what's the answer?
var a = (5 + 5) * 10;
console.log(a);
```

**Modulus**

The modulus operator is a confusing one at first, but is useful to know how to
use once you get the hang of it.  You can use modulus (mod for short) to determine 
if something is even or odd, like if you're generating table rows and want to label 
them even / odd for a striped look.

Essentially modulus is the amount left over after division.  For example:

```javascript
0 % 2; //0
1 % 2; //1
2 % 2: //0
3 % 2: //1
4 % 2: //0
5 % 2: //1
```

As you can see above, `anything % 2 === 0` is an even number.  That is, 2 goes into any even 
number evenly, with nothing left over.  Any odd numbers will always have 1 left over, signifying 
an odd number.

**Incrementers and Decrementers**

It's also possible to easily increment and decrement a number by 1 in a single line.  The `++` 
and `--` operators handlethis and look like:

```javascript
var i = 0;
i++; 
console.log(i); //i is now 1
```

**parseInt and parseFloat**

`parseInt` and `parseFloat` are both used to convert strings into numbers or
convert decimals into integers.  Consider the following:

```javascript
var total = '150.00', //total is a string, notice the quotes
totalInt = parseInt(total, 10);

console.log(totalInt);
```

`parseFloat` works in the same way, but it keeps decimals intact:

```javascript
var total = '150.23', //total is a string, notice the quotes
totalFloat = parseFloat(total);

console.log(totalFloat);
```

If these functions can't parse the string in question, it will return `NaN`
which  stands for "Not a Number".  `NaN` has a falsy value.

**Note to self:** You can test if some input is `NaN` using the `isNaN(...)`
function.

```javascript
var input = '$150.00',
  int = parseInt(input),
  isNotANumber = isNaN(int);

console.log(isNotANumber); //true
```

**Control Flow**

Control flow is what allows code to make decisions.  It's what enables the "If
this then that else something else altogether".  There are many different types
of control flow.  We're going to discuss:

* if
* if / else
* if / else if
* if / else if / else
* switch
* ternary

In almost all cases, control flow will evaluate some condition and react
accordingly.  This enables us to run some code, while skipping other
parts.  The most basic control flow are `if` statements.

```javascript
var loggedIn = false;

if (loggedIn) {
alert('logged in');
}
```

In the code above, would the `alert` function be called?

If / else statements add one level of logic, allowing us an `else` block that
will be called if the condition being evaluated is false.

```javascript
var loggedIn = false;

if (loggedIn) {
  alert('logged in');
} else {
  alert('not logged in');
}
```

Which alert would we get in this case?

This if / else control flow is useful if there is only one condition you would
like to evaluate.  What if there are more decisions to make based on some logic?
This is where if / else if / else comes in:

```javascript
var age = 19;

if (age < 21) {
  alert('Must be 21 to enter.');
} else if (age > 25) {
  alert('You\'re far to old to be here.');
} else {
  alert('Welcome to da club');
}
```

It's also possible to evaluate more than one thing in an if conditional check
using logic operators.  For example:

```javascript
var a = true,
  b = false;

if (a && b) {
  console.log('Both a and b are true');
} else {
  console.log('Either a or b or both are false');
}

if (a || b) {
  console.log('Either a or b is true');
} else {
  console.log('Neither a nor b is true');
}
```

**Switch Statements**

Another common control flow element is the switch statement. Switch will evaluate 
the condition and then perform a given block of code based on that value. It looks like:

```javascript
var condition = "foo";

switch (condition) {
case "foo":
  alert("foo");
  break;
case "bar":
  alert("bar");
  break;
default:
  alert("wasn't foo or bar");
}
```

Careful with Switch statements however, they can lead to some unwanted results
if you forget the break keyword called "fall-through" or "pass-through". What
happens when you run the switch statement and omit the break in the "foo" case?

```javascript
var condition = "foo";

switch (condition) {
case "foo":
  alert("foo");
case "bar":
  alert("bar");
break;
default:
  alert("wasn't foo or bar");
}
```

**Ternary Operators**

Ternary operators are a shorthand for an if / else statement.  Very nice for
simple one liners to set a variable to one of two different values depending on
some condition.

It looks like `condition ? trueValue : falseValue`.

```javascript
var loggedIn = true;
var needsLogin = loggedIn ? false : true;

var age = 31;
var logout = age < 13 ? true : false;
```

While ternary's are awesome and you should use them, avoid nested ternary
syntax.  It's valid, but it's confusing as all get out...

```javascript
var dogs = false,
  cats = false,
  fish = true;

var hasPets = dogs ? true : cats ? true : fish ? true : false; //wat?
```

Just because you can do something, doesn't mean you should, just because you
have a hammer, not everything is a nail.

**Try it yourself**

Write a script and accompanying HTML file that will:

1. Prompt for a number value (provide a default of 10)
2. Prompt for another number value (provide a default of 10)
3. Convert the promped values into integers.
4. Make sure that the input from steps 1 and 2 are numbers.
5. If they are numbers, add the numbers together and log the value to the
console.
6. If either of the prompted values are not numbers, alert someting to the
user that they must input nubmers only.




