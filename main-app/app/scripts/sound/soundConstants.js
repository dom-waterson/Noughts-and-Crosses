(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.sound')
        .factory('soundConstants', function () {
           return {
               SOUND_LIGHTSABER_START: 0,
               SOUND_LIGHTSABER_DURATION: 2790,
               SOUND_GUNSHOT_START: 3,
               SOUND_GUNSHOT_DURATION: 500,
               SOUND_EVIL_START: 4,
               SOUND_EVIL_DURATION: 2000
           };
        });
})();