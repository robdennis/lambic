'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
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

    describe('getUrlFromCard', function() {
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

    describe('manaSymbolsAsImages', function() {
        var manaImages;
        beforeEach(inject(function(manaSymbolsAsImagesFilter) {
            manaImages = manaSymbolsAsImagesFilter;
        }));

        var templatedUrl = function(name) {
            return "http://gatherer.wizards.com/Handlers/Image.ashx?" +
                "size=small&" +
                "type=symbol&" +
                "name=" + name;
        };

        it('should correctly handle bad data', function() {
            expect(manaImages('')).toEqual([]);
            expect(manaImages(null)).toEqual([]);
            expect(manaImages(undefined)).toEqual([]);
            expect(manaImages('XRR')).toEqual([]);
        });

        it('handles numbers', function() {
            expect(manaImages('{15}')).toEqual([templatedUrl('15')]);
            expect(manaImages('{6}')).toEqual([templatedUrl('6')]);
            expect(manaImages('{0}')).toEqual([templatedUrl('0')]);
        });

        it('handles hybrids and phyrexian', function() {
            expect(manaImages('{2}{2/R}')).toEqual([
                templatedUrl('2'), templatedUrl('2R')]);
            expect(manaImages('{U/R}{U/G}')).toEqual([
                templatedUrl('UR'), templatedUrl('UG')]);
            expect(manaImages('{U/P}{R/P}')).toEqual([
                templatedUrl('UP'), templatedUrl('RP')]);
        });

        it('handles X spells', function() {
            expect(manaImages('{X}{X}{R}')).toEqual([
                templatedUrl('X'), templatedUrl('X'), templatedUrl('R')]);
        });

        it("passes through what is parsed, only removing slashes", function() {
            expect(manaImages('{nonexistent}{r}')).toEqual([
                templatedUrl('nonexistent'), templatedUrl('r')]);
        });
    })
});
