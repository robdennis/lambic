'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope, PoolService) {
    $scope.pool = PoolService.get();
    $scope.panes = [
        {name: 'White'},
        {name: 'Blue'},
        {name: 'Black'},
        {name: 'Red'},
        {name: 'Green'},
        {name: 'Colorless'},
        {name: 'Multicolor'},
        {name: 'Land'}
    ];
}
