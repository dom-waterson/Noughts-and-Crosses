(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.WinStates')
        .service('winStates',['$state', '$timeout', 'gameModel', 'soundService', 'soundConstants', function ($state, $timeout, gameModel, soundService, soundConstants) {
            var me = this;
            me.sound = soundConstants;

            var checkStates = function () {
                if (gameModel.currentState === "Win"){
                    playEndSound();
                    $state.go('gameInProgress.win');
                }
                if (gameModel.currentState === "Draw"){
                    playEndSound();
                    $state.go('gameInProgress.draw');
                }
            };

            me.checkStatusWithDelay = function (){
                $timeout(checkStates,1500);
            };

            var playEndSound = function () {
                soundService.playSound(me.sound.SOUND_GUNSHOT_START, me.sound.SOUND_GUNSHOT_DURATION);
            };
        }]);
})();