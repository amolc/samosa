function loginController($rootScope,$scope, $location, $http, $stateParams) {
	alert('inside the controller');
	var hName=$stateParams.name;
	$scope.user = {
		username :hName,
		buildingpass : ''
	};
	console.log();
	
	$scope.login = function(user) {
		if (user.buildingpass == '') {
			alert('Password required ');
		}  else {	       
			$http.post(baseURL + 'login', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					alert(res.message);
					//$location.path("/Cart");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
}