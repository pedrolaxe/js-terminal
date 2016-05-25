var config = require('../config'),
  gulp = require('gulp');

gulp.task('set-prod-node-env', function() {
  return process.env.NODE_ENV = config.env = 'production';
});

gulp.task('production', ['set-prod-node-env', 'build']);
