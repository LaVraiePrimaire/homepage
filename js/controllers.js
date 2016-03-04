'use strict';

var candidateApp = angular.module('candidateApp', []);

candidateApp.controller('candidateListCtrl', function($scope) {
  $scope.candidates = [
    {'name': 'shannon chiu',
     'snippet': 'La Fronte Nationale',
 	 'image': '/img/candidates/shannon.png'},
    {'name': 'mike yu',
     'snippet': 'total fuccboi',
 	 'image': '/img/candidates/mike.jpg'},
    {'name': 'jaxon',
     'snippet': 'or is it jason?',
 	 'image': '/img/candidates/unknown.png'},
 	{'name': 'yay',
     'snippet': 'woo?',
 	 'image': '/img/candidates/emma.jpg'},
 	{'name': 'meredith manda',
     'snippet': 'lol?',
 	 'image': '/img/candidates/meredith.png'}
  ];
});