(function () {
    'use strict';
    describe('Testing proxy', function () {
        var constants,
            $httpBackend;
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.core');
            inject(function ($injector) {
                constants = $injector.get('Proxy');
                $httpBackend = $injector.get('$httpBackend')
            });
        });

        it('Ensures makeGame function creates a new game successfully from api', function () {
            var theResponse = {'outcome':'Continue','gameboard':'100000000','winner':0};
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {'player1': 'human',
                'player2': 'human'}).respond(theResponse);

            var returnedPromise = constants.makeGame("human", "human");
            var result;
            returnedPromise.then(function(response){
                result = response;
            });
            $httpBackend.flush();
            result.should.deep.equal(theResponse);
        });

        it('Ensures makeMove function successfully communicates with the api', function () {
            var theResponse = {'outcome':'Continue','gameboard':'100000000','winner':0};
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {'playerNumber': '1',
                'chosenSquare': '0'}).respond(theResponse);

            var returnedPromise = constants.makeGameMove("1", "0");
            var result;
            returnedPromise.then(function(response){
                result = response;
            });
            $httpBackend.flush();
            result.should.deep.equal(theResponse);
        });
    });
})();