(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
    .controller('GameboardController',function ($scope, GameApi, playerToggle){
        var currentPlayer = '1';
        $scope.gameboard = '';
        $scope.currentState = '';
        $scope.winner = '';

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0' || $scope.currentState === 'Win') {
                return;
            }
            if (playerToggle.player1 !== "human"){
                currentPlayer = '2';
            }
            makeMove(gridNumberFromTable);
        };

        $scope.createGame = function () {
            currentPlayer = '1';
            GameApi.makeGame(playerToggle.player1, playerToggle.player2)
                .then(function(data){
                    updateGameStatus(data);
                })
                .catch(function(data){
                    alert("Error comeing from create Game: " + data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on newGame');
                });
        };

        var makeMove = function (gridIndex) {
            GameApi.makeGameMove(currentPlayer, gridIndex)
                .then(function(data){
                    updateGameStatus(data);
                    if (playerToggle.player1 === "human" && playerToggle.player2 === "human") {
                        if (currentPlayer === '1') {
                            currentPlayer = '2';
                        }
                        else {
                            currentPlayer = '1';
                        }
                    }
                })
                .catch(function(data){
                    alert("Error coming from makeMove: " + data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on makemove');
                });
        };

        var updateGameStatus = function (data) {
            $scope.gameboard = data.gameboard;
            $scope.currentState = data.outcome;
            $scope.winner = data.winner;
        };
    });
})();