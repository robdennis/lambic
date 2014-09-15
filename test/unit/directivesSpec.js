'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
    beforeEach(module('lambicApp.directives', 'lambicApp.services', 'lambicApp.filters'));
    beforeEach(function() {
        this.addMatchers({
            toHaveClass: function(cls) {
                this.message = function() {
                    return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
                };

                return angular.element(this.actual).hasClass(cls)
            }
        });
    });

    describe('card-grid', function() {
        // this typically has one of more depth-charts and some header text
        var elm, compile, scope, poolService, cacheService;

        var getCompiledCardGrid = function(selected) {

            elm = angular.element(
                // wrapping with div is needed if you're compiling in a link function apparently
                '<div>' +
                    // only have the spec passed to the smart table if it's used
                    '<card-grid selected="selected"></card-grid>' +
                '</div>'
            );
            scope.selected = selected;

            compile(elm)(scope);
            // don't know if this is actually necessary?
            scope.$digest();
            return elm;
        };

        beforeEach(inject(function($rootScope, $compile,
                                   CardCacheService, PoolService) {
            scope = $rootScope;
            compile = $compile;
            poolService = PoolService;
            cacheService = CardCacheService;

            cacheService.insert(all_cards);
        }));

        it('should sanity check', function() {
            poolService.set(['Damnation', 'Bone Shredder']);
            expect(poolService.get().count()).toBe(2);
            var cardGrid = getCompiledCardGrid({
                total: poolService.get()
            });

            // I had trouble getting this to accept a class
            expect(cardGrid.find('table').length).toBeGreaterThan(0);

        })
    });

});

