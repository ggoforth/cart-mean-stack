###Choose your own adventure

Your mission, is to program your very own Choose Your Own Adventure.  You've already written and submitted your scripts, 
 so your focus now should be breaking your script into sections that we will build into our code. 
 
 The goals for your scripts was:
 
* At least three places in your script where a decision must be made.
* Those places will translate directly to `if / else` statements you'll write in your code
* Of the three places where decisions are made in your scripts, two of them must ask additional questions. 
    * This means that only one of the decisions can terminate the decision tree after the first input
* Of the two decisions, one of them must ask the user for number input and make a decision 

Below is an example of my script broken down into a decision tree.  This encompases the full functionality 
of the program I wanted to write.  Having a decision tree is very helpful when you go to begin writing code, since 
 the functionality of your programs is spelled out for you, and you only have to worry about how to write your code 
 (the syntax).  Decisions are denoted with letters.  

* Hero encounters a dragon, what does he do?

A. fights
    * Hero stays and fights, but two more dragons appear.  What does he do?
        A. continues fighting
            * hero can't fight two dragons at once...**decision tree terminates**
        B. runs away
            * hero lives to fight another day...**decision tree terminates**
B. runs
    * hero lives to fight another day...**decision tree terminates**
C. offers starbucks gift cards
    * dragon is intreguied, but asks how much is left on the starbucks card?
        A. less than $5
            * Dragons need more than $5 for their coffee...gobbles our hero...**decision tree ends**
        B. more than $5
            * Dragon takes our heros offer, takes the card and leaves...**decision tree ends**