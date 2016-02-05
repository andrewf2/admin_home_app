'use strict';

/**
 * @ngInject
 */
function FloorPlansController($scope,FloorPlanService,UserService,$location,$routeParams) {
   
   if($routeParams.id){
      FloorPlanService.find($routeParams.id).then(function(floorplan){
       $scope.floorplan = floorplan.data
       
      })
   }else{
      console.log("no floorplan found")
   }
   
   
   
   $scope.create = function(){
     console.log($scope.floorplan)
     FloorPlanService.create($scope.floorplan).then(function(data){
        console.log(data)
        $location.path('/')
     })
     
   } 
   
   $scope.save = function(){
     console.log($scope.floorplan)
     FloorPlanService.save($scope.floorplan).then(function(data){
        console.log(data)
        $location.path('/')
     })
     
   }
 
}

window.app.controller('FloorPlansController', FloorPlansController);