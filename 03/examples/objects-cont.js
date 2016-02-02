var greg = {
  firstName: "Steve",
  lastName: "Goforth",
  age: 35,
  "favorite-food": "pizza",
  speak: function speak() {
    console.log(greg.firstName + ' ' + this.lastName + ' has spoken');
  }
};

greg.speak();

greg.videoGames = [
  {name: 'Halo', rating: 5},
  {name: 'Rainbow 6', rating: 3}
];

function gameRatings(person) {
  if (person.videoGames === undefined) {
    console.log('Must provide an object with a videoGames property');
    return;
  }

  for (var i = 0; i < person.videoGames.length; i++) {
    var game = person.videoGames[i];
    console.log(game.name + ' has a rating of ' + game.rating);
  }
}

gameRatings(greg);
gameRatings({});
