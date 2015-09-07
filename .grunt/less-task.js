(function() {
    'use strict';
    module.exports = {
        //checkless: {
        //    src: ["main-app/app/less/**/*.less"]
        //},

        convertless: {
            expand: true,
            cwd: 'main-app/app/less/',
            src: '**/*.less',
            dest: '.build/main-app/app/css',
            ext: '.css'
        }
    };
})();
