

/**
 * @ngInject
 */
function HomesController($scope,HomeService,UserService,$location,$routeParams,FloorPlanService) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
   })
   
   UserService.findByEmail($routeParams.email).then(function(promise){
       $scope.user = promise.data
       
   })
   
   FloorPlanService.all().then(function(plans){
       $scope.floorplans = plans.data
   })
   
   UserService.all().then(function(data){
       $scope.users = data.data
   })
   $scope.create = function(){
     var home = $scope.home
     HomeService.create(home).success(function(){
         HomeService.findByAddress(home.address).then(function(promise){
             $scope.user.homeId = promise.data.id
             var user = $scope.user
             console.log(user)
             UserService.create(user)
             
         })
     })
     
     
   }
 
}

window.app.controller('HomesController', HomesController);