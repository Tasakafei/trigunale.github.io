'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('trigunale', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        template: "I'm a banana"
      })
      .when("/curiculum", {
          templateUrl: "curiculum.html"
      })
      .otherwise({
          template: "otherwise"
      });
      // .when("/curiculum-vitae", {
      //   templateUrl: "/curiculum/curiculum.html"
      // })
}]);
