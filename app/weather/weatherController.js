'use strict';

(function() {
		var weatherController = function($scope, weatherFactory) {
			$scope.location = '';

			$scope.date = function () {
				var dt = new Date()
				var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				var dayName = days[dt.getDay()];
				console.log('dayName');
				$scope.day = dayName;

				var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
				var fullDate = months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear();
				console.log('fullDate');
				$scope.fullDate = fullDate;
			}

			$scope.date();

			$scope.initial = function() {
				window.onload = function() {
					var geoSuccess = function(position) {

						var lat = position.coords.latitude;
						var lon = position.coords.longitude;
						$scope.posLat = lat;
						$scope.posLon = lon;
					};
					var geoError = function(position) {
						alert('Error occurred. Error code: ' + error.code);
					};
					navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
				};
			};

			$scope.initial();

			$scope.search = function(location) {
				$('.loading').show();

				var location = location;
				if (location != '') {
					weatherFactory.getForecast(location)
						.then( function(data) {
							$scope.weatherData = data;
							console.log(data);
							$('.loading').hide();
						})
						.catch( function() {
							$('.loading').hide();
							$('.error').show().html("Sorry there has been an error connecting to the API");
						})
					} else {
						$scope.detectWeatherLocation();
					}
			};

		};

		weatherController.$inject = ['$scope', 'weatherFactory'];

		angular.module('weatherApp').controller('weatherController', weatherController);
}());