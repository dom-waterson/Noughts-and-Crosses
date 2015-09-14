(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', ['Tombola.NoughtAndCrosses.GameApi'])
    .controller('GameboardController', function ($scope){
        var currentPlayer = '1';
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.gameboard = '000000000';

        var setCharAt = function (string, index, character) {
            return string.substr(0,index) + character + string.substr(index+1);
        };

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0') {
                return;
            }
            if (currentPlayer === '1') {
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                currentPlayer = '2';
            }
            else {
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                currentPlayer = '1';
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
    });
})();