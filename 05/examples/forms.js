var form = document.getElementById("newVideoGameForm");

form.addEventListener("submit", function (evt) {
  var vg = document.getElementById("videoGame").value;
  evt.preventDefault();
  var li = document.createElement('li');
  li.textContent = vg;
  var ul = document.getElementById('videoGameList');
  ul.appendChild(li);
});