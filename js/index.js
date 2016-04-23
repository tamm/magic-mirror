var app = angular.module('magicMirror', []);

app.controller("dayCounter", ["$scope", "$http", function($scope, $http) {
	$scope.counts = [0];

	$scope.updateDate = function(dateId) {
		$http.get("/update/" + dateId)
			.then(function(response) {
				for (var i = 0; i < response.data.days.length; i++) {
					$scope.counts[i] = response.data.days[i];
				}
				console.log(response.data);
			});
	};

	$scope.addDate = function() {
		var dateId = $scope.counts.length;
		$http.get("/update/" + dateId)
			.then(function(response) {
				for (var i = 0; i < response.data.days.length; i++) {
					$scope.counts[i] = response.data.days[i];
				}
				console.log(response.data);
			});
	};

	$scope.getDays = function() {
		$http.get("/days")
			.then(function(response) {
				for (var i = 0; i < response.data.days.length; i++) {
					$scope.counts[i] = response.data.days[i];
				}
				console.log(response.data);
			});
	};

	$scope.getDays();
}]);