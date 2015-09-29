(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
    .controller('GameboardController',function ($scope, Proxy, playerToggle, GameModel, winStates){

        this.gameModel = GameModel;
        this.players = playerToggle;

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