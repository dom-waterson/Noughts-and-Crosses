(function () {
    'use strict';
    describe('Testing player-array', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.playerSelection');
            inject(function ($injector) {
                constants = $injector.get('playerToggle')
            });
        });

        it('Ensures default players 1 and 2 are human', function () {
            assert.equal('human', constants.player1);
            assert.equal('human', constants.player2);
        });

        it('Ensures toggling of player 1 works', function () {
            constants.togglePlayer(1);
            assert.equal('random', constants.player1);
            constants.togglePlayer(1);
            assert.equal('pre-trained', constants.player1);
            constants.togglePlayer(1);
            assert.equal('human', constants.player1);
        });

        it('Ensures toggling of player 2 works', function () {
            constants.togglePlayer(2);
            assert.equal('random', constants.player2);
            constants.togglePlayer(2);
            assert.equal('pre-trained', constants.player2);
            constants.togglePlayer(2);
            assert.equal('human', constants.player2);
        });
    })
})();