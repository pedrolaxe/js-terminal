'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./config');

gulp.task('watch', function() {
    gulp.watch(conf.paths.scripts, [ 'scripts' ]);
});
