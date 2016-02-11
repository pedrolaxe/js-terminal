'use strict';

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    conf = require('./config');

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src(conf.paths.src+'/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
