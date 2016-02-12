/*globals process*/
var config = require('../config'),
	gulp = require('gulp'),
    gulpif = require('gulp-if'),
    htmlmin = require('gulp-htmlmin');
    
gulp.task('html', function() {
    return gulp.src(config.html.src)
        .pipe(gulpif(config.env === 'production', htmlmin(config.html.htmlmin)))
        .pipe(gulp.dest(config.html.dest));
});