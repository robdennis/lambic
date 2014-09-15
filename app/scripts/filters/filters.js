'use strict';

angular.module('lambicApp.filters', ['lambicApp.services']).
    //https://groups.google.com/forum/#!msg/angular/LjwlVYMulN8/KxJVEVibeJkJ
    //http://jsbin.com/isagac/1/edit
    filter('inSlicesOf',
    ['$rootScope',
        function($rootScope) {
            return function(items, count) {

                if (!count) {
                    count = 1;
                }

                if (!angular.isArray(items) && !angular.isString(items)) {
                    return items;
                }

                var array = [], i, im, isFirst, chunkIndex;

                for (i = 0, im = items.length; i < im; i++) {

                    chunkIndex = parseInt(i / count, 10);

                    isFirst = (i % count === 0);

                    if (isFirst) {
                        array[chunkIndex] = [];
                    }

                    array[chunkIndex].push(items[i]);
                }

                if (angular.equals($rootScope.arrayinSliceOf, array)) {

                    return $rootScope.arrayinSliceOf;

                } else {

                    $rootScope.arrayinSliceOf = array;

                }

                return array;
            };
        }]
)
    .filter('getUrlFromCard',
    ['CardImageUrlService',
        function(CardImageUrlService) {
            return function(item) {
                return CardImageUrlService.getCardImageUrl(item);
            };
        }]
).filter('manaSymbolsAsImages',
    ['CardImageUrlService', '$sce',
        function(CardImageUrlService, $sce) {
            return function(item) {
                return CardImageUrlService.getManaUrls(item);
            };
        }]
);