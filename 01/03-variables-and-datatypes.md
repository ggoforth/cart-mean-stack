###Variables and Datatypes

**Variables & Datatypes**

Variables are one of the essential building blocks of just about any programming
language.  It's a container that can hold any kind of info, and then used
again later.

* Variables are storage for your data.
* Variables are defined using the `var` keyword.
* Multiple variables can be declared by comma separating multiple variable names.

```javascript
//single variable declaration
var name = 'greg goforth';

//multiple variable declaration
var firstName = 'greg',
  lastName = 'goforth';

//or
var firstName = 'greg';
var lastName = 'goforth';
```

So now we know how to create a variable in javascript, and we know that
variables are simple containers for any kind of data.  That begs the  question,
what kinds of data exist in javascript land?

**Primatives** 

A primative data type is one that is immutable.  That is, once it's created it
can not be changed.  Any manipulation of a primative results in another
primative being created.  The primative data types are:

* strings
* numbers
* boolean
* null
* undefined
 
```javascript
//string example
var name = 'greg';

//number example
var three = 3;

//boolean example, boolean is true or false 
var isAdmin = false,
  isHuman = true;

//null example
var payCheck = null; //representation of no value

//undefined example
var cats = undefined; //representation of a variable that is not yet set
```

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
