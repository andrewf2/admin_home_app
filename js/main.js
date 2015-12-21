'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
	  "firebase"
  ];

  // mount on window for testing
  window.app = angular.module('admin-home', requires);
  
  window.app.constant('BaseURL', 'https://home-owner-center-andrewf2.c9.io');
  
  
  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "../views/partials/index/_landing.html",
      controller: "UsersController"
     
    }
  ).when("/newHome/:email",
    {
      templateUrl:"../views/partials/homes/_new.html",
      controller: "HomesController"
    }
  ).otherwise('/');
  

});

