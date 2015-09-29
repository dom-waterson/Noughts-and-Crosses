(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.core')
        .service ('Proxy', ['$http', '$q', function ($http, $q){

        var callApi = function (endpoint, data){
            var deferred = $q.defer();
            var req = {
                method: 'POST',
                url: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/' + endpoint,
                'withCredentials': 'true',
                data: data
            };
            $http(req).
                then(function(response) {
                    deferred.resolve(response.data);
                }).catch( function(response) {
                    deferred.reject(response.data);
                });

            return deferred.promise;
        };

        this.makeGame = function (playerOne, playerTwo) {
             var data = {
                 'player1': playerOne,
                 'player2': playerTwo
             };
              return callApi('newgame', data);
        };

        this.makeGameMove = function (currentPlayer, gridIndex) {
            var data = {
                'playerNumber': currentPlayer,
                'chosenSquare': gridIndex
            };
            return callApi('makemove', data);
        };
    }]);
})();