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

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);