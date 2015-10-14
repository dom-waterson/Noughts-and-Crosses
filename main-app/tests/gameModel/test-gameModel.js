(function () {
    'use strict';
    describe('Testing game-model', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Tombola.NoughtAndCrosses.GameState');
            inject(function ($injector) {
                constants = $injector.get('gameModel');
            });
        });

        it('Ensures default game model is empty', function () {
            constants.currentPlayer.should.equal('');
            constants.gameboard.should.equal('');
            constants.currentState.should.equal('');
            constants.winner.should.equal('');
        });

        it('Ensures the game model gets updated by the updateGameStatus function', function () {
            constants.updateGameStatus('000000000', 'continue', '0');
            constants.gameboard.should.equal('000000000');
            constants.currentState.should.equal('continue');
            constants.winner.should.equal('0');
        });

        it('Ensures isGameInPlay function returns true when the currentState is Win', function () {
            constants.currentState = 'Win';
            constants.isGameInPlay().should.equal(true);
        });

        it('Ensures isGameInPlay function returns false when the currentState is not Win', function () {
            constants.currentState = 'Draw';
            constants.isGameInPlay().should.equal(false);
            constants.currentState = 'Continue';
            constants.isGameInPlay().should.equal(false);
        });

        it('Ensures isSquareSelected function returns true if square in the game board string is taken', function () {
            constants.gameboard = '000100000';
            constants.isSquareSelected(3).should.equal(true);
        });

        it('Ensures isSquareSelected function returns false if square in the game board string is not taken', function () {
            constants.gameboard = '011211221';
            constants.isSquareSelected(0).should.equal(false);
        });

        it('Ensures canMakeMove function returns false if square in the game board string is not taken', function () {
            constants.gameboard = '000000001';
            constants.canMakeMove(0).should.equal(false);
        });

        it('Ensures startNewGame function returns the correct current players based on starting players and updates the model ', function () {
            constants.startNewGame('000000001', 'Continue', '0');
            constants.currentPlayer.should.equal('1');
            constants.gameboard.should.equal('000000001');
            constants.currentState.should.equal('Continue');
            constants.winner.should.equal('0');
        });

        it('Ensures makingMove function updates the game model and sets the current player correctly ', function () {
            constants.startNewGame('000000001', 'Continue', '0');
            constants.makingMove('000000021', 'Continue', '0');
            constants.currentPlayer.should.equal('2');
            constants.gameboard.should.equal('000000021');
            constants.currentState.should.equal('Continue');
            constants.winner.should.equal('0');
        });
    });
})();