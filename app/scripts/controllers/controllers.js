'use strict';

/* Controllers */

angular.module('lambicApp.controllers', ['angular-onbeforeunload', 'lambicApp.services']);

function AppCtrl($scope,
                 PoolService,
                 CardCacheService,
                 NamesFromTextService, onBeforeUnload) {

    PoolService.subscribe(function(pool) {
        $scope.plaintext = pool.select('name').join('\n');
        $scope.pool = pool;
    });

    $scope.makePool = function() {
        PoolService.set(NamesFromTextService.getNames($scope.plaintext));
        $scope.pool = PoolService.get();
    };

    $scope.cards = CardCacheService.insert(all_cards);

    // https://github.com/gdi2290/angular-beforeunload
    var beforeUnload = $scope.$on('$locationChangeStart', function() {
        if ($scope.plaintext) {
            onBeforeUnload.init(
                'Are you sure you want to leave?',
                'Copy your pool on the left if you want to save it for later'
            );
        }
    });

    $scope.submitPage = function() {
        // If you invoking your reference then your listener becomes null.
        beforeUnload();
    };
}

function StaticCtrl($scope, $route) {}

function NavCtrl($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    };
}