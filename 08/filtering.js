var module = angular.module('app', []);

module.controller('BodyCtrl', BodyCtrl);

function BodyCtrl() {
  var vm = this;
  this.games = [];

  this.addGame = function (game, desc) {
    vm.games.push({
      title: game,
      desc: desc
    });
  };
}
