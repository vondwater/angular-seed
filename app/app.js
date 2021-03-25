'use strict';
import 'angular';
import 'angular-route';
import 'core';
import 'view1/view1';
import 'view2/view2';

// Declare app level module which depends on views, and core components
let app = angular.module('myApp', [
  'ngRoute',
  'myApp.core',
  'myApp.view1',
  'myApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// export app;