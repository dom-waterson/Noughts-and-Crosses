(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            var resetGame = function($timeout, $state){
                $timeout(function(){
                    $state.go('createGame');
                }, 3000);
            };
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateUrl: "html/views/playerselection.html"
                })
                .state('createGame.rules', {
                    url: "/rules",
                    templateUrl: "html/views/rules.html"
                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    //These are left in for testing purposes
                    templateUrl: "html/views/gameboard.html"
                 })
                .state ('gameInProgress.draw', {
                    url: '/gameDrawn',
                    templateUrl: 'html/views/drawView.html',
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state ('gameInProgress.win', {
                    url: '/gameWon',
                    templateUrl: 'html/views/winView.html',
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                });
        }]);
})();