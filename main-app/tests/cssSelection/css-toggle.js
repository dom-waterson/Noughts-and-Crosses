(function () {
    'use strict';
    describe('Testing css-toggle', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.cssSelection');
            inject(function ($injector) {
                constants = $injector.get('cssToggle');
            });
        });

        it('Ensures the default css is main.css', function () {
            should.equal('main.css', constants.cssStyle);
        });

        it('Ensures that toggling the css will result in altSkin.css', function () {
            constants.toggleCss();
            should.equal('altSkin.css', constants.cssStyle);
        });

        it('Ensures that toggling two times will put the css back to main.css', function () {
            constants.toggleCss();
            constants.toggleCss();
            should.equal('main.css', constants.cssStyle);
        });
    });
})();