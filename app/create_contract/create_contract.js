'use strict';

angular.module('myApp.create_contract', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create_contract', {
    templateUrl: 'create_contract/create_contract.html',
    controller: 'create_contractCtrl'
  });
}])

.controller('create_contractCtrl', [function() {

}]);