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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
