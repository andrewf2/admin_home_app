'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
	  "ngAria",
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
  ).when("/homes/edit/:id",
    {
      templateUrl: "../views/partials/homes/_edit.html",
      controller: "HomeEditController"
    }
    
  ).when("/floorplans/edit/:id",
    {
      templateUrl: "../views/partials/floorplans/_edit.html",
      controller: "FloorPlansController"
    }
    
  ).otherwise('/');
  

});

