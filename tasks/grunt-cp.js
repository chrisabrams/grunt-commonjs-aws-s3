/**
 * grunt-commonjs-aws-s3
 * https://github.com/chrisabrams/grunt-commonjs-aws-s3
 *
 * Copyright (c) Chris Abrams
 * Licensed under the MIT license.

    's3-generate': {
      options: {
        dest: ''
      }
    }
 */

var S3   = require('../lib/s3'),
    path = require('path');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('s3-generate', 'Generates Amazon Web Service policy and signature for S3 into a CommonJS module.', function () {

    var options = this.options();
    var s3 = new S3(options);
    var filepath = process.cwd() + '/' + options.dest;

    return grunt.file.write(filepath, 'module.exports = ' + JSON.stringify(s3));
  });
}
