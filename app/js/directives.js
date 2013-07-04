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
    }).directive('smartTable', function ($compile, ZipService) {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                displayTemplate: '='
            },

            link: function(scope, element, attrs, diffCtrl) {
                var headerRow = [], items = [];
                angular.forEach(scope.data, function(value, key) {
                    headerRow.push(key);
                    items.push(value);
                });

                scope.headerRow = headerRow;
                scope.zipped = ZipService.longest.apply(this, items);
                scope.displayTemplate = scope.displayTemplate || 'item';

                var template = '' +
                    '<table class="smart-table">' +
                    '   <tr>' +
                    '       <th ng-repeat="title in headerRow" class="smart-table-cell smart-table-header">' +
                    '           {{ title }}' +
                    '       </th>' +
                    '   </tr>' +
                    '   <tr ng-repeat="row in zipped">' +
                    '       <td ng-repeat="item in row" class="smart-table-cell">{{ '+scope.displayTemplate+' }}</td>' +
                    '   </tr>' +
                    '</table>';

                var newElement = angular.element(template);
                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }
        };
    }
);
