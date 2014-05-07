function adminLoginController($rootScope,$scope, $location, $http, $routeParams) {
	$scope.user = {
		username : '',
		password : ''
	};
	$scope.login = function(user) {
		if (user.username == '') {
			alert('Enter valid User Name ');
		} else if(user.password == ''){
		    alert('Enter password ');
		} else {		      
			$http.post(baseURL + 'adminLogin', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$location.path("/Adminstate");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
}