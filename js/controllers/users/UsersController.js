'use strict';

/**
 * @ngInject
 */
function UsersController($scope,HomeService,UserService,$location,FloorPlanService,$routeParams) {
 
   var length;
   
   HomeService.all().then(function(homes){
    $scope.homes = homes.data
    console.log($scope.homes)
   })
   
   if($routeParams.id){
    UserService.find($routeParams.id).then(function(user){
      $scope.user = user.data
    })
   }
   
    $scope.showModal = false;
    $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
      console.log("called")
    };
    
    UserService.all().then(function(users){
     $scope.users = users.data
     for(var user in $scope.users){
      for(var home in $scope.homes){
       if($scope.users[user].homeId == $scope.homes[home].id){
        $scope.users[user].home = $scope.homes[home]
        break;
       }
      }
     }
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
     user.password = "password";
     user.role = "customer";
     
     user.key = null
      if(user.homeId == 'new'){
       
       UserService.create(user).then(function(data){
         console.log(data);
         $location.path('/newHome/'+ user.emailAddress)
       })
     }else{
       UserService.create(user).then(function(data){
        console.log(data)
        $location.path('/')
       })
     }
   
   }
   
   $scope.update = function(){
     var user = $scope.user
     if(user.homeId == 'new'){
       
       UserService.save(user).then(function(data){
         console.log(data);
         $location.path('/newHome/'+ user.emailAddress)
       })
     }else{
       UserService.save(user).then(function(data){
        console.log(data)
        $location.path('/')
       })
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
   
   $scope.deleteUser = function(id){
     console.log(id)
     UserService.destroy(id).then(function(data){
       console.log(data)
       UserService.all().then(function(users){
         $scope.users = users.data
       })
     })
   }
 
}

window.app.controller('UsersController', UsersController);