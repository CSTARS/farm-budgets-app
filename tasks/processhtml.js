'use strict';


module.exports = function browserify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-processhtml');

	// Options
	return {
    options: {
      data: {}
    },
    dist: {
      files: {
        'dist/index.html': ['./index.html']
      }
    }
  };
};
