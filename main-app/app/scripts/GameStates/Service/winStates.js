(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.WinStates')
        .service('winStates',['GameModel', '$state', function (GameModel, $state) {
            var me = this;

            me.checkStates = function () {
                if (GameModel.currentState === "Win"){
                    $state.go('win');
                }
                if (GameModel.currentState === "Draw"){
                    $state.go('draw');
                }
            };
        }]);
})();