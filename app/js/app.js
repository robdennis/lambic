'use strict';

// Declare app level module which depends on filters, and services
angular.module('lambic', [
    'lambic.filters',
    'lambic.services',
    'lambic.directives',
    'lambic.controllers',
    'ui.bootstrap',
    'ngRoute'
]).config(['$routeProvider', function ($routeProvider) {

	$routeProvider.
		when('/', {
			templateUrl: 'partials/lambic.html',
			controller: AppCtrl
		}).
		when('/help', {
			templateUrl: 'partials/help.html',
			controller: StaticCtrl
		}).
		otherwise({redirectTo: '/'});

}]);
