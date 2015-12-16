function HomeService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "homes"
  angular.extend(HomeService.prototype, CrudService);

}

window.app.service('HomeService', HomeService)