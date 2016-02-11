###CART Mean

**Coding Challenge**

Write a javascript program that will:

* Prompt the user for two numbers
* Parse both strings to numbers
* Create a ul
* Create an li
* Set the text content of the li to `num1 * num2`
* EXTRA CREDIT: Create more li's and show `num1 + num2`, `num1 - num2`, and `num1 / num2`

**Event Listeners**

In javascript, Event listeners are how we can react to user interaction on the page. For instance, alert something to a 
user when they try and delete an element, or run an arbitrary javascript function when a user clicks a button.
The DOM has built in methods that allow for registering "handlers" for a given "event", like click or mouseover.
Lets start by creating a simple html page with a with a button. We'll assign an event handler to the button.

```
<button id="alert">Alert something</button>
```

Now that we have a button we can add a click handler for, lets actually add the listener. We will use the 
element.addEventListener(event, handler) function where event is a string for a named event, and the handler is a 
function to call when the event happens. In this way, the function is referred to as a callback.

```
var button = document.getElementById("alert");

button.addEventListener("click", function () {
    alert("hello world");
    console.log(this); //what is the context to our callback function?
});
```

Now, if you've added the button markup, and run that javascript, you should now be able to click on the button and 
see an alert. Notice the console.log there? What is the this of the function?
In callbacks, it's usually the case that the context will the the node element itself.
Lets make this a little more dynamic. Add an attribute to your button called `rel="..."`

Lets use that new rel attribute as the content of our alert. Since we know that the context of our function is going 
to be the node itself, we can use all of our node related functions on the this object.

```
var button = document.getElementById("alert");

button.addEventListener("click", function () {
alert(this.getAttribute("rel"));
});
```

**Coding Challenge**

* Prompt the user for three video game titles 
* Create a `ul` and add it to the body of the page
* Create three `li`'s (for loop)
* Make the text content of the `li` the video game titles
* Add a `rel` attribute to the `li`'s with the video game title
* Add an event handler for `click` on the li.  When clicked, alert the video game title.
