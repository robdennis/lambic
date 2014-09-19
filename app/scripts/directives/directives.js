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
//                    {name: 'Multicolor', category: 'Multicolor'},
//                    {name: 'White', category: 'MonoWhite'},
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
                    {name: 'Bant-castable', category: 'White&Blue&GreenCastable'},
                    {name: 'Azban-castable', category: 'White&Black&GreenCastable'},
                    {name: 'Esper-castable', category: 'White&Black&BlueCastable'},
                    {name: 'Sultai-castable', category: 'Green&Black&BlueCastable'},
                    {name: 'Jund-castable', category: 'Green&Black&RedCastable'},
                    {name: 'Temur-castable', category: 'Green&Blue&RedCastable'},
                    {name: 'Naya-castable', category: 'Green&White&RedCastable'},
                    {name: 'Mardu-castable', category: 'Black&White&RedCastable'},
                    {name: 'Grixis-castable', category: 'Black&Blue&RedCastable'},
                    {name: 'Jeskai-castable', category: 'White&Blue&RedCastable'},
//                    {name: 'Bant', category: 'White/Blue/Green'},
//                    {name: 'Azban', category: 'White/Black/Green'},
//                    {name: 'Esper', category: 'White/Black/Blue'},
//                    {name: 'Sultai', category: 'Green/Black/Blue'},
//                    {name: 'Jund', category: 'Green/Black/Red'},
//                    {name: 'Temur', category: 'Green/Blue/Red'},
//                    {name: 'Naya', category: 'Green/White/Red'},
//                    {name: 'Mardu', category: 'Black/White/Red'},
//                    {name: 'Grixis', category: 'Black/Blue/Red'},
//                    {name: 'Jeskai', category: 'White/Blue/Red'},
//                    {name: 'Azorious', category: 'White/Blue'},
//                    {name: 'Orzhov', category: 'White/Black'},
//                    {name: 'Dimir', category: 'Black/Blue'},
//                    {name: 'Simic', category: 'Green/Blue'},
//                    {name: 'Jund', category: 'Green/Black/Red'},
//                    {name: 'Izzet', category: 'Blue/Red'},
//                    {name: 'Gruul', category: 'Green/Red'},
//                    {name: 'Boros', category: 'White/Red'},
//                    {name: 'Rakdos', category: 'Black/Red'},
//                    {name: 'Selesnya', category: 'White/Green'}
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