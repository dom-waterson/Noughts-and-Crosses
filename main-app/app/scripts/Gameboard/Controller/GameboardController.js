(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
    .controller('GameboardController',function ($scope, Proxy, playerToggle, GameModel){

        $scope.gameModel = GameModel;

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if (GameModel.gameboard.charAt(gridNumberFromTable) !== '0' || GameModel.currentState === 'Win') {
                return;
            }
            makeMove(gridNumberFromTable);
        };

        $scope.createGame = function () {
            Proxy.makeGame(playerToggle.player1, playerToggle.player2)
                .then(function(data){
                    GameModel.startNewGame(data.gameboard, data.outcome, data.winner);
                })
                .catch(function(data){
                    alert("Error coming from create Game: " + data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on newGame');
                });
        };

        var makeMove = function (gridIndex) {
            Proxy.makeGameMove(GameModel.currentPlayer, gridIndex)
                .then(function(data){
                    GameModel.makingMove(data.gameboard, data.outcome, data.winner);
                })
                .catch(function(data){
                    alert("Error coming from makeMove: " + data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on makemove');
                });
        };
    });
})();