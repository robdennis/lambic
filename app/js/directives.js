'use strict';

angular.module('lambic.directives', []).
    directive('main', function() {
       return {
           restrict: 'E',
           replace: true,
           template: ''+
               '<div id="content">' +
                   '<header></header>' +
                   '<div class="row content-viewport">' +
                       '<div class=span10>' +
                           '<pool-view></pool-view>' +
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
           controller: function($scope, PoolService) {
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
    directive('cardGrid', function(CubeSortService, $rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },

            template: "" +
            '<div>' +
                '<div>' +
                    '<smart-table data="tableData" display-template="template"></smart-table>' +
                '</div>' +
            '</div>',

            controller: function($scope) {
                var htmlTooltipTemplate = "" +
                    "<img " +
                        "id='cardview' " +
                        "style=\'border:none;height=310px;width=223px\' " +
                        "src='{{item | getUrlFromCard}}'" +
                    ">";

                $scope.template = '' +
                    '<div tooltip-placement="right" tooltip-html-unsafe="'+htmlTooltipTemplate+'">' +
                        '{{ item.name }}' +
                    '</div>';

            },

            link: function(scope) {

                var spec = scope.selected.spec || {
                    'cmc<=1': {},
                    'cmc==2': {},
                    'cmc==3': {},
                    'cmc==4': {},
                    'cmc==5': {},
                    'cmc==6': {},
                    'cmc>=7': {}
                };

                scope.$watch('selected.total', function(selected) {
                    scope.tableData = CubeSortService.sortTable(scope.selected.total.get(), spec);
                });
            }

        };
    }).
    directive('poolView', function(PoolService, CubeSortService) {
        return {
            restrict: 'E',
            replace: true,
            template: "" +
                "<div>" +
                    '<div class="btn-toolbar view-selection">' +
                        '<div ng-repeat="row in categories|inSlicesOf:6" class="btn-group">' +
                            '<button ng-repeat="value in row" class="btn btn-default" type="button" ng-model="selectedCategory.value" btn-radio="value">{{value.name}} ({{ value.total.count() }})</button>' +
                        '</div>' +
                    '</div>' +
                    "<div>" +
                        '<card-grid selected="selectedCategory.value"></card-grid>' +
                    "</div>" +
                "</div>",
            
            controller: function($scope) {

                $scope.categories = [
                    {name: 'White', category: 'MonoWhite', active: true},
                    {name: 'Blue', category: 'MonoBlue'},
                    {name: 'Black', category: 'MonoBlack'},
                    {name: 'Red', category: 'MonoRed'},
                    {name: 'Green', category: 'MonoGreen'},
                    {name: 'Colorless', category: 'Colorless/!Land'},
                    {name: 'Land', category: 'Colorless/Land'},
                    {name: 'Multicolor', category: 'Multicolor'},
                    {name: 'All', category: 'Any'}
                ];

                $scope.selectedCategory = {value: $scope.categories[0]};

            },
            link: function(scope) {
                scope.$watch('pool', function(newPool) {
                    angular.forEach(scope.categories, function(category) {
                        category.total = PoolService.filterCategory(category.category, newPool);
                    });
                });
            }
        }
    })
    .directive('smartTable', function ($compile, ZipService) {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                displayTemplate: '=',
                additionalClasses: '='
            },

            link: function(scope, element) {

                scope.$watch('data', function() {
                    var items = [];
                    scope.headerRow = [];
                    angular.forEach(scope.data, function(value) {
                        scope.headerRow.push(value.header);
                        items.push(value.data || []);
                    });

                    scope.zipped = ZipService.longest.apply(this, items);
                });

                var classes = (scope.additionalClasses || []);
                classes.push('smart-table-cell');

                var tdContent;
                if (scope.displayTemplate) {
                    tdContent = scope.displayTemplate;
                } else {
                    tdContent = '{{ item || "&nbsp;"}}';
                }

                var template = '' +
                    '<table class="smart-table card-layout">' +
                        '<tr>' +
                            '<th ng-repeat="title in headerRow" class="smart-table-cell smart-table-header">' +
                                '{{ title }}' +
                            '</th>' +
                        '</tr>' +
                        '<tr ng-repeat="row in zipped">' +
                            '<td ng-repeat="item in row" class="'+classes.join(' ')+'">' +
                                tdContent +
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
