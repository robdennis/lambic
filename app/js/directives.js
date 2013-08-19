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
    directive('poolView', function(PoolService, CubeSortService) {
        return {
            restrict: 'E',
            replace: true,
            template: "" +
                "<div>" +
                    '<div class="btn-group view-selection">' +
                        '<div ng-repeat="row in categories|inSlicesOf:6">' +
                            '<button ng-repeat="value in row" class="btn" type="button" ng-model="selectedCategory.value" btn-radio="value">{{value.name}} ({{ value.total.count() }})</button>' +
                        '</div>' +
                    '</div>' +
                    "<div>" +
                        '<smart-table data="selectedCategory.value.data" display-template="template"></smart-table>' +
                    "</div>" +
                "</div>",
            
            controller: function($scope, CardImageUrlService) {

                $scope.categories = [
                    {name: 'White', category: 'MonoWhite', active: true},
                    {name: 'Blue', category: 'MonoBlue'},
                    {name: 'Black', category: 'MonoBlack'},
                    {name: 'Red', category: 'MonoRed'},
                    {name: 'Green', category: 'MonoGreen'},
                    {name: 'Colorless', category: 'Colorless/!Land'},
                    {name: 'Land', category: 'Colorless/Land'},
                    {name: 'Multicolor', category: 'Multicolor'},
                    {name: 'White-Usable', category: 'WhiteCastable'},
                    {name: 'Blue-Usable', category: 'BlueCastable'},
                    {name: 'Black-Usable', category: 'BlackCastable'},
                    {name: 'Red-Usable', category: 'RedCastable'},
                    {name: 'Green-Usable', category: 'GreenCastable'},
                    {name: 'Azorius-Usable', category: 'White&BlueCastable'},
                    {name: 'Orzhov-Usable', category: 'White&BlackCastable'},
                    {name: 'Boros-Usable', category: 'White&RedCastable'},
                    {name: 'Selesnya-Usable', category: 'White&GreenCastable'},
                    {name: 'Dimir-Usable', category: 'Blue&BlackCastable'},
                    {name: 'Izzet-Usable', category: 'Blue&RedCastable'},
                    {name: 'Simic-Usable', category: 'Blue&GreenCastable'},
                    {name: 'Rakdos-Usable', category: 'Black&RedCastable'},
                    {name: 'Golgari-Usable', category: 'Black&GreenCastable'},
                    {name: 'Gruul-Usable', category: 'Red&GreenCastable'},
                    {name: 'Bant-Usable', category: 'White&Blue&GreenCastable'},
                    {name: 'Esper-Usable', category: 'White&Blue&BlackCastable'},
                    {name: 'Grixis-Usable', category: 'Black&Blue&RedCastable'},
                    {name: 'Jund-Usable', category: 'Red&Black&GreenCastable'},
                    {name: 'Naya-Usable', category: 'White&Red&GreenCastable'},
                    {name: 'WBR-Usable', category: 'White&Black&RedCastable'},
                    {name: 'RUG-Usable', category: 'Red&Blue&GreenCastable'},
                    {name: 'Junk-Usable', category: 'Black&White&GreenCastable'},
                    {name: 'RWU-Usable', category: 'Red&White&BlueCastable'},
                    {name: 'BUG-Usable', category: 'Bluck&Blue&GreenCastable'},
                    {name: 'All', category: 'Any'}
                ];

                $scope.selectedCategory = {value: $scope.categories[0]};
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
                var spec = {
                    'cmc<=1': {},
                    'cmc==2': {},
                    'cmc==3': {},
                    'cmc==4': {},
                    'cmc==5': {},
                    'cmc==6': {},
                    'cmc>=7': {}
                };

                scope.$watch('pool', function(newPool) {
                    angular.forEach(scope.categories, function(category) {
                        var totalOnPane = PoolService.filterCategory(category.category, newPool);
                        category.total = totalOnPane;
                        category.data = CubeSortService.sortTable(totalOnPane.get(), spec);
                    });
                })
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
