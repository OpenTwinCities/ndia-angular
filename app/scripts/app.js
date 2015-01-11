'use strict';

/**
 * @ngdoc overview
 * @name ndiaApp
 * @description
 * # ndiaApp
 *
 * Main module of the application.
 */
angular
  .module('ndiaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	"leaflet-directive"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
 //wire up the sidebar button to hide the sidebar
  $("#sidebar-hide-btn").click(function() {
  $('#sidebar').hide();
  map.invalidateSize();
});

//wire up the nav sidebar link to toggle the sidebar
$("#sidebar-toggle-btn").click(function() {
  $("#sidebar").toggle();
  map.invalidateSize();
  return false;
});

//The leaflet map
var map = L.map('map').setView([45,-93.267],12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);


