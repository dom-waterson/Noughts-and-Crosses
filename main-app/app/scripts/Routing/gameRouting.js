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
                    //templateUrl: "html/views/gameboard.html"
                    template:'<div class="centre "> ' +
                    '<h1 class="centre animated slideInLeft">{{game.players.player1 | uppercase}} vs {{game.players.player2 | uppercase}}</h1> ' +
                    '<div class="gameboard animated slideInRight"> ' +
                    '<game-cell square-number="0"></game-cell> ' +
                    '<game-cell square-number="1"></game-cell> ' +
                    '<game-cell square-number="2"></game-cell> ' +
                    '<game-cell square-number="3"></game-cell> ' +
                    '<game-cell square-number="4"></game-cell> ' +
                    '<game-cell square-number="5"></game-cell> ' +
                    '<game-cell square-number="6"></game-cell> ' +
                    '<game-cell square-number="7"></game-cell> ' +
                    '<game-cell square-number="8"></game-cell> ' +
                    '</div> ' +
                    '<div ui-view></div> ' +
                    '<div>' +
                    '</div> ' +
                    '</div>'
                 })
                .state ('gameInProgress.draw', {
                    url: '/gameDrawn',
                    //These are left in for testing purposes
                    //templateUrl: 'html/views/drawView.html',
                    template : '<div class="animated bounceInUp"><h1>Its a draw!</h1></div>',
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                })
                .state ('gameInProgress.win', {
                    url: '/gameWon',
                    //These are left in for testing purposes
                    //templateUrl: 'html/views/winView.html',
                    template: '<div class="animated bounceInUp"><h1>Player: {{game.gameModel.winner}} has won!</h1></div>',
                    onEnter: function($timeout, $state){
                        resetGame($timeout, $state);
                    }
                });
        }]);
})();