angular.module('app', [])
  .controller('BodyCtrl', BodyCtrl)
  .directive('gameTable', gameTable);

function BodyCtrl() {
  this.games = [{
    title: 'Halo',
    genre: 'shooter'
  }, {
    title: 'Splinter Cell',
    genre: 'stealth'
  }, {
    title: 'Madden',
    genre: 'sports'
  }];
}

function gameTable() {
  function controller() {}

  return {
    restrict: 'E',
    controller: controller,
    controllerAs: 'gameTable',
    bindToController: true,
    scope: {
      games: '=',
      genre: '@'
    },
    template: '<ul class="list-group"><li ng-repeat="game in gameTable.games | filter: {genre: gameTable.genre}" class="list-group-item">{{game.title}}</li></ul>'
  };
}