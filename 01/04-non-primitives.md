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
