'use strict';

angular.module('lambic.directives', []).
    directive('main', function() {
       return {
           restrict: 'E',
           replace: true,
           template: ''+
               '<div id="content" class="span10 well well-large">' +
                   '<header></header>' +
                   '<div class="row content-viewport">' +
                       '<div class=span10>' +
                           '<paned-pool-view></paned-pool-view>' +
                       '</div>' +
                   '</div>' +
               '</div>'
       }
    }).
    directive('header', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/header.html',
           controller: function($scope, PoolService, CardCacheService) {
               console.log($scope.cards.count() + ' cards in the database');
               $scope.add = function(name) {
                   PoolService.add(name);
               }
           }
       }
    }).
    directive('sidebar', function() {
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'partials/sidebar.html'
       }
    }).
    directive('cardGrid', function(CubeSortService, $compile) {
       return {
           scope: {
               data: '='
           },
           restrict: 'E',
           replace: true,
           controller: function($scope) {
                $scope.spec = {
                    'cmc<=1': {},
                    'cmc==2': {},
                    'cmc==3': {},
                    'cmc==4': {},
                    'cmc==5': {},
                    'cmc==6': {},
                    'cmc>=7': {}
                };
           },

           link: function(scope, element) {

               var template = '' +
                   '<div>' +
                   '<div class="row layout-container">' +
                   '<div class="span10">' +
//                       '<label>Creatures</label>' +
                   '<smart-table data="table"></smart-table>' +
                   '</div>' +
                   '</div>' +
//                   '<div class="row">' +
//                   '<div class="span10">' +
//                       '<label>Non-Creatures</label>' +
//                       '<smart-table data="standardGrid"></smart-table>' +
//                       '</div>' +
//                   '</div>' +
                   '</div>';
               var newElement = angular.element(template);
               scope.table = CubeSortService.sortTable(scope.data, scope.spec);
               $compile(newElement)(scope);
               element.replaceWith(newElement);
           }
       }
    }).
    directive('panedPoolView', function(PoolService, CubeSortService) {
        return {
            restrict: 'E',
            replace: true,
            template: "" +
                "<div>" +
                    "<tabs>" +
                        '<pane ng-repeat="pane in panes" heading="{{pane.name}} ({{pane.total.count()}})" active="pane.active">' +
                            '<smart-table data="pane.data"></smart-table>' +
                        "</pane>" +
                    "</tabs>" +
                "</div>",
            
            controller: function($scope) {

                $scope.panes = [
                    {name: 'White', active: true},
                    {name: 'Blue'},
                    {name: 'Black'},
                    {name: 'Red'},
                    {name: 'Green'},
                    {name: 'Colorless'},
//                    {name: 'Multicolor', custom: true},
//                    {name: 'Land', custom: true},
                    {name: 'All'}
                ];
            },
            link: function(scope, element, attrs) {
                var spec = {
                    'cmc<=1': {},
                    'cmc==2': {},
                    'cmc==3': {},
                    'cmc==4': {},
                    'cmc==5': {},
                    'cmc==6': {},
                    'cmc>=7': {}
                };

                angular.forEach(scope.panes, function(pane) {
                    var totalOnPane = PoolService.onPane(pane.name);
                    pane.total = totalOnPane;
                    pane.data = CubeSortService.sortTable(totalOnPane, spec);
                });

            }
        }
    })
    .directive('smartTable', function ($compile, ZipService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '&',
                displayTemplate: '&',
                additionalClasses: '&'
            },

            link: function(scope, element) {
                console.log('rendering a smart table');
                var headerRow = [], items = [];
                angular.forEach(scope.data(), function(value, idx) {
                    headerRow.push(value.header);
                    items.push(value.data || []);
                });

                scope.headerRow = headerRow;
                scope.zipped = ZipService.longest.apply(this, items);
                scope.template = scope.displayTemplate() || 'item';
                scope.classes = (scope.additionalClasses() || []);
                scope.classes.push('smart-table-cell');

                var template = '' +
                    '<table class="smart-table card-layout">' +
                        '<tr>' +
                            '<th ng-repeat="title in headerRow" class="smart-table-cell smart-table-header">' +
                                '{{ title }}' +
                            '</th>' +
                        '</tr>' +
                        '<tr ng-repeat="row in zipped">' +
                            '<td ng-repeat="item in row" class="'+scope.classes.join(' ')+'">' +
                                '{{ '+scope.template+' || "&nbsp;"}}' +
                            '</td>' +
                        '</tr>' +
                    '</table>';

                var newElement = angular.element(template);
                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }
        };
    }
);
