'use strict';

angular.module('lambic.directives', []).
    directive('main', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/main.html',
           controller: function($scope, PoolService) {

           }
       }
    }).
    directive('header', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/header.html'
       }
    }).
    directive('sidebar', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/sidebar.html'
       }
    }).
    directive('cardGrid', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/grid.html'
       }
    });
