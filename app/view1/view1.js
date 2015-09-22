'use strict';
function toArray(obj) {
	var array = [];
	for (var p in obj) {
		array.push(obj[p]);
	}
	return array;
}
angular.module('myApp.view1', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', function ($scope, $sce, $http) {
		$http.get("https://remax15.firebaseio.com/andriy.json")
			.success(function (response) {
				$scope.names = toArray(response.records);
			});


		$scope.convertToTrustedHtml= function (html) {
			return $sce.trustAsHtml(html);
		}
	});