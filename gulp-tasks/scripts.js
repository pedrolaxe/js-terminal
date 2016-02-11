'use strict';

var path = require('path'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    conf = require('./config'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    $ = require('gulp-load-plugins')();

gulp.task('scripts-reload', function ()
{
    return buildScripts()
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function ()
{
    return buildScripts();
});

function buildScripts()
{
    return gulp.src(conf.paths.scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('src/js'))
        .pipe($.size());
};