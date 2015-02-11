'use strict';

/**
 * @ngdoc function
 * @name yeomanMytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanMytodoApp
 */
angular.module('yeomanMytodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
