(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.Gameboard', [])
    .controller('GameboardController',function ($scope, $http){
        var currentPlayer = '1';
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.gameboard = '000000000';

        var setCharAt = function (string, index, character) {
            return string.substr(0,index) + character + string.substr(index+1);
        };

        $scope.gameboardTapped = function (gridNumberFromTable) {
            if ($scope.gameboard.charAt(gridNumberFromTable) !== '0') {
                return;
            }
            if (currentPlayer === '1') {
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                makeMove(gridNumberFromTable);
                currentPlayer = '2';
            }
            else {
                $scope.gameboard = setCharAt($scope.gameboard, gridNumberFromTable, currentPlayer);
                makeMove(gridNumberFromTable);
                currentPlayer = '1';
            }
        };

        $scope.selectOptionsForPlayer1 = function (){
            if ($scope.player1 === "human") {
                $scope.player1 = "pre-trained";
            }
            else if($scope.player1 === "pre-trained"){
                $scope.player1 = "random";
            }
            else {
                $scope.player1 = "human";
            }
        };

        $scope.selectOptionsForPlayer2 = function (){
            if ($scope.player2 === "human") {
                $scope.player2 = "pre-trained";
            }
            else if($scope.player2 === "pre-trained"){
                $scope.player2 = "random";
            }
            else {
                $scope.player2 = "human";
            }
        };

        $scope.createGame = function () {
            var req = {
                method: 'POST',
                url: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                'withCredentials': 'true',
                data: { "player1":  $scope.player1,"player2": $scope.player2 }
            };
            $http(req).
                then(function(response) {
                    alert("outcome: " +response.data.outcome + " gameboard: " + response.data.gameboard + " Winner: " + response.data.winner);
                }, function(response) {
                    alert(response.data);
                });
            $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1":  $scope.player1,"player2": $scope.player2}).
                then(function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    alert(response.data.outcome);
                }, function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert(response);
                });
        };

        var makeMove = function (gridIndex) {
            var req = {
                method: 'POST',
                url: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',
                'withCredentials': 'true',
                data: {"playerNumber": currentPlayer,"chosenSquare":gridIndex}
            };
            $http(req).
                then(function(response) {
                    alert(response.data.outcome);
                }, function(response) {
                    alert(response.data);
                });
        };
    });
})();