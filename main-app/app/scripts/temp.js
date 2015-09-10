(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Core', [])
        .controller('MainController', function ($scope){
            var currentPlayer = '1';
            $scope.player1 = 'human';
            $scope.player2 = 'human';
            $scope.gameboard = '000000000';
            $scope.imageURL = '1.png';

            var setCharAt = function (string, index, character) {
                if(index > string.length-1) {
                    return string;
                }
                return string.substr(0,index) + character + string.substr(index+1);
            };

            var setImageOnBoard = function (playerNumber) {

            };

            $scope.gameboardTapped = function (gridNumberFromTable) {
                if (currentPlayer === '1') {
                    $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                    setImageOnBoard(currentPlayer);
                    currentPlayer = '2';
                }
                else {
                    $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                    setImageOnBoard(currentPlayer);
                    currentPlayer = '1';
                }
            };


        });
})();