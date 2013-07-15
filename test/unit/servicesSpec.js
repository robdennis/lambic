'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    beforeEach(module('lambic.services'));
    describe('PoolService', function() {
        var poolService, cacheService;
        beforeEach(inject(function(PoolService, CardCacheService) {
            poolService = PoolService;
            cacheService = CardCacheService;
            spyOn(CardCacheService, 'get')
        }));

        it('adding a name puts it in the cache', function() {
            poolService.add('Terror');
            expect(cacheService.get).toHaveBeenCalled()
        });
    });

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

    describe('CardCacheService', function() {
        var cacheService;
        beforeEach(inject(function(CardCacheService) {
            cacheService = CardCacheService;
        }));

        it("should note which cards are missing", function() {
            expect(cacheService.missingNames(['unknown', 'not yet known'])).toEqual(['unknown', 'not yet known']);
            cacheService.set('not yet known', {});
            expect(cacheService.missingNames(['unknown', 'not yet known'])).toEqual(['unknown']);
        });
    });
});
