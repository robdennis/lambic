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
                       '<div class="col-lg-12">' +
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
           templateUrl: 'partials/content-header.html',
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
    directive('cardGrid', function(CubeSortService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                selected: '='
            },

            template: "" +
            '<div>' +
                '<div ng-repeat="table in tables">' +
                    '<label>{{ table.name }}</label>' +
                    '<smart-table data="table.data" display-template="template"></smart-table>' +
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

                var spec = scope.selected.spec || [
                    [{
                        category: 'Creature',
                        label: 'Creatures',
                        subcategories: [
                            {category: 'cmc<=1', cards: []},
                            {category: 'cmc==2', cards: []},
                            {category: 'cmc==3', cards: []},
                            {category: 'cmc==4', cards: []},
                            {category: 'cmc==5', cards: []},
                            {category: 'cmc==6', cards: []},
                            {category: 'cmc==7', cards: []},
                            {category: 'cmc>=8', cards: []}
                        ]}], [{
                        category: '!Creature',
                        label: 'Spells',
                        subcategories: [
                            {category: 'cmc<=1', cards: []},
                            {category: 'cmc==2', cards: []},
                            {category: 'cmc==3', cards: []},
                            {category: 'cmc==4', cards: []},
                            {category: 'cmc==5', cards: []},
                            {category: 'cmc==6', cards: []},
                            {category: 'cmc==7', cards: []},
                            {category: 'cmc>=8', cards: []}
                        ]}]
                ];

                scope.$watch('selected.total', function() {
                    var tables = [];
                    angular.forEach(spec, function(subSpec) {
                        tables.push({
                            name: subSpec[0].label || subSpec[0].category,
                            data: CubeSortService.sortTable(scope.selected.total.get(), subSpec)
                        });
                    });
                    scope.tables = tables;
                });
            }

        };
    }).
    directive('poolView', function(PoolService) {
        return {
            restrict: 'E',
            replace: true,
            template: "" +
                "<div class='view-filters'>" +
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
                var tdContent,
                    classes,
                    newElement,
                    template;

                scope.$watch('data', function() {
                    var items = [];
                    scope.headerRow = [];
                    angular.forEach(scope.data, function(value) {
                        scope.headerRow.push(value.header);
                        items.push(value.data || []);
                    });

                    scope.zipped = ZipService.longest.apply(this, items);
                });

                classes = (scope.additionalClasses || []);
                classes.push('smart-table-cell');

                if (scope.displayTemplate) {
                    tdContent = scope.displayTemplate;
                } else {
                    tdContent = '{{ item || "&nbsp;"}}';
                }

                template = '' +
                    '<table class="smart-table table table-striped table-hover card-layout">' +
                        '<thead>' +
                            '<tr class="smart-table-header-row">' +
                                '<th ng-repeat="title in headerRow" class="smart-table-header-cell">' +
                                    '{{ title }}' +
                                '</th>' +
                            '</tr>' +
                       '</thead> ' + '<tbody>' +
                            '<tr ng-repeat="row in zipped">' +
                                '<td ng-repeat="item in row track by $index" class="'+classes.join(' ')+'">' +
                                    tdContent +
                                '</td>' +
                            '</tr>' +
                        '</tbody>' +
                    '</table>';

                newElement = angular.element(template);
                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }
        };
    }
);
