'use strict';

angular.module('trigunale.curiculum', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/curiculum', {
    templateUrl: 'curiculum/curiculum.html',
    controller: 'curiculumCtrl'
  });
}])

.controller('curiculumCtrl', [function() {

}]);