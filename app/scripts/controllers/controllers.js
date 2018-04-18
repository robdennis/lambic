'use strict';

/* Controllers */

angular.module('lambicApp.controllers', ['angular-onbeforeunload', 'lambicApp.services']);

function AppCtrl($scope,
                 PoolService,
                 CardCacheService,
                 NamesFromTextService, onBeforeUnload) {

    PoolService.subscribe(function(pool) {
        if ($scope.plaintext == '') {
            $scope.confirmLeaving()
        }
        $scope.plaintext = pool.select('name').join('\n');
        $scope.pool = pool;
    });

    $scope.makePool = function() {
        $scope.confirmLeaving()
        PoolService.set(NamesFromTextService.getNames($scope.plaintext));
        $scope.pool = PoolService.get();
    };

    $scope.cards = CardCacheService.insert(all_cards);

    $scope.confirmLeaving = function() {
        // If you invoking your reference then your listener becomes null.
        onBeforeUnload.init(
            'Are you sure you want to leave?',
            'Copy your pool on the left if you want to save it for later'
        );
    };
}

function StaticCtrl($scope, $route) {}

function NavCtrl($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    };
}