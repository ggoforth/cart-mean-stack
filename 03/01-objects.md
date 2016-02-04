###Geekwise Academy Cohort JS 1 - Accelerated

####Week 3 Coding Challenge

Write a js program that will do the following:

* Prompt the user for 5 names, all lowercase
* Add each name to an array (so you end up with one array, with five names)
* Loop over the array and `console.log` the Capitalized version of the name: greg -> Greg
* EXTRA CREDIT: At the very end of the challenge, log whichever name is longest.

**Objects**

Objects in javascript allow us to store a collection of properties and functions. 
This is useful for grouping together functionality.  It also means that our global 
namespace isn't getting cluttered with the name of every single function we create.

**Try it for yourself**

Try it: just enter "window" in your console and press enter. What do you see? It
will vary depending on what site you're on, but the window is our "global"
namespace. It holds all the top level properties, functions, and objects that
are available to our application.

Objects are essentially a set of key = value pairs.  The typical way we'll talk
about creating objects is with the `{...}` notation.  You'll use the curly
braces, followed by a property name, a colon, and the property value.

All key value pairs are separated with a , (comma) Lets take a look at a simple 
object.

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        console.log("greg has spoken");
    }
};
```

Run the above code in your console. What happens? How can we use this thing?
We can access properties and functions of our objects using the `.` notation. Lets
look at out object values.  Add the following below the object above:

```javascript
console.log(greg.firstName);
console.log(greg.age);
greg.speak();
```

Lets pick that code apart. `greg` is telling javascript to look inside of the
`greg` object, and find a function named `speak`.

Once the function speak is located it's called like any other function.

Alternatively, we can also use `[...]` (bracket) notation for accessing our object
properties.

```javascript
greg["speak"]();
```

The above code works in the exact same way as dot notation. Sometimes you MUST
use this notation, for example, when the key for our js object is not a valid
object name. (See the favorite-food example)

You can also access object properties using variables.

```javascript
var prop = "speak";
greg[prop]();
```

What about if we access an object property that doesn't exist? What result does
that yield?

```javascript
console.log(greg.foo);
```

Non-existant properties when accessed will return undefined.

**Modifying Objects**

Unlike strings, objects are mutable (they can be changed). To change an object
we can simply use dot or bracket notation along with the assignment operator for
the new values.

**Try for yourself**

Modify your original object to add some more properties.

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        console.log("greg has spoken");
    }
};

//I'll create an array holding my kids name and age.
greg.kids = [
    {name: "jules", age: 3},
    {name: "hallie", age: 1}
];

console.log(greg);
```

Notice, the new kids array will holds a few new objects, representing my kids.

Try looping over the new array we just added to our object.

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        console.log("greg has spoken");
    }
};

//I'll create an array holding my kids name and age.
greg.kids = [
    {name: "jules", age: 3},
    {name: "hallie", age: 1}
];

for (var i = 0; i < greg.kids.length; i++) {
    var kid = greg.kids[i];
    console.log("My daughter " + kid.name + " is " + kid.age + "years old");
}
```


You can also add items to an array using the bracket syntax.

```javascript
greg["company"] = "bitwise indusries";
```

Now that we can add elements to an object, how do we remove them? That's where the
delete keyword comes into play.

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        console.log("greg has spoken");
    }
};

greg.kids = [
    {name: "jules", age: 3},
    {name: "hallie", age: 1}
];

delete greg["favorite-food"];

console.log(greg);
```

Just like any other data type, objects can be passed into functions as
arguments.

```javascript
    
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        console.log("greg has spoken");
    }
};

greg.kids = [
    {name: "jules", age: 3},
    {name: "hallie", age: 1}
];

function kidInfo(person) {
    var kids = person.kids;

    if (!kids) {
        return;
    }
    
    if (kids && kids.length) {
        for (var i = 0; i < kids.length; i++) {
            var kid = kids[i];
            console.log(person.firstName + "'s daughter " + kid.name + " is " + kid.age + " years old");
        }
    }
}

```

**`this` Keyword**

Lets revisit that speak function. We're currently hard coding in our string for
our speak function. Wouldn't it be nice if our function could use the properties
of the object it's in?

The most obvious way to refer to an objects properties is by referencing our
object. Lets alter our speak function to refer back to the firstName and
lastName of our object logging "Greg Goforth has spoken"

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        var message = greg.firstName + " " + greg.lastName + " has spoken";
        console.log(message);
    }
};
```

This makes sense, our function is reaching into an outer scope to find the greg
object, then looking at the firstName and lastName property for building the
message string.

We can however simplify this. For instance, lets say this is a large object, and
in many places we are referencing the object name (`greg` in this case). Then we
decide that "greg" isn't an appropriate name for this object, so we want to
change it. We would have to update all of the places where we are referencing
that name.

The `this` keyword solves this issue. So what is `this`? `this` is a special keyword 
that refers to the functions `context`. What is a `context` you might ask? The functions 
`context` is essentially just a reference to the object that owns that function. In this 
case, our `greg` object. Lets add a new function called "context" so we can investigate 
this a bit.

```javascript
var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak() {
        var message = greg.firstName + " " + greg.lastName + " has spoken";
        console.log(message);
    },
    context: function context() {
        console.log(this);
    }
};

greg.context();
```

Ok, so now we can see that the this keyword points to the object that the
function belongs to. That begs the question, what if a function isn't in an
object?

```javascript
function ordinaryFunction() {
    console.log(this);
}

ordinaryFunction();
```

What object gets logged when a function doesn't belong to an object?

