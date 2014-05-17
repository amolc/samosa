// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('gnossem', ['ionic', 'ngSanitize','angular-carousel'])
	

    .config(function ($stateProvider, $urlRouterProvider) {
	
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
    
        $stateProvider
      	  .state('State', {
                url: '/State',
                templateUrl: 'templates/state.html'
            })
              .state('Municipality', {
                url: '/Municipality/:id',
                templateUrl: 'templates/municipality.html'
            })
              .state('State', {
                url: '/State',
                templateUrl: 'templates/state.html'
            })
			.state('Housing', {
				url: '/Housing/:id',
				templateUrl: 'templates/housingass.html'
			});
            
        $urlRouterProvider.otherwise('/State');

    });
    
 