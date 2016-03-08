'use strict';

var candidateApp = angular.module('candidateApp', []);

candidateApp.controller('candidateListCtrl', function($scope, $http) {
  $scope.candidates = [];
  $http.defaults.cache = false;
  $http.get('http://lvp.mod.bz/api/candidate/all', {
      withCredentials: true
  }).then(function(response) {
      $scope.candidates = response.data.filter(function(cand) { return cand.firstName != 'Charte'; });
      console.log('candidates: %j', response.data);
  }, function(response) {
      console.log('error: can\'t fetch candidates from api');
  });
});
