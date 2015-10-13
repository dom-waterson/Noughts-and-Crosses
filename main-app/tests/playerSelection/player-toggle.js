(function () {
    'use strict';
    describe('Testing player-array', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.playerSelection');
            inject(function ($injector) {
                constants = $injector.get('playerToggle');
            });
        });

        it('Ensures default players 1 and 2 are human', function () {
            constants.player1.should.equal('human');
            constants.player2.should.equal('human');
        });

        it('Ensures toggling of player 1 works', function () {
            constants.togglePlayer(1);
            constants.player1.should.equal('random');
            constants.togglePlayer(1);
            constants.player1.should.equal('pre-trained');
            constants.togglePlayer(1);
            constants.player1.should.equal('human');
        });

        it('Ensures toggling of player 2 works', function () {
            constants.togglePlayer(2);
            constants.player2.should.equal('random');
            constants.togglePlayer(2);
            constants.player2.should.equal('pre-trained');
            constants.togglePlayer(2);
            constants.player2.should.equal('human');
        });
    });
})();