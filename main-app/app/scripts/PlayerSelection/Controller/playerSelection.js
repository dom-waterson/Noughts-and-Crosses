(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.playerSelection')
        .controller('playerSelection',function ($scope, playerToggle){
            $scope.playerSelection = playerToggle;
        });
})();