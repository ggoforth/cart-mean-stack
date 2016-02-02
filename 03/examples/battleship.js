//Basic version of battleship
//Player 1 enters 5 numbers, those numbers get added in the spaces that corespond with the number entered
//Player 2 enters 5 guesses, if it's a hit, console.log 'HIT!' else console.log('MISS!')

var spaces1 = prompt('Enter a number, 0 - 10');
var spaces2 = prompt('Enter a number, 0 - 10');
var spaces3 = prompt('Enter a number, 0 - 10');
var spaces4 = prompt('Enter a number, 0 - 10');
var spaces5 = prompt('Enter a number, 0 - 10');
var spaces = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

spaces.splice(parseInt(spaces1), 1, parseInt(spaces1));
spaces.splice(parseInt(spaces2), 1, parseInt(spaces2));
spaces.splice(parseInt(spaces3), 1, parseInt(spaces3));
spaces.splice(parseInt(spaces4), 1, parseInt(spaces4));
spaces.splice(parseInt(spaces5), 1, parseInt(spaces5));

alert('PLAYER 2, GO');

//Finish the game
//Another play should try and guess which spaces you chose.
//Prompt the user five times, and check the indexes to see if it's "undefined".
//If the index is undefined, that means player 1 didn't select that one.
//If the index isn't undefined, that means player 1 did select that one, increment the score variable.
//At the end, log something like "You got 3/5 correct"

var score = 0;

for (var i = 0; i < 5; i++) {
  var guess = prompt('Enter a number 0 - 10');
  var guessNumber = parseInt(guess);

  if (spaces[guessNumber] !== undefined) {
    score++;
  }
}

console.log('You got ' + score + ' \ 5 correct');

