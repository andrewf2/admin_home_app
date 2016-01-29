'use strict';

/**
 * @ngInject
 */
function FloorPlansController($scope,FloorPlanService,UserService,$location,$routeParams) {

   FloorPlanService.find($routeParams.id).then(function(floorplan){
       $scope.floorplan = floorplan.data
       
   })
   
   
   $scope.create = function(){
     console.log($scope.floorplan)
     FloorPlanService.save($scope.floorplan)
     
   }
 
}

window.app.controller('FloorPlansController', FloorPlansController);