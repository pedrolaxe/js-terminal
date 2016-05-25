var config = require('../config'),
  webpackConfig = require('../webpack.config.js'),
  gulp = require('gulp'),
  gulpif = require('gulp-if'),
  eslint = require('gulp-eslint'),
  webpack = require('webpack-stream'),
  uglify = require('gulp-uglify'),
  loadPlugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync');

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpack(webpackConfig))
    .pipe(gulpif(config.env === 'production', uglify()))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(loadPlugins.size())
    .pipe(browserSync.stream());
});
