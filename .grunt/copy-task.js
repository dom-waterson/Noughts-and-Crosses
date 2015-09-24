(function() {
    'use strict';
    module.exports = {
        mainappimages: {
            cwd:'',
            src: ['main-app/app/images/**/*.*'],
            dest: '.build/',
            expand: true
        },

        mainappsounds: {
            cwd:'',
            src: ['main-app/app/sounds/*.*'],
            dest: '.build/',
            expand: true
        },

        mainapphtml: {
            cwd:'',
            src: ['main-app/app/*.html','main-app/app/htmlTemplates/*.html'],
            dest: '.build/',
            expand: true
        },

        mainappbower: {
            cwd:'',
            src: ['bower_components/**/*.*'],
            dest: '.build/thirdparty/',
            expand: true
        }
    };
})();