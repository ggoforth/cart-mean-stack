var genreInputs = document.getElementsByName("genre");
var genre;

for (var i = 0; i < genreInputs.length; i++) {
  var genreInput = genreInputs[i];
  if (genreInput.checked) {
    genre = genreInput.value;
  }
}

console.log(genre);

var numbers = document.getElementById('numbers');
numbers.addEventListener('click', function (evt) {
  alert(evt.target.textContent);
});