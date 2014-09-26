'use strict';

angular.module('lambicApp.directives', ['ng-depthchart']).
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
            controller: function($scope, PoolService, CardCacheService) {
                $scope.add = function(name) {
                    PoolService.add(name);
                };

                $scope.visibleCards = [];
                $scope.$watch('selectedCategory.value.category', function() {
                    // only show what's on the tab you're on for quick add
                    $scope.visibleCards = CardCacheService.filterCategory($scope.selectedCategory.value.category).get();
                });
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
                '<depth-chart data="table.data" display-template="template" template-function="remove(name)"></depth-chart>' +
                '</div>' +
                '</div>',

            controller: function($scope, PoolService) {
                $scope.pool = PoolService;
                var htmlTooltipTemplate = "" +
                    "<img " +
                    "id='cardview' " +
                    "style=\'border:none;height=310px;width=223px\' " +
                    "src='{{item | getUrlFromCard}}'" +
                    ">";
                $scope.remove = PoolService.remove;
                $scope.template = '' +
                    '<div tooltip-placement="right" tooltip-html-unsafe="'+htmlTooltipTemplate+'">' +
                    '<span>{{ item.name }}</span>&nbsp;' +
                    '<button ng-if="item.name" ng-click="templateFunction({name:item.name})">-</button>' +
                    '</div>';

            },

            link: function(scope) {
                var spec;
                scope.$watch('selected', function(){
                    spec = scope.selected.spec || [
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
                });

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

//                $scope.categories = [
//                    {name: 'White', category: 'MonoWhite', active: true},
//                    {name: 'Blue', category: 'MonoBlue'},
//                    {name: 'Black', category: 'MonoBlack'},
//                    {name: 'Red', category: 'MonoRed'},
//                    {name: 'Green', category: 'MonoGreen'},
//                    {name: 'Colorless', category: 'Colorless/!Land'},
//                    {name: 'Land', category: 'Colorless/Land', spec: [[
//                        {category: 'Any', label: 'Sources', subcategories: [
//                            {category: 'WhiteSource', label: 'White Sources', cards: []},
//                            {category: 'BlueSource', label: 'Blue Sources', cards: []},
//                            {category: 'BlackSource', label: 'Black Sources', cards: []},
//                            {category: 'RedSource', label: 'Red Sources', cards: []},
//                            {category: 'GreenSource', label: 'Green Sources', cards: []},
//                            {category: '!WhiteSource/!BlueSource/!BlackSource/!RedSource/!GreenSource',
//                                label: 'Colorless', cards: []}
//                        ]}
//                    ]]},
//                    {name: 'Multicolor', category: 'Multicolor'},
//                    {name: 'All', category: 'Any'}
//                ];
                $scope.categories = [
                    {name: 'All', category: 'Any', active: true},
//                    {name: 'White', category: 'WhiteColorIdentityExclusive'},
//                    {name: 'Blue', category: 'BlueColorIdentityExclusive'},
//                    {name: 'Black', category: 'BlackColorIdentityExclusive'},
//                    {name: 'Red', category: 'RedColorIdentityExclusive'},
//                    {name: 'Green', category: 'GreenColorIdentityExclusive'},
//                    {name: 'Colorless', category: 'Colorless/!Land'},
                    {name: 'Bant-relevant', category: 'White&Blue&GreenColorIdentityInclusive/!Land'},
                    {name: 'Azban-relevant', category: 'White&Black&GreenColorIdentityInclusive/!Land'},
                    {name: 'Esper-relevant', category: 'White&Black&BlueColorIdentityInclusive/!Land'},
                    {name: 'Sultai-relevant', category: 'Green&Black&BlueColorIdentityInclusive/!Land'},
                    {name: 'Jund-relevant', category: 'Green&Black&RedColorIdentityInclusive/!Land'},
                    {name: 'Temur-relevant', category: 'Green&Blue&RedColorIdentityInclusive/!Land'},
                    {name: 'Naya-relevant', category: 'Green&White&RedColorIdentityInclusive/!Land'},
                    {name: 'Mardu-relevant', category: 'Black&White&RedColorIdentityInclusive/!Land'},
                    {name: 'Grixis-relevant', category: 'Black&Blue&RedColorIdentityInclusive/!Land'},
                    {name: 'Jeskai-relevant', category: 'White&Blue&RedColorIdentityInclusive/!Land'},
                    {name: 'Colorless', category: 'Colorless/!Land'},
                    {name: 'Bant-Castable', category: 'White&Blue&GreenCastable'},
                    {name: 'Azban-Castable', category: 'White&Black&GreenCastable'},
                    {name: 'Esper-Castable', category: 'White&Black&BlueCastable'},
                    {name: 'Sultai-Castable', category: 'Green&Black&BlueCastable'},
                    {name: 'Jund-Castable', category: 'Green&Black&RedCastable'},
                    {name: 'Temur-Castable', category: 'Green&Blue&RedCastable'},
                    {name: 'Naya-Castable', category: 'Green&White&RedCastable'},
                    {name: 'Mardu-Castable', category: 'Black&White&RedCastable'},
                    {name: 'Grixis-Castable', category: 'Black&Blue&RedCastable'},
                    {name: 'Jeskai-Castable', category: 'White&Blue&RedCastable'},
//                    {name: 'Azorious', category: 'White&BlueColorIdentityExclusive'},
//                    {name: 'Orzhov', category: 'White&BlackColorIdentityExclusive'},
//                    {name: 'Dimir', category: 'Black&BlueColorIdentityExclusive'},
//                    {name: 'Simic', category: 'Green&BlueColorIdentityExclusive'},
//                    {name: 'Jund', category: 'Green&Black&RedColorIdentityExclusive'},
//                    {name: 'Izzet', category: 'Blue&RedColorIdentityExclusive'},
//                    {name: 'Gruul', category: 'Green&RedColorIdentityExclusive'},
//                    {name: 'Boros', category: 'White&RedColorIdentityExclusive'},
//                    {name: 'Rakdos', category: 'Black&RedColorIdentityExclusive'},
//                    {name: 'Selesnya', category: 'White&GreenColorIdentityExclusive'}

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
    });