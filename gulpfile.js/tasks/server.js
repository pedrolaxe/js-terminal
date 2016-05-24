var config = require('../config'),
  gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('server', ['build', 'watch'], function() {
  browserSync(config.browserSync);
});
