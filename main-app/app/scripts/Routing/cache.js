(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses')
        .run(['$templateCache', function($templateCache) {
            $templateCache.put('playerselection.html', '<div ng-controller="playerSelection as player" class=" centre animated fadeInDownBig"> <h1>Select Your Players</h1> <h3>{{player.playerSelection.player1 | uppercase}} vs {{player.playerSelection.player2 | uppercase}}</h3> <div ng-click="player.playerSelection.togglePlayer(1)" class="{{player.playerSelection.player1}} select"> </div> <div ng-click="player.playerSelection.togglePlayer(2)" class="{{player.playerSelection.player2}} select"> </div> <br/> <button ui-sref="gameInProgress" ng-click="game.createGame()">Play!</button> <button ui-sref="createGame.rules" >Rules</button> <button ng-click="game.css.toggleCss()" >Change Skin</button> </div> <div ui-view></div>');
            $templateCache.put('drawView.html', '<div class="animated bounceInUp"> <h1>Its a draw!</h1> <button ui-sref="createGame">Change Players</button> <button ng-click="game.createGame()">Play again!</button> <button ng-click="game.css.toggleCss()" >Change Skin</button> </div>');
            $templateCache.put('winView.html', '<div class="animated bounceInUp"> <h1>Player: {{game.gameModel.winner}} has won!</h1> <button ui-sref="createGame">Change Players</button> <button ng-click="game.createGame()">Play again!</button> <button ng-click="game.css.toggleCss()" >Change Skin</button> </div>');
            $templateCache.put('rules.html', '<br/> <div class="animated fadeInUpBig"> <li>Choose your player type. You have the options of:<ul> <li>Human</li> <li>CPU: Random</li> <li>CPU: Pre-Trained</li> </ul> </li> <li>Press the <b>Play</b> button</li> <li>Player 1 always goes first</li> <li>Game always ends with a win or a draw</li> <li>Press <b>Change Players</b> to go back to the character selection screen or <b>Play again</b> to restart</li> </ul> </div>');
            $templateCache.put('gameboard.html', '<div class="centre "> <h1 class="centre animated slideInLeft">{{game.players.player1 | uppercase}} vs {{game.players.player2 | uppercase}}</h1> <div class="gameboard animated slideInRight"> <game-cell square-number="0"></game-cell> <game-cell square-number="1"></game-cell> <game-cell square-number="2"></game-cell> <game-cell square-number="3"></game-cell> <game-cell square-number="4"></game-cell> <game-cell square-number="5"></game-cell> <game-cell square-number="6"></game-cell> <game-cell square-number="7"></game-cell> <game-cell square-number="8"></game-cell> </div> <div ui-view></div> <div></div> </div> ');
        }]);
        //.run(['$templateRequest', '$templateCache', function($templateRequest, $templateCache) {
        //    $templateRequest('html/views/playerselection.html').then(function (response) {
        //        $templateCache.put('playerselection.html', response);
        //    });
        //
        //    $templateRequest('html/views/winView.html').then(function (response) {
        //        $templateCache.put('winView.html', response);
        //    });
        //
        //    $templateRequest('html/views/drawView.html').then(function (response) {
        //        $templateCache.put('drawView.html', response);
        //    });
        //
        //    $templateRequest('html/views/rules.html').then(function (response) {
        //        $templateCache.put('rules.html', response);
        //    });
        //
        //    $templateRequest('html/views/gameboard.html').then(function (response) {
        //        $templateCache.put('gameboard.html', response);
        //    });
        //}]);
})();