###Control Flow - Looping

Looping is the act of repeating blocks of code based on the a given condition.
When the condition ceases to be truthy, the loop stops.

Three kinds of loops we'll discuss are:

1. `while`
2. `for`
3. `do / while`

**while(...)**

First, we'll cover while loops. while loops work by evaluating a condition, if
the condition is true, the loop "fires", executing all code it contains, once
the condition becomes false, the loop stops.

One important concept with while loops is that you must write the code that will
make the condition false, otherwise you get an infinite loop.

```javascript
var a = 0;
while (a < 10) {
    console.log(a);
    a++;
}
```

**for(...)**

With for loops we need to set up 3 things, our starting point, our condition,
and our incrementer.  This type of loop is nice because you do not need to
manage the incrementer in your normal code excecution, because it's built into
the loop structure.

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i);
}
```

Fantastic, so now I can loop, but, what if I want a loop to stop early?
Javascript provides two ways of controlling the flow of a loop, the `continue` and
`break` keywords.

`continue` will immediately reset the loop to the next iteration, and continue on
with the loop. It's basically just saying, disregard the rest of this loop and
go to the next loop.

**do while(...)**

The `do / while` loop is less commonly used however it's a useful tool to have
once you understand how it's used.

The do / while loop will always run at least once, then it evaluates it's
condition. If the condition is still true, it will continue the loop

```javascript
var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10);
```

**Try it yourself**

```
Create a loop (for or while) that will loop 10 times, and skip the 5th and 7th
loop. All other loops should log the loop number to the console.

The break keyword will, when encountered, immediately stop the loop AND all
subsequent loops.
```

**Try it yourself**

Create a for loop that will loop ten times, each time logging the current loop
number, but terminate the loop on the seventh loop.

**Looping Arrays**

So all our work with arrays up to this point has been retrieving array indexes
one at a time using a numbered bracket notation, IE `fruits[3]`. This is useful,
but what if your application requirements were such that you needed to do
something to every element in the array?

LOOP ALL THE THINGS! A for loop is a perfect mechanism for iterating over each
element in an array.

**Try it yourself**

```How would you create a for loop and log all the items in our fruit array to the
console? Hint...you may find the length property of an array useful here.```

**Try it yourself**

Create a program that will:

* Prompt the user for a starting number
* Prompt the user for an ending number
* These numbers will become the start and end points for our loop. If either
number is not a number, alert to the user that only numbers can be entered. (no
further action should take place, if / else will be handy here)
* Parse the start and stop points into numbers and store them in variables you can
use later
* Ensure that the start number is smaller than the stop number, otherwise stop
execution (if / else)
* Create a loop (for or while, you choose) that will loop starting at the starting
number, and end on the ending number.
* For each loop, log to the console if the number is even or odd (remember our %
operator :)

Then, create a program that will:

* Create an array holding the numbers 1 - 500
* Using the array as the basis for a loop, remove one element per loop (pop), with
the result being an empty array.
* What is the result? Anything surprising happen?  How can we avoid that???




[jsbin]: http://jsbin.com
