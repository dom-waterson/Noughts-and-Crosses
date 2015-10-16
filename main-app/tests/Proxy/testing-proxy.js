(function () {
    'use strict';
    describe('Testing proxy', function () {
        var constants,
            $httpBackend;
        var responseData = {'outcome':'Continue','gameboard':'100000000','winner':0};
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.core');
            inject(function ($injector) {
                constants = $injector.get('Proxy');
                $httpBackend = $injector.get('$httpBackend');
            });
        });

        it('Ensures makeGame function creates a new game successfully from api', function () {
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {'player1': 'human',
                'player2': 'human'}).respond(responseData);

            var returnedPromise = constants.makeGame("human", "human");
            returnedPromise.then(function(response){
                response.should.deep.equal(responseData);
            });
            $httpBackend.flush();
        });

        it('Ensures makeMove function successfully communicates with the api', function () {
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {'playerNumber': '1',
                'chosenSquare': '0'}).respond(responseData);

            var returnedPromise = constants.makeGameMove("1", "0");
            returnedPromise.then(function(response){
                response.should.deep.equal(responseData);
            });
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();