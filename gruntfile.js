(function() {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jsTask = require('./.grunt/js-task'),
        jsConcat = require('./.grunt/js-concat');
    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: jsTask,
            concat: jsConcat,
            clean: {
                javascript: {
                    src: '.build/main-app/app/scripts/'
                },
                css: {
                    src: '.build/main-app/app/css/'
                }
                //images: {
                //
                //}
            },
            watch: {
                less: {
                    files: ['main-app/app/less/*.less'],
                    tasks: ['lessFiles'],
                    options: {
                        spawn: false
                    }
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-concat');
        //added clean:css
        grunt.registerTask('lessFiles', ['lesslint', 'clean:css', 'less']);
        grunt.registerTask('jsFiles', ['jshint', 'concat' ]);
        //added watcher
        grunt.registerTask('default', ['copy', 'lessFiles', 'jsFiles', 'watch']);
    };
})();
