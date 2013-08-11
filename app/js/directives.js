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
                   '<div class="row layout-container cardgrid">' +
                   '<div class="span10">' +
//                       '<label>Creatures</label>' +
                   '<smart-table data="table" classes="lambicCardClasses"></smart-table>' +
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
               scope.lambicCardClasses = ['screenshot'];
               $compile(newElement)(scope);
               element.replaceWith(newElement);
           }
       }
    }).
    directive('poolView', function(PoolService, CubeSortService) {
        return {
            restrict: 'E',
            replace: true,
            template: "" +
                "<div>" +

                    '<div class="btn-group view-selection">' +
                        '<button ng-repeat="value in categories" class="btn" type="button" ng-model="selectedCategory.value" btn-radio="value">{{value.name}} ({{ value.total.count() }})</button>' +
                    '</div>' +
                    "<div>" +
                        '<smart-table data="selectedCategory.value.data" display-template="template"></smart-table>' +
                    "</div>" +
                "</div>",
            
            controller: function($scope) {

                $scope.categories = [
//                    {name: 'White', category: 'MonoWhite', active: true},
//                    {name: 'Blue', category: 'MonoBlue'},
//                    {name: 'Black', category: 'MonoBlack'},
//                    {name: 'Red', category: 'MonoRed'},
//                    {name: 'Green', category: 'MonoGreen'},
                    {name: 'Colorless', category: 'Colorless/!Land', active: true},
//                    {name: 'Land', category: 'Colorless/Land'},
//                    {name: 'Multicolor', category: 'Multicolor'},
                    {name: 'White-Usable', category: '!Colorless/WhiteCastable'},
                    {name: 'Blue-Usable', category: '!Colorless/BlueCastable'},
                    {name: 'Black-Usable', category: '!Colorless/BlackCastable'},
                    {name: 'Red-Usable', category: '!Colorless/RedCastable'},
                    {name: 'Green-Usable', category: '!Colorless/GreenCastable'},
                    {name: 'Azorius-Usable', category: '!Colorless/White&BlueCastable'},
                    {name: 'Orzhov-Usable', category: '!Colorless/White&BlackCastable'},
                    {name: 'Boros-Usable', category: '!Colorless/White&RedCastable'},
                    {name: 'Selesnya-Usable', category: '!Colorless/White&GreenCastable'},
                    {name: 'Dimir-Usable', category: '!Colorless/Blue&BlackCastable'},
                    {name: 'Izzet-Usable', category: '!Colorless/Blue&RedCastable'},
                    {name: 'Simic-Usable', category: '!Colorless/Blue&GreenCastable'},
                    {name: 'Rakdos-Usable', category: '!Colorless/Black&RedCastable'},
                    {name: 'Golgari-Usable', category: '!Colorless/Black&GreenCastable'},
                    {name: 'Gruul-Usable', category: '!Colorless/Red&GreenCastable'},
//                    {name: 'Bant-Usable', category: '!Colorless/White&Blue&GreenCastable'},
//                    {name: 'Esper-Usable', category: '!Colorless/White&Blue&BlackCastable'},
//                    {name: 'Grixis-Usable', category: '!Colorless/Black&Blue&RedCastable'},
//                    {name: 'Jund-Usable', category: '!Colorless/Red&Black&GreenCastable'},
//                    {name: 'Naya-Usable', category: '!Colorless/White&Red&GreenCastable'},
//                    {name: 'WBR-Usable', category: '!Colorless/White&Black&RedCastable'},
//                    {name: 'RUG-Usable', category: '!Colorless/Red&Blue&GreenCastable'},
//                    {name: 'Junk-Usable', category: '!Colorless/Black&White&GreenCastable'},
//                    {name: 'RWU-Usable', category: '!Colorless/Red&White&BlueCastable'},
//                    {name: 'BUG-Usable', category: '!Colorless/Bluck&Blue&GreenCastable'},
                    {name: 'All', category: 'Any'}
                ];

                $scope.selectedCategory = {value: $scope.categories[0]};

                $scope.template = '<div tooltip-placement="right" tooltip-html-unsafe="<img id=\'cardview\' style=\'border:none;height=310px;width=223px\' src=\'http://gatherer.wizards.com/Handlers/Image.ashx?name={{ item.name }}&type=card\'>">{{ item.name }}</div>';

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
