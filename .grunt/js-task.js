(function() {
    'use strict';
    module.exports = {
        checkmainjs: {
            src: ['main-app/app/scripts/**/*.js', 'main-app/tests/**/*.js', '!main-app/tests/gameboard/gameboard-test.js']
        },
        checkgruntjs: {
            src: ['.grunt/**/*.js']
        }
    };
})();
