(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.WinStates')
        .service('winStates',['$state', '$timeout', 'GameModel', function ($state, $timeout, GameModel) {
            var me = this;

            var checkStates = function () {
                if (GameModel.currentState === "Win"){
                    $state.go('win');
                }
                if (GameModel.currentState === "Draw"){
                    $state.go('draw');
                }
            };

            me.checkStatusWithDelay = function (){
                $timeout(checkStates,3000);
            };
        }]);
})();