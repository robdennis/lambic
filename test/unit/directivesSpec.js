'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
    beforeEach(module('lambic.directives', 'lambic.services'));
    beforeEach(function() {
        this.addMatchers({
            toHaveClass: function(cls) {
                this.message = function() {
                    return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
                };
            }
        });
    });


    describe('smart-table', function() {
        var elm, compile, scope;
        beforeEach(function() {
            this.addMatchers({
                toMatchDimension: function(length, height) {
                    var table = getCompiledSmartTable(this.actual);
                    var rows = table.find('tr');
                    var actualRows = rows.length;
                    var actualWidths = [];
                    angular.forEach(rows, function(row) {
                        // don't differentiate header rows from normal rows
                        var elmRow = angular.element(row);
                        actualWidths.push(elmRow.find('th').length +
                                          elmRow.find('td').length);
                    });

                    for (var i=0;i<actualWidths.length;i++) {
                        // for-loop allows us to return from here if we need to short-circuit
                        if (actualWidths[i] !== actualWidths[0]) {
                            this.message = function() {
                                return "not all row-widths are equal: " + angular.mock.dump(actualWidths);
                            };
                            return false;
                        }
                    }

                    this.message = function() {
                        return "expected a "+height+" row and "+length+" column table; " +
                               "got "+actualRows+" and "+actualWidths[0];
                    };
                    return actualRows === height && actualWidths[0] === length;
                },
                toHaveText: function(expectedValuesByRowThenCell, template) {
                    // this is going to assume that the dimensions match up with expectations
                    var table = getCompiledSmartTable(this.actual, template);
                    var rows = table.find('tr');
                    // for loops so we can return early
                    // don't collect header rows, so start at 1
                    for (var i=1; i<rows.length; i++) {
                        var cells = angular.element(rows[i]).find('td');
                        for (var j=0; j<cells.length; j++) {
                            var actualCell = angular.element(cells[j]).text();
                            var expectedCell = expectedValuesByRowThenCell[i-1][j];
                            if ( actualCell !== expectedCell) {
                                this.message = function() {
                                    return ("mismatched values at row "+(i-1)+" and column "+j+". " +
                                        actualCell + " != " +
                                        expectedCell + ".");
                                };

                                return false;
                            }
                        }
                    }

                    return true;
                }
            });
        });

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope;
            compile = $compile;
        }));

        var getCompiledSmartTable = function(data, template) {
            elm = angular.element(
                // wrapping with div is needed if you're compiling in a link function apparently
                '<div>' +
                '   <smart-table data="subLists" display-template="template"></smart-table>' +
                '</div>'
            );
            scope.subLists = data;
            scope.template = template;
            compile(elm)(scope);
            // don't know if this is actually necessary?
            scope.$digest();
            return elm;
        };

        var twoColumnSameRows = {
            stuff: ['foo', 'bar', 'baz'],
            stuff2: ['foo', 'bar', 'baz']
        };

        var twoColumnDifferentRows = {
            stuff: ['foo', 'bar', 'baz'],
            stuff2: ['foo', 'bar', 'baz', 'bax']
        };

        it('can make a 1-column table', function() {
            expect({
                stuff: ['foo', 'bar', 'baz']
            }).toMatchDimension(1, 4); // 3 rows plus a header row
        });

        it('can make a 2-column table with same lengths', function() {
            expect(twoColumnSameRows).toMatchDimension(2, 4);
        });

        it('can make a 2-column table with different lengths', function() {
            expect(twoColumnDifferentRows).toMatchDimension(2, 5);
        });

        it('defaults to showing the original value', function() {
            expect(twoColumnSameRows).toHaveText([
                ['foo', 'foo'],
                ['bar', 'bar'],
                ['baz', 'baz']
            ]);

            expect(twoColumnDifferentRows).toHaveText([
                ['foo', 'foo'],
                ['bar', 'bar'],
                ['baz', 'baz'],
                ['', 'bax']
            ]);
        });

        it('can accept a template "unknown" scope variable', function() {
            expect(twoColumnSameRows).toHaveText([
                ['', ''],
                ['', ''],
                ['', '']
            ], 'unknown');
        });

        it("can accept a template that's just a the value", function() {
            expect(twoColumnSameRows).toHaveText([
                ['foo', 'foo'],
                ['bar', 'bar'],
                ['baz', 'baz']
            ], 'item');
        });

        it("can accept a template that's an attribute access", function() {
            expect({
                stuff: [
                    {name: 'foo'}, 
                    {name: 'bar'}, 
                    {name: 'baz'}
                ],
                stuff2: [
                    {name: 'foo'}, 
                    {name: 'bar'}, 
                    {name: 'baz'}
                ]                
            }).toHaveText([
                ['foo', 'foo'],
                ['bar', 'bar'],
                ['baz', 'baz']
            ], 'item.name');

            expect({
                stuff: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'},
                    {name: 'bax'}
                ],
                stuff2: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'}
                ]
            }).toHaveText([
                    ['foo', 'foo'],
                    ['bar', 'bar'],
                    ['baz', 'baz'],
                    ['bax', '']
                ], 'item.name');

        });

        it("can accept a template that's an unknown attribute access", function() {
            expect({
                stuff: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'}
                ],
                stuff2: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'}
                ]
            }).toHaveText([
                    ['', ''],
                    ['', ''],
                    ['', '']
                ], 'item.unknown');

            expect({
                stuff: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'},
                    {name: 'bax'}
                ],
                stuff2: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'baz'}
                ]
            }).toHaveText([
                    ['', ''],
                    ['', ''],
                    ['', ''],
                    ['', '']
                ], 'item.unknown');
        });

    })
});

