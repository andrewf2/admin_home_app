'use strict';

/**
 * @ngInject
 */
function HomesController($scope,HomeService,UserService,$location,$routeParams) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
   })
   
   UserService.findByEmail($routeParams.email).then(function(promise){
       $scope.user = promise.data
       
   })
   
   
   UserService.all().then(function(data){
       $scope.users = data.data
   })
   $scope.create = function(){
     var home = $scope.home
     HomeService.create(home).success(function(){
         HomeService.findByAddress(home.address).then(function(promise){
             $scope.user.homeId = promise.data.id;
             var user = $scope.user
             UserService.save(user);
         })
     })
     
     
   }
 
}

window.app.controller('HomesController', HomesController);