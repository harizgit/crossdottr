'use strict';

angular.module('myApp.smart-fields', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/smart-fields', {
    templateUrl: 'smart-fields/smart-fields.html',
    controller: 'smart-fieldsCtrl'
  });
}])

.controller('smart-fieldsCtrl', [function() {

}]);