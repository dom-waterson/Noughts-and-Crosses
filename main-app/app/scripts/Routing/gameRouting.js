(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateUrl: "../app/html/views/playerselection.html"

                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    templateUrl: "../app/html/views/gameboard.html"
                 });
        }]);
})();