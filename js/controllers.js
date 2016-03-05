'use strict';

var candidateApp = angular.module('candidateApp', []);

candidateApp.controller('candidateListCtrl', function($scope) {
  $scope.candidates = [
    {'name': 'shannon chiu',
     'snippet': 'La Fronte Nationale',
 	 'pictureURL': '/img/candidates/shannon.png',
 	 'pageurl': 'http://www.google.com'},
    {'name': 'mike yu',
     'snippet': 'total fuccboi',
 	 'pictureURL': '/img/candidates/mike.jpg',
 	 'pageurl': 'http://www.google.com'},
    {'name': 'jaxon',
     'snippet': 'or is it jason?',
 	 'pictureURL': '/img/candidates/unknown.png',
 	 'pageurl': 'http://www.google.com'},
 	{'name': 'yay',
     'snippet': 'woo?',
 	 'pictureURL': '/img/candidates/emma.jpg',
 	 'pageurl': 'http://www.google.com'},
 	{'name': 'meredith manda',
     'snippet': 'lol?',
 	 'pictureURL': '/img/candidates/meredith.png',
 	 'pageurl': 'http://www.google.com'}
  ];
});