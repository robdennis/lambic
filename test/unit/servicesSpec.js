'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    beforeEach(module('lambic.services'));
    describe('ZipService', function() {
        var zipService;
        beforeEach(inject(function(ZipService) {
            zipService = ZipService;
        }));

        it('should sanity check', function() {
            var expected = [[1, 'a'], [2, 'b'], [3, undefined]];
            expect(zipService.longest(
                [1, 2, 3],
                ['a', 'b']
            )).toEqual(expected);

            expect(zipService.longest.apply(
                this, [[1, 2, 3], ['a', 'b']])
            ).toEqual(expected)
        });
    });

});
