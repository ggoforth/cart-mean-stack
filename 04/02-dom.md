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

* Add three buttons on a page
* Set an attribute `data-color="..."` inside each of the buttons
* Add click event listeners on each button that will change the background color of the body to the color in the `data-color` attribute

**Coding Challenge**

* Create a "memory" game
* Create markup that that creates a grid pattern, like:

```html
  <div class='row'>
    <div class="cube" data-color="red"></div>
    <div class="cube" data-color="yellow"></div>
  </div>
  <div class='row'>
    <div class="cube" data-color="yellow"></div>
    <div class="cube" data-color="green"></div>
  </div>
  <div class='row'>
    <div class="cube" data-color="blue"></div>
    <div class="cube" data-color="green"></div>
  </div>
  <div class="row">
    <div class="cube" data-color="blue"></div>
    <div class="cube" data-color="red"></div>
  </div>
```

```css
div.row {
  clear: both;
}

div.cube {
  float: left;
  height: 40px;
  width: 40px;
  border: 1px solid;
}
```

* Add click event listeners to each `.cube` (remember querySelectorAll???)
* When you click on each cube you should:
    * turn it's background color the color found in `data-color`
    * push `this` (the cube div) onto an array called guesses
    * if there are two things in the `guesses` array, check to see if their colors match
    * If they match, remove all things from guesses (`guesses.splice(0)`)
    * If they don't match, set both guesses background color to `transparent`
    * remove all things from the guesses array (to start the process over)
    * EXTRA CREDIT: when all cubes have been turned color, alert "You Won"