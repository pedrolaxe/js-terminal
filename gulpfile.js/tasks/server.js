/*globals process*/
var config = require('../config'),
	gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync(config.browserSync);
    gulp.watch([config.html.src, config.css.src, config.scripts.src]).on('change', browserSync.reload);
});