var search = [];

//for (var i = 0; i < 3; i++) {
//  search.push(prompt('Enter search string'));
//}

//var ul = document.getElementById('search');
//
//for (var j = 0; j < search.length; j++) {
//  var li = document.createElement('li');
//  ul.appendChild(li);
//  var a = document.createElement('a');
//  a.setAttribute('href', 'http://google.com#q=' + search[j]);
//  a.textContent = 'Search google for ' + search[j];
//  a.setAttribute('target', '_blank');
//  a.id = 'a-' + j;
//  li.appendChild(a);
//  li.id = 'li-' + j;
//}

var a = document.querySelectorAll("ul li a");
console.log(a);

for (var i = 0; i < a.length; i++) {
  var anchor = a.item(i);
  anchor.style.color = i % 2 === 0 ? 'red' : 'green';
  anchor.style.backgroundColor = i % 2 === 0 ? 'green' : 'red';
}
