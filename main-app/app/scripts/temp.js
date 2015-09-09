(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Core', [])
        .controller('MainController', function ($scope){
            $scope.player1 = '';
            $scope.player2 = '';
            $scope.gameboard = '000000000';
        });
})();