function municipalitycontroller($rootScope,$scope, $location, $http,$stateParams) {
	$scope.muncp= {};
	$scope.stateid= $stateParams.param;
	 	var id =$scope.stateid;
      $http.get(baseURL + 'municipality/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.muncp=res;
					console.log();					
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
			$scope.assoc=function(id){
				alert("this is "+id);
				$location.path('/Housing/'+id);	
			};
}