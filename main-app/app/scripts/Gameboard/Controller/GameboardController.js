(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
    .controller('GameboardController',function ($scope, $timeout, Proxy, playerToggle, GameModel, winStates, cssToggle){

        this.gameModel = GameModel;
        this.players = playerToggle;
        this.css = cssToggle;

        this.gameboardTapped = function (gridNumberFromTable) {
            if (GameModel.isSquareSelected(gridNumberFromTable) || GameModel.isGameInPlay()){
                return;
            }
            makeMove(gridNumberFromTable);
        };

        this.createGame = function () {
            Proxy.makeGame(playerToggle.player1, playerToggle.player2)
                .then(function(data){
                    GameModel.startNewGame(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                });
        };

        var makeMove = function (gridIndex) {
            Proxy.makeGameMove(GameModel.currentPlayer, gridIndex)
                .then(function(data){
                    GameModel.makingMove(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                });
        };
    });
})();