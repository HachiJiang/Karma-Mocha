'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    'js-test': {
      options: {
    	coverage: true,
        pattern: 'code/html/MSTRWeb/javascript/mojo/js/test/**/*.js',
        deps: [
          // 'http://requirejs.org/docs/release/2.1.14/minified/require.js',
          // 'js/require.config.js',
          // 'test/test-bootstrapper.js',
          'mojo/js/source/mstrmojo.js',
          'mojo/js/source/array.js',
          'http://requirejs.org/docs/release/2.1.14/comments/require.js',
          'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js'
        ]
  		//,requirejs: true
      }
    }
  });

  // Actually load grunt-js-test
  grunt.loadNpmTasks('grunt-js-test');
  // grunt.loadTasks('../../tasks');

  // By default, run all your tests
  grunt.registerTask('default', ['js-test']);

};