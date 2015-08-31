'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });


    // grunt-config-dir does not play nice with usemin
    // so manually loading usemin lib's and setting config here
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');

    grunt.config.merge({
      useminPrepare: {

          html: ['public/index.html'],
          options: {
            dest: 'dist',
            verbose: true
          }

      },
      usemin: {

          html: ['dist/index.html'],
    			options: {
    				assetsDirs: ['dist']
          }

      }
    });

    grunt.config.merge({
      useminPrepare: {
          html: ['public/index.html'],
          options: {
            dest: 'dist',
            verbose: true
          }
      },
      usemin: {
          html: ['dist/index.html'],
    			options: {
    				assetsDirs: ['dist']
          }
      }
    });

    grunt.config.merge({
      useminPrepareProto: {
          html: ['public/prototype/index.html'],
          options: {
            dest: 'dist/prototype',
            verbose: true
          }
      },
      useminProto: {
          html: ['dist/prototype/index.html'],
    			options: {
    				assetsDirs: ['dist/prototype']
          }

      }
    });

    /*grunt.config.merge({
      useminPrepare: {
        build : {
          html: ['public/index.html'],
          options: {
            dest: 'dist',
            verbose: true
          }
        },
        prototype : {
          html: ['public/prototype/index.html'],
          options: {
            dest: 'dist/prototype',
            verbose: true
          }
        }
      },
      usemin: {
        build : {
          html: ['dist/index.html'],
    			options: {
    				assetsDirs: ['dist']
          }
        },
        prototype : {
          html: ['dist/prototype/index.html'],
    			options: {
    				assetsDirs: ['dist/prototype']
          }
        }
      }
    });*/
    // HACK:  https://github.com/yeoman/grunt-usemin/issues/255#issuecomment-103560996
    grunt.registerTask('useminPrepareProto', function () {
        var useminPrepareDevConfig = grunt.config('useminPrepareProto');
        grunt.config.set('useminPrepare', useminPrepareDevConfig);
        grunt.task.run('useminPrepare');
    });
    grunt.registerTask('useminProto', function () {
        var useminPrepareDevConfig = grunt.config('useminProto');
        grunt.config.set('usemin', useminPrepareDevConfig);
        grunt.task.run('usemin');
    });

    // end usemin


    // Register group tasks
    grunt.registerTask('build', [
        //'jshint',
        'clean',
        'browserify:build',
        'copyto:build',
        // start usemin
          'useminPrepare',
          'concat:generated',
          'cssmin:generated',
          'uglify:generated',
          'usemin',
        // end usemin
      'vulcanize:build']);

    grunt.registerTask('prepMeeting',[
      'clean',
      'browserify:build',
      'copyto:build',
      'copyto:prototype',
      // start usemin
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        //'filerev',
        'usemin',

        'useminPrepareProto',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'useminProto',

      // end usemin
      'vulcanize:build',
      'vulcanize:prototype'
    ]);

    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);
};
