(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.cssSelection')
        .service('cssToggle', ['cssArray', function (cssArray){
            var me = this;

            var rotateCssStyle = function () {
                var nextIndex = cssArray.indexOf(me.cssStyle) +1;
                nextIndex =  nextIndex === cssArray.length ? 0 :  nextIndex;
                return cssArray[nextIndex];
            };

            me.cssStyle = cssArray[0];

            me.toggleCss = function () {
                me.cssStyle = rotateCssStyle();
            };
        }]);
})();