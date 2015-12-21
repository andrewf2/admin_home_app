'use strict';

/**
 * @ngInject
 */
function UsersController($scope,HomeService,UserService,$location) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
   })
   
   $scope.create = function(){
     var user = $scope.user
     user.password = "password"
     user.role = "customer"
     user.key = null
     console.log(user.home)
     if(user.home == undefined){
       $location.path('/newHome/'+ user.emailAddress)
       UserService.create(user)
     }else{
       UserService.create(user) 
     }
   
     
     
     
     
     
     
   }
 
}

window.app.controller('UsersController', UsersController);