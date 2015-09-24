(function() {
    'use strict';
    module.exports = {
        concatjs: {
            src: ['main-app/app/scripts/temp.js', 'main-app/app/scripts/**/*.js'],
            dest: '.build/main-app/app/scripts/app.js'
        }
    };
})();
