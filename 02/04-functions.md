###Geekwise Academy Cohort JS 1 - Accelerated

**Functions**

We've talked about functions during our first few classes, but up until now
we've not really looked at what they are, how they work, and most importantly,
how we can write our own.

  Lets define a javascript function as: **a set of statements that performs a task
or calculates a value**

Functions allow you to perform a series of tasks, and return a value that can be
used later.

  If a function does not return a value, it will automatically return undefined.

  All javascript datatypes have different functions that work on them. For
example:

  * Arrays have `push` and `pop`
* Strings have `split` and `charAt`
* Objects have `hasOwnProperty`

These functions are all built into these different datatypes.  When you create a
variable of type `String` then you inherit all of those properties.

```javascript
//string method, turns string into an array
//NOTE TO SELF...YOU MIGHT NEED THIS LATER...JUST SAYIN
var movie = "The Shawshank Redemption";
var moviePieces = movie.split(" ");
console.log(moviePieces);

//array method, turns array into string
console.log(moviePieces.join(" "));
```

**Writing our own functions**

Creating a function requires four things:

* The `function` keyword, followed by...
* The name of the function
* A list of arguments enclosed in parenthesis, and separated by commas
* The statements that define the function enclosed in curly braces

```javascript
function helloWorld() {
  console.log("hello world");
}
```

Lets pick that apart line by line:

* `function helloWorld() {` - the function keyword followed by an arbitrary
function name, an empty set of parenthesis (since we don't have any
arguments) and an opening curly brace.
* `console.log("hello world");` - the function body, this simply calls our console.log function.
* `}` - the closing curly brace, ending our function body.

Great, run that in the console. What happens?

Javascript functions need to be "called" or "invoked". Simply writing the
function only makes the javascript interpreter aware that it exists, it does not
call it right away.

You call a function by using it's name, followed by a set of parenthesis. Recall
other functions we've used, the functions are always called with the
parentheses. `console.log(...)`, `a.push(...)`, etc...

So, lets call our function...

```javascript
function helloWorld() {
  console.log("hello world");
}

hellowWorld();
```

Now you should see your console.log appear. So we called the function, and
javascript executed the code found inside it.

Now, lets create a function that takes 1 argument, and log that to the console
instead of the hard coded "hello world" string. While were at it lets rename it
to something more appropriate, like log.

```javascript
function logStuff(stuff) {
  console.log(stuff);
}

logStuff('the fox jumps over the lazy dog');
```

Notice, we do not use the var keyword when working with our function arguments.
The arguments are `scoped` to that function (more on this later).

**Try it yourself**

What happens if you call the `logStuff` function without passing any arguments.

Great, now we're getting somewhere, we can define our own functions that accept
arguments and do something with them. It's also worth pointing out that
functions can also call other functions.

Lets try something a little more complicated, but more useful. It would be
really nice if we had a way to capitalize a string, for proper names, etc...
Maybe js provides a nice way to do this:

```javascript

var name = "greg";
var capped = name.capitalize();

console.log(capped);
```

What do you get when you run that in your console?

`undefined is not a function`...

Lets look a little closer at that error... undefined is not a function. In our
example, we are calling two functions, `name.capitalize()` and `console.log()`.
Which one is likely giving us the problem?

Since we know `console.log()` is a real function, it's likely that javascript is
telling us that `name.capitalize` is undefiend, and thus when we try and call it,
it's not a function.

While js does not provide a way of capitalizing the first letter of a string, it
does provide a way to upper case an entire string. It looks like
`"greg".toUpperCase()`.

```javascript
console.log("greg".toUpperCase());
```

The result should be an entirely uppercase string. So how can we use this to our
advantage if we wanted to write a function that will capitalize just the first
letter?

Also, we want this function to accept a string and capitalize it, we need to be
able to get that value back out of the function, this is where the `return`
keyword is used. `return` will return the specified value out of the function so
you can use it else where.

**Try it yourself**

Write a function that will capitalize a string. Ex:

```javascript
capitalize('greg'); //should return Greg
capitalize('foo bar baz') //should return Foo bar baz
```

Hints:

* How can you access just the first letter?  How would we access the first item
in an array?  Does it work the same for strings???
* How would we `slice` part of a string?
* Could we access just the first character of the string, uppercase that, and
combine it with all but the first character of the string?

** Handling Edge Cases**

When writing functions (or any js program, really), it's very important to
consider edge cases. As a developer, it's your job to anticipate odd ways your
function might be used and make sure it handles those cases. What happens if you
call your capitalize function on an empty string? How can we fix that? What
other edge cases might be useful to consider?

```javascript
//this handles our case when no string is passed in (str is "falsy")
function capitalize(str) {
  if (!str) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
}
```

Notice the function now contains two return points, one for the case where we
don't have a string, and one where we do. It's also important to understand that
a function will stop executing any code following a return statement, so if no
string is passed in, nothing past return ""; will be executed.

What about making sure that the argument passed into the function is actually a
string?

The `typeof` operator is helpful here. `typeof` operator will evaluate the type of
thing we are working with, and return that value as a string.

**Try for yourself**
```javascript
var name = "greg";
console.log(typeof name);
```

So, how can we use typeof to ensure the argument is a string?

```javascript

function capitalize(str) {
  if (!str || typeof str !== "string") {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}
```

It's often these "edge cases" that will bite you in the long run. Always begin
thinking about odd ways someone might use your code and anticipate how you could
handle it!

**The `arguments` Keyword**

This is more of an advanced topic, but worth mentioning here. Inside any
javascript function, you will have available to use an array like object called
arguments.

I say array like because it looks like an array, but is actually missing many of
the functions arrays have to work with. However, it does contain a length
property.

Lets take a look at how the arguments variable works.

```javascript
//sum all numbers passed into the summer function
function summer() {
  console.log(arguments);
}

summer(1, 2, 3);
```

**Try for yourself**

Finish the function above, by filling out the rest of the function so that all
numbers passed into the function will be added to the total.  Anything
non-numberish should be ignored. Ex:

```javascript
summer(1, 2, 'foo', 3); //should return 6
```

**Function Scope**

Every js program runs with a "scope". This can be thought of as the things that
are currently available to the execution of a program. The main / base scope is
referred to as the "global" scope.

Creating a function in javascript creates a new scope.

One important thing to understand is that code outside of a function can not
access any code inside the function.

```javascript

function foo() {
  var a = "inside foo";
  return a;
}

console.log(a); //undefined, because "a" is "scoped" to the foo function
console.log(foo()); //should log "inside foo" because the function was called, and a value returned
```

Got it, code outside of a function can't access anything other than what's
returned from a function. So it stands to reason that code inside a function
can't access anything outside of the function either?

```javascript

var name = "greg";

function capitalize() {
  return name[0].toUpperCase() + name.slice(1);
}

var capitalizedName = capitalize();
console.log(capitalizedName);
```

Ah, maybe not what you expected? Functions do have access to the variables and
other functions that exists in outer scopes (which, when you think about it, is
why you can console.log(...) something inside of a function.

When a function is assigned to a variable, it's called a `function expression`.

```javascript
var capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};
```

So what is different here. Notice, the function declaration does not have a
name. This is what is known as an **Anonymous function**, or a function with no
name.

If it has no name, how do we call it? Same way we do with other functions, but
we use the variable name instead. In the case of the capitalize function above,
we can call it as `capitalize("greg")`.

```javascript
var capitalize = function (str) {
  if (!str) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
};

console.log(capitalize("greg"));
```

One thing to note about anonymous functions, they don't actually have to be
anonymous. In fact, it's good practice to name all your functions, for the
purposes of error reporting. The function below will work just the same.

```javascript
var capitalize = function capitalize(str) {
  if (!str) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
};

console.log(capitalize("greg"));
```

Now, lets try an experiment. Lets create a new function (not a function
expression) called logName. Then, above that code, lets call logName. What would
you expect to happen?

```javascript

logName("greg");

function logName(name) {
  console.log(name);
}
```

This is due to something javascipt is doing called hoisting.

Even though javascript executes linearly, variable and function definitions are
actually **hoisted** to the top of the scope. So even though we call `logName`
before we define it, javascript is actually recognizing the definition of the
function, hoisting it to the top of the scope, which makes it available to call
before the definition in the code actually happens.

Is the same true of function expressions?

```javascript

foo("greg");

var foo = function (name) {
  console.log(name);
};
```

So what happend there? Why did we get the undefined is not a function?

The reason for this is that only named function definitions and variable
declarations are hoisted **to the top of the nearest function scope**.
The values of the variables are not hoisted.

Lets look at this a little closer. What would you expect to happen in the
example below?

```javascript
var name = "Greg";

function alertName() {
  alert(name);

  var name = "Jules";

  alert(name);
}

alertName();
```

**Try for yourself**

* Start by creating an array of your top 10 favorite movies, the titles should be all lowercase
* Create a function called capitalize that will accept a string as an argument, capitalize that 
    string, and return the capitalized value. Please consider edge cases.
* Create a loop that will loop over all movies in your movies array.
* Inside each loop, you should capitalize the movie name and set the value in the
array.
* After the loop has been completed, log the movies to the console. The result
should be that the first letter of each movie has been capitalized.

