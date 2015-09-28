(function () {
    'use strict';
    angular.module('Tombola.Tombola.NoughtAndCrosses.GameState', ['Tombola.NoughtAndCrosses.playerSelection']);
    angular.module('Tombola.NoughtAndCrosses.gameboard',['Tombola.NoughtAndCrosses.core', 'Tombola.Tombola.NoughtAndCrosses.GameState', 'Tombola.NoughtAndCrosses.WinStates']);
    angular.module('Tombola.NoughtAndCrosses.playerSelection', []);
    angular.module('Tombola.NoughtAndCrosses.core', []);
    angular.module('Tombola.NoughtAndCrosses.WinStates', ['ui.router', 'Tombola.Tombola.NoughtAndCrosses.GameState']);
    angular.module('Tombola.NoughtAndCrosses', ['Tombola.NoughtAndCrosses.gameboard', 'Tombola.NoughtAndCrosses.playerSelection', 'ui.router' ]);
})();