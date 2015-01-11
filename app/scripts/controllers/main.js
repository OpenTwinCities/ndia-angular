'use strict';

/**
 * @ngdoc function
 * @name ndiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ndiaApp
 */
angular.module('ndiaApp')
.controller('MainCtrl', function ($scope) {
  $scope.categories = [
    {
    name: 'Computers',
    description: 'Find out where to use a computer and where to get online.'
  }, {
    name: 'Classes',
    description:
      'Learn something new with computer and technology-related classes.'
  }, {
    name: 'Events',
    description: 'Check out upcoming technology events in the Northside.'
  }];
});