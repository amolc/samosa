function adminPostCategoryController($rootScope,$scope, $location, $http) {
    $rootScope.categoryForMun;
    $scope.adminusername=loginuser;
    $scope.categories = {};
    $scope.category={
        category_title :'',
    };

    $http.get(baseURL + 'postcategory').success(function(res) {
        $scope.response = res;
        console.log(res);
        if (res.status == 'false') {
            alert(res.message);
        } else {
            $scope.categories=res;
            $rootScope.categoryForMun=res;
        }
    }).error(function() {
        alert("Please check your internet connection or data source..");
    });

    $scope.del=function(id){
        $http.get(baseURL + 'deletePostCategory/'+id).success(function(res) {
            $scope.response = res;
            if (res.status == false) {
                alert(res.message);
            } else {
                $location.path('/Adminpostcategory');
            }

        }).error(function() {
            alert("Please check your internet connection or data source..");
        });
    };

    $scope.AddPostCategory=function(postcategory){
        console.log(postcategory);

        if (postcategory.postcategory_title == '') {
            alert('Enter Category');
        }
        else {
            $http.post(baseURL + 'addPostCategory', postcategory).success(function(res) {
                $scope.response = res;
                console.log(res);
                if (res.status == false) {
                    alert(res.message);
                }
                else {
                    alert(res.message);
                    $location.path("/AddPostCategory");
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
        $location.path('/Editpostcategory/'+id);
    };

    $scope.postcategorydetail=function(id){
        $location.path('/Viewpostcategory/'+id);
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
function admineditpostCategoryController($rootScope,$scope, $location, $http,$routeParams) {
    $scope.adminusername=loginuser;
    $scope.postcategory={
    };
    var id=$routeParams.id;
    $http.get(baseURL + 'postcategory/'+id).success(function(res) {
        console.log(res);
        $scope.response = res;
        $scope.postcategory=res;
    }).error(function() {
        alert("Please check your internet connection or data source..");
    });

    $scope.editPost=function(postcategory){
        if (postcategory.category_name == '') {
            alert('Enter a Category ');
        } else {
            $http.post(baseURL + 'updatePostCategory', postcategory).success(function(res) {
                $scope.response = res;
                console.log(res);
                if (res.status == false) {
                    alert(res.message);
                } else {
                    $location.path("/Adminpostcategory");
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
