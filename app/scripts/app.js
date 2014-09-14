'use strict';

/**
 * @ngdoc overview
 * @name lambicApp
 * @description
 * # lambicApp
 *
 * Main module of the application.
 */
angular
  .module('lambicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-onbeforeunload',
    'lambicApp.controllers',
    'lambicApp.services',
    'lambicApp.filters',
    'lambicApp.directives'
  ])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'partials/lambic.html',
                controller: 'AppCtrl'
            }).
            when('/help', {
                templateUrl: 'partials/help.html',
                controller: 'StaticCtrl'
            }).
            otherwise({redirectTo: '/'});

    }]);