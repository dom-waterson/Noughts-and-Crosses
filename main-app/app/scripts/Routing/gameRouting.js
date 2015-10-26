(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider){
            var resetGame = function($timeout, $state){
                $timeout(function(){
                    $state.go('createGame');
                }, 3000);
            };
            $urlRouterProvider.otherwise("/selectPlayers");
            $stateProvider
                .state('createGame', {
                    url: "/selectPlayers",
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('playerselection.html');
                    }
                })
                .state('createGame.rules', {
                    url: "/rules",
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('rules.html');
                    }
                })
                .state ('gameInProgress', {
                    url: "/playingGame",
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('gameboard.html');
                    }
                 })
                .state ('gameInProgress.draw', {
                    url: '/gameDrawn',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('drawView.html');
                    },
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state ('gameInProgress.win', {
                    url: '/gameWon',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('winView.html');
                    },
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                });
        }]);
})();