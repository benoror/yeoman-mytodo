'use strict';

/**
 * @ngdoc function
 * @name yeomanMytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanMytodoApp
 */
angular.module('yeomanMytodoApp')
	.controller('MainCtrl', function($scope) {
		$scope.todos = [];
		$scope.addTodo = function() {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};
		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
		};
	});