'use strict';

angular.module('myApp.review', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/review', {
    templateUrl: 'review/review.html',
    controller: 'reviewCtrl'
  });
}])

.controller('reviewCtrl', [function() {

}]);