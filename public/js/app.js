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
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/State'});
    $routeProvider.when('/Municipality/:id', {templateUrl: 'partials/municipality.html'});
    $routeProvider.when('/Housing/:id', {templateUrl: 'partials/housingass.html'});

    // $routeProvider.when('/AkmalPage', {templateUrl: 'partials/AkmalPage.html'});
    // $routeProvider.when('/amir', {templateUrl: 'partials/value.html'});
}]);