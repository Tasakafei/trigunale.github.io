'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('trigunale', [
    'ngRoute',
    'trigunale.curiculum'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: "home.html"
      })
      .when("/curiculum", {
          templateUrl: "curiculum/curiculum.html",
          controller: "curiculumCtrl"
      })
      .otherwise({
          template: "otherwise"
      });
      // .when("/curiculum-vitae", {
      //   templateUrl: "/curiculum/curiculum.html"
      // })
}]);
