(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateUrl: "htmlTemplates/playerselection.html"

                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    templateUrl: "htmlTemplates/gameboard.html"
                 });
        }]);
})();