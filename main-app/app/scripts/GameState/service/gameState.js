(function () {
    'use strict';
    angular.module('Tombola.Tombola.NoughtAndCrosses.GameState')
        .service('GameModel',['playerToggle' , function (playerToggle) {

            var me = this;

            me.currentPlayer = '';
            me.gameboard = '';
            me.currentState = '';
            me.winner = '';

            me.updateGameStatus = function (gameboard, outcome, winner) {
                me.gameboard = gameboard;
                me.currentState = outcome;
                me.winner = winner;
            };

            me.startNewGame = function (gameboard, outcome, winner) {
                startCurrentPlayer();
                me.updateGameStatus(gameboard, outcome, winner);
            };

            me.makingMove = function(gameboard, outcome, winner){
                me.updateGameStatus(gameboard, outcome, winner);
                toggleCurrentPlayer();
            };

            me.isGameInPlay = function () {
                return me.currentState === 'Win';
            };

            me.isSquareSelected = function (gridNumberFromTable) {
                return me.gameboard.charAt(gridNumberFromTable) !== '0';
            };

            var toggleCurrentPlayer = function () {
                if (playerToggle.player1 === "human" && playerToggle.player2 === "human") {
                    if (me.currentPlayer === '1') {
                        me.currentPlayer = '2';
                    }
                    else {
                        me.currentPlayer = '1';
                    }
                }
            };

            var startCurrentPlayer = function () {
                me.currentPlayer = '1';
                if (playerToggle.player1 !== "human"){
                    me.currentPlayer = '2';
                }
            };
        }]);
})();