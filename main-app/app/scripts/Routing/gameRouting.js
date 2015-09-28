(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateUrl: "html/views/playerselection.html"
                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    templateUrl: "html/views/gameboard.html"
                 })
                .state ('draw', {
                    url: '/gameDrawn',
                    templateUrl: 'html/views/drawView.html'
                })
                .state ('lost', {
                    url: '/gameLost',
                    templateUrl: 'html/views/loseView.html'
                })
                .state ('win', {
                    url: '/gameWon',
                    templateUrl: 'html/views/winView.html'
                });
        }]);
})();