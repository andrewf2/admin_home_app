'use strict';

/**
 * @ngInject
 */
function HomeEditController($scope,HomeService,UserService,$location,$routeParams) {

   HomeService.find($routeParams.id).then(function(promise){
       
    var home = promise.data;
    var date = new Date(home.ECD);
    console.log(home)
    home.ECD = date;
    $scope.home = home
    
    
   })
   
   UserService.all().then(function(data){
       $scope.users = data.data
   })
   
   $scope.create = function(){
     var home = $scope.home
     HomeService.save(home).success(function(data){
         console.log(data)
     })
     
     
   }
 
}

window.app.controller('HomeEditController', HomeEditController);