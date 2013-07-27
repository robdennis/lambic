'use strict';

/* jasmine specs for services go here */

var namify = function(cube) {
    // it's simpler to write tests that just expect names of
    // cards instead of listing all the attributes of that card
    // so dump it out to just the names
    var _recurseNamify;

    if (cube instanceof Array) {
        _recurseNamify = function(subCube) {
            angular.forEach(subCube, function(categoryObject, _subName) {

                if (categoryObject.hasOwnProperty('subcategories')) {
                    _recurseNamify(categoryObject.subcategories);
                }

                else if (categoryObject.cards instanceof Array) {
                    angular.forEach(categoryObject.cards, function(card, idx) {
                        categoryObject.cards[idx] = card['name'];
                    })
                } else {
                    throw "unexpected cube format in namify"
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
    return cube
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
                    var paneName = this.actual;
                    var results = poolService.onPane(paneName).get();
                    this.message = function() {
                        return 'for '+this.actual+' results: '+angular.mock.dump(results) + ' vs ' + count;
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
            poolService.addMany(
                ['Damnation', 'Divinity of Pride', 'Elite Vanguard', 'Mutavault', 'Mutavault', 'Thran Dynamo', 'Tidehollow Sculler']
            );
//            expect('Land').toMatchCount(1);
            expect('White').toMatchCount(3);
            expect('Black').toMatchCount(3);
//            expect('White/Black').toMatchCount(4);
//            expect('Black/White').toMatchCount(4);
//            expect('Colorless').toMatchCount(1);
//            expect('Multicolor').toMatchCount(1);
            expect('All').toMatchCount(7)
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
            var whiteCouldCast = regexService.isMonoColorCastable('White');
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

        it('should handle diff categories', function() {
            expect(svc.matchesCategory('both', {_diffResult: 'both'})).toBe(true);
            expect(svc.matchesCategory('added', {_diffResult: 'both'})).toBe(false);
            expect(svc.matchesCategory('added', {_diffResult: 'added'})).toBe(true);
            expect(svc.matchesCategory('removed', {_diffResult: 'removed'})).toBe(true);
            expect(svc.matchesCategory('added', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('added', angular.extend({}, eliteVanguard, {_diffResult: 'added'}))).toBe(true);
            expect(svc.matchesCategory('added', angular.extend({}, eliteVanguard, {_diffResult: 'both'}))).toBe(false);
        });

        it('should handle monocolor and negation', function() {
            expect(svc.matchesCategory('MonoWhite', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('White', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('White/Blue', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('!Blue/!Black', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('!White', eliteVanguard)).toBe(false);
            // a white and black card is white
            expect(svc.matchesCategory('MonoWhite', sculler)).toBe(false);
        });
        it('should handle simple types and negation', function() {

            expect(svc.matchesCategory('Creature', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('!Creature', eliteVanguard)).toBe(false);
        });

        it('should handle either/or categories intelligently', function() {
            expect(svc.matchesCategory('Sorcery|Instant', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('Artifact|Creature|Planeswalker', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('Colorless/Artifact|Creature|Planeswalker', karn)).toBe(true);
            expect(svc.matchesCategory('Sorcery|Instant', damnation)).toBe(true);
            expect(svc.matchesCategory('!Sorcery|!Black', damnation)).toBe(false);
            // this is an unhelpful category, but a sorcery is not an instant, sooo...
            expect(svc.matchesCategory('!Sorcery|!Instant', damnation)).toBe(true);
            // Black "spells"
            expect(svc.matchesCategory('Black/Sorcery|Instant', damnation)).toBe(true);
            expect(svc.matchesCategory('Sorcery|Instant/Black', damnation)).toBe(true);
            expect(svc.matchesCategory('Blue/Sorcery|Instant', damnation)).toBe(false);
            expect(svc.matchesCategory('Sorcery|Instant/Blue', damnation)).toBe(false);
            expect(svc.matchesCategory('Sorcery|Creature/Black', damnation)).toBe(true);
            expect(svc.matchesCategory('Instant|Creature/Black', damnation)).toBe(false);
            // this isn't that helpful, but there it is
            expect(svc.matchesCategory('converted_mana_cost<3|converted_mana_cost>=0', sculler)).toBe(true);
            // this isn't possible, but again, there it is
            expect(svc.matchesCategory('converted_mana_cost>3/converted_mana_cost<=0', sculler)).toBe(false);
        });

        it('should handle colorless checks', function() {
            expect(svc.matchesCategory('!Colorless', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('Colorless', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('!Colorless', karn)).toBe(false);
            expect(svc.matchesCategory('Colorless', karn)).toBe(true);
            expect(svc.matchesCategory('!Colorless', dynamo)).toBe(false);
            expect(svc.matchesCategory('Colorless', dynamo)).toBe(true);
        });

        it('should handle mono vs multi vs "normal"color checks', function() {
            expect(svc.matchesCategory('MonoWhite', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('White', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('White/Black', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('Black/White', eliteVanguard)).toBe(false);
            expect(svc.matchesCategory('White|Black', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('Black|White', eliteVanguard)).toBe(true);
            expect(svc.matchesCategory('MonoWhite', sculler)).toBe(false);
            expect(svc.matchesCategory('MonoBlack', sculler)).toBe(false);
            expect(svc.matchesCategory('White', sculler)).toBe(true);
            expect(svc.matchesCategory('Black', sculler)).toBe(true);
            expect(svc.matchesCategory('White/Black', sculler)).toBe(true);
            expect(svc.matchesCategory('Black/White', sculler)).toBe(true);
            expect(svc.matchesCategory('White|Black', sculler)).toBe(true);
            expect(svc.matchesCategory('Black|White', sculler)).toBe(true);
            expect(svc.matchesCategory('White/Black', sculler)).toBe(true);
            expect(svc.matchesCategory('Black/White/Blue', sculler)).toBe(false);
            expect(svc.matchesCategory('White|Black', sculler)).toBe(true);
            expect(svc.matchesCategory('Black|White', sculler)).toBe(true);
        });

        it('can handle categories like "3-color"', function() {
            expect(svc.matchesCategory('zero-color', karn)).toBe(true);
            expect(svc.matchesCategory('0-color', karn)).toBe(true);
            expect(svc.matchesCategory('2 color', sculler)).toBe(true);
            expect(svc.matchesCategory('2  Color', sculler)).toBe(true);
            expect(svc.matchesCategory('2color', sculler)).toBe(true);
            expect(svc.matchesCategory('2-color', sculler)).toBe(true);
            expect(svc.matchesCategory('2+ color', sculler)).toBe(true);
            expect(svc.matchesCategory('2+color', sculler)).toBe(true);
            expect(svc.matchesCategory('2+-color', sculler)).toBe(true);
            expect(svc.matchesCategory('tri-color', sculler)).toBe(false);
            expect(svc.matchesCategory('5-color', sculler)).toBe(false);
            expect(svc.matchesCategory('2+ color', ultimatum)).toBe(true);
            expect(svc.matchesCategory('tri-color', ultimatum)).toBe(true);
            expect(svc.matchesCategory('tri+-color', ultimatum)).toBe(true);
            expect(svc.matchesCategory('5-color', ultimatum)).toBe(false);
            expect(svc.matchesCategory('three-color', nephilim)).toBe(false);
            expect(svc.matchesCategory('2-color', nephilim)).toBe(false);
            expect(svc.matchesCategory('2+-color', nephilim)).toBe(true);
            expect(svc.matchesCategory('4-color', nephilim)).toBe(true);
            expect(svc.matchesCategory('quad+-color', nephilim)).toBe(true);
            expect(svc.matchesCategory('5-color', nephilim)).toBe(false);
            expect(svc.matchesCategory('2-color', sliverQueen)).toBe(false);
            expect(svc.matchesCategory('2+-color', sliverQueen)).toBe(true);
            expect(svc.matchesCategory('3+-color', sliverQueen)).toBe(true);
            expect(svc.matchesCategory('4+-color', sliverQueen)).toBe(true);
            expect(svc.matchesCategory('5+-color', sliverQueen)).toBe(true);
            expect(svc.matchesCategory('5-color', sliverQueen)).toBe(true);
            // don't yet have a correct way of handling this as a special case
//            expect(svc.matchesCategory('2-color', wwwww)).toBe(false);
//            expect(svc.matchesCategory('2+-color', wwwww)).toBe(true);
//            expect(svc.matchesCategory('3+-color', wwwww)).toBe(true);
//            expect(svc.matchesCategory('4+-color', wwwww)).toBe(true);
//            expect(svc.matchesCategory('5+-color', wwwww)).toBe(true);
//            expect(svc.matchesCategory('5-color', wwwww)).toBe(true);
        });

        it('should distinguish between colorless and artifacts', function() {
            expect(svc.matchesCategory('Colorless/Artifact', karn)).toBe(false);
            expect(svc.matchesCategory('Colorless/!Artifact', karn)).toBe(true);
            expect(svc.matchesCategory('Colorless/!Artifact/!Land', karn)).toBe(true);
            expect(svc.matchesCategory('Colorless/Artifact', dynamo)).toBe(true);
            expect(svc.matchesCategory('Colorless/!Artifact', dynamo)).toBe(false);
            expect(svc.matchesCategory('Colorless/Artifact/!Land', dynamo)).toBe(true);
            expect(svc.matchesCategory('Colorless/Artifact', dynamo)).toBe(true);
            expect(svc.matchesCategory('Artifact', sculler)).toBe(true);
            expect(svc.matchesCategory('Multicolor/Artifact', sculler)).toBe(true);
            expect(svc.matchesCategory('!Colorless/Artifact', sculler)).toBe(true);
        });

        it('should allow intelligent combinations of categories', function() {
            expect(svc.matchesCategory('Colorless', sculler)).toBe(false);
            expect(svc.matchesCategory('Artifact/Colorless', sculler)).toBe(false);
            expect(svc.matchesCategory('Colorless/Artifact/Land', dynamo)).toBe(false);
            expect(svc.matchesCategory('Colorless/Land/Artifact', dynamo)).toBe(false);
            expect(svc.matchesCategory('Colorless/Artifact', sculler)).toBe(false);
        });

        it('should handle converted mana cost', function() {
            angular.forEach(['cmc', 'converted_mana_cost'], function(cmc) {
                // support a short a long form
                expect(svc.matchesCategory(cmc + '==2', sculler)).toBe(true);
                expect(svc.matchesCategory(cmc + '<=2', sculler)).toBe(true);
                expect(svc.matchesCategory(cmc + '<=3', sculler)).toBe(true);
                expect(svc.matchesCategory(cmc + '<3', sculler)).toBe(true);
                expect(svc.matchesCategory(cmc + '<3/' + cmc + '>=0', sculler)).toBe(true);
                expect(svc.matchesCategory(cmc + '==2', dynamo)).toBe(false);
                expect(svc.matchesCategory(cmc + '<=2', dynamo)).toBe(false);
                expect(svc.matchesCategory(cmc + '<=3', dynamo)).toBe(false);
                expect(svc.matchesCategory(cmc + '<3', dynamo)).toBe(false);
                // in case there was ever a lexicographical vs numerical sort thing
                expect(svc.matchesCategory(cmc + '>3', emrakul)).toBe(true);
                expect(svc.matchesCategory(cmc + '<3', emrakul)).toBe(false);
            })
        });

        it('should handle the "any" case', function() {
            expect(svc.matchesCategory('Any', sculler)).toBe(true);
            expect(svc.matchesCategory('!Any', sculler)).toBe(false);
            expect(svc.matchesCategory('Any|Artifact', sculler)).toBe(true);
            expect(svc.matchesCategory('Any/Artifact', sculler)).toBe(true);
            expect(svc.matchesCategory('Any/!Artifact', sculler)).toBe(false);
            expect(svc.matchesCategory('!Any', sculler)).toBe(false);
            expect(svc.matchesCategory('!Any/Artifact', sculler)).toBe(false);
            expect(svc.matchesCategory('!Any|Artifact', sculler)).toBe(true);
        });

        var assertChanged = function(category, card,
                                     heuristics, preHeuristic) {
            heuristics = heuristics || [];
            expect(svc.matchesCategory(category, card)).toBe(preHeuristic);
            //it's now different after the heuristic is applied
            heuristicsSvc.select(heuristics);
            expect(svc.matchesCategory(category, card)).toBe(!preHeuristic);
        };

        var assertUnchanged = function(category, card,
                                       heuristics, preHeuristic) {
            heuristics = heuristics || [];
            expect(svc.matchesCategory(category, card)).toBe(preHeuristic);
            //it's not different after the heuristic is applied
            heuristicsSvc.select(heuristics);
            expect(svc.matchesCategory(category, card)).toBe(preHeuristic);
        };

        // not yet ported from cuesbey
//        it('should handle heuristics that override categories', function() {
//
//            assertChanged('!Creature', souls, ['token_spells_are_creatures'], true);
//            // they don't always overwrite
//            assertUnchanged('Sorcery', souls, ['token_spells_are_creatures'], true);
//            assertChanged('Multicolor', souls, ['off_color_flashback_is_gold'], false);
//            assertChanged('converted_mana_cost==3', legionnaire, ['phyrexian_always_pays_life'], true);
//            assertChanged('converted_mana_cost==2', legionnaire, ['phyrexian_always_pays_life'], false);
//            assertChanged('White', legionnaire, ['phyrexian_always_pays_life'], true);
//            assertChanged('Colorless', legionnaire, ['phyrexian_always_pays_life'], false);
//            // they don't always affect things
//            assertUnchanged('Artifact', legionnaire, ['phyrexian_always_pays_life'], true);
//            assertChanged('converted_mana_cost==X', devilsPlay, ['x_spells_are_infinite'], false);
//            assertChanged('converted_mana_cost==1', devilsPlay, ['x_spells_are_infinite'], true);
//            assertChanged('converted_mana_cost>=6', devilsPlay, ['x_spells_are_infinite'], false);
//        });

        it('shouldn\'t mess up if a card has no heuristics', function() {
            assertUnchanged('White', eliteVanguard, ['token_spells_are_creatures'], true);
        });

        it('should handle converted mana costs with X', function() {
            expect(svc.matchesCategory('converted_mana_cost<X', emrakul)).toBe(true);
            expect(svc.matchesCategory('converted_mana_cost>X', emrakul)).toBe(false);
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

            namify(sortedCube);

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

        it('should handle appearance keys not at the top level', function() {

            specExpect({
                'Creature': {
                    'MonoWhite': {
                        'appearance': 'div',
                        'converted_mana_cost>=1': {
                            'appearance': 'table'
                        }
                    }
                }
            }, [{
                'category': 'Creature',
                'subcategories': [{
                    'category': 'MonoWhite',
                    'appearance': 'div',
                    'subcategories': [{
                        category: 'converted_mana_cost>=1',
                        appearance: 'table',
                        subcategories: diffSpec
                    }]
                }]
            }], true);
        });

    });

});
