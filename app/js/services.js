'use strict';

angular.module('lambic.services', [])
    .factory('UtilityService', function() {

        return {
            isEmptyObject: function(obj) {
                var hasOwnProperty = Object.prototype.hasOwnProperty;

                // null and undefined are empty
                if (obj == null) return true;
                // Assume if it has a length property with a non-zero value
                // that that property is correct.
                if (obj.length && obj.length > 0)    return false;
                if (obj.length === 0)  return true;

                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key))    return false;
                }

                // Doesn't handle toString and toValue enumeration bugs in IE < 9

                return true
            },
            isArray: function(item) {
                return item instanceof Array;
            },
            inArray: function(elem, array, i) {
                // cribbed from jquery
                var len;

                if ( array ) {
                    len = array.length;
                    i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

                    for ( ; i < len; i++ ) {
                        // Skip accessing in sparse arrays
                        if ( i in array && array[ i ] === elem ) {
                            return i;
                        }
                    }
                }

                return -1;
            },
            colorList: function() {
                return ['White', 'Blue', 'Black', 'Red', 'Green'];
            },
            typeList: function() {
                return ['Artifact', 'Creature', 'Enchantment', 'Instant',
                        'Land', 'Planeswalker', 'Sorcery', 'Tribal'];
            }
        }
    })
    .factory('ManaCostRegexService', function() {
        var _colorless = '{\\d+}';
        var _x = '{X}';
        var _any_color = '[WUBRG]';
        var _color_to_abbrev_mapping = {
            white: 'W',
            blue: 'U',
            black: 'B',
            red: 'R',
            green: 'G'
        };

        return {
            isColorPresent: function(name) {
                return RegExp(this._nameToAbbrev(name));
            },
            _nameToAbbrev: function(name) {
                return _color_to_abbrev_mapping[name.toLowerCase()];
            },
            _phyrexian: function(color) {
                return '{'+this._nameToAbbrev(color)+'/P}';
            },
            _mono_hybrid: function(color) {
                return '{'+this._nameToAbbrev(color)+'/2}';
            },
            _hybrid_involving: function(color) {
                var _color_on_top = this._nameToAbbrev(color)+'/'+_any_color;
                var _color_on_bottom = _any_color + '/' + this._nameToAbbrev(color);
                return '{(('+_color_on_top+')|('+_color_on_bottom+'))}';
            },
            _mono: function(color) {
                return '{'+this._nameToAbbrev(color)+'}';
            },

            isMonoColorCastable: function(color) {

                var clauses = [
                    '('+_colorless+')',
                    '('+_x+')',
                    '('+this._mono(color)+')',
                    '('+this._mono_hybrid(color)+')',
                    '('+this._phyrexian(color)+')',
                    '('+this._hybrid_involving(color)+')'
                ];

                return RegExp('^('+clauses.join('|')+')+$')
            }
        }
    })
    .factory('HeuristicService', function(ManaCostRegexService, UtilityService) {
        var _selected = [];
        return {
            selected: function() {
                return angular.copy(_selected);
            },

            select: function(selected) {
                _selected = selected
            },

            estimateColors: function(card) {

                var includedColors = [];

                if (!card.mana_cost) {
                    return includedColors;
                }

                angular.forEach(UtilityService.colorList(), function(color) {
                   var colorRegex = ManaCostRegexService.isColorPresent(color);
                   if (colorRegex.exec(card.mana_cost)) {
                       includedColors.push(color)
                   }
                });
                //TODO: respect color indicator

                return includedColors;
            }
        }
    })
    .factory('CardCategoryService', function(HeuristicService, 
                                             UtilityService) {

        var multiColorRegex = /(.+?)(?:-|\s)*color/i
        return {
            isColorCategory: function(category) {
                return UtilityService.inArray(category, UtilityService.colorList()) !== -1
            },

            isTypeCategory: function(category) {
                return UtilityService.inArray(category, UtilityService.typeList()) !== -1
            },

            isMultiColorCategory: function(category) {
                return multiColorRegex.exec(category);
            },

            _checkForMultiColor: function(mcMatch, card) {
                var colorMap = {
                    '0': 0,
                    'zero': 0,
                    '2': 2,
                    'two': 2,
                    '3': 3,
                    'tri': 3,
                    'three': 3,
                    '4': 4,
                    'quad': 4,
                    'four': 4,
                    '5': 5,
                    'five': 5,
                    'multi': 2
                };
                var numCats = mcMatch[1].toLowerCase();
                var expectGreaterOrEqual = false;
                if (numCats.indexOf('+', numCats.length - 1) !== -1) {
                    // somone wanted to say 3+-color apparently
                    expectGreaterOrEqual = true;
                    numCats = numCats.substring(0, numCats.length - 1);
                } else if (numCats == 'multi') {
                    expectGreaterOrEqual = true;
                }
                var expectedLength = colorMap[numCats];
                if (!(expectedLength === undefined)) {
                    if (expectGreaterOrEqual) {
                        return card['colors'].length >= expectedLength;
                    } else {
                        return card['colors'].length == expectedLength;
                    }
                }
            },

            _checkForColor: function(category, card) {

                if (category === 'Colorless') {
                    // special case for colorlessness
                    return card.colors.length == 0;
                }

                var isMultiColor = this.isMultiColorCategory(category);
                if (isMultiColor) {
                    return this._checkForMultiColor(isMultiColor, card)
                }

                var isMono = false;

                if (category.indexOf('Mono') === 0) {
                    isMono = true;
                    category = category.substring(4);
                }

                if (this.isColorCategory(category)) {
                    if (isMono) {
                        return angular.equals([category], card['colors']);
                    } else {
                        return UtilityService.inArray(category, card['colors']) !== -1;
                    }
                } else {
                    return 'na';
                }
            },

            _checkForType: function(category, card) {
                if (this.isTypeCategory(category)) {
                    return UtilityService.inArray(category, card['types'])!==-1;
                } else {
                    return 'na';
                }
            },

            _checkForCMC: function(category, card) {
                // support a short version as well
                var cmcRegex = /(?:converted_mana_cost|cmc)\s*([=><!]{1,3})\s*(\d+|X)/;
                var match = cmcRegex.exec(category);
                if (match) {
                    var integerCMC;
                    var cardCMC = card['converted_mana_cost'];
                    if (cardCMC==-1) {
                        // -1 is what we're using to represent 'X' spells
                        cardCMC = Number.POSITIVE_INFINITY;
                    }
                    if (match[2]=='X') {
                        integerCMC = Number.POSITIVE_INFINITY;
                    } else {
                        integerCMC = parseInt(match[2]);
                    }
                    if (match[1] == '==') {
                        return cardCMC == integerCMC;
                    } else if (match[1] == '<') {
                        return cardCMC < integerCMC;
                    } else if (match[1] == '>') {
                        return cardCMC > integerCMC;
                    } else if (match[1] == '<=') {
                        return cardCMC <= integerCMC;
                    } else if (match[1] == '>=') {
                        return cardCMC >= integerCMC;
                    } else if (match[1] == '!=') {
                        return cardCMC != integerCMC;
                    } else {
                        // this should probably throw something?
                        return 'na';
                    }
                } else {
                    return 'na';
                }
            },
            _checkForDiff: function(category, card) {
                if (UtilityService.inArray(category,
                    ['both', 'added', 'removed']) !== -1) {
                    return card['_diffResult'] === category;
                } else {
                    return 'na'
                }
            },
            _checkForAny: function(category, card) {
                if (category == 'Any') {
                    return true;
                } else {
                    return 'na'
                }
            },
            matchesCategory : function(category, baseCard) {
                if (baseCard === undefined) {
                    throw "category " + category + ' testing against undefined'
                }
                var checkedHeuristics = HeuristicService.selected();
                var modifiedCard = angular.extend({}, baseCard);
                var self = this;

                if (baseCard['heuristics']) {
                    // most cards don't have associated heuristics
                    angular.forEach(checkedHeuristics, function(heuristicName) {
                        angular.extend(
                            modifiedCard,
                            baseCard['heuristics'][heuristicName]
                        );
                    });
                }

                var matchesCategory = true;
                var matchesSubgroup = false;
                // "/" is the boolean AND operator for this category stuff
                angular.forEach(category.split('/'), function(subgroup) {
                    matchesSubgroup = false;

                    angular.forEach(subgroup.split('|'), function(inner_cat) {
                        // "|" is the boolean OR operator for this category stuff and binds
                        // more tightly than and
                        var negateCategory = inner_cat.indexOf('!') === 0;
                        if (negateCategory) {
                            // split off the exclamation mark
                            inner_cat = inner_cat.substring(1);
                        }
                        // unneeded if angular let you short circuit
                        var shouldContinueChecking = true;

                        angular.forEach([
                            self._checkForColor,
                            self._checkForType,
                            self._checkForCMC,
                            self._checkForDiff,
                            self._checkForAny
                            // these either return a known string if the checker isn't applicable
                            // or True/False if it is applicable and based on the results of
                            // the check
                        ], function(checker) {
                            if (!shouldContinueChecking) {
                                return;
                            }
                            var result = checker.apply(self, [inner_cat, modifiedCard]);

                            if (result === 'na') {
                                return result;
                            } else {
                                matchesSubgroup = matchesSubgroup || (negateCategory ? !result : result);
                                // short-circuit here since 1 checker weighed-in
                                shouldContinueChecking = false;
                            }
                        });
                    });
                    // category fails to match if
                    matchesCategory = matchesCategory && matchesSubgroup;

                    return matchesCategory;
                });
                return matchesCategory;
            }
        }
    })
    .factory('PoolService', function($rootScope, CardCacheService, ManaCostRegexService) {
        var pool = TAFFY();
        var callbacks = [];

        return {
            get: function() {
                return pool();
            },

            subscribe: function(callback) {
                callback(this.get());
                callbacks.push(callback);
            },

            onPane: function(paneName, querySet) {
                querySet = querySet || pool();
                if (paneName == 'Land') {
                    throw 'not implemented';
                } else if (paneName == 'All'){
                    return querySet;
                }

                return querySet.filter({mana_cost: {regex: ManaCostRegexService.isMonoColorCastable(paneName)}})

            },

            costs: function(cost, querySet) {
                querySet = querySet || pool();

                return querySet.filter({converted_mana_cost: parseInt(cost)})
            },

            isCreature: function(cost, querySet) {
                querySet = querySet || pool();

                return querySet.filter({types: {has: 'Creature'}})
            },

            isNotCreature: function(cost, querySet) {
                querySet = querySet || pool();

                return querySet.filter({types: {'!has': 'Creature'}})
            },

            addMany: function(names) {
                var self = this;
                angular.forEach(names, function(name) {
                    self.add(name);
                })
            },

            add: function(name) {
                CardCacheService.get_card(name, function(card) {
                    if (card) {
                        pool.insert(card);
                        angular.forEach(callbacks, function(callback) {
                            callback(pool());
                        })
                    }
                });
            }

        }
    })
    .factory('ZipService', function() {
        return {
            longest: function() {
                var args = [].slice.call(arguments);
                var longest = args.reduce(function(a,b){
                    return a.length>b.length ? a : b
                }, []);

                return longest.map(function(_,i){
                    return args.map(function(array){return array[i]})
                });
            }
        }
    })
    .factory('CubeSortService', function(CardCategoryService, SortSpecService, UtilityService) {
        return {
            sortCube: function(serializedCube, sortSpec, defaultSort,
                               existingCube, infoToAdd, checkedHeuristics) {
                checkedHeuristics = checkedHeuristics || [];
                var handleCubeCard = function(card, _sortedCube, infoToAdd) {
                    // merge on information
                    var cardToHandle = angular.extend({}, card, infoToAdd);

                    var _recurseCube = function (subCube) {
                        angular.forEach(subCube, function(categoryObject) {
                            if (!CardCategoryService.matchesCategory(categoryObject.category, cardToHandle, checkedHeuristics)) {
                                return;
                            }
                            if (categoryObject.hasOwnProperty('subcategories')) {
                                _recurseCube(categoryObject.subcategories);
                            }
                            // no subcategories, so either push it on the
                            // cards array, or test for diff categories

                            else if (UtilityService.isArray(categoryObject.cards)) {
                                // we're done here
                                categoryObject.cards.push(cardToHandle);
                            } else {
                                throw "unexpected cube format in binning"
                            }
                        })
                    };

                    _recurseCube(_sortedCube);

                    return _sortedCube;
                };

                var sortedCube;
                if (existingCube) {
                    sortedCube = existingCube;
                } else {
                    sortedCube = SortSpecService.getSkeleton(sortSpec);
                }


                defaultSort = defaultSort || function(card_a, card_b) {
                    return card_a['name'] > card_b['name'] ? 1:-1;
                };

                angular.forEach(serializedCube, function(value) {
                    handleCubeCard(value, sortedCube, infoToAdd);
                });

                if (defaultSort) {
                    var _recurseSort = function (subCube) {
                        angular.forEach(subCube, function(categoryObject) {
                            if (categoryObject.hasOwnProperty('subcategories')) {
                                _recurseSort(categoryObject.subcategories);
                            }
                            // no subcategories, so either push it on the
                            // cards array, or test for diff categories

                            else if (UtilityService.isArray(categoryObject.cards)) {
                                // we're done here
                                categoryObject.cards.sort(defaultSort);
                            } else {
                                throw "unexpected cube format in sort"
                            }

                        })
                    };

                    _recurseSort(sortedCube);
                }

                return sortedCube;
            },
            sortTable: function(tableQuery, sortSpec) {
                var tableData;
                if (!tableQuery) {
                    tableData = [];
                } else {
                    tableData = tableQuery;
                    console.log('all the data', tableData);
                }

                var cube = this.sortCube(tableData, sortSpec);
                var table = [];
                angular.forEach(cube, function(column) {
                    table.push({
                        header:column.category,
                        data:column.cards || []
                    });
                });

                return table;
            }
        }
    }).factory('SortSpecService', function(UtilityService) {
        return {
            getSkeleton : function(sortSpec, handleDiffs) {
                sortSpec = sortSpec || {};

                var resultingSpec = [];

                var _handleEmptySpec = function(catName, recurseSpec, extraItems) {
                    extraItems = extraItems || {};
                    var specToPush = {};
                    if (!handleDiffs) {
                        // relying on the falsiness of undefined
                        specToPush = {category: catName, cards: []};
                    } else {
                        specToPush = {category: catName, subcategories: [
                            {category: 'both', cards: []},
                            {category: 'removed', cards: []},
                            {category: 'added', cards: []}
                        ]};
                    }

                    recurseSpec.push(angular.extend({}, specToPush, extraItems))
                };

                var _recurseSpec = function (subInputSpec, recurseSpec) {
                    angular.forEach(subInputSpec, function(_subSpec, _subName) {
                        if (UtilityService.isEmptyObject(_subSpec)) {
                            // check that we don't have an information key like a "_sort"
                            _handleEmptySpec(_subName, recurseSpec);
                        } else if (angular.isObject(_subSpec)) {
                            var _specToDescendWith = {};
                            var isLeaf = false;
                            if (_subSpec['appearance']) {
                                _specToDescendWith['appearance'] = _subSpec['appearance'];
                                delete _subSpec['appearance'];
                            }

                            if (UtilityService.isEmptyObject(_subSpec)) {
                                isLeaf = true;
                            }
                            // need to undo the deletion in the event
                            // there was copying of a reference somewhere in the spec
                            // HACK
                            angular.extend(_subSpec, _specToDescendWith);

                            if (isLeaf) {
                                _handleEmptySpec(_subName, recurseSpec, _specToDescendWith);
                                return;
                            }

                            var _subCategories = [];
                            _specToDescendWith = angular.extend(
                                _specToDescendWith, {
                                    "category":_subName,
                                    "subcategories": _subCategories
                            });

                            recurseSpec.push(_specToDescendWith);
                            _recurseSpec(_subSpec, _subCategories);
                        } else {
                            // don't decide, it's some unknown key we don't care about
                        }
                    });
                };

                _recurseSpec(sortSpec, resultingSpec);

                if (UtilityService.isEmptyObject(resultingSpec)) {
                    if (!handleDiffs) {
                        return {};
                    }
                    else {
                        return [
                            {category: 'both', cards: []},
                            {category: 'removed', cards: []},
                            {category: 'added', cards: []}
                        ];
                    }
                }

                return resultingSpec;
            }
        }
    })
    .factory('CardCacheService', function($cacheFactory, HeuristicService) {
        var cache = TAFFY();


        return {
            onInsert: function(card) {

                card.colors = HeuristicService.estimateColors(card);

                return card;
            },

            insert: function(value) {
                var self = this;
                var insertModified = function(card) {
                    var modifiedCard = self.onInsert(card);
                    if (modifiedCard) {
                        cache.insert(modifiedCard);
                    }
                };

                if (value instanceof Array) {
                    angular.forEach(value, insertModified)
                } else {
                    insertModified(value);
                }


                return cache();
            },
            get: function() {
                return cache();
            },

            get_card: function(name, callback) {
                // the callback is unnecessary, but a bit of future proofing
                // in case the cache is backed somewhere where we need the async
                // access
                return callback(cache({name: name}).first())
            }
        };
    });
