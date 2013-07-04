'use strict';

angular.module('lambic.services', [])
    .factory('PoolService', function() {
        return {
            get: function() {
                return mtgo_cube_og_data_array;
            }
        }
    }).factory('ZipService', function() {
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
    });
