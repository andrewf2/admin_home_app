function FloorPlanService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "floorplans"
  
  this.geFloorPlanImage = function(id){
    var url = "https://homeownercenter.firebaseio.com/floorplans/" + id
    var refImg = new Firebase(url);
    var ImgObj = $firebaseObject(refImg);
    return ImgObj.$loaded()
  }
  
  this.getAllImages = function(){
    var url = "https://homeownercenter.firebaseio.com/floorplans/"
    var refImgs = new Firebase(url);
    var ImgList= $firebaseObject(refImgs);
    return ImgList.$loaded()
  }
  
  angular.extend(FloorPlanService.prototype, CrudService);
  

}

window.app.service('FloorPlanService', FloorPlanService)