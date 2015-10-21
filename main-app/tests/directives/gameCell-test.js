(function () {
    'use strict';
    describe('Testing game cell directive', function() {
        var compile,
            rootScope,
            element,
            directiveElement,
            insideElement;

        beforeEach(function () {
            module('Tombola.NoughtAndCrosses.gameboard');

            inject(function ($compile, $rootScope) {
                compile = $compile;
                rootScope = $rootScope;
            });

            directiveElement = '<game-cell square-number="4"></game-cell>';
            element = compile(directiveElement)(rootScope);
            rootScope.$digest();
            insideElement = element.find('div');
        });

        it('Ensures game-cell directives works', function () {
            element[0].toString().should.be.equal('[object HTMLElement]');
            element[0].children.length.should.be.equal(1);
        });

        it('Ensures game-cell directives has the correct class', function () {
            insideElement.attr('class').should.be.equal('gameCells player');
        });

        it('Ensures game-cell directives has the correct square number attribute', function () {
            element.attr('square-number').should.be.equal('4');
        });

        it('Ensures game-cell directives has the correct ng-click function', function () {
            insideElement.attr('ng-click').should.be.equal('game.gameboardTapped(4)');
        });
    });
})();