function HomeService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "homes"
  
  this.findByAddress = function(address){
    return $http.get(BaseURL + "/" + this.resource + '/address/' + address)
  }
  
  angular.extend(HomeService.prototype, CrudService);
  

}

window.app.service('HomeService', HomeService)