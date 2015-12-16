function UserService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "users"
  angular.extend(UserService.prototype, CrudService);

}

window.app.service('UserService',UserService)
