'use strict';

/**
 * @ngdoc function
 * @name lambicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lambicApp
 */
angular.module('lambicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
