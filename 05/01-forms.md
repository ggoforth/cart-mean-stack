###Working with Forms

Forms in HTML are a perfect way to collect information from someone interacting with your webpage. Until now, we've used
 prompts as a way of collecting data, but prompts are clunky which makes a form a much more attractive alternative. 
 Form usages vary widely based on the type of information you're collecting, and which form elements you decide to work 
 with.

Lets start with a simple text input, that will allow us to input a video game title.

```
<form name="newMovieForm" id="newMovieForm">
    <input type="text" name="videoGame" id="videoGame" />
    <input type="submit" value="Add Movie" />
</form>
```

Notice, we've added id's to our form and our input. This is going to make it easy to work the form fields in javascript.

Also, notice that our form tag lacks an action or method attribute you may be familiar with. This is because we aren't 
actually going to be submitting this form in a traditional way. We'll be using javascript to work with the form, meaning 
there won't be a traditional submit needed.

**The `submit` event**

So, just like we added a click event to our li tags in the previous exercise, there are other events we can listen for 
and react to with javascript. One of these is the submit event of an HTML form.

This works like you would probably expect. We get a reference to our form, add a submit event listener, then write a 
callback function to handle processing our form.

To start with, our goal will be to alert the video game title entered in the form when we click the submit button. To do 
this, we need to know how to get the value from a form field. We use the value property for this.

```
document.getElementById("videoGame").value;
```

Enter a value in the field and then run the above code in the console. The result should be the value you entered in 
the field.

Now that we know how to get the value of a form field, lets add an event handler that will alert the value of the 
videoGame field when the form is submitted.

```
var form = document.getElementById("newMovieForm");

form.addEventListener("submit", function () {
    var vg = document.getElementById("videoGame").value;
    alert(vg);
});
```

Now, enter a value in your form field, and click submit. What happens? What result did you get? What happened after you 
dismissed the alert?

You should have seen your form was submitted. Well, that's not very useful, since as soon as the form is submitted, all 
the javascript we were executing will be refreshed, and everything starts over from scratch. Wouldn't it be great if we 
could some how stop that page refresh from happening?

This is where the `event` object becomes really useful. The event listener callback that we've been working with 
actually receives one argument. We've not used it thus far, but when the callback is run, it's passed the `event` 
object as an argument.

The `event` object contains properties and functions related to the event that occurred, a submit event in this case.

It also contains functions that allow us to alter how the event continues after our callback function has run. One 
particularly useful is the `evt.preventDefault()` function.

The `evt.preventDefault()` function does exactly what it says, it prevents the default behavior from occurring. That means 
is we are working with a submit event, the `evt.preventDefault()` function would prevent the submit from happening, 
making our callback function the only way to work with this form, as it will no longer submit. Lets try it!

```
//notice the evt argument now being passed to the event listener callback
var form = document.getElementById("newMovieForm");

form.addEventListener("submit", function (evt) {
    var vg = document.getElementById("videoGame").value;
    alert(vg);
    evt.preventDefault();
});
```

So now we get our videoGame title alerted, but the form no longer submits. Success!

**Working with radio / checkboxes**

Radio buttons let you select one option from a group items. The name attribute on a group of radio buttons is always 
the same. Lets add a "genre" radio group with a few options.

```
<form name="newMovieForm" id="newMovieForm">
    <input type="text" name="videoGame" id="videoGame" />
    <div id="genre">
        <input type="radio" name="genre" value="comedy" /> comedy<br />
        <input type="radio" name="genre" value="drama" /> drama<br />
        <input type="radio" name="genre" value="horror" /> horror
    </div>
    <input type="submit" value="Add Movie" />
</form>
```

We can't use getElementById to get our radio inputs, but the dom does give us some other methods we can use to work 
with them.

`document.getElementsByName(...)` can be used in order to select an element by it's name attribute, which is perfect 
for radio buttons, since they always have the same name.

```
var genreInputs = document.getElementsByName("genre");
console.log(genreInputs);
```

What does genreInputs look like in the console? An array! Does it have a length? Yes! We can loop it!

In order to find out which option from a radio group was selected, we need to look at the checked property of each 
radio.

```
var genre;

for (var i = 0; i < genreInputs.length; i++) {
    var genreInput = genreInputs[i];
    if (genreInput.checked) {
        genre = genreInput.value;
    }
}

console.log(genre);
```

The loop above will interrogate each radio element and see if it's checked. If it is, it sets the genre variable equal 
to the current radio elements value.

One important thing to remember is that radio elements are only meant to return one value.

**Event Delegation**

As we've seen so far, all of our event handlers are attached directly to the element they work with. We attached click 
handlers on our li tags to alert a video game title, etc... When this happens 1 copy of the function is created and stored 
for every event listener. Imagine if we had an html list with 500 items in it. If we wanted to register a callback for 
every one of the li tags, that would store 500 copies of a callback function in memory! There is a better way!

**Event Bubbling**

In order to leverage a better way of watching using event listeners, we have to first understand how events in a
browser work.

The idea of event bubbling simply means that an event bubbles up the dom tree, triggering the given event on every 
node up the dom tree.

So if I click on a button, the click event starts at the button, then moves to it's parent, then to that elements 
parent and so on, until it reaches the top of the document.

Lets create an example that uses event bubbling and it should become more clear how we might be able to use this. 
Start with a ul that has 5 li's in it.

```
<ul id="myul">
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
    <li>bleep</li>
    <li>bloop</li>
</ul>
```

Now I want to be able to click on any li and alert the text of that node. But instead of attaching an event listener to 
every li, I'll just do it on the ul. When we click on a li, the event will bubble up to it's parent (the UL) and the 
click event handler we'll set up will fire.

```
document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(this);
    console.log(evt);
});
```

Ok, so what is the this context in our callback? It's the ul right? So how can we know which li was actually clicked on 
that caused the click event that bubbled to the ul?

Lets take a closer look at the evt object that the event handler received.

```
document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(evt);
});
```

If we look closely, you'll see there is a property there called target. This property on the event object will contain 
the node we actually clicked on.

So now lets use this new evt.target property to get the textContent of the li we clicked on and alert that.

```
document.getElementById("myul").addEventListener("click", function (evt) {
    alert(evt.target.textContent);
});
```