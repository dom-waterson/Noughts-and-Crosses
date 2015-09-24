(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', ['Tombola.NoughtAndCrosses.api'])
    .controller('GameboardController',function ($scope, GameApi){
        var currentPlayer = '1';
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.gameboard = '';
        $scope.currentState = '';
        $scope.winner = '';

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0' || $scope.currentState === 'Win') {
                return;
            }
            if ($scope.player1 !== "human"){
                currentPlayer = '2';
            }
            makeMove(gridNumberFromTable);
        };

        $scope.selectOptionsForPlayers = function (playerNum) {
            if($scope['player'+playerNum] === "human"){
                $scope['player'+playerNum] = "pre-trained";
            }
            else if($scope['player'+playerNum] === "pre-trained"){
                $scope['player'+playerNum] = "random";
            }
            else {
                $scope['player'+playerNum] = "human";
            }
        };

        $scope.createGame = function () {
            currentPlayer = '1';
            GameApi.makeGame($scope.player1, $scope.player2)
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
                    if ($scope.player1 === "human" && $scope.player2 === "human") {
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