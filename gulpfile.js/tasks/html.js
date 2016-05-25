var config = require('../config'),
  gulp = require('gulp'),
  gulpif = require('gulp-if'),
  htmlmin = require('gulp-htmlmin'),
  browserSync = require('browser-sync');

gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(gulpif(config.env === 'production', htmlmin(config.html.htmlmin)))
    .pipe(gulp.dest(config.html.dest))
    .pipe(browserSync.stream());
});
