'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope,
                 $dialog,
                 PoolService,
                 CardCacheService) {

    PoolService.subscribe(function(pool) {
        console.log('my callback is firing! ', pool.count());
        $scope.pool = pool;
    });

    console.log('inserting a local gatherer dump');
    $scope.cards = CardCacheService.insert(all_cards);
    CardCacheService.get_card('Doomed Traveler', function(card) {
        console.log(card);
    });

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
