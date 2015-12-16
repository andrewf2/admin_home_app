'use strict';

/**
 * @ngInject
 */
function HomesController($scope,HomeService,UserService,$location) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
   })
   
   $scope.create = function(){
     var home = $scope.home
     
   }
 
}

window.app.controller('HomesController', HomesController);