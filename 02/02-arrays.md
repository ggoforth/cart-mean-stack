###Geekwise Academy Cohort JS 1 - Accelerated

**Arrays**

Arrays are useful for keeping an ordered list of "things".  Arrays don't really
care what you put inside of them, they accept all the data types we've talked
about to date, and a few we haven't.  

To create a new array, you'll use the `[...]` syntax.  Items inside the array
are separated by a `,` (comma).  So, to create an `array` simply:

```javascript
var fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits);
```

Arrays also have a convenient way to determine how many things are inside them,
via the `length` property.

```javascript
var fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.length);
```

**Accessing Array Contents**

This is all very useful, but how do we get our data back out?  Wouldn't be very
useful if we couldn't access the data we are storing in our array.

Array's are index based, so you can use a numbered index to retrieve a specific
value, using the brackets to define which index you want.

```javascript
var a = [1, 2, 3];

console.log(a[N]); //where N would be a numbered index you want to retrieve

//this works too
console.log([1, 2, 3, 4][N]);
```

**Note To Self:** Array indexes (as well as other indexes we'll discuss later)
all start with 0. So in the example above, index zero would have the value 1,
index 1 has the value 2, index 2 has the value 3, etc...

```javascript
var firstFruit = fruits[0];
console.log(firstFruit); //log the first value in the array

var secondFruit = fruits[1];
console.log(secondFruit);

//etc...

console.log(fruits[4]); //what does a unknown index return?
```

**Adding Items to an array**

Javascript provides a function called `push` that allows for adding items to the
end of an array.  Give it a shot.

```javascript
//add an item to the array
fruits.push('blackberry');
```

When you add items to an array, the `length` property is automatically updated
for you. 

```javascript
var a = [1];
console.log(a.length);

a.push(2);
console.log(a.length);
```

Arrays can also contain other arrays.

```javascript
//create an array to hold multiple arrays
var fruitColors = [];
var cherry = ["cherry", "red"];
var banana = ["banana", "yellow"];
var orange = ["grape", "purple"];

//add all the fruit vars into the fruitColors array
fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(orange);

console.log(fruitColors);
```

Now lets attempt to pull out the color's only for each of the three fruits
in our fruitColors array.

```javascript
//we can access our array's based on index
console.log(fruitColors[0][1]);
console.log(fruitColors[1][1]);
console.log(fruitColors[2][1]);
```

**Removing Items from an array**

So now we can create Arrays, access array properties, and add items to arrays,
how about removing items? 

Items can be removed one at a time **from the end** of the array, using the
`pop` function. NOTE: This modifies the array.  You're not creating a new array
in this case, you're actually changing the original array.  The last item is
removed, and the length property is updated.

```javascript
var lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
```

Another handy array / string function we'll talk about is the slice function. 
It works on arrays a little differently. The slice function will make a copy 
of the specified indexes and return them in a new array.

The `signature` for the slice function looks like:

`fruits.slice(begin, [end])`

A `signature` is described as the way you call a function.  The order of the
arguments, the name of the function, etc... So, for the slice function the begin
is the zero based starting index, and the end is the index to stop at. NOTE: The
extraction does not include the end index!

```javascript
var fruits = ["apple", "cherry", "plum", "apricot"];
console.log(fruits.slice(1, 3));
console.log(fruits); //note, it's the same as the original array.
```

One point to remember about the slice functions is that it **does not** modify the
original array. But what if we actually did want to modify the original?

**splice** to the rescue! The splice function works in a similar way to the slice
function, however it allows you to modify the original array.

The signature of the splice function looks like:

```javascript
fruits.splice(begin, howManyToRemove, [additional, items, to, add]);
```

So `begin` is our starting index, `howManyToRemove` is how many items to remove from
the starting index, and `additional` `items` `to` `add` are more elements that you want
to add to the array (comma separated values).

```javascript
var fruits = ["cherry", "apple", "banana", "plum"];
fruits.splice(2, 1);
console.log(fruits);
```

There are a lot more things we can do with arrays, for more info, [check out the
MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

