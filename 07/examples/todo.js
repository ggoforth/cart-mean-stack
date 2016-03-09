var module = angular.module('todo', []);

module.controller('TodoCtrl', TodoCtrl);

function TodoCtrl() {
  var vm = this;
  vm.todos = [
    {title: 'Go to the store', desc: 'Get bread', complete: false},
    {title: 'Get gas', desc: 'Costco has cheap gas today', complete: false}
  ];
}