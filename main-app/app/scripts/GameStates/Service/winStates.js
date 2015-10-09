(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.WinStates')
        .service('winStates',['$state', '$timeout', 'gameModel', function ($state, $timeout, gameModel) {
            var me = this;

            var checkStates = function () {
                if (gameModel.currentState === "Win"){
                    $state.go('gameInProgress.win');
                }
                if (gameModel.currentState === "Draw"){
                    $state.go('gameInProgress.draw');
                }
            };

            me.checkStatusWithDelay = function (){
                $timeout(checkStates,1500);
            };
        }]);
})();