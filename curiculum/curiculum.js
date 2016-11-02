'use strict';

var app = angular.module('trigunale.curiculum', ['ngRoute']);

app.controller('curiculumCtrl', ['$scope', '$http',function($scope, $http) {
  console.log("curiculumCtrl");
  $http.get('curiculum/resources/data.json')
      .success(function (data) {
        $scope.state = true;
        $scope.avatar = data['avatar'];
        $scope.formations = data['formations'];
        $scope.experiences = data['experiences'];
        $scope.competences = data['competences'];
        $scope.projets = data['projets'];
        $scope.loisirs = data['loisirs'];
        $scope.citation = data['citation'];
      })
      .error(function() {
        $scope.state = false;
      })
}]);