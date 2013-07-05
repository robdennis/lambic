'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope,
                 $dialog,
                 PoolService) {
    $scope.pool = PoolService.get();
    $scope.panes = [
        {name: 'White', active: true},
        {name: 'Blue'},
        {name: 'Black'},
        {name: 'Red'},
        {name: 'Green'},
        {name: 'Colorless'},
        {name: 'Multicolor'},
        {name: 'Land'}
    ];

    $scope.standardGrid = [
        {header: '1-', data: [undefined]},
        {header: '2', data: [undefined]},
        {header: '3', data: [undefined]},
        {header: '4', data: [undefined]},
        {header: '5', data: [undefined]},
        {header: '6', data: [undefined]},
        {header: '7+', data: [undefined]}
    ];

    $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        controller: 'AppCtrl'
    };

    $scope.importDialog = function() {
        openDialog('<label>import dialog</label>')
    };

    $scope.exportDialog = function() {
        openDialog('<label>export dialog</label>')
    };

    var openDialog = function(template){
        var updatedOpts = angular.extend({template: template}, $scope.opts);
        var d = $dialog.dialog(updatedOpts);
        d.open().then(function(result){
            if(result) {
                alert('dialog closed with result: ' + result);
            }
        });
  };
}
