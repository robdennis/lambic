'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope,
                 PoolService,
                 CardCacheService,
                 NamesFromTextService) {

    PoolService.subscribe(function(pool) {
        console.log('my callback is firing! ', pool.count());
        $scope.plaintext = pool.select('name').join('\n');
        $scope.pool = pool;
    });

    $scope.makePool = function() {
        PoolService.set(NamesFromTextService.getNames($scope.plaintext));
        $scope.pool = PoolService.get();
    };

    console.log('inserting a local gatherer dump');
    $scope.cards = CardCacheService.insert(all_cards);
}
