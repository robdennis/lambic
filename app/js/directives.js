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

                $scope.categories = [
                    // top row
                    {name: 'All', category: 'Any', active: true},
                    {name: 'White', category: 'WhiteColorIdentityExclusive'},
                    {name: 'Blue', category: 'BlueColorIdentityExclusive'},
                    {name: 'Black', category: 'BlackColorIdentityExclusive'},
                    {name: 'Red', category: 'RedColorIdentityExclusive'},
                    {name: 'Green', category: 'GreenColorIdentityExclusive'},
                    {name: 'Colorless', category: 'Colorless/!Land'},
                    {name: 'Land', category: 'Colorless/Land', spec: [[
                        {category: 'Any', label: 'Sources', subcategories: [
                            {category: 'WhiteSource', label: 'White Sources', cards: []},
                            {category: 'BlueSource', label: 'Blue Sources', cards: []},
                            {category: 'BlackSource', label: 'Black Sources', cards: []},
                            {category: 'RedSource', label: 'Red Sources', cards: []},
                            {category: 'GreenSource', label: 'Green Sources', cards: []},
                            {category: '!WhiteSource/!BlueSource/!BlackSource/!RedSource/!GreenSource',
                                label: 'Colorless', cards: []}
                        ]}
                    ]]},
                    {name: 'Guilds', category: '2-color-identity', spec: [[
                        {label: 'Azorious', category: 'White&BlueColorIdentityExclusive', cards: []},
                        {label: 'Orzhov', category: 'White&BlackColorIdentityExclusive', cards: []},
                        {label: 'Dimir', category: 'Black&BlueColorIdentityExclusive', cards: []},
                        {label: 'Simic', category: 'Green&BlueColorIdentityExclusive', cards: []},
                        {label: 'Golgari', category: 'Green&BlackColorIdentityExclusive', cards: []},
                        {label: 'Izzet', category: 'Blue&RedColorIdentityExclusive', cards: []},
                        {label: 'Gruul', category: 'Green&RedColorIdentityExclusive', cards: []},
                        {label: 'Boros', category: 'White&RedColorIdentityExclusive', cards: []},
                        {label: 'Rakdos', category: 'Black&RedColorIdentityExclusive', cards: []},
                        {label: 'Selesnya', category: 'White&GreenColorIdentityExclusive', cards: []}
                    ]]},
                    {name: 'Shards/Clans', category: '3+-color-identity', spec: [[
                        {label: 'Bant', category: 'White&Blue&GreenColorIdentityExclusive', cards: []},
                        {label: 'Azban', category: 'White&Black&GreenColorIdentityExclusive', cards: []},
                        {label: 'Esper', category: 'White&Black&BlueColorIdentityExclusive', cards: []},
                        {label: 'Sultai', category: 'Green&Black&BlueColorIdentityExclusive', cards: []},
                        {label: 'Jund', category: 'Green&Black&RedColorIdentityExclusive', cards: []},
                        {label: 'Temur', category: 'Green&Blue&RedColorIdentityExclusive', cards: []},
                        {label: 'Naya', category: 'Green&White&RedColorIdentityExclusive', cards: []},
                        {label: 'Mardu', category: 'Black&White&RedColorIdentityExclusive', cards: []},
                        {label: 'Grixis', category: 'Black&Blue&RedColorIdentityExclusive', cards: []},
                        {label: 'Jeskai', category: 'White&Blue&RedColorIdentityExclusive', cards: []}
                    ]]},
                    // second row
                    {name: 'Bant-ci', category: 'White&Blue&GreenColorIdentityInclusive/!Land'},
                    {name: 'Azban-ci', category: 'White&Black&GreenColorIdentityInclusive/!Land'},
                    {name: 'Esper-ci', category: 'White&Black&BlueColorIdentityInclusive/!Land'},
                    {name: 'Sultai-ci', category: 'Green&Black&BlueColorIdentityInclusive/!Land'},
                    {name: 'Jund-ci', category: 'Green&Black&RedColorIdentityInclusive/!Land'},
                    {name: 'Temur-ci', category: 'Green&Blue&RedColorIdentityInclusive/!Land'},
                    {name: 'Naya-ci', category: 'Green&White&RedColorIdentityInclusive/!Land'},
                    {name: 'Mardu-ci', category: 'Black&White&RedColorIdentityInclusive/!Land'},
                    {name: 'Grixis-ci', category: 'Black&Blue&RedColorIdentityInclusive/!Land'},
                    {name: 'Jeskai-ci', category: 'White&Blue&RedColorIdentityInclusive/!Land'},
                    // third row
                    {name: 'Bant', category: 'White&Blue&GreenCastable'},
                    {name: 'Azban', category: 'White&Black&GreenCastable'},
                    {name: 'Esper', category: 'White&Black&BlueCastable'},
                    {name: 'Sultai', category: 'Green&Black&BlueCastable'},
                    {name: 'Jund', category: 'Green&Black&RedCastable'},
                    {name: 'Temur', category: 'Green&Blue&RedCastable'},
                    {name: 'Naya', category: 'Green&White&RedCastable'},
                    {name: 'Mardu', category: 'Black&White&RedCastable'},
                    {name: 'Grixis', category: 'Black&Blue&RedCastable'},
                    {name: 'Jeskai', category: 'White&Blue&RedCastable'},
                    // 4th
                    {name: 'Azorious', category: 'White&BlueCastable'},
                    {name: 'Orzhov', category: 'White&BlackCastable'},
                    {name: 'Dimir', category: 'Black&BlueCastable'},
                    {name: 'Simic', category: 'Green&BlueCastable'},
                    {name: 'Golgari', category: 'Green&BlackCastable'},
                    {name: 'Izzet', category: 'Blue&RedCastable'},
                    {name: 'Gruul', category: 'Green&RedCastable'},
                    {name: 'Boros', category: 'White&RedCastable'},
                    {name: 'Rakdos', category: 'Black&RedCastable'},
                    {name: 'Selesnya', category: 'White&GreenCastable'}

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
