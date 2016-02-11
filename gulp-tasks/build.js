'use strict';

var path = require('path'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    conf = require('./config');


gulp.task('jsBuild', function () {
    gulp.src(conf.paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('htmlBuild', function() {
    gulp.src(conf.paths.src+'/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('cssBuild', function() {
    gulp.src(conf.paths.src+'/css/**/*.css')
        .pipe(cssmin())
        .pipe(concat('terminal.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('build', ['jsBuild', 'htmlBuild', 'cssBuild']);