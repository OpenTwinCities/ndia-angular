'use strict';

/**
 * @ngdoc function
 * @name ndiaApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the ndiaApp
 */
angular.module('ndiaApp')
.controller('MapCtrl', function ($scope) {
  angular.extend($scope, {
	defaults: {
		tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		maxZoom: 14,
		},
	});
	
angular.extend($scope, {	
	center: {
		lat: 45,
		lng: -93.267,
		zoom: 12
		}
		});
});

