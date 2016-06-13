'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/State', {templateUrl: 'partials/state.html'});
	$routeProvider.when('/Adminstate', {templateUrl: 'partials/super_admin/state.html'});
	$routeProvider.when('/Addstate', {templateUrl: 'partials/super_admin/addState.html'});
	$routeProvider.when('/Viewstate/:id', {templateUrl: 'partials/super_admin/viewstate.html'});
	$routeProvider.when('/Viewmunicipality/:id', {templateUrl: 'partials/super_admin/viewmunicipality.html'});
	$routeProvider.when('/Viewhousingass/:id', {templateUrl: 'partials/super_admin/viewhousigass.html'});
	
	$routeProvider.when('/Adminmunicipality', {templateUrl: 'partials/super_admin/adminMunicipality.html'});
	$routeProvider.when('/Addmunicipality', {templateUrl: 'partials/super_admin/addmunicipality.html'});
	$routeProvider.when('/AddHousingAss', {templateUrl: 'partials/super_admin/addhousingass.html'});
	
	$routeProvider.when('/Admin', {templateUrl: 'partials/super_admin/admin.html'});
	$routeProvider.when('/Testlogin', {templateUrl: 'partials/super_admin/testlogin.html'});
	$routeProvider.when('/Editstate/:id', {templateUrl: 'partials/super_admin/editstate.html'});
	$routeProvider.when('/Editmunicipality/:id', {templateUrl: 'partials/super_admin/editmunicipality.html'});
	$routeProvider.when('/HousingAssociation', {templateUrl: 'partials/super_admin/housingAssociation.html'});
	$routeProvider.when('/Adminlogin', {templateUrl: 'partials/super_admin/adminlogin.html'});
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/Adminlogin'});
    $routeProvider.when('/Municipality/:id', {templateUrl: 'partials/municipality.html'});
    $routeProvider.when('/Housing/:id', {templateUrl: 'partials/housingass.html'});
    $routeProvider.when('/Login', {templateUrl: 'partials/login.html',controller: 'loginController'});

    $routeProvider.when('/Todo', {templateUrl: 'partials/todo.html'});
	$routeProvider.when('/Admintodo', {templateUrl: 'partials/super_admin/todo.html'});
	$routeProvider.when('/Addtodo', {templateUrl: 'partials/super_admin/addTodo.html'});
	$routeProvider.when('/Edittodo/:id', {templateUrl: 'partials/super_admin/edittodo.html'});
	$routeProvider.when('/Viewtodo/:id', {templateUrl: 'partials/super_admin/viewtodo.html'});

	$routeProvider.when('/AddPost', {templateUrl: 'partials/super_admin/addpost.html' });
	$routeProvider.when('/Post', {templateUrl: 'partials/post.html'});
	$routeProvider.when('/Adminpost', {templateUrl: 'partials/super_admin/post.html'});
	$routeProvider.when('/Editpost/:id', {templateUrl: 'partials/super_admin/editpost.html'});
	$routeProvider.when('/Viewpost/:id', {templateUrl: 'partials/super_admin/viewpost.html'});

	$routeProvider.when('/AddPostCategory', {templateUrl: 'partials/super_admin/addpostcategory.html' });
	$routeProvider.when('/Adminpostcategory', {templateUrl: 'partials/super_admin/adminPostCategory.html' });
	$routeProvider.when('/Editpostcategory/:id', {templateUrl: 'partials/super_admin/editpostcategory.html'});
	$routeProvider.when('/Viewpostcategory/:id', {templateUrl: 'partials/super_admin/viewpostcategory.html'});
}]);