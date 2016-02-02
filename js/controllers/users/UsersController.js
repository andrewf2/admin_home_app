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
   
    $scope.showModal = false;
    $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
      console.log("called")
    };
   
   
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
   
   FloorPlanService.all().then(function(floorplans){
    $scope.floorplans = floorplans.data
    length = $scope.floorplans.length
       for(var key in $scope.floorplans){
         var currentFloorPlan = $scope.floorplans[key]
         FloorPlanService.getImage(currentFloorPlan.id).then(function(data){
           currentFloorPlan.img = data
         })
       }
   })
   
   
  
   
   $scope.create = function(){
     var user = $scope.user
     user.password = "password";
     user.role = "customer";
     
     user.key = null
      if(user.homeId == 'new'){
       
       UserService.create(user).then(function(data){
         console.log(data);
         $location.path('/newHome/'+ user.emailAddress)
       })
     }else{
       UserService.create(user) 
     }
   
   }
   
   $scope.deleteHome = function(id){
     console.log(id)
     HomeService.destroy(id).then(function(data){
       console.log(data)
       HomeService.all().then(function(homes){
         $scope.homes = homes.data
       })
     })
   }
 
}

window.app.controller('UsersController', UsersController);