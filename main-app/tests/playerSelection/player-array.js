(function () {
    'use strict';
    describe('Testing player-array', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.playerSelection');
            inject(function ($injector) {
                constants = $injector.get('playerArray');
            });
        });

        it('Ensures player type 0 is human', function () {
            should.equal('human', constants[0]);
        });

        it('Ensures player type 1 is random', function () {
            should.equal('random', constants[1]);
        });

        it('Ensures player type 2 is pre-trained', function () {
            should.equal('pre-trained', constants[2]);
        });
    });
})();
