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

    describe('inSlicesOf', function() {
        var getUrlFromCard;
        beforeEach(inject(function(getUrlFromCardFilter) {
            getUrlFromCard = getUrlFromCardFilter;
        }));

        beforeEach(function() {
            this.addMatchers({
                toHaveEscapedName: function(escapedName) {
                    var expected = "http://gatherer.wizards.com/Handlers/Image.ashx?name="+escapedName+"&type=card";
                    return this.actual == expected;
                }
            });
        });

        it('should correctly handle null data', function() {
            expect(getUrlFromCard(undefined)).toBeNull();
            expect(getUrlFromCard({name: undefined})).toBeNull();
        });

        it('should correctly handle spaces', function() {
            expect(getUrlFromCard({name: "Doomed Traveler"})).toHaveEscapedName('Doomed%20Traveler');
        });

        it('should correctly handle double quotes and commas', function() {
            expect(getUrlFromCard({name: 'Pang Tong, "Young Phoenix"'})).toHaveEscapedName("Pang%20Tong%2C%20%22Young%20Phoenix%22");
        });

        it('should correctly handle apostrophes', function() {
            expect(getUrlFromCard({name: "Gideon's Lawkeeper"})).toHaveEscapedName("Gideon%27s%20Lawkeeper");
        });

        it('should correctly handle split cards', function() {
            expect(getUrlFromCard({name: "Fire // Ice (Ice)"})).toHaveEscapedName("Fire%20%2F%2F%20Ice");
        });

        it('should correctly handle flip cards (showing unflipped name)', function() {
            expect(getUrlFromCard({name: "Nezumi Graverobber (Nighteyes the Desecrator)"})).toHaveEscapedName("Nezumi%20Graverobber");
        });
    });

});
