(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.sound')
        .service('soundService', ['$timeout', function ($timeout){
            var me = this,
                audio;

            var stopSound = function () {
                audio.pause();
            };

            me.playSound = function (start, length) {
                audio = document.getElementById("sound");
                audio.currentTime = start;
                audio.play();
                $timeout(stopSound, length, true);
            };
        }]);
})();