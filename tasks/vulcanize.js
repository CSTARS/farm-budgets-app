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
				'dist/search/require.html': [
        	'public/search/require.html'
        ],
				'dist/materials/require.html': [
        	'public/materials/require.html'
        ],
				'dist/settings/require.html': [
        	'public/settings/require.html'
        ],
				'dist/js/js.html': [
        	'public/js/js.html'
        ]
      }
    }
  };
};
