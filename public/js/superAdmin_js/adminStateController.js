function adminstateController($rootScope,$scope, $location, $http) {
	$scope.states = {};
		$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.states=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.del=function(id){
			$http.get(baseURL + 'deleteState/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					//alert(res.message);
					$location.path('/Adminstate');
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			
}