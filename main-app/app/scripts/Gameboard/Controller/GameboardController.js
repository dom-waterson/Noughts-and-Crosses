(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
    .controller('GameboardController',['Proxy', 'playerToggle', 'gameModel', 'winStates', 'cssToggle', 'soundService', 'soundConstants', function (Proxy, playerToggle, gameModel, winStates, cssToggle, soundService, soundConstants){
        var me = this;
        this.gameModel = gameModel;
        this.players = playerToggle;
        this.css = cssToggle;
        me.soundTimes = soundConstants;
            me.soundService = soundService;

        this.gameboardTapped = function (gridNumberFromTable) {
            if(gameModel.canMakeMove(gridNumberFromTable)){
                return;
            }
            makeMove(gridNumberFromTable);
        };

        this.createGame = function () {
            Proxy.makeGame(playerToggle.player1, playerToggle.player2)
                .then(function(data){
                    gameModel.startNewGame(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                });
        };

        var makeMove = function (gridIndex) {
            Proxy.makeGameMove(gameModel.currentPlayer, gridIndex)
                .then(function(data){
                    gameModel.makingMove(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                    me.soundService.playSound(me.soundTimes.SOUND_LIGHTSABER_START, me.soundTimes.SOUND_LIGHTSABER_DURATION);
                });
        };
    }]);
})();