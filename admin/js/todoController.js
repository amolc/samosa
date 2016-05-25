
function todoController($rootScope,$scope, $location, $http) {
	$scope.todos = {};
	$scope.muncp= {};
		$http.get(baseURL + 'todolist').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.todos=res;
					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
}