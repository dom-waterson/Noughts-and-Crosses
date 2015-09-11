(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', [])
    .controller('GameboardController', function ($scope){
        var currentPlayer = '1';
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.gameboard = '000000000';

        var setCharAt = function (string, index, character) {
            return string.substr(0,index) + character + string.substr(index+1);
        };

        var setImageOnBoard = function (idNumber) {
            var tableCell = document.getElementById(idNumber);
            var img = document.createElement("img");
            img.src = "images/" + currentPlayer + ".png";
            tableCell.appendChild(img);
        };

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0') {
                return;
            }
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
    });
})();