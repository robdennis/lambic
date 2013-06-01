'use strict';

angular.module('lambic.directives', []).
    directive('case', function($compile) {
        return {
            restrict: 'E',
            scope: {
                deck: '='
            },
            link: function(scope, element, attrs, ctrl) {
                scope.$watch('deck', function(newVal, oldVal) {
                    scope.tabulate(scope.deck,
                        ['name', 'converted_mana_cost']);
                }, true)
            },
            controller: function($scope, $element) {
                $scope.tabulate = function(data, columns) {
                    var container = d3.select("#caseContainer");
                    container.selectAll('*').remove();
                    var table = container.append("table"),
                        thead = table.append("thead"),
                        tbody = table.append("tbody");

                    // append the header row
                    thead.append("tr")
                        .selectAll("th")
                        .data(columns)
                        .enter()
                        .append("th")
                        .text(function(column) { return column; });

                    // create a row for each object in the data
                    var rows = tbody.selectAll("tr")
                        .data(data)
                        .enter()
                        .append("tr");

                    // create a cell in each row for each column
                    var cells = rows.selectAll("td")
                        .data(function(row) {
                            return columns.map(function(column) {
                                return {column: column, value: row[column]};
                            });
                        })
                        .enter()
                        .append("td")
                        .text(function(d) { return d.value; });

                    return table;
                }
            },
            template: '<div id="caseContainer">'
        }
    });
