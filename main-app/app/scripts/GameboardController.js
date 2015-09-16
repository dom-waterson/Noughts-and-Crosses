(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', ['Tombola.NoughtAndCrosses.api'])
    .controller('GameboardController',function ($scope, GameApi){
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
            $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
            makeMove(gridNumberFromTable);
            if (currentPlayer === '1') {
                currentPlayer = '2';
            }
            else {
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

        $scope.createGame = function () {
            //var result = GameApi.makeGame($scope.player1, $scope.player2);
            //alert(GameApi.makeGame($scope.player1, $scope.player2));
            GameApi.makeGame($scope.player1, $scope.player2);


        };

        var makeMove = function (gridIndex) {
            GameApi.makeGameMove(currentPlayer, gridIndex);

        };
    });
})();