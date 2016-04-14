'use strict';

var candidateApp = angular.module('candidateApp', ['underscore']);

candidateApp.controller('candidateListCtrl', function($scope, $http, _) {
  $scope.candidates = [];
  $http.defaults.cache = false;
  $http.get('https://app.lavraieprimaire.fr/api/candidate/all', {
      withCredentials: true
  }).then(function(response) {
      var filteredCandidates = response.data.filter(function(cand) { return cand.firstName != 'Charte'; });
      $scope.candidates = _.sample(filteredCandidates, 6); 
  }, function(response) {
      console.log('error: can\'t fetch candidates from api');
  });
});
