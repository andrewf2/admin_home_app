'use strict';

/**
 * @ngInject
 */
function UsersController($scope,HomeService,UserService,$location,FloorPlanService) {
   var length;
   HomeService.all().then(function(homes){
    $scope.homes = homes.data
    console.log($scope.homes)
   })
   
   
   
   FloorPlanService.all().then(function(floorplans){
    $scope.floorplans = floorplans.data
    FloorPlanService.getAllImages().then(function(imgs){
     var imgObj = imgs
     length = $scope.floorplans.length
       for(var i = 0; i <= length - 1; i++){
         $scope.floorplans[i].img = imgObj[ $scope.floorplans[i].id]

       }
      })
   })
  
   
   $scope.create = function(){
     var user = $scope.user
     user.password = "password"
     user.role = "customer"
     user.key = null
      if(user.homeId == 'new'){
       $location.path('/newHome/'+ user.emailAddress)
       console.log(UserService.create(user))
     }else{
       UserService.create(user) 
     }
   
     
     
     
     
     
     
   }
 
}

window.app.controller('UsersController', UsersController);