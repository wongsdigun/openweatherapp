(function() {
		var weatherFactory = function($http) {

			var factory = {};

			factory.getForecast = function(posLat, posLon) {
				var apiKey = "https://cors.now.sh/http://api.openweathermap.org/data/2.5/weather?",
            units = "metric",
            apiId = "2c1765a2d7861c7264e1825da7395d93",
            callback = "JSON_CALLBACK"

        return $http.jsonp(apiKey + "lat=" + posLat + "&lon=" + posLon + "&units=" + units + "&APPID=" + apiId + "&callback=" + callback);
			};

			factory.getCurrentWeather = function(location) {
				var apiKey = "https://cors.now.sh/http://api.openweathermap.org/data/2.5/weather?q=",
            units = "metric",
            apiId = "2c1765a2d7861c7264e1825da7395d93",
            callback = "JSON_CALLBACK"

        return $http.jsonp(apiKey + location + "&units=" + units + "&APPID=" + apiId + "&callback=" + callback);
			};

			return factory;
		};

		weatherFactory.$inject = ['$http'];

		angular.module('weatherApp').factory('weatherFactory', weatherFactory);

}());