var greg = {
  firstName: "Greg",
  lastName: "Goforth",
  age: 35,
  "favorite-food": "pizza",
  speak: function speak() {
    console.log("greg has spoken");
  },
  foo: {
    bar: 'baz'
  }
};

greg.videoGames = ['halo', 'splinter cell', 'mario bros.'];

for (var i = 0; i < greg.videoGames.length; i++) {
  console.log(greg.videoGames[i]);
}
