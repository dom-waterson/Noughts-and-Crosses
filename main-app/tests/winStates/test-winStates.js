//(function () {
//    'use strict';
//    describe('Testing game-model', function () {
//        var constants;
//        beforeEach(function () {
//            module('Tombola.NoughtAndCrosses.WinStates');
//            inject(function ($injector) {
//                constants = $injector.get('winStates');
//            });
//        });
//
//        it('Ensures win state condition goes to the right view', function () {
//            //constants.currentPlayer.should.equal('');
//            //constants.gameboard.should.equal('');
//            //constants.currentState.should.equal('');
//            //constants.winner.should.equal('');
//        });
//    });
//})();

(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackend; //provided automatically by the mocks in angular mocks
        var gameApiProxy;

        beforeEach(function(){
            module('Tombola.NoughtAndCrosses.core');
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                gameApiProxy = $injector.get('Proxy');
            });
        });

        it('The Api service responds with the correct value in a draw for new game', function(){
            $httpBackend
                .expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1": "random", "player2": "pre-trained" })
                .respond({"outcome":"draw", "gameboard": "121121212", "winner":"0"});
            gameApiProxy
                .makeGame('random', 'pre-trained')
                .then(function(data){
                    //all the data
                    data.outcome.should.equal('draw');
                    data.gameboard.should.equal('121121212');
                    data.winner.should.equal('0');
                });
            $httpBackend.flush(); //will not respond until the flush is called, then will run through, super important
        });


        it('The Api service responds with the correct response for makemove', function(){
                $httpBackend
                    .expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {"playerNumber": "1", "chosenSquare": "100000000" })
                    .respond({"outcome":"continue", "gameboard": "100000000", "winner":"0"});
                gameApiProxy
                    .makeGameMove('1', '100000000')
                    .then(function(data){
                        data.playerNumber.should.equal('1');
                        data.chosenSquare.should.equal('100000000')
                    });
                $httpBackend.flush();
        });

        //important to do because the request will still be there and the test will fail
        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();