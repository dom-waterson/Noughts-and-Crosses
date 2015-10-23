(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .directive('gameSound', function () {
           return {
               restrict: 'E',
               template: '<audio id="sound"><source src="sounds/sound.aiff" type="audio/aiff"/></audio>'
           };
        });
})();