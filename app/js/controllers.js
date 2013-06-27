'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope,
                 $dialog,
                 PoolService) {
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
