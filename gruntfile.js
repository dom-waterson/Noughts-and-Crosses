(function() {
    'use strict';
    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {
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
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default', ['copy']);
    };
})();
