'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope, PoolService) {
    $scope.pool = PoolService.get();
}
