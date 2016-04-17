var app = angular.module('magicMirror', []);

app.controller("dayCounter", ["$scope", "$http", function($scope, $http) {
    $scope.count = 0;
    $scope.updateDate = function() {
        $http.get("/update")
		    .then(function(response) {
		        $scope.count = response.data.days;
		        console.log(response.data);
		    });
    }
    $scope.getDays = function() {
        $http.get("/days")
		    .then(function(response) {
		        $scope.count = response.data.days;
		        console.log(response.data);
		    });
    }

    $scope.getDays();
}]);