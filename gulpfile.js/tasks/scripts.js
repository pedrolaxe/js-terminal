/*globals process*/
var config = require('../config'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	loadPlugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('scripts', function() {
	return gulp.src(config.scripts.src)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat('app.js'))
		.pipe(gulpif(config.env === 'production', uglify()))
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(loadPlugins.size())
        .pipe(browserSync.stream());
});