var packageConfig = require('../../package.json'),
  config = require('../config'),
  gulp = require('gulp'),
  path = require('path'),
  ghPages = require('gulp-gh-pages'),
  open = require('open');

var settings = {
  url: packageConfig.homepage,
  src: path.join(config.root.dest, '/**/*')
};

gulp.task('deploy', ['production'], function() {
  return gulp.src(settings.src)
    .pipe(ghPages())
    .on('end', function() {
      open(settings.url);
    });
});
