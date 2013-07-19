'use strict';

angular.module('lambic.services', [])
    .factory('PoolService', function(CardCacheService) {
        var pool = [];

        return {
            get: function() {
                return pool;
            },

            add: function(name) {
                CardCacheService.get(name, function(card) {
                    pool.push(card.name);
                })
            },

            remove: function(name) {
                var index = pool.indexOf(name);
                if (index !== -1) {
                    pool.splice(index, 1);
                }
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
    .factory('CardCacheService', function($cacheFactory) {
        var cache = $cacheFactory('cardContents');
        var inserted = [];

        return {
            set: function(name, value) {
                cache.put(name, value);
                // wouldn't be necessary if caches had a keys() method
                inserted.push(name);
            },
            get: function(name, callback) {
                var value = cache.get(name);
                if (callback) {
                    callback(value);
                }

                return value;
            },
            missingNames: function(cardNames) {
                var missingNames = [];
                angular.forEach(cardNames || [], function(name) {
                    if (!cache.get(name)) {
                        missingNames.push(name)
                    }
                });
                return missingNames;
            },
            getCachedCards: function() {
                var cachedCards = [];
                var card;
                var self = this;
                angular.forEach(inserted, function(name) {
                    card = self.get(name);
                    if (card) {
                        cachedCards.push(card);
                    }
                });
                return cachedCards;
            },
            setMany: function(cardHash) {
                var self = this;
                angular.forEach(cardHash, function(card) {
                    self.set(card.name, card)
                });
            }
        };
    });
