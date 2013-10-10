/*
 * grunt-local-settings
 * https://github.com/denis/grunt-templates-concat
 *
 * Copyright (c) 2013 Yuriy Pulyaev
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            project: [
                'Gruntfile.js',
                'tasks/{**/,}*.js',
                'test/*.js',
                '<%= nodeunit.tests %>'
            ]
        },

        // Configuration to be run (and then tested).
        localSettings: {
            test: {
                src:  [
                    'test/AppTest/gruntConfig.{js,coffee,yaml,json}'
                ]
            }
        },

        test: {
            mergedOptions: {
                firstAttr: 'old',
                secondAttr: 'old'
            },
            array: ['old']
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['localSettings:test', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint:project', 'test']);

};
