'use strict';

angular.module('myApp.contract_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contract-list', {
    templateUrl: 'contract_list/contract_list.html',
    controller: 'contract_listCtrl'
  });
}])

.controller('contract_listCtrl', [function() {

}]);