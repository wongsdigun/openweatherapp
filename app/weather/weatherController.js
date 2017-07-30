'use strict';

(function() {
		var weatherController = function($scope, weatherFactory) {
			$scope.location = '';
			$scope.weatherData = null;
			$scope.posLat = null;
			$scope.posLon = null;

			$scope.date = function () {
				var dt = new Date()
				var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				var dayName = days[dt.getDay()];
				console.log(dayName);
				$scope.day = dayName;

				var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
				var fullDate = months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear();
				console.log(fullDate);
				$scope.fullDate = fullDate;
			}

			$scope.date();

			$scope.initial = function() {
				navigator.geolocation.getCurrentPosition(function(position){
					var lat = position.coords.latitude;
					var lon = position.coords.longitude;
					$scope.posLat = lat;
					$scope.posLon = lon;

					// console.log($scope.posLat);
					// console.log($scope.posLon);

					weatherFactory.getWeatherPos(lat, lon)
					.then( function(data) {
						$scope.weatherData = data.data;
						console.log(data);
						$('.wrapper-loader').fadeOut("slow");
					})
					.catch( function() {
						$('.wrapper-loader').fadeOut("slow");
						$('.error').show().html("Sorry there has been an error connecting to the API");
					})
				})
			};

			$scope.initial();

			$scope.search = function(location) {
				$('.wrapper-loader').fadeIn();

				var location = $scope.location;
				if (location != '') {
					weatherFactory.getCurrentWeather(location)
						.then( function(data) {
							$scope.weatherData = data.data;
							console.log(data);
							$('.wrapper-loader').fadeOut("slow");
						})
						.catch( function() {
							$('.wrapper-loader').fadeOut("slow");
							$('.error').show().html("Sorry there has been an error connecting to the API");
						})
					} else {
						$scope.initial();
					}
			};
		};

		weatherController.$inject = ['$scope', 'weatherFactory'];

		angular.module('weatherApp').controller('weatherController', weatherController);
}());