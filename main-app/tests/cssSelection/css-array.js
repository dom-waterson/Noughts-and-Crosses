(function () {
    'use strict';
    describe('Testing css-array', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.cssSelection');
            inject(function ($injector) {
                constants = $injector.get('cssArray');
            });
        });

        it('Ensures css in index 0 is main.css', function () {
            assert.equal('main.css', constants[0]);
        });

        it('Ensures css in index 1 is altSkin.css', function () {
            assert.equal('altSkin.css', constants[1]);
        });
    });
})();