/*
 * grunt-local-settings
 * https://github.com/el-fuego/grunt-local-settings
 *
 * Copyright (c) 2013 Yuriy Pulyaev
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
    'use strict';


    // подключаем настройки конкретного приложения
    function mergeConfigRecursively(baseObject, data) {
        var i;
        for (i in data) {
            if (data[i] !== undefined) {

                // exception
                if (baseObject[i] !== undefined && typeof data[i] !== typeof baseObject[i]) {
                    grunt.log.error('Data types not mutch. Property: ' + i +
                        ' {' + typeof baseObject[i] + '} !== {' +  typeof data[i] + '}');
                }

                // simple file type
                if (
                    baseObject[i] === undefined ||
                        typeof data[i] !== 'object' ||
                        data[i] instanceof Array
                ) {
                    baseObject[i] = data[i];
                } else {
                    mergeConfigRecursively(baseObject[i], data[i]);
                }
            }
        }
    }


    grunt.registerMultiTask('localSettings', 'Loads and merge settings from grunt config file', function () {

        this.files.forEach(function (file) {
            file.src.forEach(function (path) {
                grunt.log.writeln(path);

                var data;
                if ((/\.json$/i).test(path)) {
                    data = grunt.file.readJSON(path);
                } else if ((/\.yaml/i).test(path)) {
                    data = grunt.file.readYAML(path);
                } else {
                    data = require(process.cwd() + '/' + path)(grunt);
                }

                mergeConfigRecursively(grunt.config.data, data);

                grunt.log.ok();
            });
        });
    });
};
