(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .directive('gameBoard', function () {
            return {
                templateUrl: 'htmlTemplates/gameboard.html'
            };
        });
})();