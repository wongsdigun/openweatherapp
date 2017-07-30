'use strict';

var app = angular.module('weatherApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
        controller: 'weatherController',
        templateUrl: 'weather/weather.html'
    })
    .otherwise( { redirectTo: '/' } );
});