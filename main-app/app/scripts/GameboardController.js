(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', ['Tombola.NoughtAndCrosses.api'])
    .controller('GameboardController',function ($scope, GameApi){
        var currentPlayer = '1';
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.gameboard = '';
        $scope.currentState = '';

        var setCharAt = function (string, index, character) {
            return string.substr(0,index) + character + string.substr(index+1);
        };

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0' || $scope.currentState === 'Win') {
                return;
            }
            if ($scope.player1 !== "human"){
                currentPlayer = '2';
            }
            makeMove(gridNumberFromTable);
            if ($scope.player1 === "human" && $scope.player2 === "human") {
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                if (currentPlayer === '1') {
                    currentPlayer = '2';
                }
                else {
                    currentPlayer = '1';
                }
            }
        };

        $scope.selectOptionsForPlayer1 = function (){
            if ($scope.player1 === "human") {
                $scope.player1 = "pre-trained";
            }
            else if($scope.player1 === "pre-trained"){
                $scope.player1 = "random";
            }
            else {
                $scope.player1 = "human";
            }
        };

        $scope.selectOptionsForPlayer2 = function (){
            if ($scope.player2 === "human") {
                $scope.player2 = "pre-trained";
            }
            else if($scope.player2 === "pre-trained"){
                $scope.player2 = "random";
            }
            else {
                $scope.player2 = "human";
            }
        };

        $scope.createGame = function () {
            GameApi.makeGame($scope.player1, $scope.player2)
                .then(function(data){
                    $scope.gameboard = data.gameboard;
                    $scope.currentState = data.outcome;
                })
                .catch(function(data){
                    alert(data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on newGame');
                });
        };

        var makeMove = function (gridIndex) {
            GameApi.makeGameMove(currentPlayer, gridIndex)
                .then(function(data){
                    $scope.gameboard = data.gameboard;
                    $scope.currentState = data.outcome;
                })
                .catch(function(data){
                    alert(data);
                })
                .finally(function(){
                    console.log('finally end callback called after success on makemove');
                });
        };
    });
})();