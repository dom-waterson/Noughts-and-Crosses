(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.playerSelection')
        .service('playerToggle', ['playerArray', function (playerArray)
        {
            var me = this;

            var rotatePlayerType = function (currentPlayerType) {
                var nextIndex = playerArray.indexOf(currentPlayerType) +1;
                nextIndex =  nextIndex === playerArray.length ? 0 :  nextIndex;
                return playerArray[nextIndex];
            };

            me.player1 = playerArray[0];
            me.player2 = playerArray[0];

            me.togglePlayer = function (playerNumber) {
                var playerValueNumber = 'player'+playerNumber;
                me[playerValueNumber] = rotatePlayerType(me[playerValueNumber]);
            };
        }]);
})();