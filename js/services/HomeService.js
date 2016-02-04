function HomeService($http,$firebaseObject,BaseURL,CrudService,FirebaseImgService){
  this.resource = "homes"
  
  this.findByAddress = function(address){
    return $http.get(BaseURL + "/" + this.resource + '/address/' + address)
  }
  
  angular.extend(HomeService.prototype, CrudService);
  
  angular.extend(HomeService.prototype, FirebaseImgService);
  

}

window.app.service('HomeService', HomeService)