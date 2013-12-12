'use strict';

describe('MainCtrl', function(){

    beforeEach(function() {
        module('lambic.controllers');
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

        // issue #13
        it('should prompt before leaving if sidebar is not empty', function() {
            scope.plaintext = 'Some Name\nSome other Name';
            scope.$broadcast('$locationChangeStart');
            expect(beforeUnload.init).toHaveBeenCalled();
        });

        // issue #13
        it('should NOT prompt before leaving if sidebar is empty', function() {
            scope.plaintext = '';
            scope.$broadcast('$locationChangeStart');
            expect(beforeUnload.init).not.toHaveBeenCalled();
        });

    });
});