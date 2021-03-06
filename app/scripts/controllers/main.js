'use strict';

angular.module('mytodoApp')
	.controller('MainCtrl', function ($scope) {
		$scope.todos = [];
		$scope.addTodo = function () {
			if ($.inArray($scope.todo, $scope.todos) != -1) {
				alert("That todo already exists");
				$scope.todo = '';
			} else {
				$scope.todos.push($scope.todo);
				$scope.todo = '';
			}
		};
		$scope.removeTodo = function (index) {
			$scope.todos.splice(index, 1);
		};
	});
