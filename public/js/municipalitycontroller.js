function municipalitycontroller($rootScope,$scope, $location, $http, $routeParams) {
	// alert('hi welcom to controller');
	$scope.muncp= {};
	$scope.stateid= $routeParams.id;
	 //$scope.mun = function(id){
	 	id =$scope.stateid;
     //alert($scope.stateid);
      $http.get(baseURL + 'municipality/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.muncp=res;
					
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
 // };
}