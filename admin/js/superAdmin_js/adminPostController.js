function adminPostController($rootScope,$scope, $location, $http) {
    $rootScope.postForMun;
    $scope.adminusername=loginuser;
    $scope.posts = {};
    $scope.post={
        post_title :'',
        post_content :''
    };

    $http.get(baseURL + 'post').success(function(res) {
        $scope.response = res;
        console.log(res);
        if (res.status == 'false') {
            alert(res.message);
        } else {
            $scope.posts=res;
            $rootScope.postForMun=res;
        }
    }).error(function() {
        alert("Please check your internet connection or data source..");
    });

    $scope.del=function(id){
        $http.get(baseURL + 'deletePost/'+id).success(function(res) {
            $scope.response = res;
            if (res.status == false) {
                alert(res.message);
            } else {
                $location.path('/Adminpost');
            }

        }).error(function() {
            alert("Please check your internet connection or data source..");
        });
    };

    $scope.AddPost=function(post){
        console.log(post);

        if (post.post_title == '') {
            alert('Enter Title');
        } else if(post.post_content == ''){
            alert('Enter Content');
        } else {
            $http.post(baseURL + 'addPost', post).success(function(res) {
                $scope.response = res;
                console.log(res);
                if (res.status == false) {
                    alert(res.message);
                }
                else {
                    alert(res.message);
                    $location.path("/AddPost");
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
        $location.path('/Editpost/'+id);
    };

    $scope.postdata=function(id){
        $location.path('/Viewpost/'+id);
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
function admineditpostController($rootScope,$scope, $location, $http,$routeParams) {
    $scope.adminusername=loginuser;
    $scope.post={
    };
    var id=$routeParams.id;
    $http.get(baseURL + 'postdetail/'+id).success(function(res) {
        console.log(res);
        $scope.response = res;
        $scope.post=res;
    }).error(function() {
        alert("Please check your internet connection or data source..");
    });

    $scope.editPost=function(post){
        if (post.post_title == '') {
            alert('Enter a Title ');
        } else if(post.post_content == ''){
            alert('Enter Content ');
        } else {
            $http.post(baseURL + 'updatePost', post).success(function(res) {
                $scope.response = res;
                console.log(res);
                if (res.status == false) {
                    alert(res.message);
                } else {
                    $location.path("/Adminpost");
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
