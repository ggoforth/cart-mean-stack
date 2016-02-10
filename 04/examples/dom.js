var addresses = [prompt('enter address'), prompt('enter address'), prompt('enter address')];

for (var i = 0; i< addresses.length; i++) {
  var a = document.createElement('a');
  a.setAttribute('href', addresses[i]);
  a.textContent = addresses[i];
  document.body.appendChild(a);
}