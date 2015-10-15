(function () {
    'use strict';
    describe('Testing game-model', function () {
        var constants,
            state,
            gameModel,
            timeout;

        beforeEach(function () {
            module('Tombola.NoughtAndCrosses');
            module('Tombola.NoughtAndCrosses.WinStates');
            inject(function ($injector) {
                constants = $injector.get('winStates');
                state = $injector.get('$state');
                gameModel = $injector.get('gameModel');
                timeout = $injector.get('$timeout');
            });
        });

        it('Ensures when current state is set to win the view is updated with the win view', function () {
            gameModel.currentState = 'Win';
            constants.checkStatusWithDelay();
            timeout.flush();
            state.current.url.should.equal('/gameWon');
        });

        it('Ensures when current state is set to draw the view is updated with the draw view', function () {
            gameModel.currentState = 'Draw';
            constants.checkStatusWithDelay();
            timeout.flush();
            state.current.url.should.equal('/gameDrawn');
        });
    });
})();

