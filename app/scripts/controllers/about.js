'use strict';

/**
 * @ngdoc function
 * @name lambicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lambicApp
 */
angular.module('lambicApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
