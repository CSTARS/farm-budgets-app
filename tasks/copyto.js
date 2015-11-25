'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'public',
                src: ['index.html','login.html'],
                dest: 'dist/'
            },
            {
                cwd: 'public/js',
                src: ['webcomponents.js'],
                dest: 'dist/js/'
            },
            {
                cwd: 'public/bower_components/font-awesome/',
                src: ['fonts/*','css/font-awesome.css'],
                dest: 'dist/font-awesome/'
            }],
            options: {
                ignore: []
            }
        }
    };
};
