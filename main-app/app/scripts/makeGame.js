(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.GameApi', [])
        .factory ('GameApi', ['$http', '$q', function ($http, $q){

        newGame = function (player1, player2) {
            $http.post('/api/v1.0/newgame', {msg:'player1:' + player1 +',player2:' + player2}).
                then(function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    alert(response);
                }, function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert(response);
                });
        };
    }]);
})();