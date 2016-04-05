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
                dest: 'dist/'
            },
            {
                cwd: 'public/materials',
                src: ['index.html'],
                dest: 'dist/materials/'
            },
            {
                cwd: 'public/search',
                src: ['index.html'],
                dest: 'dist/search/'
            },
            {
                cwd: 'public/settings',
                src: ['index.html'],
                dest: 'dist/settings/'
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
