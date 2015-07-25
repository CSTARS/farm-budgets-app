'use strict';


module.exports = function browserify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-usemin');

	// Options
	return {
      html: 'public/index.html',
      options: {
        dest: 'dist'
      }
  };
};
