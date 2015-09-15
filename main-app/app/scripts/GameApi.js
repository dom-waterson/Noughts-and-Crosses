(function () {
    'use strict';
    //angular.module('Tombola.NoughtAndCrosses.api')
    //    .service ('GameApi', ['$http', function ($http){
    //
    //     var makeGame = function (playerOne, playerTwo) {
    //        var req = {
    //            method: 'POST',
    //            url: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
    //            'withCredentials': 'true',
    //            data: { "player1":  playerOne,"player2": playerTwo }
    //        };
    //        $http(req).
    //            then(function(response) {
    //                alert("outcome: " +response.data.outcome + " gameboard: " + response.data.gameboard + " Winner: " + response.data.winner);
    //            }, function(response) {
    //                alert(response.data);
    //            });
    //    };
    //
    //
    //    var makeGameMove = function (currentPlayer, gridIndex) {
    //        var req = {
    //            method: 'POST',
    //            url: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',
    //            'withCredentials': 'true',
    //            data: {"playerNumber": currentPlayer,"chosenSquare":gridIndex}
    //        };
    //        $http(req).
    //            then(function(response) {
    //                alert(response.data.outcome);
    //            }, function(response) {
    //                alert(response.data);
    //            });
    //    };
    //}]);
})();