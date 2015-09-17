(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .directive('playerSelection', function () {
            return {
                templateUrl: 'htmlTemplates/playerselection.html'
            };
        });
})();