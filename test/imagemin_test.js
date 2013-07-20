'use strict';
var grunt = require('grunt');
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var os = require('os');

exports.imagemin = {
    minifyJpg: function (test) {
        var cacheDirectory = os.tmpdir();

        var original = crypto.createHash('sha1').update(grunt.file.read('test/fixtures/test.jpg')).digest('hex');
        test.ok(fs.existsSync(path.join(cacheDirectory, original)), 'should cached JPG images');

        test.done();
    },
    minifyPng: function (test) {
        var cacheDirectory = os.tmpdir();

        var original = crypto.createHash('sha1').update(grunt.file.read('test/fixtures/test.png')).digest('hex');
        test.ok(fs.existsSync(path.join(cacheDirectory, original)), 'should cached PNG images');

        test.done();
    }
};
