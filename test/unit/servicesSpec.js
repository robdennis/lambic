'use strict';

/* jasmine specs for services go here */


var namifySortedCube = function(cube) {
    // it's simpler to write tests that just expect names of
    // cards instead of listing all the attributes of that card
    // so dump it out to just the names
    var _recurseNamify;

    if (cube instanceof Array) {
        _recurseNamify = function(subCube) {
            angular.forEach(subCube, function(categoryObject) {

                if (categoryObject.hasOwnProperty('subcategories')) {
                    _recurseNamify(categoryObject.subcategories);
                }

                else if (categoryObject.cards instanceof Array) {
                    angular.forEach(categoryObject.cards, function(card, idx) {
                        categoryObject.cards[idx] = card['name'];
                    })
                } else {
                    throw "unexpected cube format in namifySortedCube"
                }
            })
        };
    } else {

        _recurseNamify = function(subCube) {
            angular.forEach(subCube, function(_subCube) {
                if (_subCube instanceof Array) {
                    angular.forEach(_subCube, function(card) {
                        _subCube[idx] = card['name'];
                    })
                } else {
                    _recurseNamify(_subCube);
                }
            })};
    }

    _recurseNamify(cube);
    return cube;
};

var getValues = function(someArray, key) {
    var values = [];
    key = key || 'name';
    angular.forEach(someArray, function(item) {
        var toPush = item[key];
        if (toPush === undefined) {
            console.log(key + ' not present in ' + item);
        }
        values.push(toPush);
    });
    return values;
};

describe('service', function() {
    var cubeContents;

    var eliteVanguard, karn, dynamo, sculler, damnation,
        emrakul, devilsPlay, souls, legionnaire, nephilim, sliverQueen,
        wwwww, ultimatum, divinityOfPride, mutavault;



    beforeEach(function() {
        module('lambic.services');
    });

    beforeEach(inject(function(CardCacheService) {
        cubeContents = {};
        angular.forEach(all_cards, function(card) {
            cubeContents[card.name] = CardCacheService.onInsert(card);
        });

        eliteVanguard = cubeContents['Elite Vanguard'];
        karn = cubeContents['Karn Liberated'];
        dynamo = cubeContents['Thran Dynamo'];
        sculler = cubeContents['Tidehollow Sculler'];
        damnation = cubeContents['Damnation'];
        emrakul = cubeContents['Emrakul, the Aeons Torn'];
        devilsPlay = cubeContents["Devil's Play"];
        souls = cubeContents["Lingering Souls"];
        legionnaire = cubeContents["Porcelain Legionnaire"];
        nephilim = cubeContents['Witch-Maw Nephilim'];
        sliverQueen = cubeContents['Sliver Queen'];
        wwwww = cubeContents['Who/What/When/Where/Why'];
        ultimatum = cubeContents['Cruel Ultimatum'];
        divinityOfPride = cubeContents['Divinity of Pride'];
        mutavault = cubeContents['Mutavault'];

    }));


    describe('PoolService', function() {
        var poolService, cacheService;
        beforeEach(inject(function(PoolService, CardCacheService) {
            poolService = PoolService;
            cacheService = CardCacheService;
            cacheService.insert([
                divinityOfPride, damnation, damnation, dynamo, sculler, eliteVanguard, mutavault
            ]);
            spyOn(CardCacheService, 'get_card').andCallThrough()

        }));

        beforeEach(function() {
            this.addMatchers({
                toMatchCount: function(count) {
                    var category = this.actual;
                    var results = poolService.filterCategory(category).get();
                    this.message = function() {
                        return 'for '+category+' results: '+getValues(results) + ' vs ' + count;
                    };
                    return results.length === count;
                }
            })
        });

        afterEach(function() {
           cacheService.get().remove()
        });

        it('adding a name puts it in the cache', function() {
            poolService.add('Damnation');
            expect(cacheService.get_card).toHaveBeenCalled();
            expect(poolService.get().count()).toBe(1);
        });

        it('adding an unknown name does not do anything', function() {
            poolService.add('UNKNOWN CARD NAME');
            expect(cacheService.get_card).toHaveBeenCalled();
            expect(poolService.get().count()).toBe(0);
        });

        it('should correctly guess say what is on a pane', function() {
            poolService.addMany([
                'Damnation',
                'Divinity of Pride',
                'Elite Vanguard',
                'Mutavault',
                'Mutavault',
                'Thran Dynamo',
                'Tidehollow Sculler']
            );
            expect('Land').toMatchCount(2);
            expect('White').toMatchCount(3);
            expect('Black').toMatchCount(3);
            expect('MonoWhite').toMatchCount(1);
            expect('MonoBlack').toMatchCount(1);
            expect('WhiteCastable').toMatchCount(3);
            expect('BlackCastable').toMatchCount(3);
            expect('Black&WhiteCastable').toMatchCount(5);
            expect('White&BlackCastable').toMatchCount(5);
            expect('White|Black').toMatchCount(4);
            expect('Black|White').toMatchCount(4);
            expect('White/Black').toMatchCount(2);
            expect('Black/White').toMatchCount(2);
            expect('Multicolor').toMatchCount(2);
            expect('Colorless').toMatchCount(3);
            expect('Any').toMatchCount(7)

        })
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

    describe('ManaCostRegexService', function() {
        var regexService;
        beforeEach(inject(function(ManaCostRegexService) {
            regexService = ManaCostRegexService;
        }));

        it('should check whether something is castable by a single color of mana', function() {
            var whiteCouldCast = regexService.isCastableRegExp(['White']);

            expect('{W}').toMatch(whiteCouldCast);
            expect('{W/2}').toMatch(whiteCouldCast);
            expect('{W/P}').toMatch(whiteCouldCast);
            expect('{X}{X}{2}{W}').toMatch(whiteCouldCast);
            expect('{W/B}{R/W}{W/R}').toMatch(whiteCouldCast);
            expect('{2}').toMatch(whiteCouldCast);
            expect('{U}').not.toMatch(whiteCouldCast);
            expect('{U/2}').not.toMatch(whiteCouldCast);
            expect('{U/P}').not.toMatch(whiteCouldCast);
            expect('{X}{X}{2}{U}').not.toMatch(whiteCouldCast);
            expect('{W/B}{R/B}{W/R}').not.toMatch(whiteCouldCast);
            expect('{W}{R}').not.toMatch(whiteCouldCast);
        });

        it('should check whether a color is present', function() {
            var whiteIsPresent = regexService.isColorPresent('White');
            var blueIsPresent = regexService.isColorPresent('Blue');
            var blackIsPresent = regexService.isColorPresent('Black');
            var redIsPresent = regexService.isColorPresent('Red');
            var greenIsPresent = regexService.isColorPresent('Green');

            expect('{W/B}{R/B}{W/R}').toMatch(whiteIsPresent);
            expect('{W/B}{R/B}{W/R}').toMatch(blackIsPresent);
            expect('{W/B}{R/B}{W/R}').toMatch(redIsPresent);
            expect('{W/B}{R/B}{W/R}').not.toMatch(greenIsPresent);
            expect('{W/B}{R/B}{W/R}').not.toMatch(blueIsPresent);
            expect('{W}{R}').toMatch(whiteIsPresent);
            expect('{W}').toMatch(whiteIsPresent);
            expect('{W}{R}').toMatch(redIsPresent);
            expect('{G/P}').toMatch(greenIsPresent);
        });

    });

    describe('HeuristicService', function() {
        var heuristicService;
        beforeEach(inject(function(HeuristicService) {
            heuristicService = HeuristicService;
        }));

        beforeEach(function() {
            this.addMatchers({
                toMatchColors: function(colorsList) {
                    var expected = colorsList.sort();
                    var actual = heuristicService.estimateColors(this.actual).sort();

                    this.message = function() {

                        return ('expected colors ' + this.actual + ': ' +
                            angular.mock.dump(actual) + ' to match ' +
                            angular.mock.dump(expected));
                    };
                    return angular.equals(expected, actual);

                }
            });
        });

        it('should correctly estimate colors from a mana cost', function() {
            expect(eliteVanguard).toMatchColors(['White'])
        });
    });

    describe("cardCategoryServiceTest", function() {
        var svc, heuristicsSvc;


        beforeEach(inject(function ($injector,
                                    CardCategoryService,
                                    HeuristicService) {
            svc = CardCategoryService;
            heuristicsSvc = HeuristicService;

        }));

        beforeEach(function() {
            this.addMatchers({
                toMatchCategory: function(category) {
                    var card = this.actual;

                    this.message = function() {
                        return 'expected '+card.name+' to match '+category;
                    };
                    return svc.matchesCategory(category, card);
                }
            })
        });


        it('should handle diff categories', function() {
            expect({_diffResult: 'both'}).toMatchCategory('both');
            expect({_diffResult: 'both'}).not.toMatchCategory('added');
            expect({_diffResult: 'added'}).toMatchCategory('added');
            expect({_diffResult: 'removed'}).toMatchCategory('removed');
            expect(eliteVanguard).not.toMatchCategory('added');
            expect(angular.extend({}, eliteVanguard, {_diffResult: 'added'})).toMatchCategory('added');
            expect(angular.extend({}, eliteVanguard, {_diffResult: 'both'})).not.toMatchCategory('added');
        });

        it('should handle monocolor and negation', function() {
            expect(eliteVanguard).toMatchCategory('MonoWhite');
            expect(eliteVanguard).toMatchCategory('White');
            expect(eliteVanguard).not.toMatchCategory('White/Blue');
            expect(eliteVanguard).toMatchCategory('!Blue/!Black');
            expect(eliteVanguard).not.toMatchCategory('!White');
            // a white and black card is white
            expect(sculler).not.toMatchCategory('MonoWhite');
        });
        it('should handle simple types and negation', function() {

            expect(eliteVanguard).toMatchCategory('Creature');
            expect(eliteVanguard).not.toMatchCategory('!Creature');
        });

        it('should handle either/or categories intelligently', function() {
            expect(eliteVanguard).not.toMatchCategory('Sorcery|Instant');
            expect(eliteVanguard).toMatchCategory('Artifact|Creature|Planeswalker');
            expect(karn).toMatchCategory('Colorless/Artifact|Creature|Planeswalker');
            expect(damnation).toMatchCategory('Sorcery|Instant');
            expect(damnation).not.toMatchCategory('!Sorcery|!Black');
            // this is an unhelpful category, but a sorcery is not an instant, sooo...
            expect(damnation).toMatchCategory('!Sorcery|!Instant');
            // Black "spells"
            expect(damnation).toMatchCategory('Black/Sorcery|Instant');
            expect(damnation).toMatchCategory('Sorcery|Instant/Black');
            expect(damnation).not.toMatchCategory('Blue/Sorcery|Instant');
            expect(damnation).not.toMatchCategory('Sorcery|Instant/Blue');
            expect(damnation).toMatchCategory('Sorcery|Creature/Black');
            expect(damnation).not.toMatchCategory('Instant|Creature/Black');
            // this isn't that helpful, but there it is
            expect(sculler).toMatchCategory('converted_mana_cost<3|converted_mana_cost>=0');
            // this isn't possible, but again, there it is
            expect(sculler).not.toMatchCategory('converted_mana_cost>3/converted_mana_cost<=0');
        });

        it('should handle colorless checks', function() {
            expect(eliteVanguard).toMatchCategory('!Colorless');
            expect(eliteVanguard).not.toMatchCategory('Colorless');
            expect(karn).not.toMatchCategory('!Colorless');
            expect(karn).toMatchCategory('Colorless');
            expect(dynamo).not.toMatchCategory('!Colorless');
            expect(dynamo).toMatchCategory('Colorless');
        });

        it('should handle mono vs multi vs "normal"color checks', function() {
            expect(eliteVanguard).toMatchCategory('MonoWhite');
            expect(eliteVanguard).toMatchCategory('White');
            expect(eliteVanguard).not.toMatchCategory('White/Black');
            expect(eliteVanguard).not.toMatchCategory('Black/White');
            expect(eliteVanguard).toMatchCategory('White|Black');
            expect(eliteVanguard).toMatchCategory('Black|White');
            expect(sculler).not.toMatchCategory('MonoWhite');
            expect(sculler).not.toMatchCategory('MonoBlack');
            expect(sculler).toMatchCategory('White');
            expect(sculler).toMatchCategory('Black');
            expect(sculler).toMatchCategory('White/Black');
            expect(sculler).toMatchCategory('Black/White');
            expect(sculler).toMatchCategory('White|Black');
            expect(sculler).toMatchCategory('Black|White');
            expect(sculler).toMatchCategory('White/Black');
            expect(sculler).not.toMatchCategory('Black/White/Blue');
            expect(sculler).toMatchCategory('White|Black');
            expect(sculler).toMatchCategory('Black|White');
        });

        it('can handle categories like "3-color"', function() {
            expect(karn).toMatchCategory('zero-color');
            expect(karn).toMatchCategory('0-color');
            expect(sculler).toMatchCategory('2 color');
            expect(sculler).toMatchCategory('2  Color');
            expect(sculler).toMatchCategory('2color');
            expect(sculler).toMatchCategory('2-color');
            expect(sculler).toMatchCategory('2+ color');
            expect(sculler).toMatchCategory('2+color');
            expect(sculler).toMatchCategory('2+-color');
            expect(sculler).not.toMatchCategory('tri-color');
            expect(sculler).not.toMatchCategory('5-color');
            expect(ultimatum).toMatchCategory('2+ color');
            expect(ultimatum).toMatchCategory('tri-color');
            expect(ultimatum).toMatchCategory('tri+-color');
            expect(ultimatum).not.toMatchCategory('5-color');
            expect(nephilim).not.toMatchCategory('three-color');
            expect(nephilim).not.toMatchCategory('2-color');
            expect(nephilim).toMatchCategory('2+-color');
            expect(nephilim).toMatchCategory('4-color');
            expect(nephilim).toMatchCategory('quad+-color');
            expect(nephilim).not.toMatchCategory('5-color');
            expect(sliverQueen).not.toMatchCategory('2-color');
            expect(sliverQueen).toMatchCategory('2+-color');
            expect(sliverQueen).toMatchCategory('3+-color');
            expect(sliverQueen).toMatchCategory('4+-color');
            expect(sliverQueen).toMatchCategory('5+-color');
            expect(sliverQueen).toMatchCategory('5-color');
            // don't yet have a correct way of handling this as a special case
//            expect(wwwww).not.toMatchCategory('2-color');
//            expect(wwwww).toMatchCategory('2+-color');
//            expect(wwwww).toMatchCategory('3+-color');
//            expect(wwwww).toMatchCategory('4+-color');
//            expect(wwwww).toMatchCategory('5+-color');
//            expect(wwwww).toMatchCategory('5-color');
        });

        it('should distinguish between colorless and artifacts', function() {
            expect(karn).not.toMatchCategory('Colorless/Artifact');
            expect(karn).toMatchCategory('Colorless/!Artifact');
            expect(karn).toMatchCategory('Colorless/!Artifact/!Land');
            expect(dynamo).toMatchCategory('Colorless/Artifact');
            expect(dynamo).not.toMatchCategory('Colorless/!Artifact');
            expect(dynamo).toMatchCategory('Colorless/Artifact/!Land');
            expect(dynamo).toMatchCategory('Colorless/Artifact');
            expect(sculler).toMatchCategory('Artifact');
            expect(sculler).toMatchCategory('Multicolor/Artifact');
            expect(sculler).toMatchCategory('!Colorless/Artifact');
        });

        it('should allow intelligent combinations of categories', function() {
            expect(sculler).not.toMatchCategory('Colorless');
            expect(sculler).not.toMatchCategory('Artifact/Colorless');
            expect(dynamo).not.toMatchCategory('Colorless/Artifact/Land');
            expect(dynamo).not.toMatchCategory('Colorless/Land/Artifact');
            expect(sculler).not.toMatchCategory('Colorless/Artifact');
        });

        it('should handle converted mana cost', function() {
            angular.forEach(['cmc', 'converted_mana_cost'], function(cmc) {
                // support a short a long form
                expect(sculler).toMatchCategory(cmc + '==2');
                expect(sculler).toMatchCategory(cmc + '<=2');
                expect(sculler).toMatchCategory(cmc + '<=3');
                expect(sculler).toMatchCategory(cmc + '<3');
                expect(sculler).toMatchCategory(cmc + '<3/' + cmc + '>=0');
                expect(dynamo).not.toMatchCategory(cmc + '==2');
                expect(dynamo).not.toMatchCategory(cmc + '<=2');
                expect(dynamo).not.toMatchCategory(cmc + '<=3');
                expect(dynamo).not.toMatchCategory(cmc + '<3');
                // in case there was ever a lexicographical vs numerical sort thing
                expect(emrakul).toMatchCategory(cmc + '>3');
                expect(emrakul).not.toMatchCategory(cmc + '<3');
            })
        });

        it('should handle the color castability case', function() {
            expect(eliteVanguard).toMatchCategory('WhiteCastable');
            expect(eliteVanguard).not.toMatchCategory('BlackCastable');
        });

        it('should handle the "any" case', function() {
            expect(sculler).toMatchCategory('Any');
            expect(sculler).not.toMatchCategory('!Any');
            expect(sculler).toMatchCategory('Any|Artifact');
            expect(sculler).toMatchCategory('Any/Artifact');
            expect(sculler).not.toMatchCategory('Any/!Artifact');
            expect(sculler).not.toMatchCategory('!Any');
            expect(sculler).not.toMatchCategory('!Any/Artifact');
            expect(sculler).toMatchCategory('!Any|Artifact');
        });

        it('should handle converted mana costs with X', function() {
            expect(emrakul).toMatchCategory('converted_mana_cost<X');
            expect(emrakul).not.toMatchCategory('converted_mana_cost>X');
        });
    });
    describe("namesFromTextServiceTest", function() {
        var svc;
        var expected = [
            'Elite Vanguard',
            'Wrath of God',
            'Wrath of God'
        ];
        beforeEach(inject(function ($injector, NamesFromTextService) {
            svc = NamesFromTextService;
        }));

        it('should handle one valid card per line', function() {
            expect(svc.getNames(
                    'Elite Vanguard\n'+
                    'Wrath of God\n' +
                    'Wrath of God\n'
            )).toEqual(expected);
                expect(svc.getNames(
                    'Elite Vanguard\n'+
                    '\n'+
                    'Wrath of God\n' +
                    'Wrath of God'
            )).toEqual(expected);
        });

        it('should handle one card per line and handle extra space', function() {
            expect(svc.getNames(
                    'Elite Vanguard \n'+
                    'Wrath of God \n' +
                    ' Wrath of God\n'
            )).toEqual(expected);
        });

        it('should handle tapped-out style formatting', function() {
            expect(svc.getNames(
                    '1x Elite Vanguard \n'+
                    '2x Wrath of God\n'
            )).toEqual(expected);
            expect(svc.getNames(
                    '1x Elite Vanguard *F*\n'+
                    'Wrath of God [M10]\n'+
                    '1x Wrath of God [ZEN] *GE*\n'
            )).toEqual(expected);
        });

        it('should handle deckstats style formatting', function() {
            expect(svc.getNames(
                    '1 Elite Vanguard \n'+
                    '2 Wrath of God\n'
            )).toEqual(expected);
        });
    });

    describe("cubeSortServiceTest", function() {
        var svc;

        beforeEach(inject(function ($injector, CubeSortService) {
            svc = CubeSortService;
        }));

        it('should sort with all the supported categories', function() {

            var baseCube = [
                cubeContents['Damnation'],
                cubeContents['Vampiric Tutor'],
                cubeContents['Doom Blade'],
                cubeContents['Karn Liberated'],
                cubeContents['Thran Dynamo'],
                cubeContents['Wasteland'],
                cubeContents['Tidehollow Sculler'],
                cubeContents['Liliana of the Veil'],
                cubeContents['Sorin Markov'],
                cubeContents['Sphinx of the Steel Wind']
            ];

            var sortedCube = svc.sortCube(baseCube, {
                'Multicolor': {
                    'converted_mana_cost<4': {},
                    'converted_mana_cost>=4': {}
                },
                'Colorless': {
                    'Artifact': {},
                    '!Artifact': {}
                },
                'MonoBlack': {
                    'Instant/converted_mana_cost==1': {},
                    'Instant/converted_mana_cost!=1': {},
                    'Sorcery': {},
                    'Planeswalker': {}
                }
            });

            namifySortedCube(sortedCube);

            expect(sortedCube).toEqual([{
                category: 'Multicolor',
                subcategories: [{
                    category: 'converted_mana_cost<4',
                    cards: ['Tidehollow Sculler']
                }, {
                    category: 'converted_mana_cost>=4',
                    cards: ['Sphinx of the Steel Wind']
                }]
            }, {
                category: 'Colorless',
                subcategories: [{
                    category: 'Artifact',
                    cards: ['Thran Dynamo']
                }, {
                    category: '!Artifact',
                    cards: [
                        'Karn Liberated',
                        'Wasteland'
                    ]
                }]
            }, {
                category: 'MonoBlack',
                subcategories: [{
                    category: 'Instant/converted_mana_cost==1',
                    cards: ['Vampiric Tutor']
                }, {
                    category: 'Instant/converted_mana_cost!=1',
                    cards: ['Doom Blade']
                }, {
                    category: 'Sorcery',
                    cards: ['Damnation']
                }, {
                    category: 'Planeswalker',
                    cards: [
                        'Liliana of the Veil',
                        'Sorin Markov'
                    ]
                }]
            }]);
        });

    });

    describe("sortSpecServiceTest", function() {
        var svc;
        beforeEach(inject(function ($injector, SortSpecService) {
            svc = SortSpecService;
        }));

        var specExpect = function(spec, expectation, handleDiff) {
            var actual = svc.getSkeleton(spec, handleDiff);
            expect(actual.length).toBe(expectation.length);
            expect(actual).toEqual(expectation)
        };

        var diffSpec = [
            {category: 'both', cards: []},
            {category: 'removed', cards: []},
            {category: 'added', cards: []}
        ];

        it('should handle empty specs', function() {
            specExpect(undefined, {});
            specExpect(null, {});
            specExpect({}, {});
            specExpect(undefined, diffSpec, true);
            specExpect(null, diffSpec, true);
            specExpect({}, diffSpec, true);
        });
        it('should handle a spec without mana costs', function() {
            specExpect({
                'Colorless': {},
                'White': {},
                'Blue': {},
                'Black': {},
                'Red': {},
                'Green': {},
                'Artifact': {},
                'Land': {}
            }, [
                {category: 'Colorless', cards:[]},
                {category: 'White', cards: []},
                {category: 'Blue', cards: []},
                {category: 'Black', cards: []},
                {category: 'Red', cards: []},
                {category: 'Green', cards: []},
                {category: 'Artifact', cards: []},
                {category: 'Land', cards: []}
            ]);
            specExpect({
                'Colorless': {},
                'White': {},
                'Blue': {},
                'Black': {},
                'Red': {},
                'Green': {},
                'Artifact': {},
                'Land': {}
            }, [
                {category: 'Colorless', subcategories: diffSpec},
                {category: 'White', subcategories: diffSpec},
                {category: 'Blue', subcategories: diffSpec},
                {category: 'Black', subcategories: diffSpec},
                {category: 'Red', subcategories: diffSpec},
                {category: 'Green', subcategories: diffSpec},
                {category: 'Artifact', subcategories: diffSpec},
                {category: 'Land', subcategories: diffSpec}
            ], true);
        });
        it('should handle specs with mana costs', function() {
            specExpect({'Colorless': {
                'Creature': {
                    'cmc<=1': {},
                    'cmc==2': {},
                    'cmc==3': {},
                    'cmc==4': {},
                    'cmc==5': {},
                    'cmc==6': {},
                    'cmc>=7': {}

                },
                '!Creature': {
                    'Instant/Sorcery': {},
                    'Planeswalker': {},
                    'Enchantment': {},
                    'Land': {}
                }
            },
                'White': {
                    'cmc<=1': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc==2': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc==3': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc==4': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc==5': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc==6': {
                        'Creature': {},
                        '!Creature': {}
                    },
                    'cmc>=7': {
                        'Creature': {},
                        '!Creature': {}
                    }
                }
            }, [{
                category: "Colorless",
                subcategories: [{
                    category: "Creature",
                    subcategories: [
                        {category: "cmc<=1", cards: []},
                        {category: "cmc==2", cards: []},
                        {category: "cmc==3", cards: []},
                        {category: "cmc==4", cards: []},
                        {category: "cmc==5", cards: []},
                        {category: "cmc==6", cards: []},
                        {category: "cmc>=7", cards: []}
                    ]
                }, {
                    category:"!Creature",
                    subcategories: [
                        {category: "Instant/Sorcery", cards: []},
                        {category: "Planeswalker", cards: []},
                        {category: "Enchantment", cards: []},
                        {category: "Land", cards: []}
                    ]
                }]}, {
                category: "White",
                subcategories: [{
                    category: 'cmc<=1',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc==2',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc==3',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc==4',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc==5',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc==6',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }, {
                    category: 'cmc>=7',
                    subcategories: [
                        {category: "Creature", cards: []},
                        {category: "!Creature", cards: []}
                    ]
                }]
            }]);
        });
    });

});
