(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
        .directive('gameCell', function (){
            return {
                restrict: 'E',
                template: function (attr, element) {
                   return '<div ng-click="game.gameboardTapped('+element.squareNumber+')" class= "gameCells player{{game.gameModel.gameboard['+element.squareNumber+']}}"></div>';
                }
            };
        });
})();