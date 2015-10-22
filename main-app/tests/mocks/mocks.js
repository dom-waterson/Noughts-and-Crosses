//'use strict';
 var mocks = {
    gameModel : {
        gameboard : '',
        currentState : '',
        winner: '',
        currentPlayer: '',
        canMakeMove : function (){
            return false;
        },
        startNewGame : function (gameboard, outcome, winner) {},
        makingMove : function (gameboard, outcome, winner){
        },
        updateGameStatus : function (gameboard, outcome, winner) {}
    },
    proxy : {
        makeGame : function (player1, player2) {},
        makeGameMove : function (currentPlayer, gridIndex) {
        }
    },
    winStates : {
        checkStatusWithDelay : function () {}
    }
};


