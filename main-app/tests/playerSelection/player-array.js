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
            constants[0].should.equal('human');
        });

        it('Ensures player type 1 is random', function () {
            constants[1].should.equal('random');
        });

        it('Ensures player type 2 is pre-trained', function () {
            constants[2].should.equal('pre-trained');
        });
    });
})();
