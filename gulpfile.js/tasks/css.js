var config = require('../config'),
  gulp = require('gulp'),
  gulpif = require('gulp-if'),
  cssmin = require('gulp-cssmin'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync');

gulp.task('css', function() {
  return gulp.src(config.css.src)
    .pipe(gulpif(config.env === 'production', cssmin()))
    .pipe(concat('terminal.css'))
    .pipe(gulp.dest(config.css.dest))
    .pipe(browserSync.stream());
});
