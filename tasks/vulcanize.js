'use strict';

module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-vulcanize');

	// Options
	return {
    build: {
      options: {
        inlineCss : true,
				inlineScripts : true
      },
      files: {
        'dist/require.html': [
        	'public/require.html'
        ],
				'dist/login-require.html': [
        	'public/login-require.html'
        ]
      }
    },
		prototype: {
      options: {
        inlineCss : true,
				inlineScripts : true
      },
      files: {
        'dist/prototype/require.html': [
        'public/prototype/require.html'
        ]
      }
    }
  };
};
