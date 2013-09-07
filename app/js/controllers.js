'use strict';

/* Controllers */

angular.module('lambic.controllers', []);

function AppCtrl($scope,
                 PoolService,
                 CardCacheService,
                 NamesFromTextService) {

    PoolService.subscribe(function(pool) {
        $scope.plaintext = pool.select('name').join('\n');
        $scope.pool = pool;
    });

    $scope.makePool = function() {
        PoolService.set(NamesFromTextService.getNames($scope.plaintext));
        $scope.pool = PoolService.get();
    };

    $scope.cards = CardCacheService.insert(all_cards);
}

function StaticCtrl($scope, $routeParam) {
    console.log('e');
   $scope.title = "Sup"; 

}

// StaticCtrl.$inject = ['$scope', '$routeParam'];
