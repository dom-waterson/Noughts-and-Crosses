(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.playerSelection')
        .controller('playerSelection',function ($scope, playerToggle){
            this.playerSelection = playerToggle;
        });
})();