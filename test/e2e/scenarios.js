'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    describe('on load appearance', function() {
        it('should have some number of of tabs', function() {
            expect(repeater('.view-selection > button').count()).toBeGreaterThan(0);
        });
        it("there's one view that is up, with a count of 0", function() {
            var navBar = '.view-selection > button.active';
            expect(repeater(navBar).count()).toEqual(1);
            expect(element(navBar).text()).toMatch('\(0\)');
        });
    })

});
