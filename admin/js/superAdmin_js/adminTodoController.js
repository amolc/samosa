function admintodoController($rootScope,$scope, $location, $http) {
    $rootScope.todoForMun;
    $scope.adminusername=loginuser;
	$scope.todos = {};
	$scope.todo={
		 todo_title :'',
		 todo_description :''
	};
		$http.get(baseURL + 'todolist').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.todos=res;
					$rootScope.todoForMun=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.del=function(id){
			$http.get(baseURL + 'deleteTodo/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					//alert(res.message);
					$location.path('/Admintodo');
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.addTodo=function(todo){
				console.log(todo);
			if (todo.todo_title == '') {
			alert('Enter a Title ');
		} else if(todo.todo_description == ''){
		    alert('Enter Description  ');
		} else {		      
			$http.post(baseURL + 'addTodo', todo).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$location.path("/Admintodo");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.edit=function(id){
				$location.path('/Edittodo/'+id);	
			};
			
			$scope.tododata=function(id){
				$location.path('/Viewtodo/'+id);	
			};
			
			// $scope.viewdata=function(id){
				// alert("new");
// 				
		// $location.path('/Viewstate/'+id);	
			// };
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
	
}
function adminedittodoController($rootScope,$scope, $location, $http,$routeParams) {
	 $scope.adminusername=loginuser;
	$scope.tododata={		
	};
		var id=$routeParams.id;				
			 $http.get(baseURL + 'tododetail/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.tododata=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
			 
		$scope.editTodo=function(tododata){
			if (tododata.todo_title == '') {
			alert('Enter a Title ');
		} else if(tododata.todo_description == ''){
		    alert('Enter Description ');
		} else {		      
			$http.post(baseURL + 'updateTodo', tododata).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Admintodo");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		$scope.goto=function(page){
				$location.path(page);	
			};
  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
   
}
