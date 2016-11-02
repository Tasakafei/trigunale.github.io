'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('trigunale', [
    'ngRoute',
    'trigunale.curiculum'
])

app.config(['$locationProvider', '$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: "main.html"
      })
      .when("/curiculum-vitae", {
        templateUrl: "/curiculum/curiculum.html"
      })

}]);
