(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .directive('gameSound', function () {
           return {
               restrict: 'E',
               template: '<audio id="sound"><source src="sounds/sound.mp3" type="audio/mp3"/></audio>'
           };
        });
})();