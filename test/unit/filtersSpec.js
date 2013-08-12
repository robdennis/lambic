'use strict';

/* jasmine specs for filters go here */

describe('filter', function($filter) {
    beforeEach(module('lambic.filters'));

    describe('inSlicesOf', function() {

        it('should pass some basic sanity checks',
            inject(function(inSlicesOfFilter) {
                var testArray = [0, 1, 2, 3, 4];
                expect(inSlicesOfFilter(testArray, 0)).toEqual([
                    [0], [1], [2], [3], [4]
                ]);
                expect(inSlicesOfFilter(testArray, 1)).toEqual([
                    [0], [1], [2], [3], [4]
                ]);
                expect(inSlicesOfFilter(testArray, 2)).toEqual([
                    [0, 1], [2, 3], [4]
                ]);
                expect(inSlicesOfFilter(testArray, 3)).toEqual([
                    [0, 1, 2], [3, 4]
                ]);
                expect(inSlicesOfFilter(testArray, 4)).toEqual([
                    [0, 1, 2, 3], [4]
                ]);
                expect(inSlicesOfFilter(testArray, 5)).toEqual([
                    testArray
                ]);
            })
        );
    });
});
