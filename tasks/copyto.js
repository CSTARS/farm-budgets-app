'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'public',
                src: ['index.html'],
                dest: 'dist'
            }],
            options: {
                ignore: []
            }
        }
    };
};
