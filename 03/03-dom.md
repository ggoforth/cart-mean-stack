###Geekwise Academy Cohort JS 1 - Accelerated

**The DOM**

What is the DOM?

The Document Object Model (DOM) is a programming interface for HTML. It's what
allows javascript to manipulate an HTML page after it's been loaded in the
browser.

The DOM provides a representation of the document as a structured group of nodes
and objects that have properties and methods

**Accessing Page Elements**

Javascript wouldn't be of much use to us if we couldn't use it to manipulate
HTML pages in some way.

In order to begin manipulating elements on the page, we need to know how to
"reference" those items. For example, if we want to change our pages `<h1>` tag,
we need to be able to tell javascript which node on the page we want to change.

Lets create an html file with the following content:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1 id="myHdr">This is an h1 tag</h1>
    <script type="text/javascript" src="dom.js"></script>
</body>
</html>
```

The DOM gives us some nice ways to select elements on a page for maniuplating.
The first method we'll discuss is called `document.getElementById()`.

Lets select the `h1` tag using the `getElementById` function. It takes as an
argument the id of the element you want to select, `myHdr` in this case.

Put the following script in the `dom.js` file.

```javascript
var h1 = document.getElementById("myHdr");
console.log(h1);
```

Run that page in your browser, you should see the element logged to your
console.

Now type h1. (notice the period). The console should now show you all the
various properties and functions available as part of that object.

**Element Attributes**

You can now see that a "node" or "element" has an underlying javascript object
that provides all kinds of methods for you to interact with it. Lets look at
some attributes. First, modify your h1 tag to include a class="hdr" attribute.

```html
<h1 id="myHdr" class="hdr">This is an h1 tag</h1>
```

Now lets use the h1.hasAttribute() function to see if the given dom node has a
specific attribute.

```javascript
var hasClass = h1.hasAttribute("class");
console.log("The h1 tag has a class attribute: ", hasClass);
```

Run the code above, it returns boolean so if the attribute exists, it will
return true otherwise it will return false.

Cool, so we can see if an element has a specific attribute, what about adding
new attributes? Easily done. Using the same DOM node we can call the
h1.setAttribute(). It takes two arguments in it's signature, the property name
to set, and it's value. Lets add a rel attribute.

```javascript
h1.setAttribute("rel", "something");
console.log(h1);
```

Awesome, so now we can add and look at attributes on a dom node, I guess the
only thing left is to be able to remove them. This is done with the
removeAttribute function.

Lets remove the rel attribute now.

```javascript
h1.removeAttribute("rel");
```

These functions become really handy so practice them! You can now manipulate ANY
webpage you go to that uses id's on their elements using your console!

**Creating Elements**

Here is where the real magic of the DOM becomes apparent. Not only can we
inspect the existing DOM, we can add to it! To create an element we use the
`document.createElement()` function. It takes as an argument a string with the
same name as the tag you want to create. So if you wanted to create a anchor,
you would use `document.createElement("a")`. Lets make a new element now...

```javascript
var a = document.createElement("a");
console.log(a);
```

Great, so we created an empty anchor tag. This isn't of to much use yet, lets
assign some other properties to the anchor so we can get some actual use out of
it. How about some text (so we have something to click on). We can set the text
content using the `textContent` property.

```javascript
a.textContent = "I'm a link to google";
console.log(a);
```

And what good is a link without an href? Now...how did we set attributes on a
link?

```javascript
a.setAttribute("href", "http://www.google.com");
console.log(a);
```

It's worth it to note, that there are some properties of an element that you can
access without setAttribute. href is one of these properties. If you're ever not
sure check out the MDN for what attributes are available via an elements interface.

If you're refreshing your page hoping to see your new element ready for use, this
may be anticlimactic for you. So far, we've created an element in memory, but
now we need to do something with it.

Lets add it on the page. We do this using the `appendChild` function. When using
the `appendChild` function, we first need to tell the DOM where exactly to append
the child to. In your console, enter `document.body`. What does the console show?

The `document.body` is a shortcut that to the body tag. Since we want the new
element to show up on the page, at a minimum it needs to be attached to the body
tag (since the body tag is what is visible on the page).

```javascript
document.body.appendChild(a);
```

As you can see above, the `document.body` is a reference to the `<body>` tag. So
it's telling javascript to append a child node to the body tag. This can be done
on ANY node you have selected.

**Try It:** append an anchor tag to the h1 we selected earlier in the
excercise.

```javascript
h1.appendChild(a);
```

What good would all of this be if we couldn't remove elements from the page.
This is done with the `removeChild` called on the parent element of the element
you want to remove.


```javascript
document.body.removeChild(a);
```

Note: the removeChild example isn't to exciting, since we add it, then remove it
right away. Lets delay the removal of the element using setTimeout.

```javascript
setTimeout(function () {
    document.body.removeChild(a);
    }, 2000);
```

The `setTimeout` function takes as an argument a function as the first argument
and a number as the second argument. The `setTimeout` function will wait the
specified amount of time, then call the function you've passed in. The above
will wait 2000 milliseconds, then call the function.

**Other ways of selecting dom nodes**

Lets add some markup to our html page.

```html
<ul>
    <li><a href="http://google.com">google</a></li>
    <li><a href="http://yahoo.com">yahoo</a></li>
    <li><a href="http://github.com">github</a></li>
</ul>
```

There are alternatives to `getElementById` for cases where an item might not have
an id, or you want to use an alternative syntax. The first is
`document.querySelector`. Lets try that now...

```javascript
var a = document.querySelector("ul li a");
console.log(a);
```


What does that yield? Is it what you would expect? It should return the first
matched element for the specified selector.

Lets pick the "selector" apart. We used ul li a. What this is really saying is,
"Find any a tags that are children of li tags, where the li tag is a child of a
ul tag. Put another way, "Find all anchor tags that are inside an li tag inside
a ul".

The `querySelector` function always returns a node or null if no node was matched.
If multiple nodes were selected, only the first will be returned.

So what if I want to select more than one node? That's where querySelectorAll
comes into play.

```javascript
var anchors = document.querySelectorAll("ul li a");
console.log(anchors);
console.log(anchors.length);
```

The `querySelectorAll` function returns a NodeList which looks like an array, but
actually isn't. It's kind of like the arguments property inside a function, it
has a length property, but doesn't have other array methods like push, pop,
etc...

A `NodeList` object provides an item function that you can use to select a
specific item at a specified index.

```javascript
console.log(anchors.item(2));
console.log(anchors.item(10));
```

Since a `NodeList` looks a lot like an array, and has a length property, that
means it can be used as the basis for a loop, yeah? Lets loop over each link,
and log to the console the href property of each node.

```javascript
for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors.item(i);
    console.log(anchor.href);
}
```

**Styling Elements**

Along with selecting, adding and modifying elements in the dom, we can also
apply styling. We do this via the element.style property.

When we use this property, the style names use no dashes, instead using
camelCasing. For instance, if a css selector looked like:

```css
a {
background-color: red;
}
```

The javascript style property would be:

```javascript
a.style.backgroundColor = "red";
```

However, we could alternatively set the style property using the `setAttribute`
function. When we do it that way, we can use the regular css syntax.

```javascript
a.setAttribute("style", "background-color: red; color: white;");
```

**Try for yourself**

So at this point we now know how to select existing elements, create new
elements, modify element attributes, and append the elements to other elements
already on the page. Lets create a helper function to make some of this easier.

Create a function that will have the following signature: 

    e(elementType, text, attributes, styles) 

where elementType is a string of an element type, attributes is an object of 
attributes to set on an element, and styles is an object of style properties
to set on an object. Then return the newly created element.

```javascript
function e(elementType, text, attributes, styles) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;
    
    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}

e("a", "link to google", {href: "http://www.google.com"}, {color: "red"});
```

**Try for yourself**

* Create a `ul` element on an html page with an id of 'movies'
* Use your original movie array of objects as the basis for a loop
* During each loop, create one li tag
* Set the text of the li tag to the movie title.
* Append the newly created li tag to the existing ul
* Append the ul to the document.body.

The result should be a dynamically created html list.