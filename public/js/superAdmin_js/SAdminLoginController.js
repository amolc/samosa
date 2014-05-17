var loginuser="";
function adminLoginController($rootScope,$scope, $location, $http, $routeParams) {
	$rootScope.islogin=false;
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
					loginuser=user.username;
					alert(loginuser);
					$rootScope= islogin=true;
					alert(res.message);
					$location.path("/Admin");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
}

// log out controller
  

function adminLogoutController($rootScope,$scope, $location, $http, $routeParams) {
	$scope.logout=function(){
     $rootScope= islogin=false;
      $location.path('/Adminlogin');		
	};
 
}