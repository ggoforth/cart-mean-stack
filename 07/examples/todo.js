var module = angular.module('todo', []);

module.controller('TodoCtrl', TodoCtrl);

function TodoCtrl() {
  var vm = this;
  vm.todos = [];

  vm.addTodo = function () {
    vm.todos.push({
      title: vm.title,
      desc: vm.desc,
      complete: false
    });

    vm.title = '';
    vm.desc = '';
  };

  vm.removeAllTodos = function () {
    vm.todos.splice(0);
  };
}