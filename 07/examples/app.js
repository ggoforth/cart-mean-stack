var module = angular.module('app', []);

module.controller('AppCtrl', AppCtrl);

function AppCtrl() {
  var vm = this;
  this.message = 'Fill out the form below to add a new color';
  this.colors = ['red', 'blue', 'green'];

  /**
   * Adds a new color to the colors array.
   *
   * @param newColor
   */
  this.addNewColor = function (newColor) {
    vm.colors.push(newColor);
    vm.newColor = '';
  };

  /**
   * Reverse an array.
   */
  this.reverse = function () {
    vm.colors.reverse();
  };

  /**
   * Remove a color.
   *
   * @param color The color to remove
   */
  this.removeColor = function (color) {
    var index = vm.colors.indexOf(color);
    vm.colors.splice(index, 1);
  };
}
