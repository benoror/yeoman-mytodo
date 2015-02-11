'use strict';

/**
 * @ngdoc function
 * @name yeomanMytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanMytodoApp
 */
angular.module('yeomanMytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
