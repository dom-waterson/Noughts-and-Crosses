(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Core', [])
        .controller('MainController', function ($scope){
            var me = this;
            var currentPlayer = '1';
            $scope.player1 = 'test';
            $scope.player2 = '';
            $scope.gameboard = '000000000';

            me.setCharAt = function (str, index, character) {
                if(index > str.length-1) return str;
                return str.substr(0,index) + character + str.substr(index+1);
            };

            $scope.gameboardTapped = function (gridNumberFromTable) {
                if (currentPlayer === '1') {
                    //alert(gridNumberFromTable + "player: " + currentPlayer);
                    //var temp = $scope.gameboard;
                    //$scope.gameboard = setCharAt(temp, gridNumberFromTable, currentPlayer);
                    //alert($scope.gameboard);
                    var str = 'Hello World';
                    //str = setCharAt(str,4,',');
                    alert(str);
                    currentPlayer = '2';
                }
                else {
                    //alert(gridNumberFromTable + "player: " + currentPlayer);
                    //var temp = $scope.gameboard;
                    //$scope.gameboard = setCharAt(temp, gridNumberFromTable, currentPlayer);
                    //alert($scope.gameboard);
                    var str = 'Hello World';
                    str = setCharAt(str,4,',');
                    alert(str);
                    currentPlayer = '1';
                }
            };


        });
})();