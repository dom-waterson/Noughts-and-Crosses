(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.sound')
        .service('soundService', ['$timeout', function ($timeout){
            var me = this,
                audio = '';

            var stopSound = function () {
                audio.get(0).pause();
                me.playing = false;
            };

            me.playing = false;

            me.playSound = function (start, length) {
                if(!me.playing) {
                    audio = angular.element('#sound');
                    audio.prop('currentTime', start);
                    audio.get(0).play();
                    me.playing = true;
                    $timeout(stopSound, length, true);
                }
            };
        }]);
})();