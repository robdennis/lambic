'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    describe('on load appearance', function() {
        it('should have some number of of tabs', function() {
            expect(repeater('.nav-tabs > li').count()).toBeGreaterThan(0);
        });
        it("there's one tab that is active, with a count of 0", function() {
            var navBar = '.nav-tabs > li.active';
            expect(repeater(navBar).count()).toEqual(1);
            expect(element(navBar + ' > a').text()).toMatch('\(0\)');
        });
    })

});
