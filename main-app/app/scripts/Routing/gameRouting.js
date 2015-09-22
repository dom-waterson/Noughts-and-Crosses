(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateUrl: "/html/views/playerselection.html"

                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    templateUrl: "/html/views/gameboard.html"
                 });
        }]);
})();