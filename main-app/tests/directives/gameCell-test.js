(function () {
    'use strict';
    describe('Testing game cell directive', function() {
        var compile,
            rootScope;

        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.gameboard');

            inject(function ($compile, $rootScope) {
                compile = $compile;
                rootScope = $rootScope;
            });
        });

        it('Ensures game-cell directives works', function () {
            var directiveElement = '<game-cell square-number="4"></game-cell>';
            var element = compile(directiveElement)(rootScope);
            rootScope.$digest();
            element[0].toString().should.be.equal('[object HTMLElement]');
            element.attr('square-number').should.be.equal('4');
            element[0].children.length.should.be.equal(1);
        });
    });
})();