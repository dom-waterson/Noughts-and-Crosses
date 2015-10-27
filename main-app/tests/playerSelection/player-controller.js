(function () {
    'use strict';
    describe('Testing player selection controller', function () {
        var $controller,
            playerController;

        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.playerSelection', function ($provide) {
                $provide.value('playerToggle', mocks.playerToggle);
            });

            inject(function (_$controller_){
                $controller = _$controller_;
                playerController = $controller('playerSelection', {playerToggle : mocks.playerToggle});
            });
            playerController.playerToggle = mocks.playerToggle;
        });

        it('Ensures that my player selection controller is set up correctly', function () {
            playerController.playerToggle.should.be.equal(mocks.playerToggle);
            playerController.playerToggle.togglePlayer.should.exist;
        });
    })
})();