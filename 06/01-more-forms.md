###Working with Radios

**Working with radio / checkboxes**

Radio buttons let you select one option from a group items. The name attribute on a group of radio buttons is always 
the same. Lets add a "genre" radio group with a few options.

```
<form name="newVideoGameForm" id="newVideoGameForm">
    <input type="text" name="videoGameTitle" id="videoGameTitle" />
    
    <div id="genre">
        <input type="radio" name="genre" value="mmo" /> mmo<br />
        <input type="radio" name="genre" value="shooter" /> shooter<br />
        <input type="radio" name="genre" value="stealth" /> stealth
    </div>
    <input type="submit" value="Add Game" />
</form>
```
 
We can't use getElementById to get our radio inputs, but the dom does give us some other methods we can use to work 
with them.

document.getElementsByName(...) can be used in order to select an element by it's name attribute, which is perfect for 
radio buttons, since they always have the same name.

```
var genreInputs = document.getElementsByName("genre");
console.log(genreInputs);
```

What does genreInputs look like in the console? An array! Does it have a length? Yes! We can loop it! In order to find 
out which option from a radio group was selected, we need to look at the checked property of each radio.

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
to the current radio elements value.  One important thing to remember is that radio elements are only meant to return 
one value.

**Event Delegation**

As we've seen so far, all of our event handlers are attached directly to the element they work with. We attached click 
handlers on our li tags to alert a movie title, etc... When this happens 1 copy of the function is created and stored 
for every event listener. Imagine if we had an html list with 500 items in it. If we wanted to register a callback for 
every one of the li tags, that would store 500 copies of a callback function in memory! There is a better way!

**Event Bubbling**

In order to leverage a better way of watching using event listeners, we have to first understand how events in a 
browser work.

The idea of event bubbling simply means that an event bubbles up the dom tree, triggering the given event on every node 
up the dom tree.

So if I click on a button, the click event starts at the button, then moves to it's parent, then to that elements 
parent and so on, until it reaches the top of the document.

Lets create an example that uses event bubbling and it should become more clear how we might be able to use this. 
Start with a ul that has 5 li's in it.

```html
<ul id="myul">
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
    <li>bleep</li>
    <li>bloop</li>
</ul>
```

Now I want to be able to click on any li and alert the text of that node. But instead of attaching an event listener 
to every li, I'll just do it on the ul. When we click on a li, the event will bubble up to it's parent (the UL) and the 
click event handler we'll set up will fire.

```javascript
document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(this);
    console.log(evt);
});
```

Ok, so what is the `this` context in our callback? It's the `ul` right? So how can we know which li was actually clicked 
on that caused the click event that bubbled to the `ul`?

Lets take a closer look at the evt object that the event handler received.

```javascript
document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(evt);
});
```

If we look closely, you'll see there is a property there called target. This property on the event object will contain 
the node we actually clicked on.

So now lets use this new `evt.target` property to get the textContent of the `li` we clicked on and `alert` that.

```javascript
document.getElementById("myul").addEventListener("click", function (evt) {
    alert(evt.target.textContent);
});
```

So now we only have 1 event handler for click events, which through the evt object we can determine which thing was 
actually clicked on, and do something with that.

Event delegation can single handedly reduce memory consumption of your app by great amounts if used properly.

**Coding Challenge 1**
* Use the following jsbin to start: http://jsbin.com/gitarehati/edit?html,js,output
* When you submit the form, make it so that it adds the new game title to the gamelist ul
* When you click on any of the li's in the game list, it should alert the games name AND it's genre.

**Coding Challenge 2**

* Create a `ul` on the html page
* Create a div with an id of "clicked"
* Use javascript to create 500 li elements that have the numers 1 - 500 as the text of the element and append them to the ul
* Add a click event listener on the ul 
* Set the text of the "clicked" div to whatever the text of the clicked li was.  IE if you click on li with the text 
    253, then the clicked div should become populated with 253.
