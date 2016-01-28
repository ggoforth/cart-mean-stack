var fruits = ['cherry', 'apple', 'banana', 'plum'];
var removed = fruits.splice(2, 2);
removed.reverse();
removed.shift();
removed.unshift('pluot');
console.log(fruits);
console.log(removed);
