(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard',['Tombola.NoughtAndCrosses.core']);
    angular.module('Tombola.NoughtAndCrosses.playerSelection', []);
    angular.module('Tombola.NoughtAndCrosses.core', []);
    angular.module('Tombola.NoughtAndCrosses', ['Tombola.NoughtAndCrosses.gameboard', 'Tombola.NoughtAndCrosses.playerSelection', 'ui.router']);
})();