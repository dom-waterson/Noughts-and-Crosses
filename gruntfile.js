(function() {
    'use strict';
    var copyTask = require('./.grunt/copy-task');
    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default', ['copy']);
    };
})();
