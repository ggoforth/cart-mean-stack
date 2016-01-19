###So what is MEAN stack anyways?

MEAN stack is a acronym for a set of technologies that tend to work well
together.  In the case of MEAN it stands for:

* [Mongo](https://www.mongodb.org/) (The database)
* [Express](http://expressjs.com/) (The application backend)
* [Angular](https://angularjs.org/) (The application frontend)
* [Node](https://nodejs.org) (What the application backend runs on)

**Mongo**

Mongo is a database. The databases main function is to store data so we can use
it later on.  The database usually provides a nice way for us to use the data it
has stored.  Writing a small amount of code can "ask" or "query" the database
for all information it has, or only a small subset of the data in the database.
For instance, it's like asking a friend "show me all the baseball cards you
have" vs "show me all the baseball cards you have where the players first name
is Ken".

**Express**

The application we will write in this class will run on a javascript framework
called [Express](http://expressjs.com/).  Express handles much of what the
application does, from Routing (more on this later), to loading of views (your
html / css / javascript), to manipulating data and working with the database.
Think of this layer of the application as the glue that binds everything
together.

**Angular**

Angular is [HTML enhanced for web apps!](http://angularjs).  What does that even
mean???  Angular enhances the way we can write HTML allowing us to do some
really awesome things.  Angular runs in the browser, and allows us to organize
our javascript code while at the same time making our HTML more flexible.
Imagine if you will, you have a snippet of regular HTML like:

```
<smiley-face></smiley-face>
```

In normal javascript, this wouldn't do anything, because `<smiley-face>` isn't a
real html tag. But in Angular, this is perfectly fine!  Angular allows you to
create custom html tags, and it does all the heavy lifting.

**Node.js**

Node.js is the engine that allows any of this to work.  Without Node.js, we
wouldn't have a server to run (Express), which we already stated was the glue of
our application.  It's the "runtime" that runs all of our javascript code, and
generally makes things happen.  



