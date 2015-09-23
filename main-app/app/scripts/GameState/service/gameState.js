(function () {
    'use strict';
    angular.module('Tombola.Tombola.NoughtAndCrosses.GameState')
        .service('GameModel',['playerToggle' , function (playerToggle) {

            var me = this;

            me.currentPlayer = '1';
            me.gameboard = '';
            me.currentState = '';
            me.winner = '';

            me.updateGameStatus = function (gameboard, outcome, winner) {
                me.gameboard = gameboard;
                me.currentState = outcome;
                me.winner = winner;
                //toggleCurrentPlayer();
            };

            me.startNewGame = function (gameboard, outcome, winner) {
                me.currentPlayer = '1';
                me.updateGameStatus(gameboard, outcome, winner);
            };

            //var toggleCurrentPlayer = function () {
            //    if (playerToggle.player1 !== "human"){
            //        me.currentPlayer = '2';
            //    }
            //};
        }]);
})();