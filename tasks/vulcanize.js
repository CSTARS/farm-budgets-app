'use strict';

module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-vulcanize');

	// Options
	return {
    default: {
      options: {
        strip: true,
        //csp : true,
        inline : true
      },
      files: {
        '<%= yeoman.dist %>/require.html': [
          '<%= yeoman.dist %>/require.html'
        ]
      }
    }
  };
};
