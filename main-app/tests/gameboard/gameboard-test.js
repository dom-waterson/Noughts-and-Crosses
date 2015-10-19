(function () {
    'use strict';
    describe('Testing css-toggle', function () {
        var $controller,
            sandbox,
            $q;

        var returnedPromiseData = {'outcome':'Continue','gameboard':'100000000','winner':0};
        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.gameboard');
            inject(function (_$controller_, _$q_) {
                $controller = _$controller_;
                $q = _$q_;
            });
            sandbox = sinon.sandbox.create();
        });

        it('Ensures when game board is tapped depending on selection the make move function is called', function () {
            var deferred = $q.defer();
            var gameModelMoveSpy = sinon.sandbox.spy(mocks.gameModel, 'canMakeMove');
            var proxyMakeMoveSpy = sinon.sandbox.stub(mocks.proxy, 'makeGameMove', function(){
                return deferred.promise;
            });
            var gameboardController = $controller('GameboardController', {gameModel : mocks.gameModel, Proxy : mocks.proxy});
            gameboardController.gameboardTapped();
            deferred.resolve(returnedPromiseData);
            gameModelMoveSpy.should.have.been.calledOnce;
            proxyMakeMoveSpy.should.have.been.calledOnce;
        });

        it('Ensures when game board is tapped and the selection is not valid, the function make move is not called', function () {
            sinon.sandbox.stub(mocks.gameModel, 'canMakeMove', function(){
                return true;
            });
            var gameModelMoveSpy = sinon.sandbox.spy(mocks.proxy, 'makeGameMove');
            var gameboardController = $controller('GameboardController', {gameModel : mocks.gameModel, Proxy : mocks.proxy});
            gameboardController.gameboardTapped();
            gameModelMoveSpy.should.neverCalled;
        });

        it('Ensures when new game is selected, the function should call the proxy once', function () {
            var deferred = $q.defer();
            var proxyMakeMoveSpy = sinon.sandbox.stub(mocks.proxy, 'makeGame', function(){
                return deferred.promise;
            });
            var gameboardController = $controller('GameboardController', {Proxy : mocks.proxy, gameModel: mocks.gameModel});
            gameboardController.createGame();
            deferred.resolve(returnedPromiseData);
            proxyMakeMoveSpy.should.have.been.calledOnce;
        });

        afterEach(function () {
            sinon.sandbox.restore();
        });
    });
})();