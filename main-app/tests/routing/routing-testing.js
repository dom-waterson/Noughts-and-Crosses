(function () {
    'use strict';
    describe('Testing main ui routing of the app', function() {
        var $rootScope,
            $state,
            $timeout;

        beforeEach(module('htmlViews'));

        beforeEach(function () {
            module('Tombola.NoughtAndCrosses');
            inject(function ($injector, _$state_, _$timeout_, _$rootScope_) {
                $state = _$state_;
                $timeout = _$timeout_;
                $rootScope = _$rootScope_;
            });

            $rootScope.$digest();
        });

        it('Ensures the default state is correct', function () {
            $state.current.url.should.equal('/selectPlayers');
            $state.current.templateUrl.should.equal('html/views/playerselection.html');
            //var state = $state.get('createGame');
            //should.exist(state);
            //state.url.should.equal('/selectPlayers');
        });

        it('Ensures the default state is correct when user wants to see the rules', function () {
            $state.go('createGame.rules');
            $timeout.flush();
            $state.current.url.should.equal('/rules');
            $state.current.templateUrl.should.equal('html/views/rules.html');
        });

        it('Ensures that when a game is in progress the state should be playingGame', function () {
            $state.go('gameInProgress');
            $timeout.flush();
            $state.current.url.should.equal('/playingGame');
            $state.current.templateUrl.should.equal('html/views/gameboard.html');
        });

        it('Ensures that when a game has been won the correct state is called', function () {
            $state.go('gameInProgress.win');
            $timeout.flush();
            $state.current.url.should.equal('/gameWon');
            $state.current.templateUrl.should.equal('html/views/winView.html');
        });

        it('Ensures that when a game has been dran the correct state is called', function () {
            $state.go('gameInProgress.draw');
            $timeout.flush();
            $state.current.url.should.equal('/gameDrawn');
            $state.current.templateUrl.should.equal('html/views/drawView.html');
        });
    });
})();