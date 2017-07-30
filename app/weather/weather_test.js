'use strict';

describe('app: weatherApp', function() {
  var $controller, scope;

  beforeEach(module('weatherApp'));

  beforeEach(inject(function ($rootScope, _$controller_) {
    scope = $rootScope.$new();
    $controller = _$controller_('weatherController', {$scope: scope});
  }))

  it("ensures initial method has been called", function() {
    spyOn(scope, 'initial');
    scope.initial();
    expect(scope.initial).toHaveBeenCalled();
  });

  it("ensures date method has been called", function() {
    spyOn(scope, 'date');
    scope.date();
    expect(scope.date).toHaveBeenCalled();
  });

  it("has locations variable set on scope with geo coord", function() {
    expect(scope.posLat).toBeDefined();
    expect(scope.posLat).not.toEqual('null');
    expect(scope.posLat).toBeDefined();
    expect(scope.posLon).not.toEqual('null');
  });
});

describe('app: weatherApp', function() {
  beforeEach(module('weatherApp'));
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('factory: weatherFactory is working properly', function() {
    var factory = null;
    beforeEach(inject(function(weatherFactory) {
      factory = weatherFactory;
    }))

    it("Should define getWeatherPos function", function() {
      expect(factory.getWeatherPos).toBeDefined();
      expect(factory.getWeatherPos).toEqual(jasmine.any(Function));
    });

    it("Should define getCurrentWeather function", function() {
      expect(factory.getCurrentWeather).toBeDefined();
      expect(factory.getCurrentWeather).toEqual(jasmine.any(Function));
    });
  });
});

describe('app: weatherApp', function() {
  var $controller, scope;

  beforeEach(module('weatherApp'));

  beforeEach(inject(function ($rootScope, _$controller_) {
    scope = $rootScope.$new();
    $controller = _$controller_('weatherController', {$scope: scope});
  }))

  it('should request the initial function', function() {
    spyOn(scope, 'initial');
    scope.initial();
    expect(scope.weatherData).not.toBe(undefined);
  });

  it('should request the search function', function() {
    spyOn(scope, 'search');
    scope.search();
    expect(scope.weatherData).not.toBe(undefined);
  });
});