'use strict';

describe('MainCtrl', function(){

    beforeEach(function() {
        module('lambicApp.controllers');
    });
    describe("AppCtrl", function() {

        var ctrl, scope, beforeUnload;

        beforeEach(inject(function($injector, $rootScope, $controller, onBeforeUnload) {
            scope = $rootScope.$new();
            ctrl = $controller("AppCtrl", {$scope: scope});
            beforeUnload = onBeforeUnload;
            // if init is called, we're throwing up a prompt
            spyOn(onBeforeUnload, 'init');
        }));

    });
});