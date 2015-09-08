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
            concat: jsConcat
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.registerTask('lessFiles', ['lesslint', 'less']);
        grunt.registerTask('jsFiles', ['jshint', 'concat' ]);
        grunt.registerTask('default', ['copy', 'lessFiles', 'jsFiles']);
    };
})();
