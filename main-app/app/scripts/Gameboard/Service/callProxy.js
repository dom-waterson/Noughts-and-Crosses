(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
        .service('callProxy', ['GameApi','playerToggle', function (GameApi, playerToggle)
        {
            var me = this;
            me.createGame = function () {
                GameApi.makeGame(playerToggle.player1, playerToggle.player2)
                    .then(function(data){
                        return data;
                    })
                    .catch(function(data){
                        alert("Error comeing from create Game: " + data);
                    })
                    .finally(function(){
                        console.log('finally end callback called after success on newGame');
                    });
            };

            me.makeMove = function (currentPlayer, gridIndex) {
                GameApi.makeGameMove(currentPlayer, gridIndex)
                    .then(function(data){
                        return data;
                    })
                    .catch(function(data){
                        alert("Error coming from makeMove: " + data);
                    })
                    .finally(function(){
                        console.log('finally end callback called after success on makemove');
                    });
            };
        }]);
})();