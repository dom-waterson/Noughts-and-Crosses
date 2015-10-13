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
            constants[0].should.equal('main.css');
        });

        it('Ensures css in index 1 is altSkin.css', function () {
            constants[1].should.equal('altSkin.css');
        });
    });
})();