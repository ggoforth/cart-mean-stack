###History of JS

* Created around '95 by Brendan Eich.
* Mocha -> Livescript -> Javascript -> ECMAScript
* Programming language that powers the web
* Allows for "handling" user behavior. IE Do "this" if a user does "that".
* Comes with a toolkit for not only running "programs" but also manipulating
    and interacting with the document object model.
* Ecma International is a non profit with the goal of developing standards for
    the web. It's because of these guys that you can write (mostly) the same 
    javascript and every browser will understand what you want it to do.

####The DOM

* Is the HTML you write the DOM?
* No, that HTML is parsed by the browser and turned into the DOM.
* The DOM is more like a platform.  It's the representation of the page
    your display **AND** a way to interact with it.  It provides API's to enable
    this interaction. Javascript simply interacts with the dom (to manipulate 
    the page).

**Where does my code go???**

Javascript isn't much fun if you don't know where to start putting your code, so
lets start with the most basic example.

**Inline JS Code**

```html
<html>
<head>
	<title>My page</title>
</head>
<body>
	<span onclick="alert('Hello world!');" 
	      class="someclass"
	      id="someid">Click me</span>
</body>
</html>
```

s is one of the most basic ways of injecting javascript into the DOM.  Embedding
javascript in the dom like this is largely frowned upon, but it is valid, so
we'll discuss it here.  What would you reason that this code would do?

**Inline via script tag**

```html
<html>
<head>
	<title>My page</title>
</head>
<body>
	<h1>Hello World</h1>
	<script>
	    alert('Hello world!');
	</script>
</body>
</html>
```

**Via script tag**

```html
<html>
<head>
	<title>My page</title>
</head>
<body>
	<h1>Hello World</h1>
	<script type="text/javascript"
	        src="myjsfile.js"></script>
</body>
</html>
```

And then create `myjsfile.js` and put it in the same folder as your html file.

```javascript
alert('This is from an external script tag!');
```

This is usually the best way of adding javascript to your web pages, though
sometimes it's unavoidable to use the inline methods described above.

**Execution of a javascript file**

Javascript always executes from top to bottom, so, if you include two javascript
files:

```html
<script type="text/javascript" src="foo.js"></script>
<script type="text/javascript" src="bar.js"></script>
```

The browser will download `foo.js` first, and execute all the contents line by
line, then it will download `bar.js`, execute that, etc... 

Also, it's often the case that you'll want to use something that `foo.js`
provides inside `bar.js`.  To do this you must ensure that `foo.js` is loaded
first. 

**Key Takeaway**: Order of loading matters.

**Comments**

Comments are notes to your future self.  Code comments are a great way to remind
you or others that will be coming into contact with your code what the code was
intended to do.  Good comments:

* Do **not** explain **how** code works, rather **why** it exists.
* Good code should be self documenting, a good developer will be able to 
    understand what the code is doing, but will often question "why does
    this code exist?"
* Are short, consise and to the point.
* Can be single or multi line depending on what you're trying to
    explain.
* **Are up to date**
* All to often we'll alter / change the way code works, but not update the
    comments that already exist.  This is the quickest way to make comments 
    not only out of date, but confusing.  If comments don't fit the current 
    state of the code, **remove them**, and replace them with new comments 
    that reflect the current state of the code.

```javascript
//I'm a single line comment.

/**
I'm a multi line comment.
*/
```

**console.log(...)**

Before we get to much further, you should aquaint yourself with the
`console.log` function.  It's purpose is to log things to the developer console
that you're using.  Be it Chrome dev tools, Firebug for Firefox, etc...  You can
put a `console.log(...)` anywhere in your code and have it log to the console so
you can see what is happening in your code.  Useage is as follows:

```
var name = 'Greg';
console.log(name);
```
