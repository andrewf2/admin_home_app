

/**
 * @ngInject
 */
function HomesController($scope,HomeService,UserService,$location,$routeParams,FloorPlanService,$q) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
   })
   
   UserService.findByEmail($routeParams.email).then(function(promise){
       $scope.user = promise.data
       
   })
   
   FloorPlanService.all().then(function(plans){
       $scope.floorplans = plans.data
   })
   
   function setHomeId(data){
           var deferred = $q.defer()
           var updatedUser= $scope.user
           updatedUser.homeId = data.data.generated_keys[0]
           deferred.resolve(updatedUser)
           return deferred.promise
         }
   
   UserService.all().then(function(data){
       $scope.users = data.data
   })
   $scope.create = function(){
     var home = $scope.home
     HomeService.create(home).then(function(data){
         
         
         
         setHomeId(data).then(function(user){
             console.log(user)
             UserService.save(user)
         })
         
        
     })
     
     
   }
 
}

window.app.controller('HomesController', HomesController);