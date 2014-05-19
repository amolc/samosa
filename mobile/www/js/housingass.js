function housingcontroller($rootScope,$scope, $location, $http, $stateParams) {
		$scope.housingass= {};
	$scope.stateid= $stateParams.id;
	 	id =$scope.stateid;
      $http.get(baseURL + 'housingAssociation/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.housingass=res;					
				}				
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.gotologin=function(name){
	        alert('yes ');
           $location.path('/Login/'+name);	
           };
}
