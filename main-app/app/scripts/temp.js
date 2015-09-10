(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Core', [])
        .controller('MainController', function ($scope){
            var currentPlayer = '1';
            $scope.player1 = 'human';
            $scope.player2 = 'human';
            $scope.gameboard = '000000000';

            var setCharAt = function (string, index, character) {
                if(index > string.length-1) {
                    return string;
                }
                return string.substr(0,index) + character + string.substr(index+1);
            };

            var setImageOnBoard = function (idNumber) {
                var index = idNumber.toString();
                var tableCell = document.getElementById(index);
                var img = document.createElement("img");
                img.src = "images/" + currentPlayer + ".png";
                tableCell.appendChild(img);
            };

            $scope.gameboardTapped = function (gridNumberFromTable) {
                if (currentPlayer === '1') {
                    $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                    setImageOnBoard(gridNumberFromTable);
                    currentPlayer = '2';
                }
                else {
                    $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                    setImageOnBoard(gridNumberFromTable);
                    currentPlayer = '1';
                }
            };

            var checkGrid = function (gridToCheck) {

            };


        });
})();