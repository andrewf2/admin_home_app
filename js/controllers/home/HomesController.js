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
         HomeService.findByAddress(home.address).then(function(home){
             var user = $scope.user
             user.homeId = home.data.id;
             UserService.save(user);
         })
     })
     
     
   }
 
}

window.app.controller('HomesController', HomesController);