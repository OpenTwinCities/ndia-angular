'use strict';

/**
 * @ngdoc function
 * @name ndiaApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the ndiaApp
 */
angular.module('ndiaApp')
  .controller('PanelCtrl', function ($scope) {
    $scope.tab = 1;
    $scope.selectTab = function (setTab) {
      $scope.tab = setTab;
    };
    $scope.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });
