(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.playerSelection', []);
    angular.module('Tombola.NoughtAndCrosses.api', []);
    angular.module('Tombola.NoughtAndCrosses', ['Tombola.NoughtAndCrosses.api', 'Tombola.NoughtAndCrosses.playerSelection', 'ui.router']);
})();