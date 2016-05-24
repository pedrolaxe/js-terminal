var config = require('../config'),
  gulp = require('gulp');

gulp.task('set-dev-node-env', function() {
  return process.env.NODE_ENV = config.env = 'development';
});

gulp.task('dev', ['set-dev-node-env', 'server']);
