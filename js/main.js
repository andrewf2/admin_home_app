'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
	  "firebase"
  ];

  // mount on window for testing
  window.app = angular.module('admin-home', requires);
  
  window.app.constant('BaseURL', 'https://home-owner-center-andrewf2.c9.io');
  
  window.app.run(function($rootScope,$location,AuthService){
   
     $rootScope.$on('$routeChangeStart', function (event) {

        if (!AuthService.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $location.path('/');
        }
        else {
            console.log('ALLOW');
        }
    });
    
    
  })
  
  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "../views/partials/index/_landing.html",
      controller: "UsersController"
     
    }
  ).when("/newHome",
    {
      templateUrl:"../views/partials/homes/_new.html",
      controller: "HomesController"
    }
  ).otherwise('/');
  

});

