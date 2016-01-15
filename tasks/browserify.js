'use strict';


module.exports = function browserify(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-browserify');

  var files = {
    'public/js/lib.js': ['lib/sdk.js']
  };

  var browserifyOptions = {
    debug : true, // include source maps
    standalone : 'SDK'
  };

  // Options
  return {
    build: {
      files: files,
      options: {
        browserifyOptions : browserifyOptions
      }
    },
    watch : {
      files: files,
      options: {
        browserifyOptions : browserifyOptions,
        keepAlive : true,
        watch : true,
        debug : true
      }
    }
  };
};
