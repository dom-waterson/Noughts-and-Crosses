(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .directive('gameState', function () {
            return {
                templateUrl: 'html/directives/gameState.html'
            };
        });
})();