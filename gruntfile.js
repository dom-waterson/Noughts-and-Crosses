(function() {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jsTask = require('./.grunt/js-task'),
        jsConcat = require('./.grunt/js-concat'),
        cleanTask = require('./.grunt/clean-task'),
        watchTask = require('./.grunt/watch-task');
    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: jsTask,
            concat: jsConcat,
            clean: cleanTask,
            watch: watchTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.registerTask('lessFiles', ['lesslint', 'clean:css', 'less']);
        grunt.registerTask('jsFiles', ['jshint', 'clean:javascript', 'concat' ]);
        grunt.registerTask('htmlFiles', ['clean:html', 'copy:mainapphtml']);
        grunt.registerTask('default', ['copy', 'lessFiles', 'jsFiles', 'watch']);
    };
})();
